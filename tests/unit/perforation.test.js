import { expect, test } from 'vitest'
import { 
    crp_factor_per,
    wbc_factor_per,
    duration_factor_per,
    temp_factor_per,
    age_factor_per,
    gender_factor_per,
    neutrophils_factor_per
} from "../../functions/perforation.js";

class Risk_factor_item {
  constructor(value) {
    this.value = value;
  }
}

// crp_factor_per
test('crp < 10', () => {
  const crp = new Risk_factor_item(6.4);
  expect(crp_factor_per(crp)).toBe(0.440942028985507)
})

test('crp > 10 and <= 30', () => {
  const crp = new Risk_factor_item(22);
  expect(crp_factor_per(crp)).toBe(0.54289667896679)
})

test('crp > 30 and <= 50', () => {
  const crp = new Risk_factor_item(48);
  expect(crp_factor_per(crp)).toBe(0.964814814814815)
})

test('crp > 50 and <= 100', () => {
  const crp = new Risk_factor_item(65);
  expect(crp_factor_per(crp)).toBe(1.25094968827026)
})

test('crp > 100 and <= 200', () => {
  const crp = new Risk_factor_item(181);
  expect(crp_factor_per(crp)).toBe(1.26839826839827)
})

test('crp > 200', () => {
  const crp = new Risk_factor_item(346);
  expect(crp_factor_per(crp)).toBe(1.74962962962963)
})

test('crp empty string', () => {
  const crp = new Risk_factor_item('');
  expect(crp_factor_per(crp)).toBe(1)
})

test('crp nonsense string', () => {
  const crp = new Risk_factor_item('whatever');
  expect(crp_factor_per(crp)).toBe(1)
})

// wbc_factor_per
test('wbc <= 7', () => {
  const wbc = new Risk_factor_item(3.6);
  expect(wbc_factor_per(wbc)).toBe(0.422995780590717)
})

test('wbc > 7 and <= 10', () => {
  const wbc = new Risk_factor_item(8.9);
  expect(wbc_factor_per(wbc)).toBe(0.566636582430806)
})

test('wbc > 10 and <= 14', () => {
  const wbc = new Risk_factor_item(12);
  expect(wbc_factor_per(wbc)).toBe(0.856175972927242)
})

test('wbc > 14 and <= 19', () => {
  const wbc = new Risk_factor_item(18);
  expect(wbc_factor_per(wbc)).toBe(1.104292067432)
})

test('wbc > 19 and <= 25', () => {
  const wbc = new Risk_factor_item(22);
  expect(wbc_factor_per(wbc)).toBe(1.39175757575758)
})

test('wbc > 25', () => {
  const wbc = new Risk_factor_item(31);
  expect(wbc_factor_per(wbc)).toBe(1.4198347107438)
})

test('wbc empty string', () => {
  const wbc = new Risk_factor_item('');
  expect(wbc_factor_per(wbc)).toBe(1)
})

test('wbc nonsense string', () => {
  const wbc = new Risk_factor_item('veit ekkert');
  expect(wbc_factor_per(wbc)).toBe(1)
})

// duration_factor_per
test('duration = 1', () => {
  const duration = new Risk_factor_item(1);
  expect(duration_factor_per(duration)).toBe(0.474562363238512)
})

test('duration = 2', () => {
  const duration = new Risk_factor_item(2);
  expect(duration_factor_per(duration)).toBe(1.0277837760023)
})

test('duration = 3', () => {
  const duration = new Risk_factor_item(3);
  expect(duration_factor_per(duration)).toBe(1.17471686562596)
})

test('duration = 4', () => {
  const duration = new Risk_factor_item(4);
  expect(duration_factor_per(duration)).toBe(1.19734848484848)
})

test('duration > 4', () => {
  const duration = new Risk_factor_item(7);
  expect(duration_factor_per(duration)).toBe(1.081592039801)
})

test('duration not an int', () => {
  const duration = new Risk_factor_item(1.1);
  expect(duration_factor_per(duration)).toBe(1)
})

test('duration empty string', () => {
  const duration = new Risk_factor_item('');
  expect(duration_factor_per(duration)).toBe(1)
})

test('duration nonsense string', () => {
  const duration = new Risk_factor_item('no idea');
  expect(duration_factor_per(duration)).toBe(1)
})

// temp_factor_per
test('temp <= 37', () => {
  const temp = new Risk_factor_item(35.7);
  expect(temp_factor_per(temp)).toBe(0.435666666666667)
})

test('temp > 37 and <= 37.2', () => {
  const temp = new Risk_factor_item(37.2);
  expect(temp_factor_per(temp)).toBe(0.474780701754386)
})

test('temp > 37.2 and <= 37.5', () => {
  const temp = new Risk_factor_item(37.45);
  expect(temp_factor_per(temp)).toBe(0.701867816091954)
})

test('temp > 37.5 and <= 38', () => {
  const temp = new Risk_factor_item(37.7);
  expect(temp_factor_per(temp)).toBe(1.06887052341598)
})

test('temp > 38', () => {
  const temp = new Risk_factor_item(40.9);
  expect(temp_factor_per(temp)).toBe(1.3030303030303)
})

test('temp empty string', () => {
  const temp = new Risk_factor_item('');
  expect(temp_factor_per(temp)).toBe(1)
})

test('temp nonsense string', () => {
  const temp = new Risk_factor_item('whatever');
  expect(temp_factor_per(temp)).toBe(1)
})

// age_factor_per
test('age >= 0 and <= 10', () => {
  const age = new Risk_factor_item(4);
  expect(age_factor_per(age)).toBe(1.33121916842847)
})

test('age > 10 and <= 20', () => {
  const age = new Risk_factor_item(19);
  expect(age_factor_per(age)).toBe(1.03406542489111)
})

test('age > 20 and <= 30', () => {
  const age = new Risk_factor_item(24);
  expect(age_factor_per(age)).toBe(0.765710382513661)
})

test('age > 30 and <= 40', () => {
  const age = new Risk_factor_item(38);
  expect(age_factor_per(age)).toBe(0.6147030651341)
})

test('age > 40', () => {
  const age = new Risk_factor_item(55);
  expect(age_factor_per(age)).toBe(1)
})

test('age empty string', () => {
  const age = new Risk_factor_item('');
  expect(age_factor_per(age)).toBe(1)
})

test('age nonsense string', () => {
  const age = new Risk_factor_item('am running out of ideas');
  expect(age_factor_per(age)).toBe(1)
})

// gender_factor_per
test('gender = male', () => {
  const gender = new Risk_factor_item('male');
  expect(gender_factor_per(gender)).toBe(1.05232423739886)
})

test('gender = female', () => {
  const gender = new Risk_factor_item('female');
  expect(gender_factor_per(gender)).toBe(0.838363139592648)
})

test('gender = N/A', () => {
  const gender = new Risk_factor_item('N/A');
  expect(gender_factor_per(gender)).toBe(1)
})

// neutrophils_factor_per
test('neutrophils >= 0 and <= 50', () => {
  const neutrophils = new Risk_factor_item(44);
  expect(neutrophils_factor_per(neutrophils)).toBe(0.40625)
})

test('neutrophils > 50 and <= 75', () => {
  const neutrophils = new Risk_factor_item(60);
  expect(neutrophils_factor_per(neutrophils)).toBe(0.611057068741894)
})

test('neutrophils > 75 and <= 85', () => {
  const neutrophils = new Risk_factor_item(82);
  expect(neutrophils_factor_per(neutrophils)).toBe(1.04329004329004)
})

test('neutrophils > 85', () => {
  const neutrophils = new Risk_factor_item(99);
  expect(neutrophils_factor_per(neutrophils)).toBe(1.26150500217486)
})

test('neutrophils empty string', () => {
  const neutrophils = new Risk_factor_item('');
  expect(neutrophils_factor_per(neutrophils)).toBe(1)
})

test('neutrophils nonsense string', () => {
  const neutrophils = new Risk_factor_item('ich weiss nicht');
  expect(neutrophils_factor_per(neutrophils)).toBe(1)
})