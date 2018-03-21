import React from 'react';

export default class SubCategoryView extends React.Component {

    constructor(){
        super();
        this.state = {
            tabItemObj: null
        }
    }

   render() {
    //let tabItemObj;
    
    /*if(this.props.tabObject){
        tabItemObj= this.props.tabObject.data.map(tablisting => {    
            return (
                <SubCategoryResultView tabObj={tablisting} style={{align:'center'}}/>
            );
        })
 }
    switch(this.props.tabObject.title){
        case 'Doctors & Speciality': 
              //tabObject.name
              
             break;
      default: 
              break;
    }

    {this.props.tabObject.data.name? this.props.tabObject.data.name: null}
    */
   
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

   console.log(this.props.tabObject);
      return (        
         <div>
            {localDataList}
         </div>
      );
   }
}
//export default SubCategoryView;
