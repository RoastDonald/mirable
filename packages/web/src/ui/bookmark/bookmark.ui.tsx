import React from 'react'
import classnames from 'classnames';
import {ReactComponent as BookmarkIcon}  from '../../assets/icons/bookmark.svg';


type BookmarkProps = {
    className:string;
    size?: 'small' | 'medium' | 'large';
}

const Bookmark = ({ className, size='small'}:BookmarkProps) => {

    const resolveClassName = ()=>{
        return classnames('bookmark', size, {
          [className]: className,
        });
    }

    const renderedIcon = ()=><BookmarkIcon className={resolveClassName()}/>;

    return (
        <div className="icon">
            {renderedIcon()}
        </div>
    )
}

export default Bookmark; 
