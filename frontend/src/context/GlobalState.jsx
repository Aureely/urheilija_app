import { useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer";
import UrheilijaContext from "./UrheilijaContext";
import { GET_ATHLETES } from "./types";
import axios from "axios";

const GlobalState = (props) => {
  let initialState = {
    athletes: [],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getAthletes = async () => {
    try {
      let res = await axios.get("http://localhost:3001/urheilijat");
      let { data } = res;

      dispatch({ type: GET_ATHLETES, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getAthlete = async (id) => {
    try {
      let sql = "http://localhost:3001/urheilijat/" + id;
      let res = await axios.get(sql);

      console.log("GET_ATHLETE:");

      dispatch({ type: "GET_ATHLETE", payload: res.data });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const addAthlete = async (uusiUrheilija) => {
    try {
      await axios
        .post(`http://localhost:3001/lisaa`, uusiUrheilija)
        .then((res) => {
          dispatch({ type: "ADD_ATHLETE", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const setAthlete = async (id, paivitettyUrheilija) => {
    try {
      await axios
        .put(`http://localhost:3001/urheilijat/${id}`, paivitettyUrheilija)
        .then((res) => {
          dispatch({ type: "EDIT_ATHLETE", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAthlete = async (id) => {
    try {
      let sql = "http://localhost:3001/urheilijat/" + id["id"];
      await axios.delete(sql).then((res) => {
        dispatch({ type: "DELETE_ATHLETE", payload: res.data });
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UrheilijaContext.Provider
      value={{
        athletes: state.athletes,
        getAthletes,
        addAthlete,
        setAthlete,
        deleteAthlete,
        getAthlete,
      }}
    >
      {props.children}
    </UrheilijaContext.Provider>
  );
};
GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalState;
