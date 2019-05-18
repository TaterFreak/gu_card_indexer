import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

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
    const { page, addr, searchQuery} = this.props;
    return (
      <div>
        <strong>
          page: {this.props.page}
        </strong>
        <button onClick={() => this.filter({page: page - 1}, addr, searchQuery)} >PREV</button>
        <button onClick={() => this.filter({page: page + 1}, addr, searchQuery)}>NEXT</button>
      </div>
    );
  }
}

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  addr: PropTypes.string.isRequired,
  searchQuery: PropTypes.object.isRequired
}

export default Pagination;
