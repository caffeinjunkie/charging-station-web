const chargers = {
  data: ['1', '2']
}

const country = {
  data: {
    id: 1,
    attributes: {
      countryAbbreviation: 'NLD',
      countryName: 'Netherland'
    }
  }
}

export const locationMockData = {
  locationNo: 53323,
  name: 'MockLocation',
  updatedAt: '2022-12-14',
  chargers,
  country
};

export const locationData = {
  id: "1",
  attributes: {
    name: "Blvd 2",
    locationNo: "122314",
    postalCode: "144BB",
    city: "City",
    country: {
      data: {
        id: "1",
        attributes: {
          countryName: "Country Name"
        }
      }
    },
    chargers:{
      data: [
        {
          id: "1",
          attributes: {
            type: "Type"
          }
        }
      ]
    }
  }
}

export const mappedLocationData =  [{
    actions: {
      className: "align-right",
      value: ''
    },
    chargers: {
      className: "align-center",
      value: 2
    },
    country: {
      className: "align-center",
      value: "NLD"
    },
    lastUpdated: {
      className: "align-center",
      value: "07.00"
    },
    locationName: {
      className: "align-left",
      value: "MockLocation"
    },
    locationNo: {
      className: "align-left",
      value: 53323
    }
  }
]
