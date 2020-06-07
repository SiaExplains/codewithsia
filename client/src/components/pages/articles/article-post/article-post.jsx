import React, { Component } from 'react';
import { getAnArticle } from '../../../../services/articles';
import './article-post.css';

require('../../../../tools/string-tools');

class ArticlePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            article: null,
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({
            id,
        });
        this.fetchArticle(id);
    }

    fetchArticle(id) {
        getAnArticle(id)
            .then((result) => {
                this.setState({
                    article: result.data,
                });
                console.log(result.data);
            })
            .catch((err) => {
                console.log(`Error while fetching: ${err}`);
            });
    }

    render() {
        let { article } = this.state;

        return (
            <div className='p-3'>
                {article && (
                    <React.Fragment>
                        <div>
                            <div>
                                <h2>{article.Title}</h2>
                            </div>
                            <div className='text-right'>
                                <h5>
                                    {new Date(article.RegDate).customDisplay()}
                                </h5>
                            </div>
                        </div>
                        <div>
                            <div>
                                <hr />
                            </div>
                        </div>

                        <div>
                            <div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: article.Content,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <hr />
                            </div>
                        </div>
                        <div>
                            <div>
                                Tags: &nbsp;
                                {article.tags.map((tag) => {
                                    return (
                                        <React.Fragment>
                                            <span className='tag'>
                                                {tag.Name}
                                            </span>
                                            &nbsp;
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default ArticlePost;
