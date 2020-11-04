import React from 'react'
import classnames from 'classnames';
import {ReactComponent as NotificationIcon } from '../../assets/icons/notification.svg';


type NotificationProps = {
    className:string;
    size?: 'small' | 'medium' | 'large' | 'extra';
}

const Notification = ({ className, size='small'}:NotificationProps) => {

    const resolveClassName = ()=>{
        return classnames('notification', size, {
          [className]: className,
        }); 
    }   

    const renderedIcon = ()=><NotificationIcon  className={resolveClassName()}/>;

    return (
        <div className="icon">
            {renderedIcon()}
        </div>
    )
}

export default Notification;
