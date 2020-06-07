import React, { Component } from 'react';
import { connect } from 'react-redux';
import './articles.css';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../../../services/articles';

require('../../../tools/string-tools');

class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    async componentDidMount() {
        this.fetchArticles();
        document.title = `Articles | ${process.env.REACT_APP_DOC_TITLE}`;
    }

    fetchArticles = async () => {
        const { data } = await getAllArticles();
        this.setState({
            articles: data,
        });
    };

    render() {
        let { articles } = this.state;
        return (
            <div style={{ padding: '15px' }}>
                <div className='m-2'>
                    <h1>Articles</h1>
                    <div fluid>
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
                                        <div className='article-box m-2'>
                                            <div
                                                className='d-none d-md-block'
                                                md='4'
                                                lg='3'
                                            >
                                                <img
                                                    className='article-image  p-1 m-1 img-fluid'
                                                    src={`${process.env.REACT_APP_HOST}servable/images/articles/thumbs/${a.Thumbnail}`}
                                                    alt={a.Title}
                                                />
                                            </div>
                                            <div
                                                className='thumbnail'
                                                sm='12'
                                                md='8'
                                                lg='9'
                                                thumbnail='true'
                                            >
                                                <h2>{a.Title}</h2>
                                                <h5>{a.Summary}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        state,
        articles: state,
    };
})(Articles);
