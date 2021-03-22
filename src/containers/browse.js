import { useContext, useState, useEffect } from 'react';
import Fuse from 'fuse.js';

import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { Player, Card, Header, Loading } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('films');
    const [searchTerm, setSearchTerm] = useState('');
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [slideRows, setSlideRows] = useState([]);

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    useEffect(() => {
        console.log(slideRows);
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre'],
        });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        // console.log(slideRows, )
        if (
            slideRows.length > 0 &&
            searchTerm.length > 2 &&
            results.length > 0
        ) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);

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
                        <Header.Link
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >
                            Films
                        </Header.Link>
                        <Header.Link
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >
                            Series
                        </Header.Link>
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
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => {
                    return (
                        <Card
                            key={`${category}-${slideItem.title.toLowerCase()}`}
                        >
                            <Card.Title>{slideItem.title}</Card.Title>
                            <Card.Entities>
                                {slideItem.data.map((item) => {
                                    return (
                                        <Card.Item key={item.docId} item={item}>
                                            <Card.Image
                                                src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                            />
                                            <Card.Meta>
                                                <Card.SubTitle>
                                                    {item.title}
                                                </Card.SubTitle>
                                                <Card.Text>
                                                    {item.description}
                                                </Card.Text>
                                            </Card.Meta>
                                        </Card.Item>
                                    );
                                })}
                            </Card.Entities>
                            <Card.Feature category={category}>
                                <Player>
                                    <Player.Button />
                                    <Player.Video src="/videos/bunny.mp4" />
                                </Player>
                            </Card.Feature>
                        </Card>
                    );
                })}
            </Card.Group>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}
