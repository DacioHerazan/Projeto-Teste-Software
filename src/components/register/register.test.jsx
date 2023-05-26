import { render, screen } from "@testing-library/react";
import Register from "./Register";
import userEvent from "@testing-library/user-event";

describe("Register component", () => {
  
  //Teste Unitario
  it("Deve mostrar uma mensagem de erro quando todos os campos não estiverem preenchidos.", async () => {
    render(<Register />);
    const buttonElement = screen.getByRole('button', { name: /register/i })
    await userEvent.click(buttonElement); //dispara o botao de submit do form
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });

  //Teste Unitario
  it("Não deve mostrar nenhuma mensagem de erro quando o componente estiver carregado.", () => {
    render(<Register />);
    const alertElement = screen.queryByRole("alert");
    expect(alertElement).not.toBeInTheDocument();
  });

  //Teste Unitario
  it("Deve mostrar mensagem quando o cadastro for efetuado com sucesso.", async () => {
    render(<Register />);
    const buttonElement = screen.getByRole('button', { name: /register/i })
    await userEvent.click(buttonElement); //Simula click do usuario
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });


  

});