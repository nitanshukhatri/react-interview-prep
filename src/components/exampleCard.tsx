import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RandomDogAction, loadDogAction, loadDogActionList } from "../ducks/actions/dogActions";
import { IAppState } from "../store";
import { AppDispatch } from "..";

const styles = {
  root: {
    width: 275,
    height: 275,
    alignSelf: "middle",
    justifySelf: "start",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2vh",
  },
  button: {
    marginTop: "10px",
    height: "7vh",
    width: "90%",
  },
  input: {
    width: "90%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

export default function SimpleCard() {
  //this object represents the classes that we defined

  //this hook allows us to access the dispatch function
  const dispatch = useDispatch<AppDispatch>();
  //the useState() hook allows our component to hold its own internal state
  //the dogName property isn't going to be used anywhere else, so there's no need to hold it on the redux store
  const [dogName, setDogName] = useState("");
  //here we watch for the loading prop in the redux store. every time it gets updated, our component will reflect it
  const isLoading = useSelector((state: IAppState) => state.dogState.loading);

  //a function to dispatch multiple actions
  const getDog = () => {
    dispatch(loadDogAction(true));
    dispatch(RandomDogAction(dogName));
  };
  useEffect(() => {
    dispatch(loadDogActionList());
  }, []);

  const dogList = useSelector((state: IAppState) => state.dogState.list);
  console.log(Object.keys(dogList));

  return (
    <Card sx={styles.root}>
      <CardHeader
        title={
          <Typography variant="h5" component="h2">
            Find Doggo
          </Typography>
        }
      ></CardHeader>
      <CardContent sx={styles.content}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={Object.keys(dogList) || []}
          onChange={(event, value) => setDogName(value || "")}
          renderInput={(params) => <TextField {...params} label="freeSolo" />}
        />
        <Button onClick={() => getDog()} sx={styles.button} variant="contained" size="large" color="primary">
          {isLoading ? (
            <CircularProgress color="secondary"></CircularProgress>
          ) : (
            <Typography>get {dogName} doggo</Typography>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
