/**
 * Created by Administrator on 2017/5/15.
 */
import React, { Component } from 'react';

class ListItem extends Component {
    static contextTypes = {
        color: PropTypes.string,
    };
    render() {
        const {value} = this.props;

        return (
            <li style={{ background: this.context.color}}>
                <span>{value}</span>
            </li>
        );
    }
}

class List extends Component {
    static childContextTypes = {
        color: PropTypes.string,
    };
    getChildContext() {
        return {
            color: 'red',
        };
    }

    render() {
        const {list} = this.props;
        return (
            <div>
                <ListTitle title={title} />
                <ul>
                    {list.map((entry,index) => (
                        <ListItem key={'list-${index}'} value={entry.text}/>
                    ))}
                </ul>
            </div>
        )
    }
}

const MyContainer = (WrappedComponent) =>
   class extends Component {
     render() {
         const newProps = {
             text: newText,
         };
         return <WrappedComponent {...this.props}{...newProps}/>
     }
   }



