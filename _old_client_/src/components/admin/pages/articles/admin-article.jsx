import React, { Component } from 'react';
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
import './admin-article.css';
import JoditEditor from 'jodit-react';
import {
    getAllArticles,
    deleteAnArticle,
    addAnArticle,
    updateAnArticle,
    getAnArticle
} from '../../../../services/articles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { toast } from 'react-toastify';
import { getAllTags } from '../../../../services/tags';
import './admin-article.css';
require('../../../../tools/string-tools');

class AdminArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            id: null,
            title: '',
            summary: '',
            content: '',
            isEditMode: false,
            config: {
                readonly: false
            },
            editor: null,
            thumbnail: ''
        };
    }

    componentDidMount() {
        this.fetchArticles();
        this.fetchTags();
    }
    editArticle(article) {
        getAnArticle(article.Id).then(result => {
            this.setState({
                id: article.Id,
                isEditMode: true,
                title: article.Title,
                summary: article.Summary,
                thumbnail: article.Thumbnail,
                content: result.data.Content
            });
        });
    }

    deleteArticle(id) {
        let confirmation = window.confirm('Are sure to delete this article?');
        if (confirmation) {
            deleteAnArticle(id)
                .then(result => {
                    toast.success('Article has been deleted.');
                    this.fetchArticles();
                })
                .catch(err => {
                    console.log(`Error while fetching: ${err}`);
                });
        }
    }

    fetchArticles = () => {
        getAllArticles()
            .then(result => {
                this.setState({
                    articles: result.data
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
    fetchTags = () => {
        getAllTags()
            .then(result => {
                let data = result.data.map(t => {
                    return { ...t, checked: false };
                });
                this.setState({
                    tags: data
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    saveArticle = () => {
        const {
            id,
            title,
            content,
            summary,
            isEditMode,
            thumbnail,
            tags
        } = this.state;

        if (isEditMode) {
            updateAnArticle({
                Id: id,
                Title: title,
                Summary: summary,
                Content: content,
                Thumbnail: thumbnail,
                Tags: tags
            })
                .then(result => {
                    this.setState({
                        id: null,
                        title: '',
                        summary: '',
                        content: '',
                        thumbnail: ''
                    });
                    this.fetchArticles();
                    toast.success('Article has been updated.');
                    this.clearInputHandler();
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            addAnArticle({
                Title: title,
                Summary: summary,
                Content: content,
                Thumbnail: thumbnail,
                Tags: tags.filter(t => t.checked)
            })
                .then(result => {
                    this.setState({
                        title: '',
                        summary: '',
                        content: '',
                        thumbnail: ''
                    });
                    this.fetchArticles();
                    toast.success('New Article has been saved.');
                    this.clearInputHandler();
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    clearInputHandler = () => {
        let data = this.state.tags.map(t => {
            return { ...t, checked: false };
        });
        this.setState({
            isEditMode: false,
            title: '',
            summary: '',
            content: '',
            id: null,
            tags: data
        });
    };

    editorChangeHandle = content => {
        this.setState({ content });
    };

    tagChangeHandler = e => {
        let tags = [...this.state.tags];
        let tagIndex = tags.findIndex(t => t.Id == e.target.name);
        // console.log(tagI);
        tags[tagIndex].checked = true;
        this.setState({
            tags: tags
        });
    };
    inputHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        let { tags, articles, title, summary, thumbnail } = this.state;
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
                    <Col className='col-md-9'>
                        <Row>
                            <FormGroup style={{ width: '100%' }}>
                                <Label>Title: </Label>
                                <Input
                                    value={title}
                                    onChange={this.inputHandler}
                                    name='title'
                                ></Input>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup style={{ width: '100%' }}>
                                <Label>Thumbnail Image:</Label>
                                <Input
                                    value={thumbnail}
                                    onChange={this.inputHandler}
                                    name='thumbnail'
                                ></Input>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup style={{ width: '100%' }}>
                                <Label>Summary: </Label>
                                <textarea
                                    style={{ width: '100%' }}
                                    value={summary}
                                    onChange={this.inputHandler}
                                    name='summary'
                                ></textarea>
                            </FormGroup>
                        </Row>
                    </Col>
                    <Col className='col-md-3 tag-holder'>
                        {tags &&
                            tags.map(t => {
                                return (
                                    <FormControlLabel
                                        key={t.Id}
                                        control={
                                            <Checkbox
                                                name={t.Id}
                                                checked={
                                                    this.state.tags[t.checked]
                                                }
                                                onChange={e =>
                                                    this.tagChangeHandler(e)
                                                }
                                                value='primary'
                                            />
                                        }
                                        label={t.Name}
                                    />
                                );
                            })}
                    </Col>
                </Row>

                <Row>
                    <FormGroup style={{ width: '100%' }}>
                        <Label>Content: </Label>
                        <JoditEditor
                            ref={this.state.editor}
                            value={this.state.content}
                            config={this.state.config}
                            tabIndex={1}
                            onChange={newContent => {
                                this.editorChangeHandle(newContent);
                            }}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <Col>
                        <Button color='success' onClick={this.saveArticle}>
                            {this.state.isEditMode
                                ? 'Update Article'
                                : 'Add New'}
                        </Button>
                        &nbsp;&nbsp;
                        {this.state.isEditMode && (
                            <Button
                                color='info'
                                onClick={this.clearInputHandler}
                            >
                                Cancel update
                            </Button>
                        )}
                    </Col>
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Summary</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map(a => {
                                return (
                                    <tr key={a.Id}>
                                        <th scope='row'>{a.Id}</th>
                                        <td>{a.Title}</td>
                                        <td>{a.Summary.makeSummerize()}</td>
                                        <td>
                                            <Button
                                                color='warning'
                                                onClick={() =>
                                                    this.editArticle(a)
                                                }
                                            >
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
