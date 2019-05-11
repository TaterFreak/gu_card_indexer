import React from 'react';
import Router from 'next/router';

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
        pathname: '/',
        query: { user: input }
      });
    }
    else {
      this.setState({error: true})
    }
  }

  render() {
    return (
      <div>
        <input type="text" id="user-input" name="eth-address"/>
        <button onClick={this.getInventoryOfUser}>Search</button>
      </div>
    );
  }
}

export default App;
