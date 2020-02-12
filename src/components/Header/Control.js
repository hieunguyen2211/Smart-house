import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Icon } from 'antd';
import './Control.css';
function Control(props) {
    return (
        <div className="control-header-container">
            <div className="control-header-content">
                <Route>
                    <Link to={props.path} style={{ height: '25px' }}>
                        <Icon
                            type="arrow-left"
                            className="icon"
                            style={{ color: 'white' }}
                        />
                    </Link>
                </Route>

                <span
                    style={{
                        textTransform: 'uppercase',
                        color: 'white'
                    }}
                >
                    {props.title}
                </span>
                <Icon type="more" className="icon" style={{ color: 'white' }} />
            </div>
        </div>
    );
}

export default Control;
