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
  //Callback
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };

  render(<UserForm onUserAdd={callback}></UserForm>);

  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  //Simulate Typeing inside the input

  user.click(nameInput);
  user.keyboard("jane");

  user.click(emailInput);
  user.keyboard("jane@jane.com");

  //FInd the button
  const button = screen.getByRole("button");
  user.click(button);

  //Assertion to make sure 'onUserAdd' gets called with email/name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: "jane", email: "jane@jane.com" });
});
