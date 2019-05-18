import React from 'react';
import Search from '../src/components/search/Search';
import Meta from '../src/components/meta/Meta';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      items: []
    };
  }

  render() {
    const { error, loading } = this.state;
    const { address } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Meta />
          <Search onSearch={this.handleSearch}/>
        </div>
      );
    }
  }
}

export default Index;
