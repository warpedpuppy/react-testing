import React from 'react';
import Fish from './Fish';
import './BigFish.css';

export default class BigFish extends React.Component {
    state = {
        showBubble: false
    }
    onClickHandler = (e) => {
        this.setState({showBubble: !this.state.showBubble})
    }
    render () {
        return (
            <div className="big-fish" onClick={this.onClickHandler}>
                <span className={ (!this.state.showBubble)?`hide`:`` }>my name is { this.props.name } </span>
                <Fish name='Sam' />
            </div>
        )
    }
}