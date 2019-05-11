import React from 'react';
import Layout from '../src/components/Layout';
import Card from '../src/components/Card';
import Pagination from '../src/components/Pagination';
import Filters from '../src/components/Filters';
import Search from '../src/components/Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleFilters = this.handleFilters.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getCardsOfUser()
  }

  getCardsOfUser(params) {
    const user = '0x682d283Ab86e2655e30273B14C637a253B81BeD3';
    let url = new URL(`https://api.godsunchained.com/v0/user/${user}/inventory`);

    if (params !== undefined) {
      new URL(`https://api.godsunchained.com/v0/user/${user}/inventory`);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    }

    fetch(url)
      .then(res => res.json())
      .then(
        (inventory) => {
          this.setState({
            isLoaded: true,
            address: inventory,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleSearch(user, inventory) {
    this.setState({address: inventory, user: user});
  }

  handlePageChange(inventory) {
    this.setState({address: inventory});
  }

  handleFilters(params) {
    this.getCardsOfUser(params)
  }

  render() {
    const { error, isLoaded, address } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Search onSearch={this.handleSearch}/>
          <Filters onUpdateFilter={this.handleFilters}/>
          <Pagination onPageChange={this.handlePageChange} page={address.page}/>
          <div>
            {address.records != null &&
              <Layout>
                {address.records.map((card, index) =>
                  <Card card={card} key={index}/>
                )}
              </Layout>
            }
          </div>
        </div>
      );
    }
  }
}

export default App;
