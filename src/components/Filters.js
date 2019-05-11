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
      if (-1 === Object.values(this.state.toggled).indexOf(params.rarity)) {
        this.setState({
          toggled: params
        })
        //this.state.toggled.push(params.rarity)
      } else {
        const index = Object.values(this.state.toggled).indexOf(params.rarity)
        this.setState({
          toggled: {}
        })
      }
    }

    if (params.hasOwnProperty('quality')) {
      if (-1 === Object.values(this.state.toggled).indexOf(params.quality)) {
        this.setState({
          toggled: params
        })
        //this.state.toggled.push(params.rarity)
      } else {
        const index = Object.values(this.state.toggled).indexOf(params.quality)
        this.setState({
          toggled: {}
        })
      }

      if (params.hasOwnProperty('type')) {
        if (-1 === Object.values(this.state.toggled).indexOf(params.type)) {
          this.setState({
            toggled: params
          })
          //this.state.toggled.push(params.rarity)
        } else {
          const index = Object.values(this.state.toggled).indexOf(params.type)
          this.setState({
            toggled: {}
          })
        }
      }

      if (params.hasOwnProperty('tribe')) {
        if (-1 === Object.values(this.state.toggled).indexOf(params.tribe)) {
          this.setState({
            toggled: params
          })
          //this.state.toggled.push(params.rarity)
        } else {
          const index = Object.values(this.state.toggled).indexOf(params.tribe)
          this.setState({
            toggled: {}
          })
        }
      }
    }

    return this.props.onUpdateFilter(params)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <button onClick={() => this.filter({'': ''})}>clear</button>
        <hr />
        {RARITIES.map((rarity, index) =>
          <button onClick={() => this.filter({rarity: rarity})} className={Object.values(this.state.toggled).indexOf(rarity) != -1 ? 'toggled' : ''}>{rarity}</button>
        )}
        <hr />
        {QUALITIES.map((quality, index) =>
          <button onClick={() => this.filter({quality: quality})} className={Object.values(this.state.toggled).indexOf(quality) != -1 ? 'toggled' : ''}>{quality}</button>
        )}
        <hr />
        {TYPES.map((type, index) =>
          <button onClick={() => this.filter({type: type})} className={Object.values(this.state.toggled).indexOf(type) != -1 ? 'toggled' : ''}>{type}</button>
        )}
        <hr />
        {TRIBES.map((tribe, index) =>
          <button onClick={() => this.filter({tribe: tribe})} className={Object.values(this.state.toggled).indexOf(tribe) != -1 ? 'toggled' : ''}>{tribe}</button>
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
