import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.getInventoryOfUser = this.getInventoryOfUser.bind(this);
  }

  getInventoryOfUser() {
    const user = document.getElementById('user-input').value;
    let url = new URL(`https://api.godsunchained.com/v0/user/${user}/inventory`);
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          return this.props.onSearch(user, result)
        },
        (error) => {
          console.log(error)
        }
      )
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
