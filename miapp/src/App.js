import React,{Component} from 'react'
 
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      newTask:"Aca va a ir el estadp cuando lo cambienmos",
      task:["avisar que vamos a salir "]
    };
    this.handleTaskChange=this.handleTaskChange.bind(this);
  }
  handleTaskChange(evt){
    this.setState({newTask:evt.target.value})
  }


  render(){
    return (
    <div className="container bg-dark">
      <div className="row">
        <h1 className="text-center text-white">Hola Mundo!!</h1>
        <span ></span>
        <div className="d-flex justify-content-center">
          <input 
          onChange={this.handleTaskChange} 
          type="text" 
          className="w-25" />
        </div>
        <h2 className= "text-white tenxt-center">{this.state.newTask}</h2>
        <ul>{
          this.state.task.map((t,i)=><li className= "text-white">{t,i}</li >)
          
          }

        </ul>
      </div>
    </div>
  );
  }
}
 
export default App;