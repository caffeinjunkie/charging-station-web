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
      value: "07:00 AM"
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
