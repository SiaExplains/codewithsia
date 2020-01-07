import React, { Component } from 'react';
import Header from './layouts/header/header';
import Home from './pages/home/home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Articles from './pages/articles/articles';
import NotFound from './layouts/not-found/not-found';
import Awards from './pages/awards/awards';
import ArticlePost from './pages/articles/article-post/article-post';
import Projects from './pages/projects/projects';
import AdminArticle from './admin/articles/admin-article';
import AdminDashboard from './admin/admin-dashboard';

class MainAppComponent extends Component {
    render() {
        console.log(
            `Front-End App based on level:${process.env.REACT_APP_LEVEL}`
        );
        return (
            <React.Fragment>
                <Router>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/awards' component={Awards} />
                        <Route path='/projects' component={Projects} />
                        <Route path='/article/:id' component={ArticlePost} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/articles' component={Articles} />
                        <Route path='/admin' exact component={AdminDashboard} />
                        <Route
                            path='/admin/articles'
                            component={AdminArticle}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default MainAppComponent;
