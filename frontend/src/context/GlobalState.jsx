import { useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer";
import UrheilijaContext from "./UrheilijaContext";
import { GET_ATHLETES } from "./types";
import axios from "axios";

const API = "http://localhost:3001/urheilijat";

const GlobalState = (props) => {
  const initialState = {
    athletes: [],
    athlete: null,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getAthletes = async () => {
    try {
      const { data } = await axios.get(API);
      dispatch({ type: GET_ATHLETES, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getAthlete = async (id) => {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({ type: "GET_ATHLETE", payload: data });
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const addAthlete = async (uusiUrheilija) => {
    try {
      const { data } = await axios.post(API, uusiUrheilija);
      dispatch({ type: "ADD_ATHLETE", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const setAthlete = async (id, paivitettyUrheilija) => {
    try {
      const { data } = await axios.put(`${API}/${id}`, paivitettyUrheilija);
      dispatch({ type: "EDIT_ATHLETE", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAthlete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      dispatch({ type: "DELETE_ATHLETE", payload: id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UrheilijaContext.Provider
      value={{
        athletes: state.athletes,
        athlete: state.athlete,
        getAthletes,
        getAthlete,
        addAthlete,
        setAthlete,
        deleteAthlete,
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