import React, { Fragment } from 'react'
import classnames from 'classnames';
import {ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import {ReactComponent as LogoTitleIcon} from '../../assets/icons/mirable.svg';
import {LogoContainer} from './logo.styles';
type LogoProps = {
    className:string;
    size?: 'small' | 'medium' | 'large' | 'extra';
}

const Logo = ({ className, size='small'}:LogoProps) => {

    const resolveClassName = ()=>{
        return classnames('logo', size, {
          [className]: className,
        }); 
    }   

    const renderedIcon = ()=><LogoIcon  className={resolveClassName()}/>;

    return (
                <LogoContainer className="icon">
                    <div className="logo__circle-box">
                    {renderedIcon()}
                    </div>
                        
                    <LogoTitleIcon className="logo__title"/>    
                </LogoContainer>
      
    )
}

export default Logo;
