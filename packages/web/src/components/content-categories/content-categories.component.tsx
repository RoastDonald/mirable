import React from 'react'
import {ContentCategoriesWrapper, ListItem,CategoriesList} from './content-categories.styles'; 
type ContentCategoriesProps = {
    categories:Array<string>;
    className?:string;
}

const ContentCategories = ({categories,...rest}:ContentCategoriesProps) => {
    return (
        <ContentCategoriesWrapper {...rest}>
            <CategoriesList>
                {categories && categories.map((categorie)=>(
                    <ListItem key={categorie}>
                        {categorie}
                    </ListItem>
                ))}
            </CategoriesList>
        </ContentCategoriesWrapper>
    )
}

export default ContentCategories
