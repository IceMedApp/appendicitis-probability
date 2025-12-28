import { expect, test } from 'vitest'
import { 
    sensitivity,
    specificity,
    app_prob_multiplier_appendix_not_visible,
    ppv_imaging,
    npv_imaging,
    accuracy_imaging
} from "../../functions/imaging.js";

class Risk_factor_item {
  constructor(value) {
    this.value = value;
  }
}

class hidden_item {
  constructor(value) {
    this.innerText = value;
  }
}

// sensitivity
test('imaging = good, visible = N/A', () => {
  const imaging = new Risk_factor_item('good');
  const visible = new Risk_factor_item('N/A');
  expect(sensitivity(imaging, visible)).toBe(0.9032)
})

test('imaging = poor, visible = N/A', () => {
  const imaging = new Risk_factor_item('poor');
  const visible = new Risk_factor_item('N/A');
  expect(sensitivity(imaging, visible)).toBe(0.5758)
})

test('imaging = ct, visible = N/A', () => {
  const imaging = new Risk_factor_item('ct');
  const visible = new Risk_factor_item('N/A');
  expect(sensitivity(imaging, visible)).toBe(0.9642)
})

test('imaging = good, visible = yes', () => {
  const imaging = new Risk_factor_item('good');
  const visible = new Risk_factor_item('yes');
  expect(sensitivity(imaging, visible)).toBe(0.9655)
})

test('imaging = poor, visible = yes', () => {
  const imaging = new Risk_factor_item('poor');
  const visible = new Risk_factor_item('yes');
  expect(sensitivity(imaging, visible)).toBe(0.9167)
})

test('imaging = ct, visible = yes', () => {
  const imaging = new Risk_factor_item('ct');
  const visible = new Risk_factor_item('yes');
  expect(sensitivity(imaging, visible)).toBe(0.9886)
})

test('imaging = good, visible = no', () => {
  const imaging = new Risk_factor_item('good');
  const visible = new Risk_factor_item('no');
  expect(sensitivity(imaging, visible)).toBe(0.2)
})

test('imaging = poor, visible = no', () => {
  const imaging = new Risk_factor_item('poor');
  const visible = new Risk_factor_item('no');
  expect(sensitivity(imaging, visible)).toBe(0.0513)
})

test('imaging = ct, visible = no', () => {
  const imaging = new Risk_factor_item('ct');
  const visible = new Risk_factor_item('no');
  expect(sensitivity(imaging, visible)).toBe(0.5385)
})

// specificity
test('imaging = good, visible = N/A', () => {
  const imaging = new Risk_factor_item('good');
  const visible = new Risk_factor_item('N/A');
  expect(specificity(imaging, visible)).toBe(0.9529)
})

test('imaging = poor, visible = N/A', () => {
  const imaging = new Risk_factor_item('poor');
  const visible = new Risk_factor_item('N/A');
  expect(specificity(imaging, visible)).toBe(0.9735)
})

test('imaging = ct, visible = N/A', () => {
  const imaging = new Risk_factor_item('ct');
  const visible = new Risk_factor_item('N/A');
  expect(specificity(imaging, visible)).toBe(0.9838)
})

test('imaging = good, visible = yes', () => {
  const imaging = new Risk_factor_item('good');
  const visible = new Risk_factor_item('yes');
  expect(specificity(imaging, visible)).toBe(0.9048)
})

test('imaging = poor, visible = yes', () => {
  const imaging = new Risk_factor_item('poor');
  const visible = new Risk_factor_item('yes');
  expect(specificity(imaging, visible)).toBe(0.8421)
})

test('imaging = ct, visible = yes', () => {
  const imaging = new Risk_factor_item('ct');
  const visible = new Risk_factor_item('yes');
  expect(specificity(imaging, visible)).toBe(0.9767)
})

test('imaging = good, visible = no', () => {
  const imaging = new Risk_factor_item('good');
  const visible = new Risk_factor_item('no');
  expect(specificity(imaging, visible)).toBe(1)
})

test('imaging = poor, visible = no', () => {
  const imaging = new Risk_factor_item('poor');
  const visible = new Risk_factor_item('no');
  expect(specificity(imaging, visible)).toBe(0.9924)
})

test('imaging = ct, visible = no', () => {
  const imaging = new Risk_factor_item('ct');
  const visible = new Risk_factor_item('no');
  expect(specificity(imaging, visible)).toBe(1)
})

// app_prob_multiplier_appendix_not_visible
test('imaging = good', () => {
  const imaging = new Risk_factor_item('good');
  expect(app_prob_multiplier_appendix_not_visible(imaging)).toBe(0.209622)
})

test('imaging = poor', () => {
  const imaging = new Risk_factor_item('poor');
  expect(app_prob_multiplier_appendix_not_visible(imaging)).toBe(0.565054)
})

test('imaging = ct', () => {
  const imaging = new Risk_factor_item('ct');
  expect(app_prob_multiplier_appendix_not_visible(imaging)).toBe(0.488759)
})

// ppv_imaging
test('app_prob can be parsed to float', () => {
  const app_prob_hidden = new hidden_item('0.6842');
  expect(ppv_imaging(0.945, 0.8765, app_prob_hidden)).toBe(0.9431111586951768)
})

test('app_prob cant be parsed to float', () => {
  const app_prob_hidden = new hidden_item('this is not right');
  expect(ppv_imaging(0.945, 0.8765, app_prob_hidden)).toBe(NaN)
})

// npv_imaging
test('app_prob can be parsed to float', () => {
  const app_prob_hidden = new hidden_item('0.3842');
  expect(npv_imaging(0.835, 0.6475, app_prob_hidden)).toBe(0.8628223840596723)
})

test('app_prob cant be parsed to float', () => {
  const app_prob_hidden = new hidden_item('this is not right');
  expect(npv_imaging(0.835, 0.6475, app_prob_hidden)).toBe(NaN)
})

// accuracy_imaging
test('app_prob can be parsed to float', () => {
  const app_prob_hidden = new hidden_item('0.7381');
  expect(accuracy_imaging(0.989, 0.8976, app_prob_hidden)).toBe(0.9650623399999999)
})

test('app_prob cant be parsed to float', () => {
  const app_prob_hidden = new hidden_item('this is not right');
  expect(accuracy_imaging(0.989, 0.8976, app_prob_hidden)).toBe(NaN)
})