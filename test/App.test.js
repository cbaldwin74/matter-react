import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import "@testing-library/jest-dom";

import App from "../src/App";

test("App Test", async function () {
  renderWithProviders(<App />);

  await waitFor(() => screen.getAllByRole("heading"));

  expect(screen.queryByText("Brand Orders")).toBeInTheDocument();
});
