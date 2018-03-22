import React from 'react';

export default class SubCategoryView extends React.Component {

    constructor(){
        super();
        this.state = {
            tabItemObj: null
        }
    }

   render() {
   
    let localDataList;
   if(this.props.tabObject){
    localDataList = this.props.tabObject.map(tablisting => {
        return (
            <div style={{dislay:'flex'}}>
                {tablisting.name ? tablisting.name : null} 
                {tablisting.address ? tablisting.address : null} 
                {tablisting.speciality ? tablisting.speciality : null} <br/>
             </div>
        );
    });
}

      return (        
         <div>
            {localDataList}
         </div>
      );
   }
}
//export default SubCategoryView;
