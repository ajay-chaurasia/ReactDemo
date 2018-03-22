import React from 'react';


class MenuItem extends React.Component {
   render() {
      return (
         <div>
         	<button onClick={()=>this.props.routeHandler(this.props.text)}>{this.props.text}</button>
         </div>
      );
   }
}
export default MenuItem;
