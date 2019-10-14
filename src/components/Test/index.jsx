import React from 'react';

class Test extends React.Component {

    numbers = [1, 2, 3, 4, 5];

    listItems = this.numbers.map((numbers) =>
        <li>{numbers}</li>
    );

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <hr />
                <ul>{this.listItems}</ul>
            </div>
        );
    }
}

export default Test
