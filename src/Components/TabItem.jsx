import React from 'react';

class TabItem extends React.Component {
    render(){
        return(
            <div>
                {this.props.text.title} {this.props.onclick} &nbsp;
            </div>
        );
    }
}

export default TabItem;