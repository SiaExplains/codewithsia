import React, { Component, Suspense } from 'react';
import Home from './pages/home/home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Articles from './pages/articles/articles';
import NotFound from './layout/not-found/not-found';
import ArticlePost from './pages/articles/article-post/article-post';
import Projects from './pages/projects/projects';
import AdminPanel from './admin/admin-panel';
import TermOfUse from './pages/term-of-use/term-of-use';
import SignupPage from './pages/signup/signup';
const HeaderComponent = React.lazy(() => import('./layout/header/header'));
const FooterComponent = React.lazy(() => import('./layout/footer/footer'));
class MainAppComponent extends Component {
    render() {
        console.log(
            `Front-End App based on level:${process.env.REACT_APP_LEVEL}`
        );
        return (
            <React.Fragment>
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <HeaderComponent {...this.props} />

                        <Switch>
                            <Route path='/' exact component={Home} />

                            <Route path='/about' component={About} />
                            <Route path='/projects' component={Projects} />
                            <Route
                                path='/article/:id'
                                component={ArticlePost}
                            />
                            <Route path='/contact' component={Contact} />
                            <Route
                                path='/signup-courses/'
                                component={SignupPage}
                            />
                            <Route
                                path='/term-of-use'
                                exact
                                component={TermOfUse}
                            />
                            <Route path='/articles' component={Articles} />

                            <Route path='/admin/' component={AdminPanel} />

                            <Route component={NotFound} />
                        </Switch>
                        <br />
                        <FooterComponent />
                    </Suspense>
                </Router>
            </React.Fragment>
        );
    }
}

export default MainAppComponent;
