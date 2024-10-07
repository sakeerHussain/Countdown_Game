import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState();

  const PlayerName = useRef();

  function handleClick() {
    setEnteredPlayerName(PlayerName.current.value);
    PlayerName.current.value = "";
  }
  return (
    <section>
      <h2>Welcome {enteredPlayerName ?? "unKnown entity"} </h2>
      <p>
        <input ref={PlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
