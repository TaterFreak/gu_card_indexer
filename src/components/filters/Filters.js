import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import {RARITIES, QUALITIES, TYPES, TRIBES} from '../../../config/constants';
import styles from './filters.scss'

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: [],
      addr: ''
    }
  }

  componentDidMount() {
    this.setState({
      addr: this.props.addr
    })
  }

  filter(params, addr) {
    if (params.hasOwnProperty('rarity')) {
      if (-1 === Object.values(this.state.toggled).indexOf(params.rarity)) {
        this.setState({
          toggled: params
        })
      }
    }

    if (params.hasOwnProperty('quality')) {
      if (-1 === Object.values(this.state.toggled).indexOf(params.quality)) {
        this.setState({
          toggled: params
        })
      }
    }

    if (params.hasOwnProperty('type')) {
      if (-1 === Object.values(this.state.toggled).indexOf(params.type)) {
        this.setState({
          toggled: params
        })
      }
    }

    if (params.hasOwnProperty('tribe')) {
      if (-1 === Object.values(this.state.toggled).indexOf(params.tribe)) {
        this.setState({
          toggled: params
        })
      }
    }

    let query = {}
    Object.assign(query, params);
    Object.assign(query, {addr: addr});

    Router.push({
      pathname: '/user',
      query: query
    });
  }

  render() {
    const {addr} = this.props
    return (
      <div>
          <button onClick={() => this.filter({'': ''}, addr)}>clear</button>
        <hr />
        {RARITIES.map((rarity, index) =>
            <button onClick={() => this.filter({rarity: rarity}, addr)} key={index} className={Object.values(this.state.toggled).indexOf(rarity) != -1 ? 'toggled' : ''}>{rarity}</button>
        )}
        <hr />
        {QUALITIES.map((quality, index) =>
            <button onClick={() => this.filter({quality: quality}, addr)} key={index} className={Object.values(this.state.toggled).indexOf(quality) != -1 ? 'toggled' : ''}>{quality}</button>
        )}
        <hr />
        {TYPES.map((type, index) =>
            <button onClick={() => this.filter({type: type}, addr)} key={index} className={Object.values(this.state.toggled).indexOf(type) != -1 ? 'toggled' : ''}>{type}</button>
        )}
        <hr />
        {TRIBES.map((tribe, index) =>
            <button onClick={() => this.filter({tribe: tribe}, addr)} key={index} className={Object.values(this.state.toggled).indexOf(tribe) != -1 ? 'toggled' : ''}>{tribe}</button>
        )}
        <style jsx>{styles}</style>
      </div>
    );
  }
}

Filters.propTypes = {
  onUpdateFilter: PropTypes.func.isRequired,
  addr: PropTypes.string.isRequired
}

export default Filters;
