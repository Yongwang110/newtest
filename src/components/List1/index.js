import React, { PureComponent } from 'react';
import { Tree, Button } from 'antd';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
const TreeNode = Tree.TreeNode;
let arr = [];
@connect(({ profile }) => ({
  profile
}))
export default class Test extends PureComponent {
  click(ev) {
    arr = ev
  }
  componentDidMount() { //结构完成 数据未加载时，钩子函数
    this.props.dispatch({
      type: 'profile/tst',//dva的一种请求数据的方式
    });
    console.log(this.props)
  }
  del(ev) {
    console.log(arr)
  }
  render() {
    const { getTest } = this.props.profile;
    return (
      <PageHeaderLayout>
        <div>
          <Tree
            checkable
            isLeaf
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            onSelect={this.onSelect}
            onCheck={this.onCheck,this.click}
            defaultExpandAll
            defaultCheckedKeys={getTest}
          >
            <TreeNode title="parent 1" key="0-0">
              <TreeNode title="parent 1-0" key="0-0-0"/>
              <TreeNode title="parent 1-1" key="0-0-1"/>
            </TreeNode>
          </Tree>
          <Button onClick={(ev) => { this.del(ev) }} type="primary">Primary</Button>
        </div >
      </PageHeaderLayout >
    )
  }

}
