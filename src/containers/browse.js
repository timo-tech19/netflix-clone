import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function BrowseContainer({ slides }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}
            <Header src="joker1">
                <Header.Container>
                    <Header.Group>
                        <Header.Logo
                            to={ROUTES.HOME}
                            alt="Netflix"
                            src={logo}
                        />
                        <Header.Link>Films</Header.Link>
                        <Header.Link>Series</Header.Link>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.Link>
                                        {user.displayName}
                                    </Header.Link>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link
                                        onClick={() =>
                                            firebase.auth().signOut()
                                        }
                                    >
                                        Sign Out
                                    </Header.Link>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Container>
                <Header.Feature>
                    <Header.FeatureCallOut>
                        Watch Joker Now
                    </Header.FeatureCallOut>
                    <Header.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Expedita fugit numquam officiis in. Aliquid illum
                        iusto voluptatem accusamus, molestiae numquam nam
                        placeat non alias nostrum modi veniam odit consectetur
                        nesciunt voluptas dolorum sequi fugiat possimus
                        distinctio illo repudiandae laboriosam error fuga
                        eligendi? Tempore modi ipsa tenetur quibusdam adipisci
                        provident dolore.
                    </Header.Text>
                </Header.Feature>
            </Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}
