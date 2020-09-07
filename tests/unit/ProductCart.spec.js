import { mount, shallowMount } from '@vue/test-utils'
import ProductCart from '@/components/ProductCart.vue'
import checkout from '@/components/checkout.vue'
import data from '../../src/server/db.json'

// import VueRouter from 'vue-router'

// describe('', () => {
//     //cart need to testing by ID of product??
//     it('should display cart when clicked/render cart', () => {
//         const prodCart = wrapper.find('#prodCart')
//         expect(prodCart.element.id).toBe('prodCart')
//     })
// })

describe('Functional tests for ProductCart', () => {
    let wrapper;
    const $router = { push: jest.fn()}
    const $route = {params: {productId: 1}}
    const localStorageMock = {setItem: jest.fn(), getItem: jest.fn()};
    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
            writable: true
        })
        wrapper = shallowMount(ProductCart, {mocks: {$router, $route}});
    })

    // it('should open checkout component by clicking button "Lägga till"', async () => {
    //     const basketBtn = wrapper.find('#basketBtn')
    //     await basketBtn.trigger('click')

    //     expect($router.push).toHaveBeenCalledWith('/checkout')
    // })

    it('should add item into localstorage', async () => {
        const basketBtn = wrapper.find('#basketBtn')
        await basketBtn.trigger('click')

        const expected = JSON.stringify([{'model': data['models'][0].model, "color": data['colors'][0].color, "quantity": 1}])

        expect(localStorageMock.setItem).toHaveBeenCalledWith("orders", expected)
    })
})

describe('UX/UI tests for ProductCart.vue', () => {
    let wrapper;
    const $router = { push: jest.fn()}
    const $route = {params: {productId: 1}}
    beforeEach(() => {
        wrapper = shallowMount(ProductCart, {mocks: {$router, $route}});
    })

    it('should have the cart component', () => {
        const cart = wrapper.findComponent(ProductCart)
        expect(cart.exists()).toBe(true)
    })

    it('should display picture of the product', () => {
        const prodImg = wrapper.find('#prodImg')
        expect(prodImg.element.id).toBe('prodImg')
    })

    it('should display adding product button to the basket', () => {
        const basketBtn = wrapper.find('#basketBtn')
        expect(basketBtn.element.id).toBe('basketBtn')
    })

    it('should display select for a choice of product models', () => {
        const selectModel = wrapper.find('#selectModel')
        expect(selectModel.element.id).toBe('selectModel')
    })

    it('should display select for a choice of product colors', () => {
        const selectColor = wrapper.find('#selectColor')
        expect(selectColor.element.id).toBe('selectColor')
    })

    it('should display the price of product', () => {
        const price = wrapper.find('#price')
        expect(price.element.id).toBe('price')
    })

    it('should display information about product', () => {
        const prodInfo = wrapper.find('#prodInfo')
        expect(prodInfo.element.id).toBe('prodInfo')
    })

    it('should display information about delivery', () => {
        const delInfo = wrapper.find('#delInfo')
        expect(delInfo.element.id).toBe('delInfo')
    })
})