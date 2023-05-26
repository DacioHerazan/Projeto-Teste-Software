import { render, screen } from "@testing-library/react";
import Register from "./Register";
import userEvent from "@testing-library/user-event";

describe("Register component", () => {
  //Teste Unitario
  it("should render Register component correctly", () => {
    render(<Register />);
    const element = screen.getByRole("heading", { level: 6 });
    expect(element).toBeInTheDocument();
  });

  //Teste Unitario
  it("should show error message when all the fields are not entered", async () => {
    render(<Register />);
    const buttonElement = screen.getByRole('button', {  name: /register/i})
    await userEvent.click(buttonElement); //dispara o botao de submit do form
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });

  //Teste Unitario
  it("should not show any error message when the component is loaded", () => {
    render(<Register />);
    const alertElement = screen.queryByRole("alert");
    expect(alertElement).not.toBeInTheDocument();
  });

  //Teste Unitario
  it("should show success message when the registration is successful.", async () => {
    render(<Register />);
    const buttonElement = screen.getByRole('button', {  name: /register/i})
    await userEvent.click(buttonElement);
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });

  it("should test for presence of subheading in the component", () => {
    render(<Register />);
    const element = screen.getByRole("heading", {
      name: /please enter your details below to register yourself\./i
    });
    expect(element).toBeInTheDocument();
 });

});