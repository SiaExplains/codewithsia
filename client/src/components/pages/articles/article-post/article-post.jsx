import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

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
        axios
            .get(`${process.env.REACT_APP_API_ENDPOINT}/articles/${id}`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            })
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
            <Container>
                <h2>article-post: {this.state.id}</h2>
                <h5>{article && article.Summary} ...</h5>

                <br />
                <p>{article && article.Content}</p>
            </Container>
        );
    }
}

export default ArticlePost;
