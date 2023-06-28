import React from 'react';
import './Test.css'
import Test2 from '../Test2/Test2';
const Test = (props) => {
    console.log(props);
    const { name } = props;
    return (
        <div>
            <h2>Hello from Test</h2>
            <Test2 name={name}></Test2>

        </div>
    );
};
export default Test;