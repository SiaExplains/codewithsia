import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    FormGroup,
    Label,
    Button,
    Input,
    Col,
    Row,
    Table,
    Container
} from 'reactstrap';
import { storeArticles } from '../../../features/articles/actions';

require('../../../tools/string-tools');
class AdminArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            title: '',
            summary: '',
            content: '',
            isEditMode: false
        };
    }

    componentDidMount() {
        this.fetchArticles();
    }

    deleteArticle(id) {
        let confirmation = window.confirm('Are sure to delete this article?');
        if (confirmation) {
            axios
                .delete(
                    `${process.env.REACT_APP_API_ENDPOINT}/articles/${id}`,
                    {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(result => {
                    alert('Article has been deleted.');
                    this.fetchArticles();
                })
                .catch(err => {
                    console.log(`Error while fetching: ${err}`);
                });
        }
    }

    fetchArticles = () => {
        const { dispatch } = this.props;

        axios

            .get(`${process.env.REACT_APP_API_ENDPOINT}/articles/`, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(result => {
                this.setState({
                    articles: result.data
                });
                dispatch(storeArticles(result.data));
                console.log(result.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    saveArticle = () => {
        const { title, content, summary, isEditMode } = this.state;

        if (isEditMode) {
            // should update an selected article
        } else {
            // should add a new article

            axios

                .post(
                    `${process.env.REACT_APP_API_ENDPOINT}/articles/`,
                    {
                        Title: title,
                        Summary: summary,
                        Content: content
                    },
                    {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(result => {
                    this.setState({
                        title: '',
                        summary: '',
                        content: ''
                    });
                    this.fetchArticles();
                    alert('Article has been saved.');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    render() {
        let { articles, title, summary, content } = this.state;
        return (
            <Container className='p-3'>
                <Row>
                    <Col>
                        Article Management &nbsp;&nbsp;&nbsp;
                        <Link to='/admin' className='btn-warning btn btn-sm'>
                            &lt; Return
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <FormGroup>
                        <Label>Title: </Label>
                        <Input
                            value={title}
                            onChange={this.handleInput}
                            name='title'
                        ></Input>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label>Summary: </Label>
                        <textarea
                            value={summary}
                            style={{ width: '100%' }}
                            onChange={this.handleInput}
                            name='summary'
                        ></textarea>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label>Content: </Label>
                        <textarea
                            value={content}
                            style={{ width: '100%' }}
                            onChange={this.handleInput}
                            name='content'
                        ></textarea>
                    </FormGroup>
                </Row>
                <Row>
                    <Col>
                        <Button color='success' onClick={this.saveArticle}>
                            Save
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Summary</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map(a => {
                                return (
                                    <tr key={a.Id}>
                                        <th scope='row'>1</th>
                                        <td>{a.Title}</td>
                                        <td>{a.Summary}</td>
                                        <td>
                                            <Button color='warning'>
                                                Edit
                                            </Button>
                                            &nbsp;
                                            <Button
                                                color='danger'
                                                onClick={() =>
                                                    this.deleteArticle(a.Id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

export default AdminArticle;
