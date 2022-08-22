import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";
import TableExemplo from "./TableExemplo";

export default function AccordionExemplo() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1" fontWeight="bold">Exemplo de entrada</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" className="left-align-text">
            Exemplo de entrada para o programa:
            <blockquote className="italic-text body-text">
              <TableExemplo />
              <br />
              Fonte: OBI.{" "}
              <b>Sessão Pratique Programação Nível 2</b>. Disponível em:
              <Link href="https://olimpiada.ic.unicamp.br/pratique/p2/2021/f3/falha/" target="_blank" rel="noopener">
                https://olimpiada.ic.unicamp.br/pratique/p2/2021/f3/falha/
              </Link>
              . Acesso em: 21/08/2022.
            </blockquote>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
