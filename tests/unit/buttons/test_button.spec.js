import { render, screen, fireEvent } from "@testing-library/vue";
import "@testing-library/jest-dom";

import ActionBtn from "@/components/ActionBtn";
import Home from "@/views/Home";

test("increments likes on click", async () => {
  // The render method returns a collection of utilities to query your component.
  const { container } = render(ActionBtn, {
    props: {
      actionType: "like",
      iconClass: "far fa-heart",
      maxCountDisplay: 102
    }
  });
  const likesBtn = container.querySelector(".md-icon-button");
  await fireEvent.click(likesBtn);
  expect(screen.queryByText("1")).toBeTruthy();

  await fireEvent.click(likesBtn);
  expect(screen.queryByText("2")).toBeTruthy();
});

test("Test comments toggle", async () => {
  const { container } = render(Home);
  const commentBtn = container.querySelector(".md-icon-button.comment");

  await fireEvent.click(commentBtn);
  const commentInput = container.querySelector(".comments");
  expect(commentInput).not.toBe(null);
});

test("likes icon changes on click", async () => {
  const { container } = render(Home);
  const initialLikeBtn = container.querySelector(".far.fa-heart");

  expect(initialLikeBtn).not.toBe(null);

  await fireEvent.click(initialLikeBtn);
  const grayLikeBtn = container.querySelector(".fas.fa-heart");
  expect(grayLikeBtn).not.toBe(null);

  await fireEvent.click(grayLikeBtn);
  expect(grayLikeBtn).toHaveStyle("color: red");
});
