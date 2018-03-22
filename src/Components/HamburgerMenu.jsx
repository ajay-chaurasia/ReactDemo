import React from 'react';
import MenuItem from './MenuItem.jsx'
import '../style.css'
class HamburgerMenu extends React.Component {

   
    constructor(props){
        super(props);
        this.state = {
          closeFunc: props.closeAction
        }
      }

    routeHandler = (pagetitle) => {
        console.log(pagetitle);
        this.state.closeFunc();
    }

   render() {
      return (
         <div >
            <div style={{display:'flex'}}>
                <h3>Main Menu</h3>
                <button onClick={() => this.props.closeAction()}>Close</button>
            </div>
             <MenuItem text="Home" routeHandler={this.routeHandler}></MenuItem>
             <MenuItem text="Doctors & Speciality" routeHandler={this.routeHandler}></MenuItem>
             <MenuItem text="Urgent Care" routeHandler={this.routeHandler}></MenuItem>
             <MenuItem text="Hospitals & Fascilities" routeHandler={this.routeHandler}></MenuItem>
             <MenuItem text="Body Parts" routeHandler={this.routeHandler}></MenuItem>
         </div>
      );
   }
}
export default HamburgerMenu;
