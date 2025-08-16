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

// duration_factor_app
test('duration = 1', () => {
  const duration = new Risk_factor_item(1);
  expect(duration_factor_app(duration)).toBe(1.0856828425)
})

test('duration = 2', () => {
  const duration = new Risk_factor_item(2);
  expect(duration_factor_app(duration)).toBe(1.27915432265015)
})

test('duration = 3', () => {
  const duration = new Risk_factor_item(3);
  expect(duration_factor_app(duration)).toBe(0.882828181453232)
})

test('duration = 4', () => {
  const duration = new Risk_factor_item(4);
  expect(duration_factor_app(duration)).toBe(0.703230409963674)
})

test('duration > 4', () => {
  const duration = new Risk_factor_item(230);
  expect(duration_factor_app(duration)).toBe(0.515858944050434)
})

test('duration not an int', () => {
  const duration = new Risk_factor_item(1.1);
  expect(duration_factor_app(duration)).toBe(1)
})

test('duration empty string', () => {
  const duration = new Risk_factor_item('');
  expect(duration_factor_app(duration)).toBe(1)
})

test('duration nonsense string', () => {
  const duration = new Risk_factor_item('no idea');
  expect(duration_factor_app(duration)).toBe(1)
})

// temp_factor_app
test('temp <= 37', () => {
  const temp = new Risk_factor_item(35.7);
  expect(temp_factor_app(temp)).toBe(0.684356065275315)
})

test('temp > 37 and <= 37.2', () => {
  const temp = new Risk_factor_item(37.2);
  expect(temp_factor_app(temp)).toBe(0.915303355775024)
})

test('temp > 37.2 and <= 37.5', () => {
  const temp = new Risk_factor_item(37.45);
  expect(temp_factor_app(temp)).toBe(0.98537326804448)
})

test('temp > 37.5 and <= 38', () => {
  const temp = new Risk_factor_item(37.7);
  expect(temp_factor_app(temp)).toBe(1.36687722599288)
})

test('temp > 38', () => {
  const temp = new Risk_factor_item(40.9);
  expect(temp_factor_app(temp)).toBe(1.14670950947694)
})

test('temp empty string', () => {
  const temp = new Risk_factor_item('');
  expect(temp_factor_app(temp)).toBe(1)
})

test('temp nonsense string', () => {
  const temp = new Risk_factor_item('whatever');
  expect(temp_factor_app(temp)).toBe(1)
})

// age_factor_app
test('age >= 0 and <= 10', () => {
  const age = new Risk_factor_item(4);
  expect(age_factor_app(age)).toBe(1.61055486024197)
})

test('age > 10 and <= 20', () => {
  const age = new Risk_factor_item(19);
  expect(age_factor_app(age)).toBe(1.09485815602837)
})

test('age > 20 and <= 30', () => {
  const age = new Risk_factor_item(24);
  expect(age_factor_app(age)).toBe(0.862170121450096)
})

test('age > 30 and <= 40', () => {
  const age = new Risk_factor_item(38);
  expect(age_factor_app(age)).toBe(0.872962879130828)
})

test('age > 40', () => {
  const age = new Risk_factor_item(55);
  expect(age_factor_app(age)).toBe(1)
})

test('age empty string', () => {
  const age = new Risk_factor_item('');
  expect(age_factor_app(age)).toBe(1)
})

test('age nonsense string', () => {
  const age = new Risk_factor_item('am running out of ideas');
  expect(age_factor_app(age)).toBe(1)
})

// gender_factor_app
test('gender = male', () => {
  const gender = new Risk_factor_item('male');
  expect(gender_factor_app(gender)).toBe(1.30908828343121)
})

test('gender = female', () => {
  const gender = new Risk_factor_item('female');
  expect(gender_factor_app(gender)).toBe(0.783833827093994)
})

test('gender = N/A', () => {
  const gender = new Risk_factor_item('N/A');
  expect(gender_factor_app(gender)).toBe(1)
})

// neutrophils_factor_app
test('neutrophils >= 0 and <= 75', () => {
  const neutrophils = new Risk_factor_item(53);
  expect(neutrophils_factor_app(neutrophils)).toBe(0.685687655343828)
})

test('neutrophils > 75', () => {
  const neutrophils = new Risk_factor_item(76);
  expect(neutrophils_factor_app(neutrophils)).toBe(1.47041579621268)
})

test('neutrophils empty string', () => {
  const neutrophils = new Risk_factor_item('');
  expect(neutrophils_factor_app(neutrophils)).toBe(1)
})

test('neutrophils nonsense string', () => {
  const neutrophils = new Risk_factor_item('ich weiss nicht');
  expect(neutrophils_factor_app(neutrophils)).toBe(1)
})

// pain_factor_app
test('pain_rlq = yes', () => {
  const pain_rlq = new Risk_factor_item('yes');
  expect(pain_factor_app(pain_rlq)).toBe(1.1004916504196)
})

test('pain_rlq = no', () => {
  const pain_rlq = new Risk_factor_item('no');
  expect(pain_factor_app(pain_rlq)).toBe(0.446855169839492)
})

test('pain_rlq = N/A', () => {
  const pain_rlq = new Risk_factor_item('N/A');
  expect(pain_factor_app(pain_rlq)).toBe(1)
})

// rbd_tender_factor_app
test('rebound_tender = yes', () => {
  const rebound_tender = new Risk_factor_item('yes');
  expect(rbd_tender_factor_app(rebound_tender)).toBe(1.32162369607523)
})

test('rebound_tender = no', () => {
  const rebound_tender = new Risk_factor_item('no');
  expect(rbd_tender_factor_app(rebound_tender)).toBe(0.71588409529667)
})

test('rebound_tender = N/A', () => {
  const rebound_tender = new Risk_factor_item('N/A');
  expect(rbd_tender_factor_app(rebound_tender)).toBe(1)
})

// local_factor_app
test('localization = yes', () => {
  const localization = new Risk_factor_item('yes');
  expect(local_factor_app(localization)).toBe(2.1934786893697)
})

test('localization = no', () => {
  const localization = new Risk_factor_item('no');
  expect(local_factor_app(localization)).toBe(0.705133689759443)
})

test('localization = N/A', () => {
  const localization = new Risk_factor_item('N/A');
  expect(local_factor_app(localization)).toBe(1)
})

// anorexia_factor_app
test('anorexia = yes', () => {
  const anorexia = new Risk_factor_item('yes');
  expect(anorexia_factor_app(anorexia)).toBe(1.15984121326306)
})

test('anorexia = no', () => {
  const anorexia = new Risk_factor_item('no');
  expect(anorexia_factor_app(anorexia)).toBe(0.709525506017927)
})

test('anorexia = N/A', () => {
  const anorexia = new Risk_factor_item('N/A');
  expect(anorexia_factor_app(anorexia)).toBe(1)
})

// nausea_factor_app
test('nausea = yes', () => {
  const nausea = new Risk_factor_item('yes');
  expect(nausea_factor_app(nausea)).toBe(1.10344086021505)
})

test('nausea = no', () => {
  const nausea = new Risk_factor_item('no');
  expect(nausea_factor_app(nausea)).toBe(0.793668496911462)
})

test('nausea = N/A', () => {
  const nausea = new Risk_factor_item('N/A');
  expect(nausea_factor_app(nausea)).toBe(1)
})

// ua_factor_app
test('urine_analysis = yes', () => {
  const urine_analysis = new Risk_factor_item('yes');
  expect(ua_factor_app(urine_analysis)).toBe(0.867779710379419)
})

test('urine_analysis = no', () => {
  const urine_analysis = new Risk_factor_item('no');
  expect(ua_factor_app(urine_analysis)).toBe(1.61820330969267)
})

test('urine_analysis = N/A', () => {
  const urine_analysis = new Risk_factor_item('N/A');
  expect(ua_factor_app(urine_analysis)).toBe(1)
})

// rbc_select_factor_app
test('rbc_select = yes', () => {
  const rbc_select = new Risk_factor_item('yes');
  expect(rbc_select_factor_app(rbc_select)).toBe(0.813988331796649)
})

test('rbc_select = no', () => {
  const rbc_select = new Risk_factor_item('no');
  expect(rbc_select_factor_app(rbc_select)).toBe(1.05502845184349)
})

test('rbc_select = N/A', () => {
  const rbc_select = new Risk_factor_item('N/A');
  expect(rbc_select_factor_app(rbc_select)).toBe(1)
})

// wbc_select_factor_app
test('wbc_select = yes', () => {
  const wbc_select = new Risk_factor_item('yes');
  expect(wbc_select_factor_app(wbc_select)).toBe(0.817655736406479)
})

test('wbc_select = no', () => {
  const wbc_select = new Risk_factor_item('no');
  expect(wbc_select_factor_app(wbc_select)).toBe(1.07026674721012)
})

test('wbc_select = N/A', () => {
  const wbc_select = new Risk_factor_item('N/A');
  expect(wbc_select_factor_app(wbc_select)).toBe(1)
})

// culture_factor_app
test('culture = yes', () => {
  const culture = new Risk_factor_item('yes');
  expect(culture_factor_app(culture)).toBe(0.600761605415861)
})

test('culture = no', () => {
  const culture = new Risk_factor_item('no');
  expect(culture_factor_app(culture)).toBe(1.12614591291062)
})

test('culture = N/A', () => {
  const culture = new Risk_factor_item('N/A');
  expect(culture_factor_app(culture)).toBe(1)
})

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

// app_probability_final_touches
test('crp < 10 and wbc < 10.1', () => {
  const crp = new Risk_factor_item(5.1);
  const wbc = new Risk_factor_item(10.064);
  const duration = new Risk_factor_item(2);
  expect(app_probability_final_touches(crp, wbc, duration, 0.5)).toBe('Less than 5%')
})

test('crp < 10 and duration = 3', () => {
  const crp = new Risk_factor_item(7.9);
  const wbc = new Risk_factor_item(21);
  const duration = new Risk_factor_item(3);
  expect(app_probability_final_touches(crp, wbc, duration, 0.24)).toBe('Less than 5%')
})

test('probability < 0', () => {
  const crp = new Risk_factor_item(11);
  const wbc = new Risk_factor_item(15.6);
  const duration = new Risk_factor_item(1);
  expect(app_probability_final_touches(crp, wbc, duration, -0.24)).toBe('Less than 1%')
})

test('probability remainder < 0.5', () => {
  const crp = new Risk_factor_item(21);
  const wbc = new Risk_factor_item(12.1);
  const duration = new Risk_factor_item(3);
  expect(app_probability_final_touches(crp, wbc, duration, 0.2431)).toBe('24%')
})

test('probability remainder >= 0.5', () => {
  const crp = new Risk_factor_item(13);
  const wbc = new Risk_factor_item(12.1);
  const duration = new Risk_factor_item(4);
  expect(app_probability_final_touches(crp, wbc, duration, 0.465)).toBe('47%')
})

// app_prob_correction
test('probability <= 0.05', () => {
  expect(app_prob_correction(0.05)).toBe(0)
})

test('probability > 0.05 and <= 0.075', () => {
  expect(app_prob_correction(0.073)).toBe(0.01)
})

test('probability > 0.075 and <= 0.095', () => {
  expect(app_prob_correction(0.083)).toBe(0.02)
})

test('probability > 0.095 and <= 0.1425', () => {
  expect(app_prob_correction(0.1)).toBe(0.03)
})

test('probability > 0.1425 and <= 0.16', () => {
  expect(app_prob_correction(0.15)).toBe(0.04)
})

test('probability > 0.2175 and <= 0.24', () => {
  expect(app_prob_correction(0.23)).toBe(0.05)
})

test('probability > 0.24 and <= 0.335', () => {
  expect(app_prob_correction(0.31)).toBe(0.06)
})

test('probability > 0.335 and <= 0.3775', () => {
  expect(app_prob_correction(0.35)).toBe(0.05)
})

test('probability > 0.3775 and <= 0.3925', () => {
  expect(app_prob_correction(0.385)).toBe(0.04)
})

test('probability > 0.3925 and <= 0.4', () => {
  expect(app_prob_correction(0.395)).toBe(0.03)
})

test('probability > 0.4 and <= 0.4325', () => {
  expect(app_prob_correction(0.43)).toBe(0.02)
})

test('probability > 0.4325 and <= 0.4525', () => {
  expect(app_prob_correction(0.4475)).toBe(0.01)
})

test('probability > 0.4535 and <= 0.5075', () => {
  expect(app_prob_correction(0.4825)).toBe(0)
})

test('probability > 0.5075 and <= 0.5475', () => {
  expect(app_prob_correction(0.5325)).toBe(-0.01)
})

test('probability > 0.5475 and <= 0.5525', () => {
  expect(app_prob_correction(0.55)).toBe(-0.03)
})

test('probability > 0.5525 and <= 0.6375', () => {
  expect(app_prob_correction(0.6)).toBe(-0.05)
})

test('probability > 0.6375 and <= 0.7525', () => {
  expect(app_prob_correction(0.71)).toBe(-0.06)
})

test('probability > 0.7525 and <= 0.78', () => {
  expect(app_prob_correction(0.77)).toBe(-0.05)
})

test('probability > 0.78 and <= 0.82', () => {
  expect(app_prob_correction(0.82)).toBe(-0.04)
})

test('probability > 0.8625 and <= 0.8725', () => {
  expect(app_prob_correction(0.87)).toBe(-0.02)
})

test('probability > 0.8725 and <= 0.8775', () => {
  expect(app_prob_correction(0.875)).toBe(-0.03)
})

test('probability > 0.8775 and <= 0.895', () => {
  expect(app_prob_correction(0.89)).toBe(-0.02)
})

test('probability > 0.895 and <= 0.91', () => {
  expect(app_prob_correction(0.9)).toBe(-0.01)
})

test('probability > 0.91 ', () => {
  expect(app_prob_correction(0.98)).toBe(0)
})

test('probability random string ', () => {
  expect(app_prob_correction('je ne sais pas')).toBe(0)
})