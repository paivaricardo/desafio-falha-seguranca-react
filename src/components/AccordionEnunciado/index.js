import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";

export default function AccordionEnunciado() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1" fontWeight="bold">
            Enunciado do problema
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" className="left-align-text">
            Confira o enunciado completo do problema no seguinte link:
          </Typography>
          <Link
            href="https://olimpiada.ic.unicamp.br/pratique/p2/2021/f3/falha/"
            target="blank"
            rel="noopener"
          >
            https://olimpiada.ic.unicamp.br/pratique/p2/2021/f3/falha/
          </Link>
          <blockquote className="italic-text body-text">
            "Entrada: A primeira linha da entrada contém um número inteiro N, o
            número de usuários no sistema. Cada uma das N linhas seguintes
            contém uma senha Si, a senha do i-ésimo usuário. Saída Seu programa
            deve produzir uma única linha, contendo um único inteiro, o número
            de pares ordenados (A,B) de usuários distintos tal que o usuário A,
            usando sua senha, consegue acesso à conta do usuário B. Restrições 1
            ≤ N ≤ 20 000 Si inicia com letra minúscula sem acento e contém
            apenas letras minúsculas sem acento e dígitos de 0 a 9, para 1 ≤ i ≤
            N 1 ≤ comprimento de Si ≤ 10". Fonte: OBI.{" "}
            <b>Sessão Pratique Programação Nível 2</b>. Disponível em:
            <Link
              href="https://olimpiada.ic.unicamp.br/pratique/p2/2021/f3/falha/"
              target="blank"
              rel="noopener"
            >
              https://olimpiada.ic.unicamp.br/pratique/p2/2021/f3/falha/
            </Link>
            . Acesso em: 21/08/2022.
          </blockquote>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
