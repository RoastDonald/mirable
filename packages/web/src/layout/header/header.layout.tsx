import React from 'react'
import Button from '../../components/button/button.component';
import Bookmark from '../../ui/bookmark/bookmark.ui';
import Logo from '../../ui/logo/logo.ui';
import {HeaderInner,HeaderOutter, LogoBox, HeaderCta,IconContainer,UserAvatar,ButtonText} from './header.styles';
import Notification from '../../ui/notification/notification.ui';
import UserAvatarIcon from '../../ui/user-avatar/user-avatar.ui';

const Header = () => {
    return (
        <HeaderOutter>
            <HeaderInner>
                <LogoBox>
                    <Logo className="logo__icon"/>
                </LogoBox>
                <HeaderCta>
                    <IconContainer>
                        <Bookmark className="cta__icon" size="medium"/>
                    </IconContainer>
                    <IconContainer>
                        <Notification className="cta__icon" size="medium"/>
                    </IconContainer>
                    <UserAvatar >
                        <UserAvatarIcon className="cta__icon" size="large"/>
                    </UserAvatar>

                    <Button variant="primary" className="cta__btn">
                        <ButtonText>create post</ButtonText>
                    </Button>

                </HeaderCta>
            </HeaderInner>
        </HeaderOutter>
    )
}

export default Header;
