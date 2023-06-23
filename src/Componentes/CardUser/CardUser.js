import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./CardUser.css";

const CardUser = ({ char }) => {
  const { image, title, category, price, rating } = char;

  return (
    <Card sx={{ maxWidth: 345 }} className="contornoCard">
      <CardActionArea>
        <CardMedia
          className="imagenCard"
          component="img"
          height="300"
          alt="product"
          image={image}
        />
        <CardContent
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            height={90}
            textAlign="center"
          >
            {title}
          </Typography>
          <Typography variant="body2" className="letraProducto">
            Producto: {category} | Popularidad: {rating.rate}
          </Typography>
          <Typography
            variant="body2"
            /* color="text.primary" */
            className="letraPrecio"
          >
            Precio: {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Ver Producto</Button>
          <Button variant="contained">
            Agregar al Carrito <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
