import React from 'react';
import PCFooter from './pc_footer';
import PCBody from './pc_body';
import { Layout } from 'antd';
export default class PCIndex extends React.Component {
	render() {
		return (
			<div>
				<Layout>
					<PCBody className="siderBody"></PCBody>
				</Layout>
				<PCFooter/>
			</div>
		);
	};
}
