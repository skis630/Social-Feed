import { render, screen, fireEvent } from "@testing-library/vue";
import { getNodeText } from "@testing-library/dom";

import Card from "@/components/Card";

test("new comment", async () => {
  const { container } = render(Card, {
    props: {
      user: "sara",
      productImgUrl: "www.example.com",
      avatarImgUrl: "www.example2.com",
      desc: "Brown Bear Cushion",
      price: "18.90"
    }
  });
  const commentBtn = container.querySelector(".comment.md-icon-button");

  await fireEvent.click(commentBtn);
  const commentInput = screen.getByPlaceholderText("Write your comment here");
  expect(commentInput).not.toBe(null);

  const newComment = "My first comment";
  await fireEvent.update(commentInput, newComment);

  const sendCommentBtn = screen.getByTitle("Add comment");
  await fireEvent.click(sendCommentBtn);
  expect(getNodeText(container.querySelector(".far.fa-comment span"))).toBe(
    "1"
  );

  const anotherNewComment = "My second comment";
  await fireEvent.update(commentInput, anotherNewComment);
  await fireEvent.click(sendCommentBtn);
  expect(getNodeText(container.querySelector(".far.fa-comment span"))).toBe(
    "2"
  );
});
