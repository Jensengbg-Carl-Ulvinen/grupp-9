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
    const $route = {params: {productId: 1}}
    const localStorageMock = {setItem: jest.fn(), getItem: jest.fn()};
    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
            writable: true
        })
        wrapper = shallowMount(ProductCart, {mocks: {$route}});
        jest.clearAllMocks()
    })

    it('should add item into localstorage', async () => {
        const basketBtn = wrapper.find('#basketBtn')
        await basketBtn.trigger('click')

        const expected = JSON.stringify([{'model': data['models'][0].model, "color": data['colors'][0].color, "quantity": 1}])

        expect(localStorageMock.setItem).toHaveBeenCalledWith("orders", expected)
    })

    it('should add correct item into localstorage', async () => {
        const modelSelect = wrapper.find("#selectModel").findAll('option')
        const colorSelect = wrapper.find("#selectColor").findAll('option')
        const quantityInput = wrapper.find("#quantityProd")

        const expectedModel = data['models'][2].model;
        const expectedColor = data['colors'][2].color;
        const expectedQuantity = "13"

        const expectedLocalStorageObject = [{"model": expectedModel, "color": expectedColor, "quantity": expectedQuantity}]

        modelSelect.at(2).setSelected()
        colorSelect.at(2).setSelected()
        quantityInput.setValue(expectedQuantity)

        const basketBtn = wrapper.find('#basketBtn')
        await basketBtn.trigger('click')

        expect(localStorageMock.setItem).toHaveBeenCalledWith("orders", JSON.stringify(expectedLocalStorageObject))
    })
})

describe('UX/UI tests for ProductCart.vue', () => {
    let wrapper;
    const $route = {params: {productId: 1}}
    beforeEach(() => {
        wrapper = shallowMount(ProductCart, {mocks: {$route}});
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

    it('should show correct product name', () => {
        const expectedProductId = 3
        const localWrapper = shallowMount(ProductCart, {mocks: {$route: {params: {productId: expectedProductId}}}});
        const expectedProductName = data['products'][expectedProductId]['name']

        const productNameEl = localWrapper.find("#productName");

        expect(productNameEl.text()).toBe(expectedProductName)
    })
})