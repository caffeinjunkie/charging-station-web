import React from 'react';

import { CountryDataType, ChargerTypeDataType, Props } from './AddLocation.type';
import { StyledContainer } from './AddLocation.styles';

const AddLocation = (props: Props) => {
  const { mapCountries, mapChargerTypes } = props;
  return (
    <StyledContainer>
      {mapCountries().map((country: CountryDataType) => <div>{country.attributes.countryName}</div>)}
      {mapChargerTypes().map((chargerType: ChargerTypeDataType) => <div>{chargerType.attributes.type}</div>)}
    </StyledContainer>
  )
}

export default AddLocation;
