import React from 'react';

class Test4 extends React.Component {

    // https://www.runoob.com/react/react-component-life-cycle.html

    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
        console.log("----------> componentWillMount")
    }

    componentDidMount() {
        console.log("----------> componentDidMount")
    }


    componentWillUpdate() {
        console.log("----------> componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("----------> componentDidUpdate")
    }


    componentWillReceiveProps() {
        console.log("----------> componentWillReceiveProps")
    }

    shouldComponentUpdate() {
        console.log("----------> shouldComponentUpdate")
    }

    componentWillUnmount() {
        console.log("----------> componentWillUnmount")
    }

    render() {
        return (
            <div>
                <h1>Test4</h1>
            </div>
        );
    }
}

export default Test4
