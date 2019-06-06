import React ,{Component}from 'react';

class Form extends Component{
    constructor (props) {
        super(props);
        this.state = {
          titulo: '',
          autor: '',
          descripcion: '',
          prioridad: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
          titulo: '',
          autor: '',
          descripcion: '',
          prioridad: 'low'
        });
        let formu = document.getElementById("formu")
        formu.reset()
      }
    
      handleInput(e) {
        const {value, name} = e.target;
        this.setState({
          [name]: value
        });
      }
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit} id="formu">
                    <div className="form-group">
                        <input name="titulo" type="text" className="form-control" onChange={this.handleInput} placeholder="Titulo" autoFocus/>
                    </div>
                    <div className="form-group">
                        <input name="autor" type="text" className="form-control" onChange={this.handleInput} placeholder="Autor"/>
                    </div>
                    <div className="form-group">
                        <input name="descripcion" type="text" className="form-control" placeholder="Descripcion" onChange={this.handleInput }/>
                    </div>
                    <div className="form-group">
                        <select
                            name="prioridad"
                            className="form-control"
                            value={this.state.prioridad}
                            onChange={this.handleInput}
                        >
                        <option>baja</option>
                        <option>media</option>
                        <option>alta</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}
export default Form