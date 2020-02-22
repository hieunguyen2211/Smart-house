import React from 'react';
import './CardRec.css';
function CardRec(props) {
    const { id } = props;
    const { title } = props;

    const cardClassName =
        id !== 1
            ? id === props.sizeData
                ? 'cardRec-content cardRec-last'
                : 'cardRec-content cardRec'
            : 'cardRec-content cardRec-first';
    return title === 'Sign out' ? (
        <div
            className={cardClassName}
            onClick={() => {
                localStorage.removeItem('access_token');
            }}
        >
            <img
                src={props.iconURL}
                alt="cardRec-icon"
                style={props.iconStyle}
            />
            <div className="cardRec-title-wrapper">
                <p className="cardRec-title">{props.title}</p>
                {props.subTitle && (
                    <p className="cardRec-subTitle">{props.subTitle}</p>
                )}
            </div>
            {props.subComponent}
        </div>
    ) : (
        <div className={cardClassName}>
            <img
                src={props.iconURL}
                alt="cardRec-icon"
                style={props.iconStyle}
            />
            <div className="cardRec-title-wrapper">
                <p className="cardRec-title">{props.title}</p>
                {props.subTitle && (
                    <p className="cardRec-subTitle">{props.subTitle}</p>
                )}
            </div>
            {props.subComponent}
        </div>
    );
}

export default CardRec;
