import React from "react";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    
    this.deleteItems=this.deleteItems.bind(this);
   console.log("logging",this.props);
  }
  deleteItems(e){
    let idx=+e.target.id;
    console.log("Working",idx);
    this.props.delete(idx);
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Task</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
             {this.props.items.map((item,index)=>
             {
               return(<tr key={index}>
                 <td>{item._id}</td>
                 <td>{item.title}</td>
                 <td><button className="btn btn-outline-danger" id={item._id} onClick={this.deleteItems}>Delete</button></td>
               </tr>);
             })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TodoList;
