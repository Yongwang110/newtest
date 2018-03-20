import '@babel/polyfill';
import 'url-polyfill';
import dva from 'dva';

import createHistory from 'history/createHashHistory';
// user BrowserHistory
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
import FastClick from 'fastclick';
import './rollbar';

import './index.less';
// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins插件
app.use(createLoading());

// 3. Register global model 全局模块
app.model(require('./models/global').default);

// 4. Router 路由
app.router(require('./router').default);

// 5. Start 运行
app.start('#root');


FastClick.attach(document.body);

export default app._store;  // eslint-disable-line
