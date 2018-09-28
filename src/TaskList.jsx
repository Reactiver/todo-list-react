import React from 'react'
import Task from './Task'

class TaskList extends React.Component {
  render() {
    const updChecked = this.props.updChecked;
    const tasksTemplate = this.props.data.map((item, index) => (
      <Task item={item} key={item.id} index={index} updChecked={updChecked}/>
    ))

    return (
      <React.Fragment>
        {tasksTemplate}
      </React.Fragment>
    )
  }
}

export default TaskList;