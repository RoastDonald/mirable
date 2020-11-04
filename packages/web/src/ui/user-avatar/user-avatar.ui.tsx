import React from 'react'
import classnames from 'classnames';
import {ReactComponent as UserAvatarIcon } from '../../assets/icons/user-avatar.svg';


type UserAvatarProps = {
    className:string;
    size?: 'small' | 'medium' | 'large' | 'extra';
}

const UserAvatar = ({ className, size='small'}:UserAvatarProps) => {

    const resolveClassName = ()=>{
        return classnames('UserAvatar', size, {
          [className]: className,
        }); 
    }   

    const renderedIcon = ()=><UserAvatarIcon  className={resolveClassName()}/>;

    return (
        <div className="icon">
            {renderedIcon()}
        </div>
    )
}

export default UserAvatar;
