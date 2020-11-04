import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const TagWrapper = styled(Link)`
    margin:2px;
    border-radius:1rem;
    background-color:#FFE2D1;
    min-width:3.5rem;
    min-height:1.5rem;
    border:2px solid #FFDCC7;
    display: flex;
    justify-content: center;
    align-items:center;
    padding:1px 5px;
    text-decoration:none;

`

export const TagInner = styled.span`
    color:#A97458;
    font-size:12;
`;

