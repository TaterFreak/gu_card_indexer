import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';

import SimpleButton from '../buttons/SimpleButton';

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
        <SimpleButton event={() => this.filter({"": ""}, addr)} content="ALL" />
        <div className="filter__cell">
          {RARITIES.map((rarity, index) =>
            <SimpleButton event={() => this.filter({rarity: rarity}, addr)} toggle={Object.values(this.state.toggled).indexOf(rarity) != -1 ? 'toggled' : ''} content={rarity} />
          )}
        </div>
        <div className="filter__cell">
        {QUALITIES.map((quality, index) =>
          <SimpleButton event={() => this.filter({quality: quality}, addr)} toggle={Object.values(this.state.toggled).indexOf(quality) != -1 ? 'toggled' : ''} content={quality} />
        )}
        </div>
        <div className="filter__cell">
        {TYPES.map((type, index) =>
          <SimpleButton event={() => this.filter({type: type}, addr)} toggle={Object.values(this.state.toggled).indexOf(type) != -1 ? 'toggled' : ''} content={type} />
        )}
        </div>
        <div className="filter__cell">
        {TRIBES.map((tribe, index) =>
          <SimpleButton event={() => this.filter({tribe: tribe}, addr)} toggle={Object.values(this.state.toggled).indexOf(tribe) != -1 ? 'toggled' : ''} content={tribe} />
        )}
        </div>
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
