import { gql } from 'graphql-request';

const LocationsQuery = gql`
  query GetLocations {
    locations {
      data {
        id
        attributes {
          name
          locationNo
          chargers {
            data {
              id
              attributes {
                type
                status
                serialNumber
              }
            }
          }
          country {
            data {
              id
              attributes {
                countryAbbreviation
                countryName
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

export default {
  LocationsQuery
}
