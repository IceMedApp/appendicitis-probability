import { expect, test } from 'vitest'
import {
    app_probability,
    crp_factor_app
} from '../../functions/appendicitis'

class Risk_factor_item {
  constructor(value) {
    this.value = value;
  }
}

test('risk below 1', () => {
  expect(app_probability(0.4)).toBe(0.19)
})

test('risk over 1', () => {
  expect(app_probability(2.5)).toBe(0.79)
})

test('risk = 1', () => {
  expect(app_probability(1)).toBe(0.49)
})

test('crp below 10', () => {
  const crp = new Risk_factor_item(6.4);
  expect(crp_factor_app(crp)).toBe(0.741195658058578)
})