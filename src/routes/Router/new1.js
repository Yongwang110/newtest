import React, { PureComponent } from 'react';
import { Route, Switch } from 'dva/router';
import NotFound from '../Exception/404';
import NotFound1 from '../Exception/403';

export default class Test extends PureComponent {
  render() {
    return (
      <Switch>
        <Route render={(props) => {
            if (/^[1-9]\d*$/.test(props.match.params.id)) {
              return <NotFound />;
            }
            return <NotFound1 />;
          }}
        />
      </Switch>
    );
  }
}
