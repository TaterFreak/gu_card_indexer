import React from 'react';
import Head from 'next/head'
import Search from '../src/components/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(user, inventory) {
    console.log('search user')
  }

  render() {
    const { error, isLoaded } = this.state;
    const { address } = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
          </Head>
          <Search onSearch={this.handleSearch}/>
        </div>
      );
    }
  }
}

export default App;
