import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("Displays the primary language of the repository", () => {
  const repository = {
    language: "javascript",
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repository}></RepositoriesSummary>);

  const language = screen.getByText("javascript");
  expect(language).toBeInTheDocument();
});
