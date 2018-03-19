import React from 'react';


class SearchBar extends React.Component {
   render() {
      return (
         <div>
         	<li>{this.props.text}</li>
         </div>
      );
   }
}
export default SearchBar;
