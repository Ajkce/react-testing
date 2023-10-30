import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("It shows two inputs and a button", () => {
  //render the component
  render(<UserForm></UserForm>);

  //Manipulate the conponent or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //Assertion - make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("It call the onuseradd when the function is sumbitted", () => {
  const mock = jest.fn();

  render(<UserForm onUserAdd={mock}></UserForm>);

  // const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const name = screen.getByRole("textbox", { name: /name/i });
  const email = screen.getByRole("textbox", { name: /email/i });

  //Simulate Typeing inside the input

  user.click(name);
  user.keyboard("jane");

  user.click(email);
  user.keyboard("jane@jane.com");

  //FInd the button
  const button = screen.getByRole("button");
  user.click(button);

  //Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});
