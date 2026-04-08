import { render, screen } from "@testing-library/react";
import Kategori from "@/pages/produk";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(() => ({ data: null, error: null, isLoading: true })),
}))

jest.mock("next/dynamic", () => () => () => <div data-testid="dynamic-produk">Loading...</div>)

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<Kategori />);
    expect(screen.getByTestId("title").textContent).toBe("Product Page");
    expect(page).toMatchSnapshot()
  })
})
