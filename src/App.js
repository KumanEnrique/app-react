import React,{Component}from 'react';
import './App.css';
import './components/Navigation'
import Navigation from './components/Navigation';
import Form from './components/Form';
import {todos} from './todos.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd(todo){
    this.setState({
      todos : [ ...this.state.todos,todo]
    })
  }
  remove(index){
    if(window.confirm("seguro que quieres eliminarlo")){
      this.setState({
        todos:this.state.todos.filter((e,i)=>{
          return i !== index
        })
      })
    }
  }
  render (){
    const todo = this.state.todos.map((todo,i)=>{
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <p>{todo.titulo}</p>
              <span className="badge badge-pill badge-info ml-2">
                {todo.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p key={i}>{todo.descripcion}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.remove.bind(this,i)}>Eliminar</button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <Navigation titulo="navegacion por js"></Navigation>
          <span className="badge badge-pill badge-info ml-2">
            {this.state.todos.length}
          </span>
        </header>
          <div className="container">
            <Form onAddTodo={this.handleAdd}></Form>
            <div className="row mt-4">{todo}</div>
          </div>
      </div>
    );
  }
  
}

export default App;
