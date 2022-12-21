import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function CreatePlant() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [amazonLink, setAmazonLink] = useState("");
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="createPlant">
      <h3>Create Plant</h3>
      <form id="todo-form" >
        <label className="plantName">Plant Name:</label>
        <input
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="plantImage">Image:</label>
        <input
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <label className="plantLink">Link:</label>
        <input
          name="amazonLink"
          value={amazonLink}
          onChange={(e) => setAmazonLink(e.target.value)}
        />

        <label className="plantstatus">status:</label>
        <input
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
}

export default CreatePlant;
