import { render, screen } from "@testing-library/vue";

import Home from "@/views/Home";

describe("Test initial style and structure", () => {
  test("Has like and comment icons", () => {
    const { container } = render(Home);

    expect(container.querySelector(".far.fa-heart")).not.toBe(null);
    expect(container.querySelector(".far.fa-comment")).not.toBe(null);
  });

  test("Has Sara and Gabriel users on cards", async () => {
    render(Home);

    screen.queryAllByText("Sara");
    screen.queryByText("Gabriel");
  });

  test("Has correct product and price tags", async () => {
    render(Home);

    // product names
    screen.queryByText("Brown Bear Cushion");
    screen.queryByText("Mountain Fox Notebook");

    // prices
    screen.queryByText("18.90");
    screen.queryByText("12.90");
  });
});
