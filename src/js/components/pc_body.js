import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import PCDataView from './pc_data_view';
import PCFilterForm from './pc_filter_form';
import PCFooter from './pc_footer';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class PCBody extends React.Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
    render() {
        return (
            <Layout>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                    style={{ background: '#fff' }}
                >
                    <div className="logo" />
                    <PCFilterForm />
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                        <div style={{ margin: '12px 0' }}>
                        </div>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <PCDataView />
                        </div>
                    </Content>
                    <Footer/>
                </Layout>
            </Layout>
        );
    };
}
