import React from 'react';
import { Link } from 'react-router-dom';
import * as iconAI from 'react-icons/ai';
import * as iconFA from 'react-icons/fa';
import './NavigationItem.css';

function NavigationItem(props) {
    const urlCurrent = window.location.pathname;
    const urlNavigation = '/' + props.url;
    const classContent =
        urlCurrent === urlNavigation
            ? {
                  classIcon: 'navigation-item-icon-active',
                  classTitle: 'navigation-item-title-active'
              }
            : {
                  classIcon: 'navigation-item-icon-disable',
                  classTitle: 'navigation-item-title-disable'
              };

    let itemIconActive = '';
    let itemIconDisable = '';
    switch (props.type) {
        case 'home':
            itemIconActive = (
                <iconAI.AiFillHome
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            itemIconDisable = (
                <iconAI.AiOutlineHome
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            break;
        case 'speech':
            itemIconActive = (
                <iconAI.AiFillAudio
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            itemIconDisable = (
                <iconAI.AiOutlineAudio
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            break;
        case 'profile':
            itemIconActive = (
                <iconFA.FaUserCircle
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            itemIconDisable = (
                <iconFA.FaRegUserCircle
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            break;
        case 'setting':
            itemIconActive = (
                <iconAI.AiFillSetting
                    type={props.nameIcon}
                    className={classContent.classIcon}
                />
            );
            itemIconDisable = (
                <iconAI.AiOutlineSetting
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
