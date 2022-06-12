import withPage from '../../composers/withPage/withPage';
import Dashboard from './Dashboard.component';
import dashboardHandlers from './Dashboard.container.handlers';
import graphql from './Dashboard.graphql';

const { LocationsQuery } = graphql;

const locationsQueryOptions = {
  queryKey: 'locations',
  pagination: {
    page: 1,
    pageSize: 3
  },
  sort: ["name:ASC"]
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
