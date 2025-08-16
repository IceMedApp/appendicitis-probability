import { expect, test } from 'vitest'
import { 
    sensitivity,
    specificity,
    increased_prevelance,
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
test('imaging = good', () => {
  const imaging = new Risk_factor_item('good');
  expect(sensitivity(imaging)).toBe(0.9032)
})

test('imaging = poor', () => {
  const imaging = new Risk_factor_item('poor');
  expect(sensitivity(imaging)).toBe(0.5758)
})

test('imaging = ct', () => {
  const imaging = new Risk_factor_item('ct');
  expect(sensitivity(imaging)).toBe(0.9231)
})

// specificity
test('imaging = good', () => {
  const imaging = new Risk_factor_item('good');
  expect(specificity(imaging)).toBe(0.9529)
})

test('imaging = poor', () => {
  const imaging = new Risk_factor_item('poor');
  expect(specificity(imaging)).toBe(0.9735)
})

test('imaging = ct', () => {
  const imaging = new Risk_factor_item('ct');
  expect(specificity(imaging)).toBe(0.9663)
})

// increased_prevelance
test('imaging = good and appendix_visible = N/A', () => {
  const imaging = new Risk_factor_item('good');
  const appendix_visible = new Risk_factor_item('N/A');
  expect(increased_prevelance(imaging, appendix_visible)).toBe(1.0287804878)
})

test('imaging = poor and appendix_visible = N/A', () => {
  const imaging = new Risk_factor_item('poor');
  const appendix_visible = new Risk_factor_item('N/A');
  expect(increased_prevelance(imaging, appendix_visible)).toBe(0.9658536585)
})

test('imaging = ct and appendix_visible = N/A', () => {
  const imaging = new Risk_factor_item('ct');
  const appendix_visible = new Risk_factor_item('N/A');
  expect(increased_prevelance(imaging, appendix_visible)).toBe(1)
})

test('imaging = good and appendix_visible = yes', () => {
  const imaging = new Risk_factor_item('good');
  const appendix_visible = new Risk_factor_item('yes');
  expect(increased_prevelance(imaging, appendix_visible)).toBe(1.4518002323)
})

test('imaging = poor and appendix_visible = yes', () => {
  const imaging = new Risk_factor_item('poor');
  const appendix_visible = new Risk_factor_item('yes');
  expect(increased_prevelance(imaging, appendix_visible)).toBe(2.535368389)
})

test('imaging = ct and appendix_visible = yes', () => {
  const imaging = new Risk_factor_item('ct');
  const appendix_visible = new Risk_factor_item('yes');
  expect(increased_prevelance(imaging, appendix_visible)).toBe(1.039)
})

test('imaging = good and appendix_visible = no', () => {
  const imaging = new Risk_factor_item('good');
  const appendix_visible = new Risk_factor_item('no');
  expect(increased_prevelance(imaging, appendix_visible)).toBe(0.2075609756)
})

test('imaging = poor and appendix_visible = no', () => {
  const imaging = new Risk_factor_item('poor');
  const appendix_visible = new Risk_factor_item('no');
  expect(increased_prevelance(imaging, appendix_visible)).toBe(0.5563414634)
})

test('imaging = ct and appendix_visible = no', () => {
  const imaging = new Risk_factor_item('ct');
  const appendix_visible = new Risk_factor_item('no');
  expect(increased_prevelance(imaging, appendix_visible)).toBe(0.5475609756)
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