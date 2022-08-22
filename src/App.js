import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Paper,
  TextareaAutosize,
  Toolbar,
  Typography,
} from "@mui/material";
import AccordionEnunciado from "./components/AccordionEnunciado";
import receberInputProcessamento from "./utils/processamentoInput";
import AccordionExemplo from "./components/AccordionExemplo";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    setOutput(receberInputProcessamento(input));
  }

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h3">
                Desafio OBI 2021 - Falha de Segurança
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        <br />
        <Typography variant="body1" className="body-text" gutterBottom>
          Este programa implementa a solução para o problema "Falha de
          Segurança" da XXIV Olimpíada Brasileira de Informática (2021), Fase 3,
          consistente na verificação do número de pares ordenados (A,B)
          distintos de usuários tal que o usuário A, usando sua senha, consegue
          acesso à conta do usuário B. No caso, há uma falha de segurança no
          sistema, na qual se a senha digitada contiver, como subcadeia
          contígua, a senha correta, o sistema permite, indevidamente, o acesso.
        </Typography>

        <br />
        <Typography variant="body1" className="left-align-text">
          <b>Autor:</b> Ricardo Paiva
        </Typography>

        <Typography variant="body1" className="left-align-text">
          <b>Link para o código da solução no GitHub:</b>{" "}
          <Link
            href="https://github.com/paivaricardo/desafio-falha-seguranca-obi-2021-cli"
            target="blank"
            rel="noopener"
          >
            https://github.com/paivaricardo/desafio-falha-seguranca-obi-2021-cli
          </Link>
        </Typography>

        <br />
        <AccordionEnunciado />
        <AccordionExemplo />

        <br />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Digite aqui a entrada para o problema."
          style={{ maxWidth: 400 }}
          value={input}
          onChange={handleInput}
        />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Submeter
        </Button>

        <br />
        <Paper className="texto-saida">
          <Typography variant="body1" fontWeight="bold" className="texto-saida">
            {output}
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
