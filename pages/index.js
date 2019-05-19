import React from 'react';
import Search from '../src/components/search/Search';
import Meta from '../src/components/meta/Meta';
import Web3 from 'web3';
import Router from 'next/router';

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546', null, {});

async function init() {
  // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
        } catch (error) {
            console.log(error)
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
    };
  }

  componentDidMount() {
    init();
  }

  connect() {
    let addr = ethereum.selectedAddress;
    Router.push({
      pathname: '/user',
      query: { addr: addr }
    });
  }

  render() {
    const { error, loading } = this.state;
    const { address } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <button onClick={this.connect}>USE METAMASK</button>
          <Meta />
          <Search />
        </div>
      );
    }
  }
}

export default Index;
