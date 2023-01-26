import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import "@testing-library/jest-dom";

import Orders from "../src/Orders";
import dayjs from "dayjs";

test("Empty Orders", async function () {
  renderWithProviders(<Orders orders={[]} />);

  await waitFor(() => screen.queryByText("Orders"));

  expect(screen.queryByText("Orders")).toBeInTheDocument();
});

test("Show Orders", async function () {
  const orders = [
    {
      date: dayjs().toISOString(),
      price: 87
    }
  ];
  renderWithProviders(<Orders orders={orders} />);

  await waitFor(() => screen.queryByText("Orders"));

  expect(screen.queryByRole("button")).toBeInTheDocument();
  expect(screen.getByText(/\$87.00/)).toBeInTheDocument();
});
