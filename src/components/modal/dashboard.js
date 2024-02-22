import React, { Component } from "react";
import Modal from "./modal.js";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };
  
  render() {
    return (
        <main>
        <Modal type={this.props.type} show={this.state.show} handleClose={this.closeModal}>
          <p>{this.props.type}</p>
        </Modal>
        <button className="navbar--button" type="button" onClick={this.openModal}>{this.props.type}</button>
      </main>
    );
  }
}

export default Dashboard