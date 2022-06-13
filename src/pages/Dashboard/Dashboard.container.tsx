import withPage from '../../composers/withPage/withPage';
import Dashboard from './Dashboard.component';
import dashboardHandlers from './Dashboard.container.handlers';
import gql from './Dashboard.graphql';
import config from './Dashboard.config';

export default withPage({
  handlers: dashboardHandlers,
  graphql: [
    {
      query: gql.LocationsQuery,
      options: config.DefaultFetchVariables
    }
  ]
})(Dashboard);
