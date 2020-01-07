import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { storeArticles } from '../../../features/articles/actions';
import { Container, Row, Col } from 'reactstrap';
import './articles.css';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        this.fetchArticles();
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

    render() {
        let { articles } = this.state;
        return (
            <Container>
                <div className='m-2'>
                    <h1>Articles</h1>
                    <Container fluid>
                        {articles.map((a, index) => {
                            return (
                                <a
                                    href={'/article/' + a.Id}
                                    className='article-link'
                                >
                                    <Row className='article-box m-2'>
                                        <Col
                                            className='d-none d-md-block'
                                            md='4'
                                            lg='3'
                                        >
                                            <img
                                                className='article-image  p-1 m-1 img-fluid'
                                                src={`${process.env.REACT_APP_HOST}/images/articles/${a.Id}.png`}
                                                alt={a.Title}
                                            />
                                        </Col>
                                        <Col
                                            className='thumbnail'
                                            sm='12'
                                            md='8'
                                            lg='9'
                                            thumbnail
                                        >
                                            <h2>{a.Title}</h2>
                                            <h5>{a.Summary}</h5>
                                        </Col>
                                    </Row>
                                </a>
                            );
                        })}
                    </Container>
                </div>
            </Container>
        );
    }
}

export default connect(state => {
    return {
        state,
        articles: state
    };
})(Articles);
