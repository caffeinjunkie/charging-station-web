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
          chargers {
            data {
              id
            }
          }
          country {
            data {
              attributes {
                countryAbbreviation
              }
            }
          }
        }
      }
    }
  }
`;

const BulkEditLocationQueries = gql`
  query ($id: ID!) {
    location(id: $id) {
      data {
        id
        attributes {
          name
          locationNo
          postalCode
          city
          chargers {
            data {
              id
              attributes {
                type
                status
                serialNumber
                updatedAt
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
  CountriesAndChargerTypesQuery,
  BulkEditLocationQueries
}
