import withPage from '../../composers/withPage/withPage';
import EditLocation from './EditLocation.component';
import editLocationHandlers from './EditLocation.container.handlers';
import Queries from '../../graphqls/Queries';
import Paths from '../../root/RootNavigation/Paths';

export default withPage({
  handlers: editLocationHandlers,
  graphql: [
    {
      query: Queries.BulkEditLocationQueries,
      options: {
        queryKey: 'fetchById'
      }
    }
  ],
  withSubmissionLoading: true,
  withBackButton: {
    redirectPath: Paths.Dashboard
  }
})(EditLocation);
