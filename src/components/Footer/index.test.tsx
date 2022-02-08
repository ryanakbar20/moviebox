import { render, screen } from "@testing-library/react";
import Footer from "./index";

test("Load and display content", () => {
  render(<Footer />);
  expect(
    screen.getByText("Copyright@2022 Rian Akbar Ferdiansyah")
  ).toBeInTheDocument();
});
