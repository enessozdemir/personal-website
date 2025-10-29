import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import useTheme from "../../shared/hooks/useTheme";
import ThemeToggle from "../components/ThemeToggle";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";

vi.mock("../../shared/hooks/useTheme", () => ({
  default: vi.fn(),
}));

describe("ThemeToggle Component", () => {
  it("renders correct icon and toggles theme on click", () => {
    const toggleTheme = vi.fn();

    vi.mocked(useTheme).mockReturnValue({
      theme: "dark",
      toggleTheme,
    });

    render(<ThemeToggle />);

    expect(screen.getByTestId("sun-icon")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));

    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});
