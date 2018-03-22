
import React from 'react';
import SubCategoryView from './SubCategoryView.jsx'

class Filter extends React.Component {
    
    componentDidMount(){

      }

   render() {

    let localTabList = this.props.tabObject.map(tablisting => {
        return (
            <div>
                {tablisting.speciality ? <button onClick={() => this.props.ontabclick("speciality",tablisting.speciality)}>{tablisting.speciality}</button> : null}
            {tablisting.address ? <button onClick={()=>this.props.ontabclick("address", tablisting.address)}>{tablisting.address}</button> : null}
           
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