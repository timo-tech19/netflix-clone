import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Container>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
                <Header.ButtonLink>Sign In</Header.ButtonLink>
            </Header.Container>
            {children}
        </Header>
    );
}
