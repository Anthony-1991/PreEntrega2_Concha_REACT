import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CardUser.css";

const CardUser = ({ char }) => {
  const { image, title, category, price, rating } = char;

  return (
    <Card sx={{ maxWidth: 345 }} className="contornoCard">
      <CardMedia component="img" alt="product" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Producto: {category} | Popularidad: {rating.rate}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Precio: {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Producto</Button>
        <Button size="small">Agregar al Carrito</Button>
      </CardActions>
    </Card>
  );
};

export default CardUser;
