import { fireEvent, render, screen } from '@testing-library/vue'
import { expect } from 'vitest'
import Counter from '../../src/components/Counter.vue'

describe('tests Counter', () => {
    // test('should render the component', () => {
    //     const { getByText } = render(Counter, {
    //         props: {
    //             /* ... */
    //         }
    //     })

    //     getByText('Counter')
    // })

    // test('should do match with the snapshot with render', () => {
    //     const { container } = render(Counter)

    //     expect(container).toMatchSnapshot()
    // })

    // test('should do match with the snapshot with shallowMount', () => {
    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()
    // })

    test('should render h2 with the defect value', () => {
        render(Counter)

        const h2 = screen.getByRole('heading', { level: 2 })

        expect(h2.innerHTML).toBe('Counter')

        // screen.debug()
    })

    test('should have 100 in tag p is the defect value', () => {
        const { container } = render(Counter)

        const pTags = container.querySelectorAll('p')
        expect(pTags[2].innerHTML).toBe('100')

        const p = screen.getByTestId('counter')
        expect(p.innerHTML).toBe('100')

        // screen.debug()
    })

    test('should increment and decrement the counter', async () => {
        render(Counter)

        const counter = screen.getByTestId('counter')
        const incrementBtn = screen.getByTestId('incrementBtn')
        const decrementBtn = screen.getByTestId('decrementBtn')

        await fireEvent.click(incrementBtn)

        expect(counter.innerHTML).toBe('101')

        await fireEvent.click(decrementBtn)
        await fireEvent.click(decrementBtn)

        expect(counter.innerHTML).toBe('99')
    })

    test('should set the defect value', () => {
        const start = 12

        render(Counter, { props: { start } })

        const counter = screen.getByTestId('counter')

        expect(counter.innerHTML).toBe(start.toString())

        // screen.debug()
    })

    test('should display the title prop', () => {
        const title = 'Custom title'
        render(Counter, {
            props: { title }
        })

        expect(screen.getByRole('heading').innerHTML).toBe(title)
    })
})