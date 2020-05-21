import React, { Component } from "react";
import axios from "axios";
import { Table, Tag, Button } from "antd";

export default class Roles extends Component {
  state = {
    data: []
  }

  columns = [
    {
      title: "角色名称",
      dataIndex: "roleName",
      key: "roleName",
    },
    {
      title: "操作",
      key: "id",
      render: (obj) => (
        <Button type={"danger "} onClick={() => [this.handdelClick(obj)]}>
          delete
        </Button>
      ),
    },
  ];

  componentDidMount() {
    axios.get('http://localhost:3002/roles').then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  handdelClick = (obj) => {
    console.log(obj);
    axios.delete(`http://localhost:3002/roles/${obj.id}`).then(res => {
      this.setState({
        data: this.state.data.filter(item => item.id !== obj.id)
      })
    })
  }


  render() {
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          rowKey={(item) => item.id}
          pagination={{ pageSize: 5 }}
          expandable={{
            expandedRowRender: (data) => {
              console.log(data);
              return data.roleRight.map((item, index) => {
                return (
                  <div key={index}>
                    <Tag color="green">{item.category}</Tag>
                    {item.list.map((childitem) => {
                      return (
                        <Tag color="green" key={childitem}>
                          {childitem}
                        </Tag>
                      );
                    })}
                  </div>
                );
              });
            },
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
        />
      </div>
    );
  }
}
