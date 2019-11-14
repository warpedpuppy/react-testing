import React from 'react';
import LittleFish from './LittleFish';
import './Fish.css';

export default class Fish extends React.Component {
    state = {
        showBubble: false
    }
    onClickHandler = (e) => {
        e.stopPropagation();
        this.setState({showBubble: !this.state.showBubble})
    }
    render () {
        return (
            <div className="fish"  onClick={this.onClickHandler}>
                <span classNameu={ (!this.state.showBubble)?`hide`:`` }>my name is { this.props.name } </span>
                <LittleFish name='Tiny' />
            </div>
        )
    }
}