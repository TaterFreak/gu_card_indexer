import React from 'react';
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
      if (-1 === this.state.toggled.indexOf(params.rarity)) {
        this.state.toggled.push(params.rarity)
      } else {
        const index = this.state.toggled.indexOf(params.rarity)
        this.state.toggled.splice(index, 1)
      }
    }

    if (params.hasOwnProperty('quality')) {
      if (-1 === this.state.toggled.indexOf(params.quality)) {
        this.state.toggled.push(params.quality)
      } else {
        const index = this.state.toggled.indexOf(params.quality)
        this.state.toggled.splice(index, 1)
      }
    }

    if (params.hasOwnProperty('type')) {
      if (-1 === this.state.toggled.indexOf(params.type)) {
        this.state.toggled.push(params.type)
      } else {
        const index = this.state.toggled.indexOf(params.type)
        this.state.toggled.splice(index, 1)
      }
    }

    if (params.hasOwnProperty('tribe')) {
      if (-1 === this.state.toggled.indexOf(params.tribe)) {
        this.state.toggled.push(params.tribe)
      } else {
        const index = this.state.toggled.indexOf(params.tribe)
        this.state.toggled.splice(index, 1)
      }
    }

    return this.props.onUpdateFilter(params)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.filter({'': ''})}>clear</button>
        <hr />
        {RARITIES.map((rarity, index) =>
          <button onClick={() => this.filter({rarity: rarity})} className={this.state.toggled.indexOf(rarity) != -1 ? 'toggled' : ''}>{rarity}</button>
        )}
        <hr />
        {QUALITIES.map((quality, index) =>
          <button onClick={() => this.filter({quality: quality})} className={this.state.toggled.indexOf(quality) != -1 ? 'toggled' : ''}>{quality}</button>
        )}
        <hr />
        {TYPES.map((type, index) =>
          <button onClick={() => this.filter({type: type})} className={this.state.toggled.indexOf(type) != -1 ? 'toggled' : ''}>{type}</button>
        )}
        <hr />
        {TRIBES.map((tribe, index) =>
          <button onClick={() => this.filter({tribe: tribe})} className={this.state.toggled.indexOf(tribe) != -1 ? 'toggled' : ''}>{tribe}</button>
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
