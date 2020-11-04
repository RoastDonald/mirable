import styled from 'styled-components';



export const ContentCategoriesWrapper = styled.div`
    font-size:1.8rem;
`;


export const ListItem  = styled.li`
    text-transform:uppercase;
  
`;

export const CategoriesList = styled.ul`
    display:flex;

    ${ListItem}:not(:last-of-type){
        margin-right:3.6rem;
    }
    
`;
