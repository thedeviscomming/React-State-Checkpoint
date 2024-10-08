import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: 'John Doe',
        bio: 'Développeur web passionné',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Développeur'
      },
      show: false,
      elapsedTime: 0
    };

    this.intervalId = null;
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { show, elapsedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Cacher' : 'Montrer'} le profil
        </button>
        
        {show && (
          <div className="profile">
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}
        
        <p>Temps écoulé depuis le montage: {elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;
