
  import {Table} from 'antd'
  import React from 'react'
  const dataSource = [
    {
      name: 'Tiến',
      age: 32,
      address: '70 Lữ Gia',
      index: '1',
      phone: '0901456292',
      value: '1.000.000 VND'
    },
    {
      name: 'Nhân',
      age: 32,
      address: '70 Lữ Gia',
      index: '2',
      phone: '0901456292',
      value: '2.000.000 VND'
    },
    {
      name: 'Thư',
      age: 32,
      address: '70 Lữ Gia',
      index: '3',
      phone: '0901456292',
      value: '3.000.000 VND'
    },
  ];
  
  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Họ Và Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Giá trị đơn hàng',
      dataIndex: 'value',
      key: 'value',
    },
  ];
  
  export default function table() {
    return (
      <Table dataSource={dataSource} columns={columns} />
    )
  }
  