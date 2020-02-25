import React from 'react';
import { Modal } from 'antd';
function Announcement(props) {
    return (
        <Modal
            visible={props.visible}
            centered={true}
            closable={false}
            maskClosable={false}
            width="88vw"
            footer={
                <div
                    onClick={props.handleToggleModal}
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <span style={{ color: 'black', fontSize: '3vh' }}>OK</span>
                </div>
            }
        >
            <p style={props.styleMessage}>{props.message}</p>
        </Modal>
    );
}

export default Announcement;
