// models
import acessibilityOptionQuery from './acessibilityOption.query';
import categoryOptionQuery from './categoryOption.query';
import musicalStyleOptionQuery from './musicalStyleOption.query';
import spaceCapacityOptionQuery from './spaceCapacityOption.query';
// entities
import productorQuery from './productor.query';
import artistQuery from './artist.query';
import userQuery from './user.query';
import eventQuery from './event.query';
import songQuery from './song.query';
import countryQuery from './country.query';
import cityQuery from './city.query';
import stateQuery from './state.query';

export default `
  type Query {
    ${acessibilityOptionQuery}
    ${categoryOptionQuery}
    ${musicalStyleOptionQuery}
    ${spaceCapacityOptionQuery}
    ${countryQuery}
    ${cityQuery}
    ${stateQuery}
    
    ${productorQuery}
    ${artistQuery}
    ${userQuery}
    ${eventQuery}
    ${songQuery}
  }
`;
