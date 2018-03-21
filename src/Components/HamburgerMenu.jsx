import React from 'react';
import MenuItem from './MenuItem.jsx'
import '../style.css'
class HamburgerMenu extends React.Component {

    route = (pagetitle) =>{
        console.log(pagetitle);
    }
   render() {
      return (
         <div >
            <div style={{display:'flex'}}>
                <h3>Main Menu</h3>
                <button onClick={() => this.props.closeAction()}>Close</button>
            </div>
             <MenuItem text="Home" route={() => this.route}></MenuItem>
             <MenuItem text="Doctors & Speciality"></MenuItem>
             <MenuItem text="Urgent Care"></MenuItem>
             <MenuItem text="Hospitals & Fascilities"></MenuItem>
             <MenuItem text="Health Conditions"></MenuItem>
             <MenuItem text="Body Parts"></MenuItem>
         </div>
      );
   }
}
export default HamburgerMenu;
