import React from 'react';

class ListOfWords extends React.PureComponent {
    render() {
        return <div>{this.props.words.join(',')}</div>;
    }
}

class Test2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // // 这个地方导致了bug
        // const words = this.state.words;
        // words.push('marklar');
        // this.setState({words: words});

        this.setState(prevState => ({
            words: prevState.words.concat(['marklar'])
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} >Add</button>
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
}

export default Test2
