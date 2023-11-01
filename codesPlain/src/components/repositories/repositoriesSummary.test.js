import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("Displays information about the repository", () => {
  const repositories = {
    language: "javascript",
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };
  render(<RepositoriesSummary repository={repositories}></RepositoriesSummary>);

  for (let key in repositories) {
    const value = repositories[key];
    const element = screen.getByText(new RegExp(value));
    expect(element).toBeInTheDocument();
  }

  const language = screen.getByText("javascript");
  expect(language).toBeInTheDocument();
});
