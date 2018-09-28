import React from 'react';
import './Task.css'

class Task extends React.Component {
  state = {
    checked: false
  }

  onCheckboxClickHandler = e => {
    this.setState({ checked: !this.state.checked }) 
    const status = !this.state.checked
    const index = this.props.index
    this.props.updChecked({status, index})
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