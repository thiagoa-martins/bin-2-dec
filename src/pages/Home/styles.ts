import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .wrapper {
    max-width: 602px;
    text-align: center;
    margin: 0 0.5rem;

    .logo {
      color: ${({ theme }) => theme.COLORS.CYAN_50};
      font-size: 2rem;

      > span {
        color: ${({ theme }) => theme.COLORS.CYAN_400};
      }
    }

    h1 {
      text-transform: uppercase;
      color: ${({ theme }) => theme.COLORS.CYAN_50};
      font-size: 2rem;
      margin: 3rem 0 4rem;
    }

    form {
      input {
        background-color: ${({ theme }) => theme.COLORS.CYAN_500};
        color: ${({ theme }) => theme.COLORS.CYAN_100};
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1.5rem 0 1.5rem 4.5rem;
        margin-bottom: 1.5rem;
        border-style: none;
        border-radius: 4px;
        background-repeat: no-repeat;
        background-position: 24px center;
        width: 100%;

        ::placeholder {
          color: ${({ theme }) => theme.COLORS.CYAN_100};
          font-weight: bold;
          font-size: 1.5rem;
        }
      }

      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      .btn-convert {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.CYAN_900};
        background-color: ${({ theme }) => theme.COLORS.CYAN_100};
        width: 100%;
        padding: 0.5rem;
        border-style: none;
        border-radius: 4px;
      }
    }

    .result {
      display: none;
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.COLORS.CYAN_50};
      margin-top: 3rem;

      > span {
        color: ${({ theme }) => theme.COLORS.CYAN_400};
      }
    }
  }
`;
