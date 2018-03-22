import React from 'react';
import TabItem from './TabItem.jsx';
import Filter from './Filter.jsx';

class CategoriesTabView extends React.Component {

    constructor(){
        super();
        this.state = {
          username: '',
          tabList: [],
          tabObjectData: [],
          displaySubCategoryView: false,
          filteredData: []
        }
      }

      getTabList(){
  
        this.setState({tabList: [
          {
            title: 'Doctors & Speciality',
            data: [
                {
                    name:'Dr. Asthana',
                    speciality: 'Ortho'
                },
                {
                    name:'Dr. Suresh',
                    speciality: 'Eye'
                },
                {
                    name:'Dr. Mukesh',
                    speciality: 'Dentist'
                },
                {
                    name:'Dr. Ravi',
                    speciality: 'OPD'
                }
            ]
          },
          {
            title: 'Urgent Care',
            data: []
          },
          {
            title: 'Hospitals & Fascilities',
            data: [
                {
                    name: 'Teresa Care',
                    address: 'Colorado'
                },
                {
                    name: 'Fortis Healthcare',
                    address: 'Texas'
                },
                {
                    name: 'Narayana Eye Hospital',
                    address: 'Benagaluru'
                }
            ]
          },
          {
              title: 'Body Parts',
              data: [
                        {
                            name: 'Head'
                        }, 
                        {
                            name: 'Brain'
                        }, 
                        {
                            name: 'Stomach'
                        }, 
                        {
                            name: 'Eye'
                        }
              ]
          }
        ]});
      }
      
      componentWillMount(){
        this.getTabList();
      }

      handleTabClick = (tabObj) => {
            this.setState({
                tabObjectData: tabObj,
                displaySubCategoryView: true,
                filteredData: tabObj
            });
      }

      handleClick = (key, value) =>{
        let larray = [];

        for(var i=0; i<this.state.tabObjectData.length; i++){
            if(this.state.tabObjectData[i][key] === value){
                larray.push(this.state.tabObjectData[i]);
            }
        }
        this.setState({
            filteredData: larray
        });
      } 

   render() {
       let localTabList;
        if(this.state.tabList){
            localTabList = this.state.tabList.map(tablisting => {
                return (
                    <TabItem tabObj={tablisting} ontabclick={this.handleTabClick} />
                );
            });
        } else {
            console.log("Tablist3 is: "+this.state.tabList);
            localTabList = null;
        }

        return(
            <div>
                <div style={{ display:'flex'}}>
                    {localTabList}  
                </div>
                <br/>
                <br/>
                <div>
                    {this.state.displaySubCategoryView ? <Filter tabObject={this.state.tabObjectData} filteredData={this.state.filteredData} ontabclick={this.handleClick}/> : null}
                </div>
            </div>
        );
    }
}
export default CategoriesTabView;
