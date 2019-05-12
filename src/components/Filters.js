import React from 'react';
import Link from 'next/link';
import {RARITIES, QUALITIES, TYPES, TRIBES} from '../../config/constants';
import styles from './filters.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: []
    }
  }

  filter(params) {
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
    return this.props.onUpdateFilter(params)
  }

  render() {
    return (
      <div>
        <Link href="/">
          <button onClick={() => this.filter({'': ''})}>clear</button>
        </Link>
        <hr />
        {RARITIES.map((rarity, index) =>
          <Link href={{ pathname: '/user', query: {rarity: rarity} }} key={index}>
            <button onClick={() => this.filter({rarity: rarity})} className={Object.values(this.state.toggled).indexOf(rarity) != -1 ? 'toggled' : ''}>{rarity}</button>
          </Link>
        )}
        <hr />
        {QUALITIES.map((quality, index) =>
          <Link href={{ pathname: '/user', query: {quality: quality} }} key={index}>
            <button onClick={() => this.filter({quality: quality})} className={Object.values(this.state.toggled).indexOf(quality) != -1 ? 'toggled' : ''}>{quality}</button>
          </Link>
        )}
        <hr />
        {TYPES.map((type, index) =>
          <Link href={{ pathname: '/user', query: {type: type} }} key={index}>
            <button onClick={() => this.filter({type: type})} className={Object.values(this.state.toggled).indexOf(type) != -1 ? 'toggled' : ''}>{type}</button>
          </Link>
        )}
        <hr />
        {TRIBES.map((tribe, index) =>
          <Link href={{ pathname: '/user', query: {tribe: tribe} }} key={index}>
            <button onClick={() => this.filter({tribe: tribe})} className={Object.values(this.state.toggled).indexOf(tribe) != -1 ? 'toggled' : ''}>{tribe}</button>
          </Link>
        )}
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default App;
