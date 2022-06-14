import withPage from '../../composers/withPage/withPage';
import AddLocation from './AddLocation.component';
import addLocationHandlers from './AddLocation.container.handlers';
import Queries from '../../graphqls/Queries';
import Paths from '../../root/RootNavigation/Paths';

export default withPage({
  handlers: addLocationHandlers,
  graphql: [
    {
      query: Queries.CountriesAndChargerTypesQuery,
      options: {
        queryKey: 'countriesAndChargerTypesQuery'
      }
    }
  ],
  withBackButton: {
    redirectPath: Paths.Dashboard
  }
})(AddLocation);
