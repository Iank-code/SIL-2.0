import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductCard from "@/components/card/productCard";
describe("Testing Product Card component", () => {
  const picData = {
    id: 1,
    title: "This is a test data",
    image: "/agreement.svg",
  };
  it("Test to see if props get passed correctly in <ProductCard />", async () => {
    render(
      <ProductCard
        id={picData.id}
        title={picData.title}
        image={picData.image}
      />
    );

    expect(screen.getByText("This is a test data")).toBeInTheDocument();
    expect(screen.getByText(picData.title)).toBeInTheDocument();
  });
});
