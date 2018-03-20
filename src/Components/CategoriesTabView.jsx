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
            title: 'Business Website',
            category: 'Web Deisgn'
          },
          {
            title: 'Social App',
            category: 'Mobile Development'
          },
          {
            title: 'Ecommerce Shopping Cart',
            category: 'Web Development'
          }
        ]});
      }
      
      componentWillMount(){
        this.getTabList();
      }
      
      componentDidMount(){
        console.log("HomePage: "+this.state.tabList);
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
