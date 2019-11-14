import React from 'react';
import './LittleFish.css'
export default class LittleFish extends React.Component {
    state = {
        showBubble: false
    }
    onClickHandler = (e) => {
        e.stopPropagation();
        this.setState({showBubble: !this.state.showBubble})
    }
    render () {
        return (
            <div className="little-fish"  onClick={this.onClickHandler}>
                <span className={ (!this.state.showBubble)?`hide`:`` }>my name is { this.props.name } </span>
            </div>
        )
    }
}