import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Header from './Header.js';
import Main from './Main.js';
import './App.css';
import data from './data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      name: ''
    };
  }

  handleHeart = () => {
    this.setState({
      hearts: this.state.hearts + '❤️',
    })
  }

  handleShowModal = (name) => {
    this.setState({
      showModal: true,
      name: name
    })
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Header hearts={this.state.hearts}/>
        <Main 
          handleHeart={this.handleHeart}
          data={data}
          handleShowModal={this.handleShowModal}
        />
        <footer onClick={this.handleShowModal}>
          &copy; Code Fellows 2022
        </footer>
        <Modal 
          show={this.state.showModal} 
          onHide={this.handleHideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }

}

export default App;
