import React from 'react';
import CardRec from '../Content/CardRec';
import { Row, Col } from 'antd';
import './MenuRec.css';
function MenuRec() {
    return (
        <Row className="menuRec-container">
            <Col span={21} className="menuRec-row">
                <CardRec fill={true} icon="user" title="My Account" />
                <CardRec fill={false} icon="user" title="My Account" />
                <CardRec fill={true} icon="user" title="My Account" />
            </Col>
        </Row>
    );
}

export default MenuRec;
