import { Card, Title, Subheading, Paragraph } from '../deps';

const Info: React.FC = () => {
  return (
    <Card>
      <Card.Content>
        <Title>CityApp</Title>
        <Subheading>Made by Teemu Kalmari</Subheading>
        <Paragraph>In this app you can add cities and add specific locations to that city.</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Info;