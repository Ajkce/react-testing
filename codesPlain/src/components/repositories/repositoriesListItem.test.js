import { screen, render, act } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { MemoryRouter } from "react-router-dom";

//This mock function is rendering a fake compoent instead of the Fileicon component which is causing the act warning
// jest.mock("../../components/tree/FileIcon.js", () => {
//   return () => {
//     return "File Icon Component";
//   };
// });

function renderComponent() {
  const repositories = {
    full_name: "Facebook/react",
    language: "Javascript",
    description: "This is the react project",
    owner: "Facebook",
    name: "React",
    html_url: "https://github.com/formio/react",
  };
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repositories}></RepositoriesListItem>
    </MemoryRouter>
  );

  return { repositories };
}

test("Display the github link for the repository", async () => {
  const { repositories } = renderComponent();

  //This will print all the dom in the console to figure out what is being rendered
  // screen.debug();

  //This is actually how you solve act errro by awaiting the component that is causing the act error
  //THe act error is caused when an asynchronous code is changing the state value after the component is being loaded
  await screen.findByRole("img", { name: /javascript/i });

  //This is this last case senario to actually use the act function to pause the code for some seconds using a fake promist
  // await act(async () => {
  //   await pause();
  // });

  const link = screen.getByRole("link", { name: /github repository/i });
  expect(link).toHaveAttribute("href", repositories.html_url);
});

const pause = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
