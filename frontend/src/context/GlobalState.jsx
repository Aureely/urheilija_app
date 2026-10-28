import { useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "./AppReducer";
import YhteystiedotContext from "./UrheilijaContext";
import { GET_ATHLETES } from "./types";
import axios from "axios";

const GlobalState = (props) => {
  let initialState = {
    athletes: [],
  };

  const [state, dispatch] = useReduser(AppReducer, initialState);
};
