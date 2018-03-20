import React from 'react';

class TabItem extends React.Component {
    render(){
        return(
            <div>
                <button>{this.props.text.title} {this.props.onclick(this.props.text.title)} </button> &nbsp;
            </div>
        );
    }
}

export default TabItem;