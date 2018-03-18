import React from 'react';
import HamburgerMenu from './HamburgerMenu.jsx'
import '../style.css'
var div_style= {display:'flex'};

class HomePage extends React.Component {

constructor(){
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }


//AJAX Call to fetch data
/*
 getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

*/

render() {

      return (
         <div style={div_style}>

         	<HamburgerMenu /> 
           
           <div style={{ margin:'0 auto'}}>
           
           <img  style={{ margin:'0 auto'}} className='logoSpan' src={require("../Images/idhp_icon.png")} alt='IDHP Icon'/>
           
           </div>
         </div>
      );
   }
}
export default HomePage;
