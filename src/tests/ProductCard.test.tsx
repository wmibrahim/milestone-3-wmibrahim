import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/ProductCard";

test("renders product title", () => {
  render(<ProductCard title="Test Product" price={100} />);
  expect(screen.getByText("Test Product")).toBeInTheDocument();
});
