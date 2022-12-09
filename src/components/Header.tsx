import React, {FC} from 'react';
import {StyledHeader,Wrapper, HeaderNavigation, HeaderNavigationItem} from "../styles/header";

export const Header:FC = () => {
    return (
        <StyledHeader>
            <Wrapper>
                <HeaderNavigation>
                    <HeaderNavigationItem widthItem={'120px'}>
                        <div className="nav_item_title">BTC</div>
                        <div className="nav_item_price">5023$</div>
                    </HeaderNavigationItem>
                    <HeaderNavigationItem widthItem={'120px'}>
                        <div className="nav_item_title">BTC</div>
                        <div className="nav_item_price">5023$</div>
                    </HeaderNavigationItem>
                    <HeaderNavigationItem widthItem={'120px'}>
                        <div className="nav_item_title">BTC</div>
                        <div className="nav_item_price">5023$</div>
                    </HeaderNavigationItem>
                    <HeaderNavigationItem widthItem={'500px'}>
                        <div className="portfolio_count">
                            134,32 USD +2,38 (1,80 %).
                        </div>
                        <a href="#">Портфельчки</a>
                    </HeaderNavigationItem>
                </HeaderNavigation>
            </Wrapper>
        </StyledHeader>
    );
};
