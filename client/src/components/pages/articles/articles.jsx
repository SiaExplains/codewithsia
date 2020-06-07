import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './articles.module.scss';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../../../services/articles';
import Underline from '../../common/underline/underline';
import Subject from '../../common/subject/subject';

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
            <div className={classes.root}>
                <div className={classes['content-box']}>
                    <Subject title='Articles' />
                    <Underline />
                    <div style={{ marginTop: '20px' }}>
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
                                        className={classes.articleLink}
                                    >
                                        <div className={classes.articleBox}>
                                            <div
                                                className={
                                                    classes.articleImageBox
                                                }
                                            >
                                                <img
                                                    className={
                                                        classes.articleImage
                                                    }
                                                    src={`${process.env.REACT_APP_HOST}servable/images/articles/thumbs/${a.Thumbnail}`}
                                                    alt={a.Title}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    classes.articleDetailBox
                                                }
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
