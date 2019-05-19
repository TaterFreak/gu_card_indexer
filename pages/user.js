import React from 'react';
import fetch from 'isomorphic-unfetch';
import Grid from '../src/layouts/grid/Grid';
import Card from '../src/components/card/Card';
import Pagination from '../src/components/pagination/Pagination';
import Filters from '../src/components/filters/Filters';
import { getTotalCards } from '../assets/js/services/cardService';

class User extends React.Component {
  static async getInitialProps(context) {
    const searchQuery = context.query;
    const addr = context.query.addr;

    let page = 1;
    if (context.query.page != undefined) {
      page = context.query.page
    }

    Object.keys(searchQuery).forEach(key => {
      if (key === 'addr') {
        delete searchQuery[key]
      }

      if (key === 'page') {
        delete searchQuery[key]
      }
    });

    let url = `https://api.godsunchained.com/v0/user/${addr}/inventory?format=compressed`;
    if (searchQuery !== undefined) {
      Object.keys(searchQuery).forEach(key => {
        url = `https://api.godsunchained.com/v0/user/${addr}/inventory?${key}=${searchQuery[key]}&format=compressed`
      })
    }

    // let urlCommon = `https://api.godsunchained.com/v0/user/${addr}/inventory?rarity=common`;
    // let urlRare = `https://api.godsunchained.com/v0/user/${addr}/inventory?rarity=rare`;
    // let urlEpic = `https://api.godsunchained.com/v0/user/${addr}/inventory?rarity=epic`;
    // let urlLegendary = `https://api.godsunchained.com/v0/user/${addr}/inventory?rarity=legendary`;

    // const commonRes = fetch(urlCommon)
    //   .then(res => res.json())
    //   .then(json => {
    //     return json
    //   })
    //
    // const rareRes = fetch(urlRare)
    //   .then(res => res.json())
    //   .then(json => {
    //     return json
    //   })
    //
    // const epicRes = fetch(urlEpic)
    //   .then(res => res.json())
    //   .then(json => {
    //     return json
    //   })
    //
    // const legendaryRes = fetch(urlLegendary)
    //   .then(res => res.json())
    //   .then(json => {
    //     return json
    //   })

    const inv = fetch(url)
      .then(res => res.json())
      .then(json => {
        return json
      })

    const inventory = await inv;
    console.log(inventory)
    // const common = await commonRes;
    // const rare = await rareRes;
    // const epic = await epicRes;
    // const legendary = await legendaryRes;

    const common ='';
    const rare =  '';
    const epic =  '';
    const legendary =  '';

    const rarities = {}
    Object.assign(rarities, {common: common, rare: rare, epic: epic, legendary: legendary});

    return {inventory, searchQuery, addr, rarities}
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      rarities: this.props.rarities
    };
  }

  render() {
    const { error } = this.state;
    const { inventory, searchQuery, addr, rarities } = this.props;
    return (
      <div>
        <div>
          total: {rarities.common.total + rarities.rare.total + rarities.epic.total + rarities.legendary.total}
          common: {rarities.common.total} -
          rare: {rarities.rare.total} -
          epic: {rarities.epic.total} -
          legendary: {rarities.legendary.total} -
        </div>
        <Filters addr={addr}/>
        <div>
          {inventory != null &&
            <Grid>
              {Object.keys(inventory).map((card, index) =>
                <Card key={index} proto={card} purities={inventory[card]}/>
              )}
            </Grid>
          }
        </div>
      </div>
    );
  }
}

export default User;
