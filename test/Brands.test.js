import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import "@testing-library/jest-dom";

import Brands from "../src/Brands";

test("Default heading for Brands list", async function () {
  renderWithProviders(<Brands />);

  await waitFor(() => screen.getAllByRole("heading"));

  expect(screen.queryByText("Brands")).toBeInTheDocument();
});

test("Configured heading for Brands list", async function () {
  renderWithProviders(<Brands title="Test Title" />);

  await waitFor(() => screen.getAllByRole("heading"));

  expect(screen.queryByText("Test Title")).toBeInTheDocument();
});

test("Brand Delete", async function () {
  const brandName = "delete test brand";
  const preloadedState = {
    brands: {
      names: [brandName]
    },
    orders: {
      data: [
        {
          name: brandName,
          orders: []
        }
      ]
    }
  };

  renderWithProviders(<Brands title="Delete Test " />, {
    preloadedState
  });

  await waitFor(() => screen.queryByText(brandName));
  fireEvent.click(screen.getByRole("button", { name: "Delete" }));

  expect(screen.queryByText(brandName)).not.toBeInTheDocument();
});

test("Add Brand", async function () {
  const newBrandName = "New Brand";
  const preloadedState = {
    brands: {
      names: []
    },
    orders: {
      data: []
    }
  };

  renderWithProviders(<Brands title="Delete Test " />, {
    preloadedState
  });

  await waitFor(() => screen.queryByRole("button", { name: "Add Brand" }));
  const input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: newBrandName } });
  fireEvent.click(screen.getByRole("button", { name: "Add Brand" }));

  expect(screen.getByText(newBrandName)).toBeInTheDocument();
});
