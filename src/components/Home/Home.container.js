import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeView from "./Home.view";

export default function HomeContainer(props) {

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const onPasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    if (e.key === "Enter") {
      if (password === "password") {
        props.login();
        navigate("/list");
      } 
    }
  };

  return (
    <div className="HomeContainer">
      <HomeView password={password} onPasswordInput={onPasswordInput} submit={submit} />
    </div>
  );
}
