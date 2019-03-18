import React, { Component } from 'react';

/**
 * An example that shows how you can interpolate/mix javascript with HTML
 */
class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter />
            </div>
        );
    }
}

class Counter extends Component {
    state = {
        count: 0
    };
    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };
    render() {
        return <button onClick={this.handleClick}>{this.state.count}</button>;
    }
}

export default App;