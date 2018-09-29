import React from 'react';
import './Task.css'

class Task extends React.Component {
  state = {
    checked: false
  }

  onCheckboxClickHandler = e => {
    this.setState({ checked: !this.state.checked }) 
    const id = this.props.index
    this.props.updChecked(id)
  }

  render() {
    return (
      <div className="field">
        <input id={this.props.item.id} type="checkbox" onClick={this.onCheckboxClickHandler} ></input>
        <label for={this.props.item.id}>{this.props.item.task}</label>
      </div>
    )
  }
}

export default Task;