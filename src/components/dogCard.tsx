//This is an example component so you can get things going and take a look at some of Material-UIs features.
//You should probably delete or modify this to start your project!
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { IAppState } from "../store";
import { loadDogAction } from "../ducks/actions/dogActions";
import { CardContent, CardMedia, CircularProgress, Typography, Card } from "@mui/material";
import { AppDispatch } from "..";

const styles = {
  root: {
    minWidth: 500,
    minHeight: 500,
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40%",
  },
  image: {
    height: 0,
    paddingTop: "0%",
  },
  img: {
    width: 500,
    height: 500,
  },
};

export default function DogCard() {
  //this object represents the classes that we defined

  //here we declare what we want to take from the redux store with the useSelector() hook
  //every time one of these properties is updated on the store, our component will re-render to reflect it
  const dogPic = useSelector((state: IAppState) => state.dogState.image);
  const loading = useSelector((state: IAppState) => state.dogState.loading);
  const errorMessage = useSelector((state: IAppState) => state.dogState.errorMessage);
  //this hook allows us to access the dispatch function
  const dispatch = useDispatch<AppDispatch>();
  //here we define simple stateless components for the card image and error messages
  //notice how we dispatch the call to end the loading of the image based on the img element's onLoad event
  const cardImage = (src: string) => (
    <CardMedia sx={styles.image}>
      <img
        alt="doggo"
        width={styles.img.width}
        height={styles.img.height}
        onLoad={() => dispatch(loadDogAction(false))}
        src={src}
      ></img>
    </CardMedia>
  );

  const cardError = (message: string) => <Typography>{message}</Typography>;

  return (
    <Card sx={styles.root}>
      {dogPic ? cardImage(dogPic) : ""}
      <CardContent sx={styles.cardContent}>
        {!loading && !dogPic && !errorMessage ? <Typography>Waiting for doggo...</Typography> : ""}
        {loading ? <CircularProgress size="80px" color="primary"></CircularProgress> : ""}
        {errorMessage && !dogPic && !loading ? cardError(errorMessage) : ""}
      </CardContent>
    </Card>
  );
}
