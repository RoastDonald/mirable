import React from 'react'
import classnames from 'classnames';
import {ReactComponent as LikeIcon } from '../../assets/icons/heart.svg';


type LikeProps = {
    className:string;
    size?: 'small' | 'medium' | 'large' | 'extra';
}

const Like = ({ className, size='small'}:LikeProps) => {

    const resolveClassName = ()=>{
        return classnames('like', size, {
          [className]: className,
        }); 
    }   

    const renderedIcon = ()=><LikeIcon  className={resolveClassName()}/>;

    return (
        <div className="icon">
            {renderedIcon()}
        </div>
    )
}

export default Like
