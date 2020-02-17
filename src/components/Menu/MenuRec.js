import React from 'react';
import CardRec from '../Content/CardRec';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import './MenuRec.css';
function MenuRec(props) {
    return (
        <Row className="menuRec-container">
            <Col span={21} className="menuRec-col">
                {props.data &&
                    props.data.map(e =>
                        e.path ? (
                            <Link to={e.path} key={e.id}>
                                <CardRec
                                    iconURL={e.icon.url}
                                    iconStyle={e.icon.style}
                                    title={e.title}
                                    subTitle={e.subTitle}
                                    key={e.id}
                                    id={e.id}
                                    subComponent={e.subComponent}
                                    sizeData={props.data.length}
                                />
                            </Link>
                        ) : (
                            <CardRec
                                iconURL={e.icon.url}
                                iconStyle={e.icon.style}
                                title={e.title}
                                subTitle={e.subTitle}
                                key={e.id}
                                id={e.id}
                                subComponent={e.subComponent}
                                sizeData={props.data.length}
                            />
                        )
                    )}
            </Col>
        </Row>
    );
}

export default MenuRec;
