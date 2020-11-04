import React, { Fragment } from 'react'
import ContentCategories from '../../components/content-categories/content-categories.component';
import FilterButton from '../../components/filter-btn/filter-btn.component';
import TagSearchButton from '../../components/tag-search-btn/tag-search-btn.component';
import Header from '../../layout/header/header.layout';
import PageContent from '../../layout/page-content/page-content.layout';
import {PageFillterContainer} from './home.styles';
import DisplayOptions from '../../components/display-options/display-options.component';
import Artwork from '../../components/artwork/artwork.component';
import Waveform from '../../components/waveform/waveform.component';

const test = ['popular','most liked','latest'];
const cat = ['all','artwork','audio','writting','video'];


const HomePage = () => {
    return (
        <Fragment>
            <Header/>
        <PageContent>
            <PageFillterContainer>
                <FilterButton items={test}/>
                <ContentCategories categories={cat} />
                <DisplayOptions/>
            </PageFillterContainer>

            <div>
            <Artwork imageURL='https://instagram.fiev12-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/120997414_352874382731560_6670702999573650351_n.jpg?_nc_ht=instagram.fiev12-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=G2NaBZdIpsEAX-XDCpI&_nc_tp=24&oh=3b948070580e1db8f9dc2d74ab1392ab&oe=5FCD6767'/>
            <Waveform/>
            </div>
        </PageContent>
        </Fragment>
    )
       
}

export default HomePage;
