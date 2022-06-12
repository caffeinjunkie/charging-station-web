import withPage from '../../composers/withPage/withPage';
import Dashboard from './Dashboard.component';
import dashboardHandlers from './Dashboard.container.handlers';
import graphql from './Dashboard.graphql';
import config from './Dashboard.config';

const { LocationsQuery } = graphql;
const { DefaultFetchVariables } = config;

const locationsQueryOptions = {
  queryKey: 'locations',
  ...DefaultFetchVariables
}

export default withPage({
  handlers: dashboardHandlers,
  graphql: [
    {
      query: LocationsQuery,
      options: locationsQueryOptions
    }
  ]
})(Dashboard);
