import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Path = () => {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  console.log(query);
  return (
    <>
      Id id = {id}
      <h2>{query.get("first")}</h2>
      <h2>{query.get("last")}</h2>
    </>
  );
};

export default Path;
