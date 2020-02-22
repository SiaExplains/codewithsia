import React, { Component } from 'react';
import style from './sample-gallery-item.module.css';

export default class SampleGalleryItem extends Component {
    render() {
        return (
            <div className={style.Gallery}>
                <div className={style.Item}>Adf dfdf</div>
                <div className={style.Item}>Bdddd ddd</div>
                <div className={style.Item}>Ccvd df gfgfd </div>
                <div className={style.Item}>Df gfd gdfs fd</div>
                <div className={style.Item}>Edfsgdfgfdgd</div>
                <div className={style.Item}>Ffdgfgf</div>
            </div>
        );
    }
}
