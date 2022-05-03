import { useState } from 'react';

import { Layout, FlipCard, Card, Round, Title, Text, Button, RadioList, RadioButton, Badge, ImageWrapper } from './components';
import { Star, ThankYou } from './images';

const values = [1, 2, 3, 4, 5];

const RadioGroupInput = ({ name, values, initialValue, onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <RadioList>
            {values.map(item => (
                <RadioButton key={item}>
                    <input type="radio" id={item} name={name} value={item} onChange={handleChange} />
                    <label htmlFor={item}>{item}</label>
                </RadioButton>
            ))}
        </RadioList>
    )
};

const RatingCard = ({ onSubmit }) => {
    const [rating, setRating] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();

        onSubmit(rating);
    };

    return (
        <Card alignment="flex-start" location="front">
            <Round>
                <Star />
            </Round>
            <Title>How did we do?</Title>
            <Text>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Text>
            <RadioGroupInput name="rating" values={values} onChange={setRating} />
            <Button onClick={submitHandler}>Submit</Button>
        </Card>
    );
};

const ThankYouCard = ({ rating }) => (
    <Card alignment="center" location="back">
        <ImageWrapper>
            <ThankYou width="100%" />
        </ImageWrapper>
        <Badge>You selected {rating} out of 5</Badge>
        <Title>Thank you!</Title>
        <Text alignment="center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</Text>
    </Card>
);

export const App = () => {
    const [rating, setRating] = useState(null);

    return (
        <Layout>
            <FlipCard showBack={!!rating}>
                <RatingCard onSubmit={setRating} />
                <ThankYouCard rating={rating} />
            </FlipCard>
        </Layout>
    );
};
