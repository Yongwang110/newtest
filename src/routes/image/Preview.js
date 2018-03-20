import React, { PureComponent } from 'react';
// import { Upload, Icon, Modal } from 'antd';
import { connect } from 'dva';
import { Upload, message, Button, List } from 'antd';


const props = {
  name: 'photo',
  action: 'http://10.0.0.250/upImage',
  onChange(info) {
    if (info.file.status !== 'uploading') { // 上传
      console.log(info.file);
    }
    if (info.file.status === 'done') { // 成功
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') { // 失败
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
@connect(({ list }) => ({
  list,
}))
export default class table1 extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch1',
    });
    // console.log(this.props.list.lst);
  }
  // componentWillMount() {
  //   fetch('http://10.0.0.250/imageShow')
  //     .then(response => response.json())
  //     .then(({ data }) => {
  //       this.state = data;
  //       console.log(this.state, 12345);
  //     });
  // }

  // renderTreeNodes = (data) => {
  //   return data.map((item) => {
  //     if (item.children) {
  //       return (
  //         <li
  //           key={item.key}
  //         >
  //           {this.renderTreeNodes(item.children)}
  //         </li>
  //       );
  //     }
  //     return <li {...item} dataRef={item} />;
  //   });
  // }
  del=(ev) => {
    const id = Number(ev.target.innerHTML);
    const index = this.props.list.lst.filter((item) => { return item.Id === id; })[0].Id;
    fetch(`http://10.0.0.250/imageShow/?id=${JSON.stringify(index)}`);
    return false;
  }
  render() {
    return (
      <div>
        <List
          bordered
          dataSource={this.props.list.lst}
          renderItem={item =>
            (<List.Item id={item.Id} onClick={(ev) => { this.del(ev); }}>{item.Id}</List.Item>)}
        />
        <Upload {...props}>
          <Button> 上传
          </Button>
        </Upload>
      </div>
    );
  }
}
