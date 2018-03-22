import React from 'react';

import PopupModal from './PopupModal';

class ChangeLoc extends React.Component {
   render() {
      return (
         <div>
         	<button onClick={()=>this.props.onclick()}>Change Loc</button>
         </div>
      );
   }
}
export default ChangeLoc;
