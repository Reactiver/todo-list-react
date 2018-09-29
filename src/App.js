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
    if (localStorage.getItem('tasks') != null && localStorage.getItem('tasks').length) {
      this.setState({ myTaskList: JSON.parse(localStorage.getItem('tasks'))});
    } else {
      localStorage.setItem('tasks', []);
    }
  }

  addTask = newTask => {
    const tasks = [...this.state.myTaskList];
    localStorage.setItem('tasks', JSON.stringify([newTask, ...tasks]));
    this.setState({ 
      myTaskList: [newTask, ...tasks],
      checked: [false, ...this.state.checked],
    })
  }

  updChecked = id => {
    const checked = this.state.checked
    checked[id] = !checked[id]
    this.setState({ checked: checked})
  }

  deleteTask = e => {
    const updTask = [...this.state.myTaskList]
    const checked = this.state.checked
    const newChecked = []
    const newTaskList = []
    let counter = 0;

    for (let i = 0; i < checked.length; i++)
     if (!checked[i]) {
       newChecked.push(false)
       newTaskList.push(updTask[i])
     }

    localStorage.setItem('tasks', JSON.stringify(newTaskList));
    this.setState({ myTaskList: newTaskList, checked: newChecked})
  }
  
  render() {
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <Add addTask={this.addTask} deleteTask={this.deleteTask}/>
        <TaskList data={this.state.myTaskList} updChecked={this.updChecked} />
        <button onClick={this.deleteTask} className="btn-del">Убрать сделанные</button>
      </div>
    );
  }
}

export default App;
