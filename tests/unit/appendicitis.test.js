import { expect, test } from 'vitest'
import { app_probability } from '../../functions/appendicitis'

test('risk below 1', () => {
  expect(app_probability(0.4)).toBe(0.19)
})

test('risk over 1', () => {
  expect(app_probability(2.5)).toBe(0.79)
})

test('risk = 1', () => {
  expect(app_probability(1)).toBe(0.49)
})