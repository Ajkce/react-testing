import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  //Render the component

  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  const { container } = render(<UserList users={users}></UserList>);

  //Find all the rows in the table
  //   screen.logTestingPlaygroundURL();

  //   const nameHeader = screen.getByRole("columnheader", { name: /name/i });
  //   const emailHeader = screen.getByRole("columnheader", { name: /email/i });
  //   const rows = screen.getAllByRole("row", {
  //     name: /name email/i,
  //   });

  //   const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //eslint-disable-next-line
  const table = container.querySelector("table");
  //eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  //Assertion: correct numnber of rows in the table
  expect(rows).toHaveLength(2);
});
// test("render the email and the name of the user", () => {
//   render(<UserList></UserList>);
// });
