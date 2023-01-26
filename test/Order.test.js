import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import "@testing-library/jest-dom";

import Order from "../src/Order";
import dayjs from "dayjs";

test("Display Order", async function () {
  const price = 99;
  const testOrder = {
    date: dayjs().toISOString(),
    price
  };

  const order = {
    ...testOrder,
    index: 0
  };

  renderWithProviders(<Order order={order} />, {
    preloadedState: {
      orders: {
        data: [
          {
            name: "test brand",
            orders: [testOrder]
          }
        ]
      }
    }
  });

  await waitFor(() => screen.queryAllByRole("listitem"));

  const priceRegex = new RegExp(`\\$${price.toString()}.00`, "i");
  expect(screen.getByText(priceRegex)).toBeInTheDocument();
});

test("Delete Order", async function () {
  const brandName = "test brand";
  const price = 99;
  const testOrder = {
    date: dayjs().toISOString(),
    price
  };

  const order = {
    ...testOrder,
    index: 0
  };

  const mockDeletehandler = jest.fn().mockName("handleBrandDelete");
  renderWithProviders(
    <Order brand={brandName} order={order} onDelete={mockDeletehandler} />
  );

  const priceRegex = new RegExp(`\\$${price.toString()}.00`, "i");
  await waitFor(() => screen.getByText(priceRegex));

  fireEvent.click(screen.getByText("Delete"));

  expect(mockDeletehandler).toHaveBeenCalled();
});
