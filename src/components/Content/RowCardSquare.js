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
        />
    ));
    return <div className="row-item-container">{listItem}</div>;
}

export default Row;
