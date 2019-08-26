import React from 'react';
import './App.css';


class App extends React.Component {
constructor(){
  super();
  this.state ={

    }
  }
  render(){
    return (
      <div>
        <h1>Simon</h1>
        <div id="boxWrapper">
        <Box id={1}  color="#18d871" />
        <Box id={2}  color="#fc4d32" />
        <Box id={3}  color="#1d97d8" />
        <Box id={4}  color="#efd72c"/>
        </div>
      </div>
    )
  }
}

const Box = (props) => {
  console.log(props)
  return (
    <div onClick={()=>console.log('trigger')} className ="boxStyling" style={{backgroundColor: props.color}} >BOX {props.id}</div>
  )
}



export default App;
