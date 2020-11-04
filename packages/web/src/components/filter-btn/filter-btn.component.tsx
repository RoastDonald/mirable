import React,{useState,useRef, useCallback} from 'react'
import {ButtonDropdownContainer,ListItem, DropdownList,Dropdown,ButtonDropdownVisiable,ButtonDropdownText} from './filter-btn.styles';
import ArrowIcon from '../../ui/arrow/arrow.ui';
import { CSSTransition } from 'react-transition-group';
type ButtonDropdownProps = {
    items:Array<string>;
};


const ButtonDropdown = ({items}:ButtonDropdownProps) => {
    const dropdownRef = useRef<HTMLElement | null>(null);
    const [isOpen, setOpen] = useState(false);
    const handleClick = ()=>{
        setOpen(true);
    }
    
    const cbHandler = (node: any) => {
        if (dropdownRef.current)
          document.removeEventListener('mousedown', handleDropdownClick);
        if (node) document.addEventListener('mousedown', handleDropdownClick);
    
        dropdownRef.current = node;
      };


      const handleDropdownClick = (e: MouseEvent) => {
        if (dropdownRef?.current?.contains(e.target as Node)) return;
        setOpen(false);
      };

    const dropdownRefCB: React.RefCallback<{}> = useCallback(cbHandler, []);

    return (
       <ButtonDropdownContainer >
        <ButtonDropdownVisiable onClick={handleClick}>
            <ButtonDropdownText>
                popular
            </ButtonDropdownText>
            <ArrowIcon className="dropdown__icon" isInverted={isOpen}/>
        </ButtonDropdownVisiable>
        <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="filter-button-anim"
        unmountOnExit={true}
      >
    <Dropdown ref={dropdownRefCB}>
        <DropdownList>
            {items && items.map((item)=>(
                <ListItem key={item}>
                    <span>{item}</span>
                </ListItem>
            ))}
        </DropdownList>
       </Dropdown>

      </CSSTransition>
    
       </ButtonDropdownContainer>

    )
}

export default ButtonDropdown;
