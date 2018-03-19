import React from 'react';
import TabItem from './TabItem.jsx';

class CategoriesTabView extends React.Component {

    constructor(){
        super();
        this.state = {
          username: ''
        }
      }


   render() {
       let tabList;
        if(this.props.tabs){

            //tabList = this.props.tabs;
            tabList = this.props.tabs.map(tablisting => {
                return (
                <TabItem text={tablisting} />
                );
            });
        }

        return(
            <div>
              {tabList}  
              </div>
        );
    }
}
export default CategoriesTabView;
