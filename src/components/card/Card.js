import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  purityMapper(purity) {
    if (purity > 1000 && purity < 2000) {
      return 'shadow';
    }

    if (purity > 2000 && purity < 3000) {
      return 'gold';
    }

    if (purity > 3000) {
      return 'diamond';
    }
  }

  filterPurity() {
    const cards = this.props.purities;
    let shadow = 0;
    let gold = 0;
    let diamond = 0;
    let plain = 0;
    let total = {};

    for (let card in cards) {
      if (this.purityMapper(cards[card]) === 'shadow') {
        shadow++
      } else if (this.purityMapper(cards[card]) === 'gold') {
        gold++
      } else if (this.purityMapper(cards[card]) === 'diamond') {
        diamond++
      } else {
        plain++
      }
    }

    Object.assign(total, {plain: plain, shadow: shadow, gold: gold, diamond: diamond})
    return total
  }

  buildCardUrl() {
    const baseUrl = 'https://images.godsunchained.com/cards/250/';
    const cardId = this.props.proto
    const purity = this.purityMapper(this.props.purities.slice(-1)[0])
    const format = '.webp'

    let baseCardUrl = baseUrl + cardId + format;

    if (purity !== undefined) {
      baseCardUrl = baseUrl + cardId + '-' + purity + format;
    }

    return baseCardUrl
  }

  render() {
    const purities = this.filterPurity()
    return (
      <figure>
        <div className="card">
            <img src={this.buildCardUrl()} alt=""/>
        </div>
        {Object.keys(purities).map((nb, index) =>
          <span key={index}>
            {nb}: {purities[nb]}|
          </span>
        )}
      </figure>
    );
  }
}

Card.propTypes = {
  proto: PropTypes.string.isRequired,
  purities: PropTypes.array.isRequired,
}

export default Card;
