import React from 'react';
import Link from 'next/link';
import {RARITIES, QUALITIES, TYPES, TRIBES} from '../../config/constants';

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
          <Link href={{ pathname: '/', query: {rarity: rarity} }}>
            <button onClick={() => this.filter({rarity: rarity})} className={Object.values(this.state.toggled).indexOf(rarity) != -1 ? 'toggled' : ''}>{rarity}</button>
          </Link>
        )}
        <hr />
        {QUALITIES.map((quality, index) =>
          <Link href={{ pathname: '/', query: {quality: quality} }}>
            <button onClick={() => this.filter({quality: quality})} className={Object.values(this.state.toggled).indexOf(quality) != -1 ? 'toggled' : ''}>{quality}</button>
          </Link>
        )}
        <hr />
        {TYPES.map((type, index) =>
          <Link href={{ pathname: '/', query: {type: type} }}>
            <button onClick={() => this.filter({type: type})} className={Object.values(this.state.toggled).indexOf(type) != -1 ? 'toggled' : ''}>{type}</button>
          </Link>
        )}
        <hr />
        {TRIBES.map((tribe, index) =>
          <Link href={{ pathname: '/', query: {tribe: tribe} }}>
            <button onClick={() => this.filter({tribe: tribe})} className={Object.values(this.state.toggled).indexOf(tribe) != -1 ? 'toggled' : ''}>{tribe}</button>
          </Link>
        )}
        <style jsx>{`
          .toggled {
            background-color: red;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
