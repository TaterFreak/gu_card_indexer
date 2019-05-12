import React from 'react';
import Link from 'next/link';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <strong>
          page: {this.props.page}
        </strong>
        <Link href={{ pathname: '/user', query: {page: this.props.page - 1} }}>
          <button>PREV</button>
        </Link>
        <Link href={{ pathname: '/user', query: {page: this.props.page + 1} }}>
          <button>NEXT</button>
        </Link>
      </div>
    );
  }
}

export default App;
