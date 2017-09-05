import React from 'react';

import './Component.css';

export default class Component extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='component'>
                <h2>Myname: {this.props.name}</h2>
                {/* <button onClick={this.props.onReset}>Reset</button> */}
            </div>
        );
    }

}
