import { Button, Card } from 'react-bootstrap';

export default function Item ({product}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img className='CardImg' variant="top" src={product.image}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         <p>Stock: {product.stock}</p>
         <p>Precio: {product.price}</p>
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
  );
}
