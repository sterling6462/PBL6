import {
  Card as CardMUI,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./style.module.scss";

export type CardListProps = {
  image: string;
  title: string;
  description: string;
};

export const Card = (props: CardListProps) => {
  const { image, title, description } = props;
  return (
    <CardMUI className={styles.CardMUI}>
      <CardMedia component="img" className={styles.Image} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardMUI>
  );
};
