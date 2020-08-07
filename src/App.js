import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
 class App extends React.Component{
     constructor(){
        super();
        this.state={items:[],view:[],element:{}};
        this.addTodo=this.addTodo.bind(this);
        this.arr=[];
        this.gen=this.gen.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
        
     }

     componentDidMount(){
         fetch('https://react-todo-backends.herokuapp.com/tasks')
         .then(res=>res.json())
         .then(data=>this.setState({items:data,view:data}))
         .catch(err=>console.log(err));
         
     }
     
     addTodo(e){
         let json={};
         fetch('https://react-todo-backends.herokuapp.com/add',{
             method:"POST",
             body:JSON.stringify({
                "title":e,
                "id":this.gen()
             }),
             headers:{
                "Content-type": "application/json; charset=UTF-8"
             }
         }).then(res=>res.json()
         ).then(data=>this.setState({element:data.ops[0],view:[...this.state.view,data.ops[0]]}))
         .catch(err=>console.log("Error"));
         console.log("JSON",json);
        }
     deleteTodo(idx){
        fetch(`https://react-todo-backends.herokuapp.com/delete/${idx}`,{
            method:"POST",
            body:JSON.stringify({
               "_id":idx
            }),
            headers:{
               "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res=>res.json())
        .then(data=>console.log("dele",data))
        .catch(err=>console.log("Task Not Found"));
        this.setState({view:this.state.view.filter(item=>item._id!==idx)});
     }
     gen() {
        var min = 1;
        var max = 100;
        var random = Math.floor(Math.random() * (+max + 1 - +min) + +min);
        if (this.arr.indexOf(random) == -1) {
          this.arr.push(random);
          return random;
        } else {
          this.gen();
        }
      }
     render(){
         return(
         <div>
             <h1>Todo {this.state.view.length}</h1>
             <TodoForm add={this.addTodo}/>
             <TodoList items={this.state.view} delete={this.deleteTodo}/>
         </div>
         );
 }
 }

 

 

 export default App;