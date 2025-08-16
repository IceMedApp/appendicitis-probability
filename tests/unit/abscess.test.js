import { expect, test } from 'vitest'
import { 
    crp_factor_abs,
    wbc_factor_abs,
    duration_factor_abs,
    temp_factor_abs,
    age_factor_abs,
    gender_factor_abs,
    neutrophils_factor_abs,
    probability_final_touches
} from "../../functions/abscess.js";

class Risk_factor_item {
  constructor(value) {
    this.value = value;
  }
}

// crp_factor_abs
test('crp < 10', () => {
  const crp = new Risk_factor_item(6.4);
  expect(crp_factor_abs(crp)).toBe(0.569239130434783)
})

test('crp > 10 and <= 30', () => {
  const crp = new Risk_factor_item(22);
  expect(crp_factor_abs(crp)).toBe(0.558763837638376)
})

test('crp > 30 and <= 50', () => {
  const crp = new Risk_factor_item(48);
  expect(crp_factor_abs(crp)).toBe(0.853888888888889)
})

test('crp > 50 and <= 100', () => {
  const crp = new Risk_factor_item(65);
  expect(crp_factor_abs(crp)).toBe(1.11501860712387)
})

test('crp > 100 and <= 200', () => {
  const crp = new Risk_factor_item(181);
  expect(crp_factor_abs(crp)).toBe(1.12301587301587)
})

test('crp > 200', () => {
  const crp = new Risk_factor_item(346);
  expect(crp_factor_abs(crp)).toBe(1.34358024691358)
})

test('crp empty string', () => {
  const crp = new Risk_factor_item('');
  expect(crp_factor_abs(crp)).toBe(1)
})

test('crp nonsense string', () => {
  const crp = new Risk_factor_item('whatever');
  expect(crp_factor_abs(crp)).toBe(1)
})

// wbc_factor_abs
test('wbc <= 7', () => {
  const wbc = new Risk_factor_item(3.6);
  expect(wbc_factor_abs(wbc)).toBe(0.600791139240506)
})

test('wbc > 7 and <= 10', () => {
  const wbc = new Risk_factor_item(8.9);
  expect(wbc_factor_abs(wbc)).toBe(0.729963898916968)
})

test('wbc > 10 and <= 14', () => {
  const wbc = new Risk_factor_item(12);
  expect(wbc_factor_abs(wbc)).toBe(0.863769035532995)
})

test('wbc > 14 and <= 19', () => {
  const wbc = new Risk_factor_item(18);
  expect(wbc_factor_abs(wbc)).toBe(1.02536973833902)
})

test('wbc > 19 and <= 25', () => {
  const wbc = new Risk_factor_item(22);
  expect(wbc_factor_abs(wbc)).toBe(1.23516666666667)
})

test('wbc > 25', () => {
  const wbc = new Risk_factor_item(31);
  expect(wbc_factor_abs(wbc)).toBe(1.03731060606061)
})

test('wbc empty string', () => {
  const wbc = new Risk_factor_item('');
  expect(wbc_factor_abs(wbc)).toBe(1)
})

test('wbc nonsense string', () => {
  const wbc = new Risk_factor_item('veit ekkert');
  expect(wbc_factor_abs(wbc)).toBe(1)
})

// duration_factor_abs
test('duration = 1', () => {
  const duration = new Risk_factor_item(1);
  expect(duration_factor_abs(duration)).toBe(0.569693654266958)
})

test('duration = 2', () => {
  const duration = new Risk_factor_item(2);
  expect(duration_factor_abs(duration)).toBe(0.726959619952494)
})

test('duration = 3', () => {
  const duration = new Risk_factor_item(3);
  expect(duration_factor_abs(duration)).toBe(1.05071548821549)
})

test('duration = 4', () => {
  const duration = new Risk_factor_item(4);
  expect(duration_factor_abs(duration)).toBe(1.2484375)
})

test('duration > 4', () => {
  const duration = new Risk_factor_item(10);
  expect(duration_factor_abs(duration)).toBe(1.19396766169154)
})

test('duration not an int', () => {
  const duration = new Risk_factor_item(1.1);
  expect(duration_factor_abs(duration)).toBe(1)
})

test('duration empty string', () => {
  const duration = new Risk_factor_item('');
  expect(duration_factor_abs(duration)).toBe(1)
})

test('duration nonsense string', () => {
  const duration = new Risk_factor_item('no idea');
  expect(duration_factor_abs(duration)).toBe(1)
})

// temp_factor_abs
test('temp <= 37', () => {
  const temp = new Risk_factor_item(35.7);
  expect(temp_factor_abs(temp)).toBe(0.5637)
})

test('temp > 37 and <= 37.2', () => {
  const temp = new Risk_factor_item(37.2);
  expect(temp_factor_abs(temp)).toBe(0.56984649122807)
})

test('temp > 37.2 and <= 37.5', () => {
  const temp = new Risk_factor_item(37.45);
  expect(temp_factor_abs(temp)).toBe(0.705926724137931)
})

test('temp > 37.5 and <= 38', () => {
  const temp = new Risk_factor_item(37.7);
  expect(temp_factor_abs(temp)).toBe(1.02725694444444)
})

test('temp > 38', () => {
  const temp = new Risk_factor_item(40.9);
  expect(temp_factor_abs(temp)).toBe(1.15)
})

test('temp empty string', () => {
  const temp = new Risk_factor_item('');
  expect(temp_factor_abs(temp)).toBe(1)
})

test('temp nonsense string', () => {
  const temp = new Risk_factor_item('whatever');
  expect(temp_factor_abs(temp)).toBe(1)
})

// age_factor_abs
test('age >= 0 and <= 10', () => {
  const age = new Risk_factor_item(4);
  expect(age_factor_abs(age)).toBe(1.10184108527132)
})

test('age > 10 and <= 20', () => {
  const age = new Risk_factor_item(19);
  expect(age_factor_abs(age)).toBe(1.05465086646279)
})

test('age > 20 and <= 30', () => {
  const age = new Risk_factor_item(24);
  expect(age_factor_abs(age)).toBe(0.798360655737705)
})

test('age > 30 and <= 40', () => {
  const age = new Risk_factor_item(38);
  expect(age_factor_abs(age)).toBe(0.637284482758621)
})

test('age > 40', () => {
  const age = new Risk_factor_item(55);
  expect(age_factor_abs(age)).toBe(1)
})

test('age empty string', () => {
  const age = new Risk_factor_item('');
  expect(age_factor_abs(age)).toBe(1)
})

test('age nonsense string', () => {
  const age = new Risk_factor_item('am running out of ideas');
  expect(age_factor_abs(age)).toBe(1)
})

// gender_factor_abs
test('gender = male', () => {
  const gender = new Risk_factor_item('male');
  expect(gender_factor_abs(gender)).toBe(1.01350193477059)
})

test('gender = female', () => {
  const gender = new Risk_factor_item('female');
  expect(gender_factor_abs(gender)).toBe(0.927198211624441)
})

test('gender = N/A', () => {
  const gender = new Risk_factor_item('N/A');
  expect(gender_factor_abs(gender)).toBe(1)
})

// neutrophils_factor_abs
test('neutrophils >= 0 and <= 50', () => {
  const neutrophils = new Risk_factor_item(44);
  expect(neutrophils_factor_abs(neutrophils)).toBe(0.525)
})

test('neutrophils > 50 and <= 75', () => {
  const neutrophils = new Risk_factor_item(60);
  expect(neutrophils_factor_abs(neutrophils)).toBe(0.716877431906615)
})

test('neutrophils > 75 and <= 85', () => {
  const neutrophils = new Risk_factor_item(82);
  expect(neutrophils_factor_abs(neutrophils)).toBe(1.04907407407407)
})

test('neutrophils > 85', () => {
  const neutrophils = new Risk_factor_item(99);
  expect(neutrophils_factor_abs(neutrophils)).toBe(1.04366028708134)
})

test('neutrophils empty string', () => {
  const neutrophils = new Risk_factor_item('');
  expect(neutrophils_factor_abs(neutrophils)).toBe(1)
})

test('neutrophils nonsense string', () => {
  const neutrophils = new Risk_factor_item('ich weiss nicht');
  expect(neutrophils_factor_abs(neutrophils)).toBe(1)
})

// probability_final_touches
test('probability < 0', () => {
  expect(probability_final_touches(-124.4)).toBe('Less than 1%')
})

test('remainder < 0.5', () => {
  expect(probability_final_touches(0.2548)).toBe('25%')
})

test('remainder >= 0.5', () => {
  expect(probability_final_touches(0.255)).toBe('26%')
})
