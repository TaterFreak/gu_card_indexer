import React from 'react';
import Layout from '../src/components/Layout';
import Card from '../src/components/Card';
import Pagination from '../src/components/Pagination';
import Filters from '../src/components/Filters';
import Search from '../src/components/Search';

import fetch from 'isomorphic-unfetch';

class App extends React.Component {
  static async getInitialProps(context) {
    const user = '0x682d283Ab86e2655e30273B14C637a253B81BeD3';
    const query = context.query;
    let url = `https://api.godsunchained.com/v0/user/${user}/inventory`;

    console.log(url)
    if (query !== undefined) {
      Object.keys(query).forEach(key => {
        //url.searchParams.append(key, params[key]))
        url = `https://api.godsunchained.com/v0/user/${user}/inventory?${key}=${query[key]}`
      })
      console.log(url)
    }

    const res = await fetch(url)
    const address = await res.json()
    return {address}
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: []
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(user, inventory) {
    console.log('search user')
  }

  handlePageChange(inventory) {
    console.log('page change')
  }

  handleFilters(params) {
    console.log(`filter`)
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
          <Search onSearch={this.handleSearch}/>
          <Filters onUpdateFilter={this.handleFilters}/>
          <Pagination onPageChange={this.handlePageChange} page={address.page}/>
          <div>
            {address.records != null &&
              <Layout>
                {address.records.map((card, index) =>
                  <Card card={card} key={index}/>
                )}
              </Layout>
            }
          </div>
        </div>
      );
    }
  }
}

export default App;
