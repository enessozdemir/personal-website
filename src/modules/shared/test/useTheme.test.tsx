import { describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useTheme from "../hooks/useTheme";

describe("useTheme Hook", () => {
  it("should toggle theme between light and dark", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toEqual("dark");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toEqual("light");
  });
});
