import Card from 'react-bootstrap/Card';
import '../style/css/App.css';

function CardMenu() {
  // const [box, setBox] = useBox(0);
  //   let YellowBtn = styled.button`
  //   background: ${(props) => props.bg};
  //   color: black;
  //   padding: 10px;
  // `;

  return (
    <>
      {['Light'].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '168px', height: '164px' }}
          className="box"
        >
          <Card.Body>
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>Text</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardMenu;
