import { render, screen, fireEvent } from '@testing-library/vue'
import ActionBtn from '@/components/ActionBtn'
import Home from '@/views/Home'


test('increments likes on click', async () => {
    // The render method returns a collection of utilities to query your component.
    const { container } = render(ActionBtn, { actionType: "like", iconClass: "far fa-heart"})
    const likesBtn = container.querySelector(".md-icon-button")

    await fireEvent.click(likesBtn)
    expect(screen.queryByText('1')).toBeTruthy()

    await fireEvent.click(likesBtn)
    expect(screen.queryByText('2')).toBeTruthy()
})

test('increments comments count on click', async () => {
    const { container } = render(ActionBtn, {actionType: "comment", iconClass: "far fa-comment"})
    const commentBtn = container.querySelector(".md-icon-button")

    await fireEvent.click(commentBtn)
    expect(screen.queryByText('1')).toBeTruthy()

    await fireEvent.click(commentBtn)
    expect(screen.queryByText('2')).toBeTruthy()
})

test('likes icon changes on click', async () => {
    const { container } = render(Home)
    const initialLikeBtn = container.querySelector(".far.fa-heart")

    expect(initialLikeBtn).not.toBe(null)
    
    await fireEvent.click(initialLikeBtn)
    const grayLikeBtn = container.querySelector(".fas.fa-heart")
    expect(grayLikeBtn).not.toBe(null)

    await fireEvent.click(grayLikeBtn)
    const redLikeBtn = container.querySelector("i.fas.fa-heart[style*='color: red;']")
    expect(redLikeBtn).not.toBe(null)
})