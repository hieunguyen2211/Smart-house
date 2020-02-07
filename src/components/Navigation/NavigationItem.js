import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import './NavigationItem.css';

function NavigationItem(props) {
    const urlCurrent = window.location.pathname;
    const urlNavigation = '/' + props.url;

    const className = {
        container:
            urlCurrent === urlNavigation
                ? 'navigation-item-container-active'
                : 'navigation-item-container',
        icon:
            urlCurrent === urlNavigation
                ? 'navigation-item-icon-active'
                : 'navigation-item-icon'
    };

    return (
        <Link to={urlNavigation} className={className.container}>
            <Icon type={props.nameIcon} className={className.icon} />
        </Link>
    );
}

export default NavigationItem;
