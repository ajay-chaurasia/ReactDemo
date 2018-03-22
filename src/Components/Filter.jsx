
import React from 'react';
import SubCategoryView from './SubCategoryView.jsx'

class Filter extends React.Component {
    
   render() {

    let filterArray = [];

    console.log(this.props.tabObject[0]["speciality"]);
/*
    for(var i=0; i<this.props.tabObject.length; i++){
        if(){
            filterArray.push(this.props.tabObject[i].speciality);
            //if(filterArray.indexOf)
        }
    } */

    let localTabList = this.props.tabObject.map(tablisting => {
        return (
            <div>

                {tablisting.speciality ? <button onClick={() => this.props.ontabclick("speciality",tablisting.speciality)}>{tablisting.speciality}</button> : null}

                {tablisting.address ? <button onClick={()=>this.props.ontabclick("address", tablisting.address)}>{tablisting.address}</button> : null}

                {tablisting.part ? <button onClick={()=>this.props.ontabclick("part", tablisting.part)}>{tablisting.part}</button> : null}
           
           </div>
        );
    });

      return (
        <div style={{align:'center'}}>
            <div style={{display:'flex'}}>
                <button onClick={this.props.ontabclick}>All</button>
                {localTabList}
            </div>           
            <br/>
                <div>
                   <SubCategoryView tabObject={this.props.filteredData} />
                </div>
        </div>
      );
   }
}
export default Filter;