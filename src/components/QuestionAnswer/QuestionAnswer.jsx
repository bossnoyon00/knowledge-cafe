import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const QuestionAnswer = () => {
    return (
        <Accordion defaultActiveKey="0">
            <h1 className='bg-info p-4 rounded'>Here some question and answer :</h1>
            <Accordion.Item eventKey="0">
                <Accordion.Header> <h1>what is difference between props and state in react?</h1> </Accordion.Header>
                <Accordion.Body className='bg-danger text-white'>
                    State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>  <h1>how does work useState?</h1> </Accordion.Header>
                <Accordion.Body className='bg-danger text-white'>
                    useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header> <h1>What does useEffect do?</h1> </Accordion.Header>
                <Accordion.Body className='bg-danger text-white'>
                    By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header> <h1>How does react work ?</h1> </Accordion.Header>
                <Accordion.Body className='bg-danger text-white'>
                    <h6> ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

                        It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</h6>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default QuestionAnswer;