import React, { Component } from 'react';
import Footer from './Footer/Footer';
import PreviewImage from './PrevImage/PreviewImage'
class Home extends Component {
  render() {
    return (
      <div>
        <PreviewImage />
        <Footer />
      </div>
    );
  }
}

export default Home;
