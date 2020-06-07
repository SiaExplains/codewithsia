import React, { Component } from 'react';

class SamplePromise extends Component {
    myPromise = () => {
        let p = new Promise((resolve, reject) => {
            let a = 1 + 2;
            if (a === 2) {
                resolve('success');
            } else {
                reject('failed');
            }
        });

        p.then(data => {
            alert(data);
        }).catch(err => {
            alert(err);
        });
    };

    componentDidMount() {
        this.myPromise();
    }
    render() {
        return (
            <div>
                <h2>Smaple of using promises in javascript!</h2>
            </div>
        );
    }
}

export default SamplePromise;
