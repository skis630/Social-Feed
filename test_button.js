import { render, fireEvent } from '@testing-library/vue'
import ActionBtn from '@/components/ActionBtn'


test('increments likes on click', async () => {
    // The render method returns a collection of utilities to query your component.
    render(ActionBtn, {props: {actionType: "like", iconClass: "far fa-heart"}})

    const likeBtn = screen.querySelector(".md-icon-button")

    await fireEvent.click(likeBtn)

    expect(screen.queryByText('1')).toBeTruthy()

})