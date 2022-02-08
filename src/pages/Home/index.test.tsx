import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import client from "../../graphql";
import Home from "./index";

test("Load and display content", () => {
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ApolloProvider>
  );
  expect(screen.getByText("Star Wars Special")).toBeInTheDocument();
  expect(screen.getByText("Most Popular")).toBeInTheDocument();
});
