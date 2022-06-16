import withPage from '../../composers/withPage/withPage';
import EditLocation from './EditLocation.component';
import editLocationHandlers from './EditLocation.container.handlers';
import Queries from '../../graphqls/Queries';

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
  withSubmissionLoading: true
})(EditLocation);
