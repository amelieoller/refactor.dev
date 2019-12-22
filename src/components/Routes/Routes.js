import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NewProject from '../NewProject';
import Home from '../../containers/Home';
import EditProject from '../EditProject';
import withUser from '../withUser';
import Login from '../Login';
import routes from '../../constants/routes';
import UserPortfolio from '../../containers/UserPortfolio';
import App from '../../containers/App';

class Routes extends Component {
  render() {
    const { user } = this.props;

    return (
      <App>
        {user ? (
          <Switch>
            <Route path={routes.NEW_PROJECT} component={NewProject} />
            <Route path={routes.EDIT_PROJECT} exact component={EditProject} />
            <Route path={routes.USER} component={UserPortfolio} />
            <Route path={routes.HOME} component={Home} />
            <Redirect to={routes.HOME} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path={routes.HOME} component={Login} />
            <Route path={routes.USER} component={UserPortfolio} />
            <Redirect to={routes.HOME} />
          </Switch>
        )}
      </App>
    );
  }
}

export default withUser(Routes);
