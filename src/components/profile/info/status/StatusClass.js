import React from "react";

class Status extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  };
  activateEditMode = () => {

    this.setState({   //async !!!!
      editMode: true
    });
    // this.state.editMode = true;
    // this.forceUpdate(); //  ispolzovat tolko po neobhodimosti!!!!
  }

  deactivateEditMode() {

    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    // let a = this.props;
    // let b = this.state;
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render () {

    return (
      <div>
        {!this.state.editMode &&
        <span onDoubleClick={this.activateEditMode}>{this.props.status || "write something"}</span>
        }
        {this.state.editMode &&
        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.state.status}/>
        }

      </div>
    )
}
}

export default Status;
