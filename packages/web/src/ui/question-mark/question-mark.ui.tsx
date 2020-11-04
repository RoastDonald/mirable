import React from 'react'
import classnames from 'classnames';
import {ReactComponent as QuestionMarkIcon } from '../../assets/icons/question.svg';


type QuestionMarkProps = {
    className:string;
    size?: 'small' | 'medium' | 'large' | 'extra';
}

const QuestionMark = ({ className, size='small'}:QuestionMarkProps) => {

    const resolveClassName = ()=>{
        return classnames('question-mark', size, {
          [className]: className,
        }); 
    }   

    const renderedIcon = ()=><QuestionMarkIcon  className={resolveClassName()}/>;

    return (
        <div className="icon">
            {renderedIcon()}
        </div>
    )
}

export default QuestionMark
