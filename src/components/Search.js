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
  }

  getInventoryOfUser(e) {
    e.preventDefault();
    let input = document.getElementById('user-input').value;
    if (input != '') {
      this.setState({loading: true});
      Router.push({
        pathname: '/user',
        query: { user: input }
      });
    }
    else {
      this.setState({error: true})
    }
  }

  render() {
    return (
      <div className="search-wrapper">
        <div className="inputTxt">
          <input type="text" id="user-input" name="eth-address"/>
          <span className="bar"></span>
          <span className="label">Eth address</span>
        </div>
        <button onClick={this.getInventoryOfUser}>Search</button>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default App;
