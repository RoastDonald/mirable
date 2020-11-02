import React from 'react'
import SVGInline from 'react-svg-inline';
import classnames from 'classnames';
import likeIcon from '../../assets/icons/heart.svg';


type LikeProps = {
    className:string;
    size?: 'small' | 'medium' | 'large';
}

const Like = ({ className, size='small'}:LikeProps) => {

    const resolveClassName = ()=>{
        return classnames('like', `like${size}`, {
          [className]: className,
        });
    }

    const renderedIcon = ()=><SVGInline svg={likeIcon} className="like__icon"/>;

    return (
        <div className={resolveClassName()}>
            {renderedIcon()}
        </div>
    )
}

export default Like
