import React from "react";
/* import { Link } from 'react-router-dom';   */
/* import * as React from 'react'; */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ info }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={info.name} 
        height="140"
        image={ "./../img/"+info.imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        #{info.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ${info.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalle del producto</Button>
      </CardActions>
    </Card>
  );
}
/* 
const Item = ({ info }) => {
    return (

        <div className="col-md-3 mt-3 card card-product">
        <Link to={`/product/${info.id}`}>
          <img src={ "./../img/"+info.imagen} className="card-img-top" alt={info.name} />
        </Link>
        <div className="card-body">
          <h4 className="card-title text-center">
            <b>{info.name}</b>
          </h4>
          <p className="card-text">${info.precio}</p>
          <p>#{info.category}</p>
          <Link to={`/product/${info.id}`}>
            <button className="btn btn-primary">Ver detalle del producto</button>
          </Link>
        </div>
      </div>
  ); 
};

export default Item;
 */