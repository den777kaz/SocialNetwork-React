import React from "react";

class Status extends React.Component {

  state = {
    editMode: false
  };
  activateEditMode(){

    this.setState({   //async !!!!
      editMode: true
    });
    // this.state.editMode = true;
    // this.forceUpdate(); //  ispolzovat tolko po neobhodimosti!!!!
  }

  deactivateEditMode() {

    this.setState({
      editMode: false
    });
  }
  render () {

    return (
      <div>
        {!this.state.editMode &&
        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
        }
        {this.state.editMode &&
        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>
        }

      </div>
    )
}
}

export default Status;
