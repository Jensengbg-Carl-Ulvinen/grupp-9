import { mount, shallowMount } from '@vue/test-utils'
import ProductCart from '@/components/ProductCart.vue'

// describe('', () => {
//     //cart need to testing by ID of product??
//     it('should display cart when clicked/render cart', () => {
//         const prodCart = wrapper.find('#prodCart')
//         expect(prodCart.element.id).toBe('prodCart')
//     })
// })

describe('ProductCart.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(ProductCart);
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

    it('should display the button for adding multiple product items to the basket', () => {
        const addBtn = wrapper.find('#addBtn')
        expect(addBtn.element.id).toBe('addBtn')
    })

    it('should display the button to remove multiple items from the basket', () => {
        const remBtn = wrapper.find('#remBtn')
        expect(remBtn.element.id).toBe('remBtn')
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

})