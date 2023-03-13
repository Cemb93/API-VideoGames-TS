import { useAppDispatch } from "@/Hooks";
import { getNames } from "@/redux/Actions";
import React from "react";
import { useState } from "react";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setName(e.target.value);
  }
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.length) {
      alert("Please enter a game");
    } else {
      dispatch(getNames(name));
      setName("");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Search game ..."
          onChange={(e) => handleInputChange(e)}
        />
        <button type="submit" >Buscar</button>
      </div>
    </form>
  );
}
