import React from 'react';
import { Icon } from 'antd';
import './CardRec.css';
function CardRec(props) {
    const cardClassName = props.fill
        ? 'cardRec-row-content-fill'
        : 'cardRec-row-content';
    return (
        <div className={cardClassName}>
            <Icon
                className="cardRec-row-content-first-icon"
                type={props.icon}
            />
            <div className="cardRec-row-title">
                <span>{props.title}</span>
            </div>
            <Icon className="cardRec-row-content-last-icon" type="right" />
        </div>
    );
}

export default CardRec;
