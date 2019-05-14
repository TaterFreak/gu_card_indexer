import React from 'react';
import fetch from 'isomorphic-unfetch';
import Grid from '../src/layouts/grid/Grid';
import Card from '../src/components/card/Card';
import Pagination from '../src/components/pagination/Pagination';
import Filters from '../src/components/filters/Filters';

class App extends React.Component {
  static async getInitialProps(context) {
    const user = '0x682d283Ab86e2655e30273B14C637a253B81BeD3';
    const query = context.query;
    let url = `https://api.godsunchained.com/v0/user/${user}/inventory`;

    if (query !== undefined) {
      Object.keys(query).forEach(key => {
        url = `https://api.godsunchained.com/v0/user/${user}/inventory?${key}=${query[key]}`
      })
      console.log(url)
    }

    const res = await fetch(url)
    const address = await res.json()
    return {address, query}
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      load: false,
      items: []
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
  }

  handlePageChange(inventory) {
    console.log('page change')
  }

  handleFilters(params) {
    console.log(`filter`)
  }

  render() {
    const { error, loading } = this.state;
    const { address, query } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Filters onUpdateFilter={this.handleFilters} query={query}/>
          <Pagination onPageChange={this.handlePageChange} page={address.page}/>
          <div>
            {address.records != null &&
              <Grid>
                {address.records.map((card, index) =>
                  <Card card={card} key={index}/>
                )}
              </Grid>
            }
          </div>
        </div>
      );
    }
  }
}

export default App;
