import React from 'react';

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

  buildCardUrl(card) {
    const baseUrl = 'https://images.godsunchained.com/cards/250/';
    const cardId = card.id.Int64
    const purity = this.purityMapper(card.purity)
    const format = '.webp'

    let baseCardUrl = baseUrl + cardId + format;

    if (purity !== undefined) {
      baseCardUrl = baseUrl + cardId + '-' + purity + format;
    }

    return baseCardUrl
  }

  render() {
    return (
      <figure>
        <div className="card">
            <img src={this.buildCardUrl(this.props.card)} alt=""/>
        </div>
      </figure>
    );
  }
}

export default Card;
