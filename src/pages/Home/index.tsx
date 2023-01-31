import { useEffect } from "react";
import { Container } from "./styles";
import listNumbersIcon from "../../assets/list-numbers.svg";

export const Home = () => {
  useEffect(() => {
    const input = document.querySelector("input");
    if (input) input.focus();
  }, []);

  const handleValidateInput = (inputBinary: HTMLInputElement) => {
    const span = document.querySelector(".feedback");
    const result = document.querySelector(".result");

    const binaryIsValid = /^[0-1]{1,8}$/.test(inputBinary.value);

    if (!binaryIsValid) {
      inputBinary.style.outline = "2px solid #ECFEFF";

      if (result) result.textContent = "";

      if (span)
        span.textContent =
          "Não é um binário válido (0 e 1) ou ultrapassa 8 caracteres.";
      return;
    }

    if (span) span.textContent = "";
    if (result?.textContent) result.textContent = "";
    inputBinary.style.outline = "";

    return binaryIsValid;
  };

  const convertBinaryToDecimal = (inputValue: string) => {
    let binaryToDecimal = 0;

    for (let i = 0; i < inputValue.length; i++) {
      binaryToDecimal +=
        Number(inputValue[i]) * 2 ** (inputValue.length - 1 - i);
    }

    return binaryToDecimal;
  };

  return (
    <Container>
      <div className="wrapper">
        <span className="logo">
          B<span>2</span>D
        </span>

        <h1>Converta binários para decimais</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="number"
            placeholder="Informe um binário"
            name="binary"
            id="binary"
            style={{ backgroundImage: `url('${listNumbersIcon}')` }}
            onChange={(e) => {
              handleValidateInput(e.target);
            }}
          />

          <span className="feedback"></span>

          <button
            className="btn-convert"
            onClick={() => {
              const input = document.querySelector("input");
              const result = document.querySelector(".result");

              if (!input) return;

              const binaryIsValid = handleValidateInput(input);

              if (!binaryIsValid) {
                input.focus();
                return;
              }

              const decimal = convertBinaryToDecimal(input.value);

              const html = `${input.value} BIN = <span>${decimal} DEC</span>`;

              result?.insertAdjacentHTML("beforeend", html);

              input.value = "";
              input.focus();
            }}
          >
            Converter
          </button>
        </form>

        <span className="result"></span>
      </div>
    </Container>
  );
};
