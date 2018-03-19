import React from 'react';

class TabItem extends React.Component {
    render(){
        return(
            <div>
                
                <li>{this.props.tablisting.title}</li>
                
            </div>
        );
    }
}

export default TabItem;