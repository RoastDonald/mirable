import styled from 'styled-components';



export const ButtonDropdownContainer = styled.div`
font-size:1.6rem;
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.2);
    background-color:#EEEEEE;
    position: relative;
    max-width: max-content;
    color:#0d0d0d;
    border-radius: 5px;

`;

export const ButtonDropdownVisiable = styled.button`
    cursor:pointer;
    outline:none;
    padding: 10px 15px;
    border-radius: 5px;
 




display: flex;
align-items:center;
border:none;
.icon {
    fill:#BDBDBD;
    margin-left:2rem;
}
`;

export const ButtonDropdownText = styled.span`
color:currentColor;
&::first-letter {
    text-transform:uppercase;
}
`;
export const DropdownList = styled.ul`
    text-align: initial;
    padding: 1rem 0;
    font-size: inherit;
    width: 85%;
    color: inherit;
    margin: 0 auto;
`;

export const ListItem = styled.li`
    cursor: pointer;
    position: relative;
    display: flex;
    padding: 5px .5rem;
    transition: all .3s;
    border-radius: 5px;
    color:#494949;

    span {
        &::first-letter{
            text-transform:uppercase;
        }
    }

    &:hover {
        
        background-color:#D9D9D9;
    }

    


`;

export const Dropdown = styled.div`
    cursor: inherit;
    width:100%;
    z-index: 100;
    min-height: 100px;
    border-radius: 1rem;
    top: 0;
    left: 0;
    background-color: #f2f2f2;
    position: absolute;
    box-shadow:inherit;

`;