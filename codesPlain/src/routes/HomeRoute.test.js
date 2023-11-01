import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter } from "react-router";
import HomeRoute from "./HomeRoute";
import { createServer } from "../test/server";

createServer([
  {
    path: "/api/repositories",
    method: "get",
    res: (req, res, ctx) => {
      const language = req.url.searchParams.get("q").split("language:")[1];
      return {
        items: [
          { id: 1, full_name: `${language}_1` },
          { id: 2, full_name: `${language}_2` },
        ],
      };
    },
  },
]);

test("renders two links for each language", async () => {
  render(
    <MemoryRouter>
      <HomeRoute></HomeRoute>
    </MemoryRouter>
  );

  //Loop over each language
  //For each language, make sure we see two links
  //Assert that the links have the appropriate full name

  const languages = [
    "javascript",
    "typescript",
    "rust",
    "go",
    "python",
    "java",
  ];

  for (let language of languages) {
    const links = await screen.findAllByRole("link", {
      name: new RegExp(`${language}_`),
    });
    expect(links).toHaveLength(2);
  }
});

const pause = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
