import React from 'react';
import Router from 'next/router';

import {RARITIES, QUALITIES, TYPES, TRIBES} from '../../../config/constants';
import styles from './filters.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: []
    }
  }

  componentDidMount() {
    this.setState({
      toggled: this.props.query
    })
  }

  filter(params, query) {
    console.log(query)
    console.log(params)

    let toto = {}
    Object.keys(params).forEach(key => {
      if (!query.hasOwnProperty(key)) {
        console.log('query does not have property ' + key + ' of params')
        Object.assign(toto, params);
      }
    })

    console.log(toto)

    //_______________________________________________________________________________


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

    Router.push({
      pathname: '/user',
      query: params
    });
  }

  render() {
    return (
      <div>
          <button onClick={() => this.filter({'': ''})}>clear</button>
        <hr />
        {RARITIES.map((rarity, index) =>
            <button onClick={() => this.filter({rarity: rarity}, this.props.query)} className={Object.values(this.state.toggled).indexOf(rarity) != -1 ? 'toggled' : ''}>{rarity}</button>
        )}
        <hr />
        {QUALITIES.map((quality, index) =>
            <button onClick={() => this.filter({quality: quality}, this.props.query)} className={Object.values(this.state.toggled).indexOf(quality) != -1 ? 'toggled' : ''}>{quality}</button>
        )}
        <hr />
        {TYPES.map((type, index) =>
            <button onClick={() => this.filter({type: type}, this.props.query)} className={Object.values(this.state.toggled).indexOf(type) != -1 ? 'toggled' : ''}>{type}</button>
        )}
        <hr />
        {TRIBES.map((tribe, index) =>
            <button onClick={() => this.filter({tribe: tribe}, this.props.query)} className={Object.values(this.state.toggled).indexOf(tribe) != -1 ? 'toggled' : ''}>{tribe}</button>
        )}
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default App;
