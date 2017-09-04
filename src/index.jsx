import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';
import Hello from 'components/Hello.jsx';


window.onload = function () {
    /*let x = '我是變數 被reactDOM渲染的';
    let y = 999;
    ReactDOM.render(
        (<div>
            <h1>{x}</h1>
            <h1>{y + 3}</h1>
            <Hello />
            <Main />
        </div>),
        document.getElementById('root')
    );*/
    setInterval(tick, 1000);
}


function tick() {
        const date = new Date().toLocaleTimeString();
        const el = (
            <div>
                <h1>Hello</h1>
                <h2>It's {date}.</h2>
            </div>
        );
        ReactDOM.render(el, document.getElementById('root'));
    }
    