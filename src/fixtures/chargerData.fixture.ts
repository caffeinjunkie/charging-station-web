export const hpc = {
  id: '1',
  attributes: {
    type: 'HPC'
  }
}

export const t52 = {
  id: '2',
  attributes: {
    type: 'T52'
  }
}

export const chargersPayload = [
  {
    id: "1",
    name: "HPC"
  }
]

export const saveChargerPayload = {
  type: "HPC",
  serialNumber: "2929114",
  status: "CONNECTED"
}

export const editChargerPayload = {
  id: "1",
  type: "HPC",
  serialNumber: "2929114",
  status: "CONNECTED"
}

export const charger1 = {
  id: "1",
  type: "HPC",
  serialNumber: "2929114",
  status: "REMOVED",
  updatedAt: "2020-08-08"
}

export const charger2 = {
  id: "2",
    type: "T53C",
  serialNumber: "8080BB",
  status: "NOT_CONNECTED",
  updatedAt: "2020-08-08"
}
