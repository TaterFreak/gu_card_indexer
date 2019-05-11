import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  fetchNextPage(page) {
    fetch(`https://api.godsunchained.com/v0/user/0x682d283Ab86e2655e30273B14C637a253B81BeD3/inventory?page=${page}`)
      .then(res => res.json())
      .then(
        (result) => {
          return this.props.onPageChange(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    return (
      <div>
        <strong>
          page: {this.props.page}
        </strong>
        <button onClick={() => this.fetchNextPage(this.props.page - 1)}>PREV</button>
        <button onClick={() => this.fetchNextPage(this.props.page + 1)}>NEXT</button>
      </div>
    );
  }
}

export default App;
