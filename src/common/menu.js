import { isUrl } from '../utils/utils';

const menuData = [{
  name: 'dashboard',
  icon: 'dashboard',
  path: 'dashboard',
  children: [{
    name: '分析页',
    path: 'analysis',
  }, {
    name: '监控页',
    path: 'monitor',
  }, {
    name: '工作台',
    path: 'workplace',
    // hideInMenu: true,   隐藏该条
  }, {
    name: '测试页',
    path: 'test',
  }],
}, {
  name: '表单页',
  icon: 'form',
  path: 'form',
  children: [{
    name: '基础表单',
    path: 'basic-form',
  }, {
    name: '分步表单',
    path: 'step-form',
  }, {
    name: '高级表单',
    authority: 'admin',
    path: 'advanced-form',
  }],
}, {
  name: '列表页',
  icon: 'table',
  path: 'list',
  children: [{
    name: '查询表格',
    path: 'table-list',
  }, {
    name: '标准列表',
    path: 'basic-list',
  }, {
    name: '卡片列表',
    path: 'card-list',
  }, {
    name: '搜索列表',
    path: 'search',
    children: [{
      name: '搜索列表（文章）',
      path: 'articles',
    }, {
      name: '搜索列表（项目）',
      path: 'projects',
    }, {
      name: '搜索列表（应用）',
      path: 'applications',
    }],
  }],
}, {
  name: '详情页',
  icon: 'profile',
  path: 'profile',
  children: [{
    name: '基础详情页',
    path: 'basic',
  }, {
    name: '高级详情页',
    path: 'advanced',
    authority: 'admin',
  }],
}, {
  name: '结果页',
  icon: 'check-circle-o',
  path: 'result',
  children: [{
    name: '成功',
    path: 'success',
  }, {
    name: '失败',
    path: 'fail',
  }],
}, {
  name: '异常页',
  icon: 'warning',
  path: 'exception',
  children: [{
    name: '403',
    path: '403',
  }, {
    name: '404',
    path: '404',
  }, {
    name: '500',
    path: '500',
  }, {
    name: '触发异常',
    path: 'trigger',
    hideInMenu: true,
  }],
},
{
  name: '权限管理',
  icon: 'check-circle-o',
  path: 'Jurisdiction',
},
{
  name: '测试',
  icon: 'check-circle-o',
  path: 'ceshi',
},
{
  name: 'test',
  icon: 'warning',
  path: 'test',
  children: [{
    name: 'test',
    path: 'test',
  },
  {
    name: '触发异常',
    path: 'trigger',
    hideInMenu: true,
  }],
},
{
  name: '路由',
  icon: 'user',
  path: 'router',
  children: [{
    name: 'new1',
    path: 'new1',
  }, {
    name: 'list2',
    path: 'new2',
  }],
},
{
  name: '外部组件测试',
  icon: 'clock-circle',
  path: 'quill',
},
{
  name: '制表',
  icon: 'clock-circle',
  path: 'table',
  children: [{
    name: '列表1',
    path: 'list1',
  },
  {
    name: '列表2',
    path: 'list2',
  },
  {
    name: '列表3',
    path: 'list3',
  }],
},
{
  name: '发送图片',
  icon: 'user',
  path: 'image',
  children: [
    {
      name: 'list1',
      path: 'upLoad',
    },
    {
      name: 'list2',
      path: 'remove',
    },
    {
      name: 'list3',
      path: 'Preview',
    },
  ],
},
{
  name: '病例',
  icon: 'user',
  path: 'case',
  children: [
    {
      name: 'list4',
      path: 'list4',
    },
    {
      name: 'list5',
      path: 'list5',
    },
  ],
},
{
  name: '账户',
  icon: 'user',
  path: 'user',
  authority: 'guest',
  children: [{
    name: '登录',
    path: 'login',
  }, {
    name: '注册',
    path: 'register',
  }, {
    name: '注册结果',
    path: 'register-result',
  }],
},
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
