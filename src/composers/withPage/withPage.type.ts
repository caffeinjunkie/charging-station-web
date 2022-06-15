type StateOptions = Array<[string, string, any]>;

interface GraphQLOption {
  query?: any,
  mutation?: any
  options?: any
}


interface WithBackButtonOption {
  redirectPath: string
}

export interface Options {
  props?: any,
  state?: Array<StateOptions>
  handlers?: any,
  snackBar?: boolean
  graphql?: Array<GraphQLOption>
  withBackButton?: WithBackButtonOption
  withSubmissionLoading?: boolean
}
