import React from 'react';
import {ArtworkContainer,ArtworkBottom,ArtworkTop, ArtworkCta} from './artwork.styles';
import {ICreator,ITag} from '../../interfaces';
import Like from '../../ui/like/like.ui';
import Bookmark from './../../ui/bookmark/bookmark.ui';
type ArtworkProps = {
    tags?:Array<ITag>;
    imageURL:string,
    isLiked?:boolean;
    isSaved?:boolean;
    creator?:ICreator;
    createdAt?:string;
};

const Artwork = ({imageURL}:ArtworkProps) => {
    return (
        <ArtworkContainer>
            <ArtworkTop>
                <img src={imageURL} alt="artworl"/>
                <ArtworkCta>
                    <Like className="artwork__icon"/>
                    <Bookmark className="artwork__icon"/>
                </ArtworkCta>
            </ArtworkTop>
            <ArtworkBottom>
        bottom
            </ArtworkBottom>
        </ArtworkContainer>
    )
}

export default Artwork
