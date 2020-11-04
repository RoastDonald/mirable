import styled from 'styled-components';
import { ContentCategoriesWrapper } from '../../components/content-categories/content-categories.styles';
import {ButtonDropdownContainer} from '../../components/filter-btn/filter-btn.styles';


export const PageFillterContainer = styled.div`
    margin-top:8rem;
    display:flex;
    align-items:center;
    justify-content:space-between;

    ${ContentCategoriesWrapper} {
        flex: 0 0 50%;
        justify-content:center;
        display:flex;
    }

    ${ButtonDropdownContainer} {
        flex: 0 0 15%;
    }

    & > div {
        flex: 0 0 11%;
    }
    
`;