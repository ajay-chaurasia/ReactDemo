import React from 'react';

class LoginPopup extends React.Component {

    constructor(){
        super();
        this.state = {
          username: '',
          password: ''
        }
      }

    updateUsername = (event) => {
        this.setState({username : event.target.value})
    }
    updatePassword = (event) => {
        this.setState({password : event.target.value})
    }

   render() {
      return (
         <div><br/>
            <label>Username</label> &nbsp;
            <input type="text" id="username" value={this.state.username} onChange={this.updateUsername}/><br/><br/>
            <label>Password</label> &nbsp;
            <input type="password" id="password" value={this.state.password} onChange={this.updatePassword} />
            <br/><br/>
         	<button className="square" onClick={() => this.props.onlogin(this.state.username, this.state.password)}>Login</button>
         </div>
      );
   }
}
export default LoginPopup;
