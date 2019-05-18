import React from 'react';
import fetch from 'isomorphic-unfetch';
import Grid from '../src/layouts/grid/Grid';
import Card from '../src/components/card/Card';
import Pagination from '../src/components/pagination/Pagination';
import Filters from '../src/components/filters/Filters';

class User extends React.Component {
  static async getInitialProps(context) {
    const searchQuery = context.query;
    const addr = context.query.addr;

    let page = 1;
    if (context.query.page != undefined) {
      page = context.query.page
    }

    Object.keys(searchQuery).forEach(key => {
      if (key === 'addr') {
        delete searchQuery[key]
      }

      if (key === 'page') {
        delete searchQuery[key]
      }
    });

    let url = `https://api.godsunchained.com/v0/user/${addr}/inventory`;
    if (searchQuery !== undefined) {
      Object.keys(searchQuery).forEach(key => {
        url = `https://api.godsunchained.com/v0/user/${addr}/inventory?page=${page}&${key}=${searchQuery[key]}`
      })
    }

    const res = await fetch(url);
    const inventory = await res.json();
    return {inventory, searchQuery, addr}
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  render() {
    const { error, } = this.state;
    const { inventory, searchQuery, addr } = this.props;
    return (
      <div>
        <Filters onUpdateFilter={this.handleFilters} addr={addr}/>
        <Pagination onPageChange={this.handlePageChange} page={inventory.page} addr={addr} searchQuery={searchQuery} records={inventory.records}/>
        <div>
          {inventory.records != null &&
            <Grid>
              {inventory.records.map((card, index) =>
                <Card card={card} key={index}/>
              )}
            </Grid>
          }
        </div>
      </div>
    );
  }
}

export default User;
