import faqsData from '../fixtures/faqs.json';
import { Accordion, OptForm } from '../components';

export function FaqsContainer() {
    const { Title, Header, Body, Item } = Accordion;
    const { Input, Button, Text } = OptForm;
    return (
        <Accordion>
            <Title>Frequently Asked Questions</Title>
            {faqsData.map((item) => {
                return (
                    <Item key={item.id}>
                        <Header>{item.header}</Header>
                        <Body>{item.body}</Body>
                    </Item>
                );
            })}
            <OptForm>
                <Input placeholder="Email Address" />
                <Button>Try it now</Button>
                <Text>
                    Ready to watch? Enter your emal to create or restart your
                    membership
                </Text>
            </OptForm>
        </Accordion>
    );
}
