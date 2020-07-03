import React from 'react';
import { Icon } from 'antd';
import { TiBackspaceOutline } from 'react-icons/ti';
export const menu = [
    {
        id: 1,
        col: [
            {
                id: 1,
                content: 1
            },
            {
                id: 2,
                content: 2
            },
            {
                id: 3,
                content: 3
            }
        ]
    },
    {
        id: 2,
        col: [
            {
                id: 1,
                content: 4
            },
            {
                id: 2,
                content: 5
            },
            {
                id: 3,
                content: 6
            }
        ]
    },
    {
        id: 3,
        col: [
            {
                id: 1,
                content: 7
            },
            {
                id: 2,
                content: 8
            },
            {
                id: 3,
                content: 9
            }
        ]
    },
    {
        id: 4,
        col: [
            {
                id: 1,
                icon: <Icon type="check" style={{ fontSize: '3vh' }} />,
                type: 'enter'
            },
            {
                id: 2,
                content: 0
            },
            {
                id: 3,
                icon: (
                    <TiBackspaceOutline
                        style={{
                            fontSize: '5vh'
                        }}
                    />
                ),
                type: 'backspace'
            }
        ]
    }
];
