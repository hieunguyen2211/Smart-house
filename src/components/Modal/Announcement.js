import React from 'react';
import { Modal } from 'antd';
import FadeLoader from 'react-spinners/FadeLoader';
function Announcement(props) {
    return props.message === 'Processing' ? (
        <Modal
            visible={props.visible}
            centered={true}
            closable={false}
            maskClosable={false}
            width="88vw"
            footer={null}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <p style={props.styleMessage}>{props.message}</p>
                <br />
                <FadeLoader
                    height={15}
                    width={5}
                    loading={true}
                    color={'green'}
                />
            </div>
        </Modal>
    ) : (
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
