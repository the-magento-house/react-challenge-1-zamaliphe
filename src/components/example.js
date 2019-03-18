import React, { Component } from 'react';

/**
 * An example that shows how you can interpolate/mix javascript with HTML
 */
class Example extends Component {
    render () {
        const date = new Date().toDateString();
        return (
            <div>
                The date is {date}
            </div>
        )
    }
}

export default Example