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

const CountriesAndChargerTypesQuery = gql`
  query {
    chargerTypes {
      data {
        id
        attributes {
          type
        }
      }
    }
    countries {
      data {
        id
        attributes {
          countryName
          countryAbbreviation
        }
      }
    }
  }
`

export default {
  LocationsQuery,
  CountriesAndChargerTypesQuery
}
