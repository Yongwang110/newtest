import React, { PureComponent } from 'react';
import { Table, Button } from 'antd';
import { connect } from 'dva';
import styles from './list2.less';

const data1 = [];
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  // if (index === 4) { // 整行隐藏
  //   obj.props.colSpan = 0;
  // }
  return obj;
};
@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))

export default class table2 extends PureComponent {
  // componentDidMount() {
  //   this.props.dispatch({
  //     type: 'list/test',
  //     payload: {
  //     },
  //   });
  // }
  componentDidMount() {
    fetch('http://10.0.0.250/api/index')
      .then(response => response.json())
      .then(({ data }) => {
        for (let i = 0; i < data.length; i += 1) {
          data1[i] = {};
          data1[i].key = i;
          data1[i].Gender = data[i][0];
          data1[i].project = data[i][1];
          data1[i].Abbreviation = data[i][2];
          data1[i].Result = data[i][3];
          data1[i].reference = data[i][4];
          data1[i].Company = data[i][5];
        }
        console.log(data1);
      });
  }
  columns = [
    {
      title: '检验项目hidden',
      dataIndex: 'Gender',
      colSpan: 0,
      render: (text, row, index) => {
        const obj = {
          children: text,
          props: {},
        };
        if (index === 2) { // 该头部下的列  是否合并
          obj.props.rowSpan = 9;
        }
        if (index === 12) { // 该头部下的列  是否合并
          obj.props.rowSpan = 9;
        }
        // These two are merged into above cell
        if (
          index === 3 ||
          index === 4 ||
          index === 5 ||
          index === 6 ||
          index === 7 ||
          index === 8 ||
          index === 9 ||
          index === 10 ||
          index === 13 ||
          index === 14 ||
          index === 15 ||
          index === 16 ||
          index === 17 ||
          index === 18 ||
          index === 19 ||
          index === 20) {
          obj.props.rowSpan = 0;
        }
        return obj;
      },
    }, {
      title: '检验项目',
      colSpan: 2,
      dataIndex: 'project',
      render: renderContent,
    }, {
      title: '缩写',
      dataIndex: 'Abbreviation',
      render: renderContent,
    }, {
      title: '结果',
      dataIndex: 'Result',
      render: renderContent,
    }, {
      title: '参考值',
      dataIndex: 'reference',
      render: renderContent,
    }, {
      title: '单位',
      dataIndex: 'Company',
      render: renderContent,
    }];
  render() {
    return (
      <div className={styles.content}>
        <Table
          columns={this.columns}
          dataSource={data1}
          pagination={{ pageSize: 50 }}
          bordered

        />
        <Button onClick={this.click}>提交</Button>
      </div>
    );
  }
}
