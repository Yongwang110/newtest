import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import { getRouterData } from './common/router';
import Authorized from './utils/Authorized';
import styles from './index.less';

const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;
dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin} />;
});

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;//账号页面
  const BasicLayout = routerData['/'].component;//默认页面
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            path="/user"
            component={UserLayout}
          />
          <Route   //测试页面
            path="/test"
            component={UserLayout}
          />
          <AuthorizedRoute
            path="/"
            render={props => <BasicLayout {...props} />}
            authority={['admin', 'user']}//权限
            redirectPath="/user/login"//重定向
          />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
