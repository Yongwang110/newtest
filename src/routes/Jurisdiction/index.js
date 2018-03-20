import React, { PureComponent } from 'react';
import { Tree, Button } from 'antd';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './index.less';

const { TreeNode } = Tree;

const arr = { stateKey: [] };
@connect(({ profile }) => ({
  profile,
}))
export default class Test extends PureComponent {
  state = {
    treeData: [{
      title: '权限一',
      key: '1',
      children: [{
        title: 'list1',
        key: '1-1',
      },
      {
        title: 'list2',
        key: '1-2',
      },
      ],
    },
    {
      title: '权限二',
      key: '2',
      children: [{
        title: 'list2',
        key: '2-1',
      },
      {
        title: 'list2',
        key: '2-2',
      },
      ],
    },
    {
      title: '权限三',
      key: '3',
      children: [{
        title: 'list1',
        key: '3-1',
      },
      {
        title: 'list2',
        key: '3-2',
      },
      ],
    },
    {
      title: '权限四',
      key: '4',
      children: [{
        title: 'list1',
        key: '4-1',
      },
      {
        title: 'list2',
        key: '4-2',
      },
      ],
    },
    ],
  };
  componentDidMount() {
    this.props.dispatch(
      {
        type: 'profile/tst',
      }
    );
  }
  submintBtn = () => {
    console.log(arr);
  }
  click = (key) => {
    arr.stateKey = key;
  }
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode
            className={styles.list}
            title={item.title}
            key={item.key}
            dataRef={item}
          >
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />;
    });
  }
  render() {
    const { getTest } = this.props.profile;
    return (
      <PageHeaderLayout >
        <div className={styles.head} >
          <Tree
            checkable
            isLeaf
            onSelect={this.onSelect}
            onCheck={this.click}
            defaultExpandAll
            defaultCheckedKeys={getTest}
          >
            {this.renderTreeNodes(this.state.treeData)}
          </Tree>
          <div className={styles.center}>
            <Button onClick={() => { this.submintBtn(); }} type="primary" > 提交 </Button>
          </div >

        </div >
      </PageHeaderLayout >
    );
  }
}
