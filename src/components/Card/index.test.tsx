import { render, screen } from "@testing-library/react";
import Card from "./index";

test("Load and display content", () => {
  const handleClick = jest.fn();
  render(<Card title="Movie Title" date="2021-08-01" onClick={handleClick} />);
  expect(screen.getByRole("img")).toBeInTheDocument();
  expect(screen.getByText("Movie Title")).toBeInTheDocument();
  expect(screen.getByText("2021")).toBeInTheDocument();
});
