import { expect, test } from 'vitest'
import {
    crp_factor_app,
    wbc_factor_app,
    duration_factor_app,
    temp_factor_app,
    age_factor_app,
    gender_factor_app,
    neutrophils_factor_app,
    pain_factor_app,
    rbd_tender_factor_app,
    local_factor_app,
    anorexia_factor_app,
    nausea_factor_app,
    ua_factor_app,
    rbc_select_factor_app,
    wbc_select_factor_app,
    culture_factor_app,
    app_probability,
    app_probability_final_touches,
    app_prob_correction
} from '../../functions/appendicitis'

class Risk_factor_item {
  constructor(value) {
    this.value = value;
  }
}

// app_probability
test('risk < 1', () => {
  expect(app_probability(0.4)).toBe(0.19)
})

test('risk > 1', () => {
  expect(app_probability(2.5)).toBe(0.79)
})

test('risk = 1', () => {
  expect(app_probability(1)).toBe(0.49)
})

// crp_factor_app
test('crp < 10', () => {
  const crp = new Risk_factor_item(6.4);
  expect(crp_factor_app(crp)).toBe(0.741195658058578)
})

test('crp > 10', () => {
  const crp = new Risk_factor_item(13);
  expect(crp_factor_app(crp)).toBe(1.17909895565026)
})

test('crp = 10', () => {
  const crp = new Risk_factor_item(10);
  expect(crp_factor_app(crp)).toBe(1.17909895565026)
})

test('crp empty string', () => {
  const crp = new Risk_factor_item('');
  expect(crp_factor_app(crp)).toBe(1)
})

test('crp nonsense string', () => {
  const crp = new Risk_factor_item('whatever');
  expect(crp_factor_app(crp)).toBe(1)
})

// wbc_factor_app
test('wbc < 7', () => {
  const wbc = new Risk_factor_item(4.2);
  expect(wbc_factor_app(wbc)).toBe(0.489695087521175)
})

test('wbc > 7 and <= 10', () => {
  const wbc = new Risk_factor_item(9.7);
  expect(wbc_factor_app(wbc)).toBe(0.655250440096987)
})

test('wbc > 10 and <= 14', () => {
  const wbc = new Risk_factor_item(14);
  expect(wbc_factor_app(wbc)).toBe(1.09508850034108)
})

test('wbc > 14 and <= 19', () => {
  const wbc = new Risk_factor_item(14.1);
  expect(wbc_factor_app(wbc)).toBe(1.71923165401426)
})

test('wbc > 19 and <= 25', () => {
  const wbc = new Risk_factor_item(22.6);
  expect(wbc_factor_app(wbc)).toBe(2.25244010647737)
})

test('wbc > 25', () => {
  const wbc = new Risk_factor_item(38.94363);
  expect(wbc_factor_app(wbc)).toBe(1.74223602484472)
})

test('wbc empty string', () => {
  const wbc = new Risk_factor_item('');
  expect(wbc_factor_app(wbc)).toBe(1)
})

test('wbc nonsense string', () => {
  const wbc = new Risk_factor_item('whatnot');
  expect(wbc_factor_app(wbc)).toBe(1)
})