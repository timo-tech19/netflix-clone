import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

function Signup() {
    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = userName === '' || password === '' || email === '';

    const handleSignup = (e) => {
        e.preventDefault();

        //firebase sign up
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user.updateProfile({
                    displayName: userName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
            )
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setUserName('');
                setPassword('');
                setEmail('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="User Name"
                            type="text"
                            value={userName}
                            onChange={({ target }) => setUserName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email Address"
                            value={email}
                            type="email"
                            onChange={({ target }) => setEmail(target.value)}
                        />

                        <Form.Input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <Form.Submit type="submit" disabled={isInvalid}>
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already have an account?{' '}
                        <Form.Link to="/sigin">Sign In Now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

export default Signup;
