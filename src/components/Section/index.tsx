import React from 'react';

//STYLE
import { Container, Content } from './styles';

//INTERFACE
interface Props{
  variant: 'blue' | 'beige' | 'white' | 'black';
  title:string;
  description:string;
}

const Section: React.FC<Props> = ({variant, title, description}) => {
  return (
    <Container className={variant}>
      <Content>
        <h2> {title} </h2>
        <p> {description} </p>
      </Content>
    </Container>
  )
}

export default Section;