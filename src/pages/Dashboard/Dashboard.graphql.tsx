import { gql } from 'graphql-request';

const LocationsQuery = gql`
  query GetLocations($pagination: PaginationArg!, $sort: [String]) {
    locations(pagination: $pagination, sort: $sort) {
      meta {
        pagination {
          page
          total
          pageCount
        }
      }
      data {
        id
        attributes {
          name
          updatedAt
          locationNo
          postalCode
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
    }
  }
`;

export default {
  LocationsQuery
}
