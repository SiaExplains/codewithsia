import React from 'react';
import classes from './videos.module.scss';
import Underline from '../../common/underline/underline';
import Subject from '../../common/subject/subject';

export default function VideosComponent() {
    return (
        <div className={classes.root}>
            <div className={classes['content-box']}>
                <Subject title='Video Videos' />
                <Underline />
                <div className={classes.gallery}>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/0Q7SyMvLXmw'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.item}
                    ></iframe>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/RxXOcl8qibg'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.item}
                    ></iframe>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/zAIE__KcJbQ'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.item}
                    ></iframe>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/RElqGuJqHJU'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.item}
                    ></iframe>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/yDLAhx3Odg8'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.item}
                    ></iframe>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/Bth5dcsFMhI'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.item}
                    ></iframe>
                    <iframe
                        width='300'
                        src='https://www.youtube.com/embed/eMDcXW_eA4Q'
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                        className={classes.item}
                    ></iframe>
                    <div className={classes.more}>
                        For more Videos, <br />
                        Visit my Channel
                    </div>
                </div>
            </div>
        </div>
    );
}
