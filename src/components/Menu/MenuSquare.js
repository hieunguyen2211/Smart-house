import React from 'react';
import RowSquare from '../Content/RowCardSquare';
import './MenuSquare.css';
function MenuSquare(props) {
    return props.data.map(e => (
        <RowSquare data={e.rowData} key={e.id} subTitle={props.subTitle} />
    ));
}

export default MenuSquare;
