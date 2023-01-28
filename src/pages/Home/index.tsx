import { Container } from "./styles";
import listNumbersIcon from "../../assets/list-numbers.svg";

export const Home = () => {
  return (
    <Container>
      <div className="wrapper">
        <span className="logo">
          B<span>2</span>D
        </span>

        <h1>Converta binários para decimais</h1>

        <form action="">
          <input
            type="number"
            placeholder="Informe um binário"
            name="binary"
            style={{ backgroundImage: `url('${listNumbersIcon}')` }}
          />
          <button className="btn-convert">Converter</button>
        </form>

        <span className="result">111000 BIN = <span>56 DEC</span></span>
      </div>
    </Container>
  );
};
