import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { supabase } from "./supabaseClient";
import {
  Create,
  Form,
  TextInput,
  RichTextInput,
  SaveButton,
  SelectInput,
} from "react-admin";
import { Grid } from "@mui/material";

const register = (props) => {
  // useEffect(() => {
  //   async function userSignup() {
  //     const { data, error } = await supabase.auth.signUp({
  //       email: "s.slimene19@gmail.com",
  //       password: "123456789",
  //     });
  //     console.log({ data, error });
  //   }
  //   userSignup()
  // }, []);
  return (
    <>
      <SelectInput
        source="category"
        choices={[
          { id: "tech", name: "Tech" },
          { id: "lifestyle", name: "Lifestyle" },
          { id: "people", name: "People" },
        ]}
      />
    </>
  );
};

register.propTypes = {};

export default register;
