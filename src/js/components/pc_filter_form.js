import React from 'react';
import { Row, Col, Form, Input } from 'antd';
const FormItem = Form.Item;
class PCFilterForm extends React.Component {

    render() {
        return (
            <div>
                <Form>
                    <FormItem label="tag1">
                        <Input placeholder="placeholder" />
                    </FormItem>
                </Form>
            </div>
        );
    };
}
export default PCFilterForm = Form.create()(PCFilterForm);