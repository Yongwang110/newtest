import React, { PureComponent } from 'react';
import { Table, Button } from 'antd';
import styles from './list2.less';

const data = [{
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
}];

export default class table1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data };
  }
  componentDidMount() {
    // const list = fetch('http://10.0.0.250/api/index')
    //   .then(response => response.json())
    //   .then(({ data }) => { console.log(data); });
    // console.log(list);
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
    this.state.data.filter((item) => { return +item.key === key + 1; })[0].value = ev.target.value;
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
  columns = [
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
        // These two are merged into above cell
        if (index === 4 ||
          index === 5 ||
          index === 6 ||
          index === 7 ||
          index === 8 ||
          index === 11 || index === 12 || index === 13) {
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
        if (index === 2) { // 该头部下的列  是否合并
          obj.props.colSpan = 3;
        }
        // These two are merged into above cell
        if (index === 12 || index === 13) {
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
        // These two are merged into above cell
        if (index === 12 || index === 13) {
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
        if (index === 11) { // 该头部下的列  是否合并
          obj.props.rowSpan = 3;
        }
        // These two are merged into above cell
        if (index === 12 || index === 13) {
          obj.props.rowSpan = 0;
        }
        return {
          children: (
            <input
              className={styles.input}
              value={obj.children}
              onFocus={(ev) => { this.onFocus(ev, text); }}
              onBlur={(ev) => { this.Blur(ev, index); }}
              onChange={(ev) => { this.onChange(ev, index); }}
              type="text"
            />
          ),
          props: obj.props,
        };
      },
    }, {
      title: '结果',
      dataIndex: 'address',
      render: (value) => {
        const obj = {
          children: value,
          props: {},
        };
        // if (index === 4) { // 整行隐藏
        //   obj.props.colSpan = 0;
        // }
        return obj;
      },
    }, {
      title: '参考值',
      colSpan: 2, // 表头列合并
      dataIndex: 'tel',
      render: (value) => {
        const obj = {
          children: value,
          props: {},
        };
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
        // These two are merged into above cell
        if (index === 12 || index === 13) {
          obj.props.rowSpan = 0;
        }
        return obj;
      },
    }];
  submintBtn = () => {
    console.log(this.iptData.arr);
    this.iptData.arr = [];
  }
  render() {
    return (
      <div className={styles.content}>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          bordered
          pagination={{ pageSize: 50 }}
        />
        <Button onClick={() => { this.submintBtn(); }} type="primary">全部提交</Button>
      </div>
    );
  }
}
