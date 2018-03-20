import React, { PureComponent } from 'react';
import { Table, Button, Card } from 'antd';
import styles from './list.less';

const data = [{
  key: '1',
  name: '促卵泡成熟激素',
  money: 'FSH',
  address: '卵泡期：3.5 12.5 排卵期：4.7 21',
  Company: 'IU/L',
  value: 'sdfsfd',
},
{
  key: '2',
  name: '促黄体生产素',
  money: 'LH',
  address: '卵泡期：2.4 12.6 排卵期：14 95',
  Company: 'IU/L',
  value: '',
},
{
  key: '3',
  name: '雌二醇',
  money: 'E2',
  address: '卵泡期：46 607 排卵期：315 1828',
  Company: 'pmol/L',
  value: '',
}];
const data1 = [{
  key: '1',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '2',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '3',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '4',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '5',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '6',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '7',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '8',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
}];
const data2 = [{
  key: '1',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '2',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '3',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '4',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '5',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '6',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '7',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '8',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '9',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '10',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '11',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '12',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '13',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '14',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '15',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '16',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '17',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '18',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '19',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '20',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '21',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '22',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '23',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '24',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '25',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '26',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
}];
const data3 = [{
  key: '1',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '2',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '3',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '4',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '5',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '6',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '7',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '8',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '9',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
}];
const data4 = [{
  key: '1',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '2',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '3',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '4',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
},
{
  key: '5',
  name: '钠',
  money: 'Na',
  address: '135-148',
  Company: 'mmol/L',
  value: '',
}];
const data5 = [{
  key: '1',
  name: '降钙素原',
  money: 'PCT',
  address: '结果说明：0.25-0.5：可疑局部',
  Company: 'ng/ml',
  value: '',
}];
export default class table1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data, data1, data2, data3, data4, data5 };
  }
  componentDidMount() {
    console.log(this.iptData.arr);
  }
  onFocus = (ev) => {
    const v = ev;
    v.target.style.borderColor = 'rgba(64,169,255,.5)';
    v.target.style.boxShadow = '0px 0px 5px rgba(64,169,255,.5)';
    this.iptData.arr = [];
    for (let i = 0; i < this.state.data.length; i += 1) {
      this.iptData.arr[i] = {};
      this.iptData.arr[i].id = this.state.data[i].key;
    }
  }
  onChange = (ev, key) => {
    this.state.data.filter((item) => { return item.key === key; })[0].value = ev.target.value;
    const newData = [...this.state.data];
    this.setState({ data: newData });
  }
  Blur = (ev) => {
    for (let i = 0; i < this.iptData.arr.length; i += 1) {
      this.iptData.arr[i].name = this.state.data[i].value;
    }
    const v = ev;
    v.target.style.borderColor = '';
    v.target.style.boxShadow = '';
  };
  iptData = {
    arr: [],
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
        onBlur={(ev) => { this.Blur(ev, record.key); }}
        onChange={(ev) => { this.onChange(ev, record.key); }}
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
        onBlur={(ev) => { this.Blur(ev, record.key); }}
        onChange={(ev) => { this.onChange(ev, record.key); }}
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
  submintBtn = () => {
    console.log(this.iptData.arr);
    this.iptData.arr = [];
  }
  // renderColumns(text, record) {
  //   return (
  //     <input
  //       value={text}
  //       onFocus={(ev) => { this.onFocus(ev, text); }}
  //       onBlur={(ev) => { this.Blur(ev, record.key); }}
  //       onChange={(ev) => { this.onChange(ev, record.key); }}
  //       className={styles.input}
  //       type="text"
  //     />
  //   );
  // }
  render() {
    return (
      <div className={styles.content}>
        <Card title="FSH(促卵泡成熟激素)（免疫）+E2（雌二醇）（免疫）+LH（促黄体生产素）（免疫）" className={styles.head}>
          <Table
            columns={this.columns}
            dataSource={this.state.data}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="电解质检测： " className={styles.head}>
          <Table
            columns={this.columns1}
            dataSource={this.state.data1}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="尿常规 :  " className={styles.head}>
          <Table
            columns={this.columns1}
            dataSource={this.state.data2}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="结甲凝血系统检查（生化）" className={styles.head}>
          <Table
            columns={this.columns1}
            dataSource={this.state.data3}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="便常规检查" className={styles.head}>
          <Table
            columns={this.columns1}
            dataSource={this.state.data4}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="降钙素原检测（PCT）" className={styles.head}>
          <Table
            columns={this.columns}
            dataSource={this.state.data5}
            bordered
            pagination={false}
          />
        </Card>
        <Button onClick={() => { this.submintBtn(); }} type="primary">全部提交</Button>
      </div>

    );
  }
}
