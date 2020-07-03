import React from "react";
import { Link } from "react-router-dom";
import {
    RedditOutlined,
    HomeOutlined,
    ControlOutlined,
    SecurityScanOutlined,
} from "@ant-design/icons";
import "./NavigationItem.css";

function NavigationItem(props) {
    const urlCurrent = window.location.pathname;
    const urlNavigation = "/" + props.url;
    const classContent =
        urlCurrent === urlNavigation
            ? {
                  classIcon: "navigation-item-icon-active",
                  classTitle: "navigation-item-title-active",
              }
            : {
                  classIcon: "navigation-item-icon-disable",
                  classTitle: "navigation-item-title-disable",
              };

    let itemIconActive = "";
    let itemIconDisable = "";
    switch (props.type) {
        case "home":
            itemIconActive = (
                <HomeOutlined
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            itemIconDisable = (
                <HomeOutlined
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            break;
        case "assistant":
            itemIconActive = (
                <RedditOutlined
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            itemIconDisable = (
                <RedditOutlined
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            break;
        case "device":
            itemIconActive = (
                <ControlOutlined
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            itemIconDisable = (
                <ControlOutlined
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            break;
        case "security":
            itemIconActive = (
                <SecurityScanOutlined
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            itemIconDisable = (
                <SecurityScanOutlined
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            break;

        default:
            break;
    }
    const iconItem =
        urlCurrent === urlNavigation ? itemIconActive : itemIconDisable;

    return (
        <Link to={urlNavigation} className="navigation-item-container">
            {iconItem}
            <p className={classContent.classTitle}>{props.title}</p>
        </Link>
    );
}

export default NavigationItem;
