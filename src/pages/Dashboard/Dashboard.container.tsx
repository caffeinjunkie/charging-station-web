import withPage from '../../composers/withPage/withPage';
import Dashboard from './Dashboard.component';
import dashboardHandlers from './Dashboard.container.handlers';
import Queries from '../../graphqls/Queries';
import config from './Dashboard.config';

export default withPage({
  handlers: dashboardHandlers,
  graphql: [
    {
      query: Queries.LocationsQuery,
      options: {
        queryKey: 'locationsQuery',
        ...config.DefaultFetchVariables
      }
    }
  ]
})(Dashboard);
