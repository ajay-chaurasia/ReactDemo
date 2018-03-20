import React from 'react';
import TabItem from './TabItem.jsx';

class CategoriesTabView extends React.Component {

    constructor(){
        super();
        this.state = {
          username: '',
          tabList: []
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
      
      componentDidMount(){
        console.log("HomePage: "+this.state.tabList); 
      }

      handleClick(title){
          //TODO
            switch(title){
                case '': 
                        break;

            }
      }

   render() {
       let localTabList;
        if(this.state.tabList){
            localTabList = this.state.tabList.map(tablisting => {
                return (
                    <TabItem text={tablisting} onclick={this.handleClick} />
                );
            });
        } else {
            console.log("Tablist3 is: "+this.state.tabList);
            localTabList = null;
        }

        return(
            <div style={{ display:'flex'}}>
                {localTabList}  
            </div>
        );
    }
}
export default CategoriesTabView;
