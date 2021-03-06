type StateOptions = Array<[string, string, any]>;

interface GraphQLOption {
  query?: any,
  options?: any
}

export interface Options {
  props?: any,
  state?: Array<StateOptions>
  handlers?: any,
  snackBar?: boolean
  graphql?: Array<GraphQLOption>
  withSubmissionLoading?: boolean
}
