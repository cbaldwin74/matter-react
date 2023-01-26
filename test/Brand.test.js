import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import "@testing-library/jest-dom";

import Brand from "../src/Brand";

test("Brand item displays brand name", async function () {
  renderWithProviders(<Brand brandName="test brand" />, {
    preloadedState: {
      orders: {
        data: [
          {
            name: "test brand",
            orders: []
          }
        ]
      }
    }
  });

  await waitFor(() => screen.queryAllByRole("button"));

  expect(screen.queryByText("test brand")).toBeInTheDocument();
});

test("Brand delete", async function () {
  const preloadedState = {
    orders: {
      data: [
        {
          name: "test brand",
          orders: []
        }
      ]
    }
  };

  const mockDeletehandler = jest.fn().mockName("handleBrandDelete");

  renderWithProviders(
    <Brand brandName="test brand" onBrandDelete={mockDeletehandler} />,
    {
      preloadedState
    }
  );

  await waitFor(() => screen.queryByText("test brand"));
  fireEvent.click(screen.getByRole("button", { name: "Delete" }));

  expect(mockDeletehandler).toHaveBeenCalled();
});
