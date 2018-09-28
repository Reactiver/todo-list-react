import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList'
import Add from './Add'

const myTaskList = [
  {
    id: 1,
    task: 'Сходить в качалку'
  },
  { 
    id: 2,
    task: 'Выбрать тему для диплома'
  }, 
  {
    id: 3,
    task: 'Сделать TODO на реакте'
  }
];

class App extends Component {
  state = {
    myTaskList: [],
    checked: []
  }

  componentDidMount() {
    this.setState({ myTaskList: JSON.parse(localStorage.getItem('tasks'))})
  }

  onBtnClickHandler = newTask => {
    const tasks = [...this.state.myTaskList];
    localStorage.setItem('tasks', JSON.stringify([newTask, ...tasks]));
    this.setState({ myTaskList: [newTask, ...tasks]})
  }

  updChecked = e => {
    if (e.status) {
      const newChecked =  [...this.state.checked, e.index]
      this.setState({ checked: newChecked})
    }
    else {
      const newChecked = [...this.state.checked]
      const indexOf = newChecked.indexOf(e.index)
      newChecked.splice(indexOf, 1)

      this.setState({ checked: newChecked})
    }
  }

  deleteTask = e => {
    const updTask = [...this.state.myTaskList]
    const checked = [...this.state.checked].sort()
    const newTaskList = []
    let counter = 0;

    for (let i = 0; i < updTask.length; i++) {
      if (i !== checked[counter])
        newTaskList.push(updTask[i])
      else
        counter++
    }

    localStorage.setItem('tasks', JSON.stringify(newTaskList));
    this.setState({ myTaskList: newTaskList, checked: []})
  }
  
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <Add click={this.onBtnClickHandler} deleteTask={this.deleteTask}/>
        <TaskList data={this.state.myTaskList} updChecked={this.updChecked} />
        <button onClick={this.deleteTask} className="btn-del">Убрать сделанные</button>
      </div>
    );
  }
}

export default App;
