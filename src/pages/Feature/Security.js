import React from "react";
import ControlHeader from "../../components/Header/Control";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { UserAddOutlined, VideoCameraOutlined } from "@ant-design/icons";
import "./Security.css";

function Security() {
    return (
        <div className="page-container">
            <ControlHeader title="security" path="/home" />
            <div className="page-content-wrapper">
                <Link className="device-detail-card" to="/security/faceRecog">
                    <div className="device-header">
                        <VideoCameraOutlined className="item-icon icon-task" />
                        <p>Face Recognition</p>
                    </div>
                </Link>

                <Link className="device-detail-card" to="/security/register">
                    <div className="device-header">
                        <UserAddOutlined className="item-icon icon-task" />
                        <p>Register</p>
                    </div>
                </Link>
            </div>
            <NavigationBar />
        </div>
    );
}

export default Security;
