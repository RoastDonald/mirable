import React  from 'react'
import classnames from 'classnames';
import {ReactComponent as PlayIcon} from '../../assets/icons/play.svg';
import {ReactComponent as StopIcon} from '../../assets/icons/pause.svg';


type AudioControllProps = {
    className:string;
    size?: 'small' | 'medium' | 'large' | 'extra';
    onClick:()=>void;
    isPlaying:boolean;
}
const AudioControll = ({size="small",className,isPlaying,onClick}:AudioControllProps) => {
    const resolveClassName = ()=>{
        return classnames('audio-controll', size, {
          [className]: className,
        }); 
    } 
    const renderedIcon = ()=>!isPlaying? <PlayIcon  className={resolveClassName()}/>: <StopIcon className={resolveClassName()}/>;
    return (
        <div className="icon" onClick={onClick}>
            
            {renderedIcon()}
        </div>
    )
}

export default AudioControll
