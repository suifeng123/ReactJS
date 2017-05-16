/**
 * Created by Administrator on 2017/5/15.
 */
import React,{ Component } from 'react';

function ListItem({value}) {
    return (
        <li>
            <span>{value}</span>
        </li>
    )

}

function List({list,title}) {
    return (
        <div>
            <ListTitle title={title} />
            <ul>
                {this.props.list.map((entry,index) => (
                    <ListItem key={'list-{index'} value={entry.text} />
                ))}
            </ul>
        </div>
    )

}