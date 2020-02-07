import React from 'react';
import Item from './Card';
import './Row.css';
function Row() {
    return (
        <div className="row-item-container">
            <Item name="Parlor" iconName="parlor" />
            <Item name="Bedroom" iconName="bed" />
            <Item name="Bath" iconName="bath" />
        </div>
    );
}

export default Row;
