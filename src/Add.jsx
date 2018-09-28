import React from 'react'
import './Add.css'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
    }

    
  state = {
    task: '',
  }

  onChangeTask = (e) => {
    this.setState({ task: e.target.value })
  }

  keyPress = e => {
    if (e.keyCode === 13) {
      const id = +new Date();
      const task = this.state.task;
      const item = { id, task };
      this.props.click(item)
  
      this.setState({ task: ''})
    }
  }

  componentDidMount() {
    this.input.current.focus()
    }
 
  render() {
    return (
      <div>
        <input onChange={this.onChangeTask}
         onKeyDown={this.keyPress}
         value={this.state.task}
         className="input-add"
         ref={this.input}
         placeholder="Что хочешь сделать? :)">
        </input>
      </div>
    );
  }
}

export default Add;