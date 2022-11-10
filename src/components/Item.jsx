import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Item({ item }) {
  return (
    <div className="tarjetas">
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"./../img/" + item.imagen} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.descripcion}
        </Card.Text>
        <Button variant="primary"><Link to={"/item/" + item.id}>Mas información</Link> </Button>
      </Card.Body>
    </Card>

      <br />
    </div>
  );
}



