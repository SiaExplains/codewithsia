import React, { Component } from 'react';
import { getAnArticle } from '../../../../services/articles';
import { Container, Col, Row } from 'reactstrap';
import './article-post.css';

require('../../../../tools/string-tools');

class ArticlePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            article: null
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({
            id
        });
        this.fetchArticle(id);
    }

    fetchArticle(id) {
        getAnArticle(id)
            .then(result => {
                this.setState({
                    article: result.data
                });
                console.log(result.data);
            })
            .catch(err => {
                console.log(`Error while fetching: ${err}`);
            });
    }

    render() {
        let { article } = this.state;

        return (
            <Container className='p-3'>
                {article && (
                    <React.Fragment>
                        <Row>
                            <Col>
                                <h2>{article.Title}</h2>
                            </Col>
                            <Col className='text-right'>
                                <h5>
                                    {new Date(article.RegDate).customDisplay()}
                                </h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: article.Content
                                    }}
                                ></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Tags: &nbsp;
                                {article.tags.map(tag => {
                                    return (
                                        <React.Fragment>
                                            <span className='tag'>
                                                {tag.Name}
                                            </span>
                                            &nbsp;
                                        </React.Fragment>
                                    );
                                })}
                            </Col>
                        </Row>
                    </React.Fragment>
                )}
            </Container>
        );
    }
}

export default ArticlePost;
