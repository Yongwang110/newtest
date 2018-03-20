import React, { PureComponent } from 'react';
import { Tree, Button } from 'antd';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';
import PageHeaderLayout from '../layouts/PageHeaderLayout';
const TreeNode = Tree.TreeNode;
let arr = [];
@connect(({ profile, loading }) => ({
  profile,
  loading: loading.effects['profile/fetchBasic'],
}))
export default class ceshi extends PureComponent {
  componentDidMount() {
    console.log(this)
    this.props.dispatch({
      type: 'profile/fetchBasic',//dva的一种请求数据的方式
    })
  }
  render() {
    return (
      <PageHeaderLayout>
        <div>
          <Tree
            checkable
            isLeaf
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            onSelect={this.onSelect}
            onCheck={this.onCheck}
            defaultExpandAll
          >
            <TreeNode
            title="权限一" key="1">
              <TreeNode title="parent 1-1" key="1-1"/>
              <TreeNode title="parent 1-2" key="1-2"/>
            </TreeNode>
            <TreeNode
             title="权限二" key="2">
              <TreeNode title="parent 2-1" key="2-1"/>
              <TreeNode title="parent 2-2" key="2-2"/>
            </TreeNode>
            <TreeNode
             title="权限三" key="3">
              <TreeNode title="parent 3-1" key="3-1"/>
              <TreeNode title="parent 3-2" key="3-2"/>
            </TreeNode>
            <TreeNode
             title="权限四" key="4">
              <TreeNode title="parent 4-1" key="4-1"/>
              <TreeNode title="parent 4-2" key="4-2"/>
            </TreeNode>
            <TreeNode
             title="权限五" key="5">
              <TreeNode title="parent 5-1" key="5-1"/>
              <TreeNode title="parent 5-2" key="5-2"/>
            </TreeNode>
          </Tree>
          <div
          >
          <Button

          type="primary">提交</Button>
          </div>

        </div >
      </PageHeaderLayout >
    )
  }

}

