import React from 'react';
import RowSquare from '../Content/RowCardSquare';
import './MenuSquare.css';
function MenuSquare(props) {
    return (
        <div className="menu-square-container">
            {props.data.map(e => (
                <RowSquare
                    data={e.rowData}
                    key={e.id}
                    subTitle={props.subTitle}
                    heightCard={props.heightCard}
                    amount={e.amount}
                    unit={e.unit}
                />
            ))}
        </div>
    );
}

export default MenuSquare;
