import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import SimpleButton from '../buttons/SimpleButton';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  filter(page, addr, searchQuery) {
    let query = {}
    Object.assign(query, page);
    Object.assign(query, {addr: addr});
    Object.assign(query, searchQuery);

    Router.push({
      pathname: '/user',
      query: query
    });
  }

  render() {
    const { page, addr, searchQuery, records} = this.props;
    if (page === 1) {
      return (
        <div>
          <strong>
            page: {this.props.page}
          </strong>
          <SimpleButton event={() => this.filter({page: page + 1}, addr, searchQuery)} content="NEXT" />
        </div>
      );
    } else if (!records) {
      return (
        <div>
          <SimpleButton event={() => this.filter({page: page - 1}, addr, searchQuery)} content="PREV" />

          NO MORE :(
        </div>
      );
    } else {
      return (
        <div>
          <strong>
            page: {this.props.page}
          </strong>
          <SimpleButton event={() => this.filter({page: page - 1}, addr, searchQuery)} content="PREV" />
          <SimpleButton event={() => this.filter({page: page + 1}, addr, searchQuery)} content="NEXT" />
        </div>
      );
    }
  }
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  addr: PropTypes.string.isRequired,
  searchQuery: PropTypes.object.isRequired
}

export default Pagination;
