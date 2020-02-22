import React, { Component } from 'react';
import style from './sample-css-flexbox.module.css';

export default class SampleCssFlexBox extends Component {
    render() {
        return (
            <div>
                <div className={style.GodParent}>
                    <div className={style.LeftParent}>
                        <div className={style.LeftChildBox1}>
                            <h5>Box1</h5>
                            <p>this is a testing flexbox layout feature!</p>
                        </div>
                        <div className={style.LeftChildBox2}>
                            <h5>Box2</h5>
                            <p>
                                this is a testing flexbox layout feature! for
                                more information you should check w3-school or
                                other informative websites!
                            </p>
                        </div>
                        <div className={style.LeftChildBox3}>
                            <h5>Box3</h5>
                            <p>
                                this is a testing flexbox layout feature! my
                                name also is siavash
                            </p>
                        </div>
                    </div>
                    <div className={style.RightParent}>Right Parent</div>
                </div>
                <div className={style.SecondParent}>
                    <div className={style.SecondBox1}>
                        <h3>Box A</h3>
                        <p>
                            this is test this is test this is test this is test
                            this is test this is test this is test this is test
                            this is test this is test
                        </p>
                    </div>
                    <div className={style.SecondBox2}>
                        {' '}
                        <h3>Box B</h3>
                        <p>this is test</p>
                    </div>
                    <div className={style.SecondBox3}>
                        {' '}
                        <h3>Box C</h3>
                        <p>
                            this is test this is test this is test this is test
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
