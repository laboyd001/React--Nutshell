import React, { Component } from "react"
import "../../index.css"

export default class MessageEditForm extends Component {


  render() {
    return (
      <div className={this.props.hideEditForm ? 'hide' : null}>
        <div className="input-group mb-3">
          <label htmlFor="Message">Edit Your Message</label>
          <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" name="editMessage" id="editMessage" onChange={this.props.handleFieldChange} defaultValue={this.props.message.message} />
          <input type="text" className="hide" name="editId" id="editId" onChange={this.props.handleFieldChange} value={this.props.message.id} />
        </div>
        <button className="btn btn_small btn_delete" onClick={this.props.handleEditClick} >Cancel</button>
        <button className="btn btn_small save__button" onClick={() => {
          this.props.handleEditClick()
          this.props.constructEditMessage()
        }}>
          Save
            </button>
      </div>
    )
  }
}

