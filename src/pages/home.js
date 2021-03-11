import { OptForm, Feature } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';

function Home() {
    const { Input, Button, Text } = OptForm;
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programmes and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel at any time
                    </Feature.SubTitle>
                    <OptForm>
                        <Input placeholder="Email Address" />
                        <Button>Try it now</Button>
                        <Text>
                            Ready to watch? Enter your emal to create or restart
                            your membership
                        </Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}

export default Home;
