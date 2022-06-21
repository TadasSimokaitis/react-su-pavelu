import { useState } from "react";

export default function UserForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  console.log(userName);
  return (
    <form style={{ display: "flex", flexDirection: "column", padding: "50px" }}>
      <input
        value={userName}
        onChange={(e) => {
          if (e.target.value !== "blbl") {
            setUserName(e.target.value);
          }
        }}
        type="text"
        placeholder="User Name"
      />
      <input
        style={{ marginTop: "20px" }}
        type="text"
        placeholder="User email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (userEmail && userName) {
            alert("FormSubmitted");
            setUserEmail("");
            setUserName("");
          }
        }}
        disabled={!userEmail || !userName}
        style={{ marginTop: "20px" }}
      >
        Submit
      </button>
    </form>
  );
}