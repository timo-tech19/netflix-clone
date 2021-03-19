import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Container>
                    <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
                    <Header.ButtonLink to="/signin">Sign In</Header.ButtonLink>
                </Header.Container>
            </Header>

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.Item>
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.Item>
                </Profiles.List>
            </Profiles>
        </>
    );
}
