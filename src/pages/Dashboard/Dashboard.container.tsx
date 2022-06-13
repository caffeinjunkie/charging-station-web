import withPage from '../../composers/withPage/withPage';
import Dashboard from './Dashboard.component';
import dashboardHandlers from './Dashboard.container.handlers';

export default withPage({
  handlers: dashboardHandlers
})(Dashboard);
