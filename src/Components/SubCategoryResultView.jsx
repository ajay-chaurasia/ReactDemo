import React from 'react';


class MenuItem extends React.Component {
   render() {
      return (
         <div>
         	<li>{this.props.text}</li>
         </div>
      );
   }
}
export default MenuItem;
