import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UserCard from "@/components/card/userCard";
describe("Testing User Card component", () => {
  const userData = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };

  const albums = 15;

  it("Test to see if props get passed correctly", async () => {
    render(<UserCard userData={userData} albums={albums} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText(userData.email)).toBeInTheDocument();
    expect(screen.getByText(`${albums} albums`)).toBeInTheDocument();
  });

});
