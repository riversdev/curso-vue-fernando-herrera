import { describe, test, expect, vi, beforeEach } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import { shallowMount } from '@vue/test-utils'
import Indecision from '../../src/components/Indecision.vue'

describe('tests in Indesicion', () => {
    global.console.log = vi.fn()
    global.fetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => vi.clearAllMocks())

    test('should match with the snapshot', () => {
        const { container } = render(Indecision)

        expect(container).toMatchSnapshot()

        // screen.debug()
    })

    test('shouldnt display if the input is writting', async () => {
        render(Indecision)

        const input = screen.getByRole('textbox')

        await fireEvent.update(input, 'Hello')

        expect(console.log).toHaveBeenCalledTimes(1)
        expect(console.log).toHaveBeenCalledWith({ value: 'Hello' })

        // screen.debug()
    })

    test('should call getAnswer on write the ? simbol', async () => {
        const wrapper = shallowMount(Indecision)
        const getAnswerSpy = vi.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('?')

        expect(getAnswerSpy).toHaveBeenCalledTimes(1)
    })

    test('should do the fetch', async () => {
        render(Indecision)

        const input = screen.getByRole('textbox')

        await fireEvent.update(input, '?')

        expect(fetch).toHaveBeenCalledTimes(1)
    })

    test('should call the fetch with error', async () => {
        const wrapper = shallowMount(Indecision)

        fetch.mockImplementationOnce(() => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')
    })
})