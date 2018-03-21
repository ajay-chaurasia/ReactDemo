import React from 'react';

class TabItem extends React.Component {

    constructor(){
        super();
        this.state = {
            displaySubCategory: false,
            tabObject: null
        }
    }

    render(){
        return(
            <div>
                <button onClick = {()=> this.props.ontabclick(this.props.tabObj.data)}> {this.props.tabObj.title} </button> &nbsp;
            </div>
        );
    }
}

export default TabItem;