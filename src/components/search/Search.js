import React from 'react';
import Router from 'next/router';
import styles from './search.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    this.getInventoryOfUser = this.getInventoryOfUser.bind(this);
    this.hasContent = this.hasContent.bind(this);
  }

  getInventoryOfUser(e) {
    e.preventDefault();
    let input = document.getElementById('user-input').value;
    if (input != '') {
      Router.push({
        pathname: '/user',
        query: { user: input }
      });
    }
    else {
      this.setState({error: true})
    }
  }

  hasContent() {
    let input = document.getElementById('user-input');
    if (input.value.length > 0) {
      this.setState({
        hasContent: true
      })
    } else {
      this.setState({
        hasContent: false
      })
    }

  }

  render() {
    return (
      <div className="search-wrapper">
        <div className="inputTxt">
          <input type="text" id="user-input" className={this.state.hasContent ? 'has-content' : ''} name="eth-address" onChange={this.hasContent}/>
          <span className="bar"></span>
          <span className="label">Eth address</span>
        </div>
        <button className="search-button" onClick={this.getInventoryOfUser}>Search</button>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default App;
