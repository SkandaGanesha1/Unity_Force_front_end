import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Form() {
  const [biodata, setBiodata] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "applicants"), biodata);
      navigate("/dashboard");
    } catch (error) {
      alert("Error submitting data: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Biodata Form</h1>
      <input
        type="text"
        placeholder="Name"
        value={biodata.name}
        onChange={(e) => setBiodata({ ...biodata, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={biodata.email}
        onChange={(e) => setBiodata({ ...biodata, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={biodata.phone}
        onChange={(e) => setBiodata({ ...biodata, phone: e.target.value })}
        required
      />
      <textarea
        placeholder="Address"
        value={biodata.address}
        onChange={(e) => setBiodata({ ...biodata, address: e.target.value })}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
