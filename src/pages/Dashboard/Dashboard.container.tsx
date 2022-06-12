import withPage from '../../composers/withPage/withPage';
import Dashboard from './Dashboard.component';
import dashboardHandlers from './Dashboard.container.handlers';
import graphql from './Dashboard.graphql';

const { LocationsQuery } = graphql;

export default withPage({
  handlers: dashboardHandlers,
  graphql: [
    {
      query: LocationsQuery
    }
  ]
})(Dashboard);
