import React from 'react'
import SVGInline from 'react-svg-inline';
import classnames from 'classnames';
import bookmarkIcon from '../../assets/icons/heart.svg';


type BookmarkProps = {
    className:string;
    size?: 'small' | 'medium' | 'large';
}

const Bookmark = ({ className, size='small'}:BookmarkProps) => {

    const resolveClassName = ()=>{
        return classnames('bookmark', `bookmark${size}`, {
          [className]: className,
        });
    }

    const renderedIcon = ()=><SVGInline svg={bookmarkIcon} className="bookmark__icon"/>;

    return (
        <div className={resolveClassName()}>
            {renderedIcon()}
        </div>
    )
}

export default Bookmark; 
