import React, { PureComponent } from 'react';
import { Table, Button, Card } from 'antd';
import styles from './list.less';

const data = [{
  key: '1',
  name: '总二氧化碳结合力',
  money: 'TCO2',
  address: '22-29',
  Company: 'mmol/L',
  value: 'sdfsfd',
  determine: '',
}, {
  key: '200',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '1234',
  determine: '',
}, {
  key: '3',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
  determine: '',
},
{
  key: '4',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
  determine: '',
}, {
  key: '5',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
  determine: '',
}, {
  key: '6',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
  determine: '',
},
{
  key: '7',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
  determine: '',
}, {
  key: '8',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
  determine: '',
}, {
  key: '9',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
  determine: '',
},
{
  key: '10',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
  determine: '',
}, {
  key: '11',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
  determine: '',
}, {
  key: '12',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
  determine: '',
},
{
  key: '13',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
  determine: '',
}, {
  key: '14',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
  determine: '',
}, {
  key: '15',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
  determine: '',
},
{
  key: '16',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
  determine: '',
}, {
  key: '17',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
  determine: '',
}, {
  key: '18',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
  determine: '',
},
{
  key: '19',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
  determine: '',
}, {
  key: '20',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
  determine: '',
}, {
  key: '21',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
  determine: '',
}];
const data1 = [{
  key: '1',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: 'sdfsfd',
}, {
  key: '200',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '1234567',
}, {
  key: '3',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
},
{
  key: '4',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
}, {
  key: '5',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
}, {
  key: '6',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
},
{
  key: '7',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
}, {
  key: '8',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
}, {
  key: '9',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
},
{
  key: '10',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
}, {
  key: '11',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
}, {
  key: '12',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
},
{
  key: '13',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
}, {
  key: '14',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
}, {
  key: '15',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
},
{
  key: '16',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
}, {
  key: '17',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
}, {
  key: '18',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
},
{
  key: '19',
  name: '胡彦斌',
  money: '￥300,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位1',
  value: '',
}, {
  key: '20',
  name: '胡彦祖',
  money: '￥1,256,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位2',
  value: '',
}, {
  key: '21',
  name: '李大嘴',
  money: '￥120,000.00',
  address: '西湖区湖底公园1号',
  Company: '单位3',
  value: '',
}];


const data2 = [{
  key: '1',
  name: '总前列腺特异性抗原',
  age: 32,
  tel: '0571-22098909',
  value: 18889898989,
  address: 'New York No. 1 Lake Park',
  Reference: '参考一',
  Gender: '',
}, {
  key: '2',
  name: 'Jim Green',
  tel: '0571-22098333',
  value: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
  Reference: '参考二',
  Gender: '',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'Sidney No. 1 Lake Park',
  Reference: '参考三',
  Gender: '',
}, {
  key: '4',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'London No. 2 Lake Park',
  Reference: '参考四',
  Gender: '男性',
}, {
  key: '5',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'Dublin No. 2 Lake Park',
  Reference: '参考五',
  Gender: '发发发',
}, {
  key: '6',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  value: 18889898989,
  address: 'New York No. 1 Lake Park',
  Reference: '参考一',
  Gender: '',
}, {
  key: '7',
  name: 'Jim Green',
  tel: '0571-22098333',
  value: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
  Reference: '参考二',
  Gender: '',
}, {
  key: '8',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'Sidney No. 1 Lake Park',
  Reference: '参考三',
  Gender: '',
}, {
  key: '9',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'London No. 2 Lake Park',
  Reference: '参考四',
  Gender: '',
}, {
  key: '10',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'Dublin No. 2 Lake Park',
  Reference: '参考五',
  Gender: '',
}, {
  key: '11',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  value: 18889898989,
  address: 'New York No. 1 Lake Park',
  Reference: '参考一',
  Gender: '女性',
}, {
  key: '12',
  name: 'Jim Green',
  tel: '0571-22098333',
  value: '456',
  age: 42,
  address: 'London No. 1 Lake Park',
  Reference: '参考二',
  Gender: '',
}, {
  key: '13',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  value: '',
  address: 'Sidney No. 1 Lake Park',
  Reference: '参考三',
  Gender: '',
}, {
  key: '14',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  value: '',
  address: 'London No. 2 Lake Park',
  Reference: '参考四',
  Gender: '',
},
{
  key: '15',
  name: '总前列腺特异性抗原',
  age: 32,
  tel: '0571-22098909',
  value: 18889898989,
  address: 'New York No. 1 Lake Park',
  Reference: '参考一',
  Gender: '',
}, {
  key: '16',
  name: 'Jim Green',
  tel: '0571-22098333',
  value: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
  Reference: '参考二',
  Gender: '',
}, {
  key: '17',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'Sidney No. 1 Lake Park',
  Reference: '参考三',
  Gender: '',
}, {
  key: '18',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'London No. 2 Lake Park',
  Reference: '参考四',
  Gender: '男性',
}, {
  key: '19',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'Dublin No. 2 Lake Park',
  Reference: '参考五',
  Gender: '发发发',
}, {
  key: '20',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  value: 18889898989,
  address: 'New York No. 1 Lake Park',
  Reference: '参考一',
  Gender: '',
}, {
  key: '21',
  name: 'Jim Green',
  tel: '0571-22098333',
  value: 18889898888,
  age: 42,
  address: 'London No. 1 Lake Park',
  Reference: '参考二',
  Gender: '',
}, {
  key: '22',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'Sidney No. 1 Lake Park',
  Reference: '参考三',
  Gender: '',
}, {
  key: '23',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'London No. 2 Lake Park',
  Reference: '参考四',
  Gender: '',
}, {
  key: '24',
  name: 'Jake White',
  age: 18,
  tel: '0575-22098909',
  value: 18900010002,
  address: 'Dublin No. 2 Lake Park',
  Reference: '参考五',
  Gender: '',
}, {
  key: '25',
  name: 'John Brown',
  age: 32,
  tel: '0571-22098909',
  value: 18889898989,
  address: 'New York No. 1 Lake Park',
  Reference: '参考一',
  Gender: '女性',
}, {
  key: '26',
  name: 'Jim Green',
  tel: '0571-22098333',
  value: '456',
  age: 42,
  address: 'London No. 1 Lake Park',
  Reference: '参考二',
  Gender: '',
}, {
  key: '27',
  name: 'Joe Black',
  age: 32,
  tel: '0575-22098909',
  value: '',
  address: 'Sidney No. 1 Lake Park',
  Reference: '参考三',
  Gender: '',
}, {
  key: '28',
  name: 'Jim Red',
  age: 18,
  tel: '0575-22098909',
  value: '',
  address: 'London No. 2 Lake Park',
  Reference: '参考四',
  Gender: '',
}];
export default class table1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data, data1, data2 };
  }
  componentDidMount() {
    console.log(this.iptData);
  }
  onFocus = (ev) => {
    const v = ev;
    v.target.style.borderColor = 'rgba(64,169,255,.5)';
    v.target.style.boxShadow = '0px 0px 5px rgba(64,169,255,.5)';
  }
  onChange = (ev, key, dat) => {
    const newData = [...this.state[dat]];
    newData.filter((item) => { return item.key === String(key); })[0].value = ev.target.value;
    this.setState({ [dat]: newData });
  }
  Blur = (ev, dat) => {
    for (let i = 0; i < this.state[dat].length; i += 1) {
      this.iptData[dat][i].name = this.state[dat][i].value;
    }
    const v = ev;
    v.target.style.borderColor = '';
    v.target.style.boxShadow = '';
  };
  iptData = {
    data: data.map((item) => { return { name: item.value, id: item.key }; }),
    data1: data1.map((item) => { return { name: item.value, id: item.key }; }),
    data2: data2.map((item) => { return { name: item.value, id: item.key }; }),
  };

columns = [{
  title: '检查项目',
  dataIndex: 'name',
},
{
  title: '缩写',
  dataIndex: 'money',
},
{
  title: '结果',
  render: (text, record) => (
    <input
      value={text}
      onFocus={(ev) => { this.onFocus(ev, text); }}
      onBlur={(ev) => { this.Blur(ev, 'data'); }}
      onChange={(ev) => { this.onChange(ev, record.key, 'data'); }}
      className={styles.input}
      type="text"
    />),
  dataIndex: 'value',
},
{
  title: '参考值',
  dataIndex: 'address',
},
{
  title: '单位',
  dataIndex: 'Company',
},
{
  title: '判定（低/正常/高）',
  dataIndex: 'determine',
}];
columns1 = [{
  title: '检查项目',
  dataIndex: 'name',
},
{
  title: '缩写',
  dataIndex: 'money',
},
{
  title: '结果',
  render: (text, record) => (
    <input
      value={text}
      onFocus={(ev) => { this.onFocus(ev, text); }}
      onBlur={(ev) => { this.Blur(ev, 'data1'); }}
      onChange={(ev) => { this.onChange(ev, record.key, 'data1'); }}
      className={styles.input}
      type="text"
    />),
  dataIndex: 'value',
},
{
  title: '参考值',
  dataIndex: 'address',
},
{
  title: '单位',
  dataIndex: 'Company',
}];
columns2 = [
  {
    title: '检验项目hidden',
    colSpan: 0,
    dataIndex: 'Gender',
    render: (text, row, index) => {
      const obj = {
        children: text,
        props: {},
      };
      if (index === 3) { // 该头部下的列  是否合并
        obj.props.rowSpan = 6;
      }
      if (index === 10) { // 该头部下的列  是否合并
        obj.props.rowSpan = 4;
      }
      if (index === 14) { // 该头部下的列  是否合并
        obj.props.rowSpan = 14;
      }
      // These two are merged into above cell
      if (index === 4 ||
        index === 5 ||
        index === 6 ||
        index === 7 ||
        index === 8 ||
        index === 11 ||
        index === 12 ||
        index === 13 ||
        index === 15 ||
        index === 16 ||
        index === 17 ||
        index === 18 ||
        index === 19 ||
        index === 20 ||
        index === 21 ||
        index === 22 ||
        index === 23 ||
        index === 24 ||
        index === 25 ||
        index === 26 ||
        index === 27 ||
        index === 28) {
        obj.props.rowSpan = 0;
      }
      return obj;
    },
  }, {
    title: '检验项目',
    dataIndex: 'name',
    colSpan: 2,
    render: (text, row, index) => {
      const obj = {
        children: text,
        props: {},
      };
      if (index === 11) { // 该头部下的列  是否合并
        obj.props.rowSpan = 3;
      }
      if (index === 15) { // 该头部下的列  是否合并
        obj.props.rowSpan = 4;
      }
      if (index === 19) {
        obj.props.rowSpan = 4;
      }
      if (index === 23) {
        obj.props.rowSpan = 4;
      }
      // These two are merged into above cell
      if (index === 12 || index === 13 || index === 16
        || index === 17 || index === 18 || index === 21
        || index === 22 || index === 20 || index === 24 || index === 25 || index === 26) {
        obj.props.rowSpan = 0;
      }
      return obj;
    },
  }, {
    title: '缩写',
    dataIndex: 'age',
    render: (text, row, index) => {
      const obj = {
        children: text,
        props: {},
      };
      if (index === 11) { // 该头部下的列  是否合并
        obj.props.rowSpan = 3;
      }
      if (index === 15) { // 该头部下的列  是否合并
        obj.props.rowSpan = 4;
      }
      if (index === 19) {
        obj.props.rowSpan = 4;
      }
      if (index === 23) {
        obj.props.rowSpan = 4;
      }
      // These two are merged into above cell
      if (index === 12 || index === 13 || index === 16
        || index === 17 || index === 18 || index === 21
        || index === 22 || index === 20 || index === 24 || index === 25 || index === 26) {
        obj.props.rowSpan = 0;
      }
      return obj;
    },
  }, {
    title: '结果',
    colSpan: 0,
    dataIndex: 'value',
    render: (text, row, index) => {
      const obj = {
        children: text,
        props: {},
      };
      if (index === 11) { // 该头部下的垂直  是否合并
        obj.props.rowSpan = 3;
      }
      if (index === 15) { // 该头部下的垂直  是否合并
        obj.props.rowSpan = 4;
      }
      if (index === 19) {
        obj.props.rowSpan = 4;
      }
      if (index === 23) {
        obj.props.rowSpan = 4;
      }
      if (index === 12 || index === 13 || index === 16
        || index === 17 || index === 18 || index === 21
        || index === 22 || index === 20 || index === 24 || index === 25 || index === 26) {
        obj.props.rowSpan = 0;
      }
      return {
        children: (
          <input
            className={styles.input}
            value={obj.children}
            onFocus={(ev) => { this.onFocus(ev, text); }}
            onBlur={(ev) => { this.Blur(ev, 'data2'); }}
            onChange={(ev) => { this.onChange(ev, index + 1, 'data2'); }}
            type="text"
          />
        ),
        props: obj.props,
      };
    },
  }, {
    title: '结果',
    dataIndex: 'address',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0 || index === 1 || index === 2 || index === 3
        || index === 4 || index === 5 || index === 6 || index === 7
        || index === 8 || index === 9 || index === 10 || index === 27) { // 隐藏水平
        obj.props.colSpan = 0;
      }
      return obj;
    },
  }, {
    title: '参考值',
    colSpan: 2, // 表头水平合并
    dataIndex: 'tel',
    render: (value, roe, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0 || index === 1 || index === 2 || index === 3
        || index === 4 || index === 5 || index === 6 || index === 7
        || index === 8 || index === 9 || index === 10 || index === 27) { // 合并水平
        obj.props.colSpan = 2;
      }
      return obj;
    },
  }, {
    title: '单位',
    dataIndex: 'Reference',
    render: (text, row, index) => {
      const obj = {
        children: text,
        props: {},
      };
      if (index === 11) { // 该头部下的列  是否合并
        obj.props.rowSpan = 3;
      }
      if (index === 15) { // 该头部下的列  是否合并
        obj.props.rowSpan = 4;
      }
      if (index === 19) {
        obj.props.rowSpan = 4;
      }
      if (index === 23) {
        obj.props.rowSpan = 4;
      }
      // These two are merged into above cell
      if (index === 12 || index === 13 || index === 16
        || index === 17 || index === 18 || index === 21
        || index === 22 || index === 20 || index === 24 || index === 25 || index === 26) {
        obj.props.rowSpan = 0;
      }
      return obj;
    },
  }];
submintBtn = () => {
  console.log(this.iptData);
}
render() {
  return (
    <div className={styles.content}>
      <Card title="血液生化 : " className={styles.head}>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          bordered
          pagination={false}
        />
      </Card>
      <Card title="激素检测 : " className={styles.head}>
        <Card title="（1） 甲状腺功能全向分析（1项）（免疫）：">
          <Table
            columns={this.columns1}
            dataSource={this.state.data1}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="（2） 性激素：">
          <Table
            columns={this.columns2}
            dataSource={this.state.data2}
            bordered
            pagination={false}
          />
        </Card>
      </Card>
      <Button onClick={() => { this.submintBtn(); }} type="primary">全部提交</Button>
    </div>

  );
}
}
