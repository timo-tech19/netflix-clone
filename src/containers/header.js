import React from 'react';
import { Header } from '../components';

function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Button />
            </Header.Frame>
        </Header>
    );
}

export default HeaderContainer;
