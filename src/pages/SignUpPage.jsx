import { Link } from "react-router-dom";
import styled from "styled-components";
import MyWalletLogo from "../components/MyWalletLogo";
import { useState } from "react";


export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SingUpContainer>
      <form>
        <MyWalletLogo />

        <input
          placeholder="Nome"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />

        <input
          placeholder="E-mail"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />

        <input
          placeholder="Senha"
          type="password"
          autocomplete="new-password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />

        <input
          placeholder="Confirme a senha"
          type="password"
          autocomplete="new-password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          required
        />

        <button type="submit">Cadastrar</button>
      </form>

      <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
    </SingUpContainer>
  );
}

function sendUserData(){

}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
