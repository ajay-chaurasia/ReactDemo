import React from 'react';
import CategoriesTabView from './CategoriesTabView.jsx'
import '../style.css'
import LoginPopup from './LoginPopup';
import ChangeLoc from './ChangeLoc.jsx';
import SearchBar from './SearchBar.jsx';
import HamburgerMenu from './HamburgerMenu';

class HomePage extends React.Component {

constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      validSession: false,
      expandHamMenu: false,
      displayMenuButton: true
    }
  }

  authorizeLogin = (enteredUsername, enteredPassword) =>{
    if(enteredUsername === enteredPassword){

      this.setState({
        username: enteredUsername,
        password: enteredPassword,
        validSession: true,
        tabList: []
      });
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

expandHamburgerMenu = () => {
  console.log("Opening Menu");
    this.setState({
      expandHamMenu: true,
      displayMenuButton: false
    });
}

collapseHamburgerMenu = () => {
  console.log("Closing Menu");
    this.setState({
      expandHamMenu: false,
      displayMenuButton: true
    });
}

render() {

      return (
        
        <div>

         {this.state.expandHamMenu? <HamburgerMenu className='' closeAction={this.collapseHamburgerMenu} /> : null}

         <div style={{display:'flex'}}>
            {this.state.displayMenuButton ? 
              <button onClick={this.expandHamburgerMenu}>
                  HamburgerMenu
              </button>
            : null }                  
            <img  style={{ margin:'0 auto'}} className='logoSpan' src={require("../Images/idhp_icon.png")} alt='IDHP Icon'/>
         </div>

         <div style={{ margin:'0 auto'}} className='logoSpan'>   
            {!this.state.validSession ? <LoginPopup username={this.state.username} password={this.state.password} onlogin={this.authorizeLogin}/> : null }

            {this.state.validSession ? 
            <div>
              <div style={{display:'flex'}}>
                <ChangeLoc/>&nbsp;<SearchBar/>
              </div> <br/>
              <CategoriesTabView />
            </div> : null }
         </div>
        </div>
      );
   }
}
export default HomePage;
