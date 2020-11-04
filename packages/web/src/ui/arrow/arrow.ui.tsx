import React, { CSSProperties } from 'react'
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';
import classnames from 'classnames';

type ArrowProps = {
    className:string;
    size?: 'small' | 'medium' | 'large' | 'extra';
    isInverted?:boolean;
}

const Arrow = ({className,size="small",isInverted=false}:ArrowProps) => {
    const resolveClassName = ()=>{
        return classnames('arrow', size, {
          [className]: className,
        }); 
    } 
    const invertting:any | null = isInverted?{transform: [{ rotate: '180deg'}]}: null;

    return (
        <div className="icon">
            <ArrowIcon style={invertting} className={resolveClassName()}/>
        </div>
    )
}

export default Arrow
