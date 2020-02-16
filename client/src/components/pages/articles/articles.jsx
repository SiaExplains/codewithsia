import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';
import './articles.css';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../../../services/articles';

require('../../../tools/string-tools');

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        this.fetchArticles();
        document.title = `Articles | ${process.env.REACT_APP_DOC_TITLE}`;
    }

    fetchArticles = async () => {
        const { data } = await getAllArticles();
        this.setState({
            articles: data
        });
    };

    render() {
        let { articles } = this.state;
        return (
            <Container>
                <div className='m-2'>
                    <h1>Articles</h1>
                    <Container fluid>
                        {articles.length === 0 && (
                            <p>There is no article posted yet!</p>
                        )}
                        {articles &&
                            articles.length !== 0 &&
                            articles.map((a, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={
                                            '/article/' +
                                            a.Id +
                                            '/' +
                                            a.Title.makeTextToUrl()
                                        }
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
                                                    src={`${process.env.REACT_APP_HOST}servable/images/articles/thumbs/${a.Thumbnail}`}
                                                    alt={a.Title}
                                                />
                                            </Col>
                                            <Col
                                                className='thumbnail'
                                                sm='12'
                                                md='8'
                                                lg='9'
                                                thumbnail='true'
                                            >
                                                <h2>{a.Title}</h2>
                                                <h5>{a.Summary}</h5>
                                            </Col>
                                        </Row>
                                    </Link>
                                );
                            })}

                        <Pagination aria-label='Page navigation example'>
                            <PaginationItem>
                                <PaginationLink first href='#' />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink previous href='#' />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href='#'>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href='#'>2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href='#'>3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href='#' />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink last href='#' />
                            </PaginationItem>
                        </Pagination>
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
