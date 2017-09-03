import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';
import Hello from 'components/Hello.jsx';

window.onload = function() {
    ReactDOM.render(
        <div>
            <Hello />
            <Main />
        </div>,
        document.getElementById('root')
    );
};
