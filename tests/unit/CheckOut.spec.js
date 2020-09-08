import {
  shallowMount
} from '@vue/test-utils'
import CheckOut from '@/components/CheckOut.vue'
import data from '../../src/server/db.json'

//Funktionstests
describe('Functional tests for CheckOut.vue', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(CheckOut)
  })

  it('CheckOut page should exist', () => {
    const checkingout = wrapper.findComponent(CheckOut)
    expect(checkingout.exists()).toBe(true)
  })

})

//UX/UI tests
describe('UX/UI tests for CheckOut.vue', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(CheckOut)
  })

  it('should display a button to order', () => {
    const orderBtn = wrapper.find('.button_checkout')
    const expected = orderBtn
    expect(orderBtn).toBe(expected)
  })

  it('Should display a move backwards button', () => {
    const backWardsButton = wrapper.find('.previous')
    const expected = backWardsButton
    expect(backWardsButton).toBe(expected)
  })

  it('should display the total price of order', () => {
    const price = wrapper.find('.total_price')
    const expected = price
    expect(price).toBe(expected)
  })

  it('should display information about delivery', () => {
    const delInfo = wrapper.find('.delInfo')
    const expected = delInfo
    expect(delInfo).toBe(expected)
  })

  it('should display the titles of the products that are added', () => {
    const titleProd = wrapper.find('.title_product')
    const expected = titleProd
    expect(titleProd).toBe(expected)
  })

  it('Should check if there is a button to add an additional product', () => {
    const addProductButton = wrapper.find('.arrow_up')
    const expected = addProductButton
    expect(addProductButton).toBe(expected)
  })

  it('Should check if there is a button to remove a product', () => {
    const delProductButton = wrapper.find('.arrow_down')
    const expected = delProductButton
    expect(delProductButton).toBe(expected)
  })
})
