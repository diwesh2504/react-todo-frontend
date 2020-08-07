import React from 'react';

class TodoForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state={inputValue:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
         
    }
    handleChange(e){
        this.setState({inputValue:e.target.value});
        //console.log(e.target.value);
    }
    handleSubmit(){
        this.props.add(this.state.inputValue);
        this.setState({inputValue:""});

    }
    
    render(){
    return(
        <div className="form-group" >
       <input type="text" id="todos" value={this.state.inputValue} onChange={this.handleChange}></input>
       <button className="btn btn-primary" onClick={this.handleSubmit}>Add</button>
       </div>
    )
    }
}
export default TodoForm;