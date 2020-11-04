import React from 'react'
import { PageContentOutter,PageContentInner } from './page -content.styles'


type PageContentProps = {
    children: React.ReactNode
}
const PageContent = ({children}:PageContentProps) => {
    return (
        <PageContentOutter>
                {children}
        </PageContentOutter>
    )
}

export default PageContent
