import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Upload, message, Button, List } from 'antd';

@connect(({ list }) => ({
  list,
}))
export default class table1 extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch1',
    });
  }
  del = (ev) => {
    const id = Number(ev.target.parentNode.parentNode.id);
    fetch(`http://10.0.0.250/delImage/${JSON.stringify(id)}`);
    this.props.dispatch({
      type: 'list/fetch1',
    });
    return false;
  }
  download = (ev) => {
    const id = Number(ev.target.parentNode.parentNode.id);
    fetch(`http://10.0.0.250/api/downLoad/${JSON.stringify(id)}`, { method: 'get', headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVhMTU4M2JiODA0ODE5NTMyNTc2NjgxZWJiNGMxMGEzMGFlM2NlNDE2MWYyZmE3NDY3NjI1MWExOWJmODQyYTFjMDY5ZTMyMjgxYjk1MWY4In0.eyJhdWQiOiIyIiwianRpIjoiZWExNTgzYmI4MDQ4MTk1MzI1NzY2ODFlYmI0YzEwYTMwYWUzY2U0MTYxZjJmYTc0Njc2MjUxYTE5YmY4NDJhMWMwNjllMzIyODFiOTUxZjgiLCJpYXQiOjE1MjE1MzE0NjUsIm5iZiI6MTUyMTUzMTQ2NSwiZXhwIjoxNTUzMDY3NDY1LCJzdWIiOiIxMiIsInNjb3BlcyI6W119.N_HdcMuuJzD_jy72RcBO5FUcTE4ufXP_bVyiJ50dfNBAPOxbbt3CvNbr8KnaPLtP1vyaXyUyRAspL6F-A_CD6bxpKGoTXv1RHzvI9I56U_he_gRuUAIut20LCtMvfvIsayGimyZu-HsFZ-tF84f5JulCU8A0_5mZIpQbY67hEMuFDiE4FqofhLpcwQRiEXpWo6E7FJQHGswoJIT-uK-HaBapUrO7ERactgyfBy42b7Axlg9M0nkvmxf-6rfKUyhM1KVDywjzNTmNvEzkNM1FmLYx41_2BqePP4CXTFXhyRbPNkfVMo4Ff22LXmFv2K-9DbXqf615KZuLWhJJfB4FwAUr-xOkK8UcRnCvlLbFJ_zPX5DsK4deyGaU7nZXeW0BL8hdqDfERHll8Rk73IdMWp1otkEjzCx2h4oq3qTNnt9IE7PWVeih56F5aeHajbo8eyyCIwssBk2IBxyRRPOtvfXKPVPvC7cszIRdDICVge30poU3qT47WU9cfsvrUhNXtX3nZlOEE_snvqWGb1y8V4ZjbNF0XoqTobr9oF2yth24rAzbMBBNvwljmX_yw-hjda28g2ccTrY-saIo8TBzRKwQugtVdGDaBPEtNmTEEi3XwDbeyEhuXtbhp4M0N4Wt0SdZB8Kktd_NiH84nBPG6Yzr6vtfRZaUvRZ5dKEVxnU' } }).then(res => res.blob().then(
      (blob) => {
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob); // 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。
        // 这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。
        a.href = url;
        // a.download = filename;
        a.download = '123';
        a.click();
        window.URL.revokeObjectURL(url); // 静态方法用来释放一个之前通过调用 URL.createObjectURL() 创建的已经存在的 URL 对象
        // 。当你结束使用某个 URL 对象时， 应该通过调用这个方法来让浏览器知道不再需要保持这个文件的引用了。
        const filename = res.headers.get('Content-Disposition.filename'); // 文章上说这是获取文件名称的,亲测无用
        console.log(filename);
      }));
  }
  render() {
    const ths = this;
    const up = {
      name: 'photo',
      action: 'http://10.0.0.250/upImage',
      headers: {
        authorization: '1234565',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') { // 上传
          console.log(info.file);
        }
        if (info.file.status === 'done') { // 成功
          message.success(`${info.file.name} file uploaded successfully`);
          ths.props.dispatch({
            type: 'list/fetch1',
          });
        } else if (info.file.status === 'error') { // 失败
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <div>
        <List
          bordered
          dataSource={this.props.list.lst}
          renderItem={item => (
            <List.Item id={item.Id}>
              {item.Id}
              <Button onClick={(ev) => { this.del(ev); }} type="danger">删除</Button>
              <Button onClick={(ev) => { this.download(ev); }} type="primary">下载</Button>
            </List.Item>)}
        />
        <Upload {...up}>
          <Button type="primary"> 上传
          </Button>
        </Upload>
      </div>
    );
  }
}
