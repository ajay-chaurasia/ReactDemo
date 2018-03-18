import React from 'react';
import MenuItem from './MenuItem.jsx'
import styles from '../style.css'

class HamburgerMenu extends React.Component {
   render() {
      return (
         <div>
         	<h3>Main Menu</h3>
         	<MenuItem text='Pehla Item'></MenuItem>
         </div>
      );
   }
}
export default HamburgerMenu;
