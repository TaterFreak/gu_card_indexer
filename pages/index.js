import React from 'react';
import Search from '../src/components/search/Search';
import Meta from '../src/components/meta/Meta';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      items: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(user, inventory) {
    console.log('search user')
  }

  render() {
    const { error, loading } = this.state;
    const { address } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Meta>
            <Search onSearch={this.handleSearch}/>
          </Meta>
        </div>
      );
    }
  }
}

export default App;
