import React from 'react';
import CardSquare from './CardSquare';
import './RowCardSquare.css';
function Row(props) {
    const listItem = props.data.map(e => (
        <CardSquare
            name={e.name}
            iconUrl={e.iconUrl}
            key={e.id}
            path={e.path}
            subTitle={props.subTitle}
            heightCard={props.heightCard}
            amount={e.amount}
            unit={e.unit}
        />
    ));
    return <div className="row-item-container">{listItem}</div>;
}

export default Row;
