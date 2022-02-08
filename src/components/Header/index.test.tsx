import { render, screen } from "@testing-library/react";
import Header from "./index";

test("Load and display content", () => {
  render(<Header />);
  expect(screen.getByRole("heading")).toHaveTextContent("Moviebox");
});

test("Load and display search bar", () => {
  const handleSearch = jest.fn();
  render(<Header onSearch={handleSearch} />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});
