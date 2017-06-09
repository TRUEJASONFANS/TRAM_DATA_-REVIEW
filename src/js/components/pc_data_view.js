import React from 'react';
import { Row, Col, Table } from 'antd';
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    filters: [{
        text: 'Joe',
        value: 'Joe',
    }, {
        text: 'Jim',
        value: 'Jim',
    }, {
        text: 'Submenu',
        value: 'Submenu',
        children: [{
            text: 'Green',
            value: 'Green',
        }, {
            text: 'Black',
            value: 'Black',
        }],
    }],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    width:'20%',
}, {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
    width:'20%'
}, {
    title: 'Address',
    dataIndex: 'address',
    filters: [{
        text: 'London',
        value: 'London',
    }, {
        text: 'New York',
        value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
}];

export default class PCDataView extends React.Component {
    state = {
        hasLoading: false,
        data: []
    }
    onChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    }
    componentWillMount() {
        this.fetchData();
    }
    fetchData() {
        var myFetchOptions = {
            method: 'get'
        }
        fetch("http://localhost:3000/api/candidates/", myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    hasLoading: true,
                    data: json
                });
            }
        );
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24} class="dataView">
                        <Table columns={columns} loading={this.state.hasLoading} dataSource={this.state.data} onChange={this.onChange} />
                    </Col>
                </Row>
            </div>
        );
    };
}
