import React, { Component } from 'react';
import './footer.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import footerSOF from '../../../assets/images/footer/sof.svg';
import footerGithub from '../../../assets/images/footer/github.svg';
import footerTwitter from '../../../assets/images/footer/twitter.svg';
import footerTelegram from '../../../assets/images/footer/telegram.svg';
import footerInstagram from '../../../assets/images/footer/instagram.svg';
import footerYoutube from '../../../assets/images/footer/youtube.svg';
import HRLine from '../../shared/hr-line/hr-line';

class FooterComponent extends Component {
    render() {
        return (
            <div className='footer'>
                <Container fluid>
                    <Row>
                        <Col>
                            <Link to='/sitemap.xml'>Sitemap</Link>
                            &nbsp; |&nbsp;&nbsp;
                            <Link to='/privacy-policy'>Privacy Policy</Link>
                            &nbsp; &nbsp; | &nbsp;&nbsp;
                            <Link to='/term-of-use'>Term of use</Link>
                        </Col>
                        <Col className='footer-contacts mt-2'>
                            Phone: +98-912-022-9077
                            <br />
                            sia.qnbr[AT]gmail[DOT]com
                            <br />
                            <HRLine type='style9' width='30%' />
                            <a href='https://twitter.com/codewithsia'>
                                <img
                                    alt='codewithsia twitter account'
                                    src={footerTwitter}
                                    className='footer-contacts-icon'
                                />
                            </a>
                            &nbsp;
                            <a href='https://github.com/siaqnbr'>
                                <img
                                    alt='codewithsia github account'
                                    src={footerGithub}
                                    className='footer-contacts-icon'
                                />
                            </a>
                            &nbsp;
                            <a href='https://stackoverflow.com/users/1404642/siavash'>
                                <img
                                    alt='codewithsia stackoverflow account'
                                    src={footerSOF}
                                    className='footer-contacts-icon'
                                />
                            </a>
                            &nbsp;
                            <a href='https://www.youtube.com/channel/UCAO_gchdNEyBZOuwO5K5Eig?view_as=subscriber'>
                                <img
                                    alt='codewithsia youtube account'
                                    src={footerYoutube}
                                    className='footer-contacts-icon'
                                />
                            </a>
                            &nbsp;
                            <a href='https://t.me/codewithsia'>
                                <img
                                    alt='codewithsia telegram account'
                                    src={footerTelegram}
                                    className='footer-contacts-icon'
                                />
                            </a>
                            &nbsp;
                            <a href='https://www.instagram.com/codewithsia/?hl=en'>
                                <img
                                    alt='codewithsia instagram account'
                                    src={footerInstagram}
                                    className='footer-contacts-icon'
                                />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className='copyright'>
                                Copyright © 2020 CodeWithSia. All rights
                                reserved
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default FooterComponent;
