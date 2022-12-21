import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSiteAsync } from "../features/ListSitesSlice";

function CreateSite() {
    const [name, setName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addSiteAsync({ name}));
    setName("");
  };

  return (
    <div>
        <h3>Add a New Site</h3>
        <form id="site-form" onSubmit={handleSubmit}>
      <label className="siteName">Name Site Location:</label>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
    </form>
    </div>
  )
}

export default CreateSite