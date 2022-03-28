import {
  ExcelFormatter,
  UNKNOWN_SKILL_VALUE,
} from "../../../src/formatters/excel/ExcelFormatter";

describe("skills", () => {
  let formatter: ExcelFormatter;

  beforeAll(() => {
    formatter = new ExcelFormatter(`${__dirname}/../../fixtures/PJ.xlsm`);
  });

  it("format athletic skills", () => {
    const v = formatter.getSkills().athletics;

    expect(v.acrobatics.base.value).toBe(-25);
    expect(v.athleticism.base.value).toBe(-10);
    expect(v.ride.base.value).toBe(45);
    expect(v.swim.base.value).toBe(-25);
    expect(v.climb.base.value).toBe(-25);
    expect(v.jump.base.value).toBe(-30);
    expect(v.piloting.base.value).toBe(-20);
  });

  it("format social skills", () => {
    const v = formatter.getSkills().social;

    expect(v.style.base.value).toBe(-10);
    expect(v.intimidate.base.value).toBe(-25);
    expect(v.leadership.base.value).toBe(-10);
    expect(v.persuasion.base.value).toBe(-20);
    expect(v.trading.base.value).toBe(65);
    expect(v.streetwise.base.value).toBe(0);
    expect(v.etiquette.base.value).toBe(-20);
  });

  it("format perception skills", () => {
    const v = formatter.getSkills().perception;

    expect(v.notice.base.value).toBe(70);
    expect(v.search.base.value).toBe(-20);
    expect(v.track.base.value).toBe(-30);
  });

  it("format intellectual skills", () => {
    const v = formatter.getSkills().intellectual;

    expect(v.animals.base.value).toBe(-15);
    expect(v.science.base.value).toBe(UNKNOWN_SKILL_VALUE);
    expect(v.law.base.value).toBe(-20);
    expect(v.herbalLore.base.value).toBe(-20);
    expect(v.history.base.value).toBe(UNKNOWN_SKILL_VALUE);
    expect(v.tactics.base.value).toBe(-20);
    expect(v.medicine.base.value).toBe(UNKNOWN_SKILL_VALUE);
    expect(v.memorize.base.value).toBe(-20);
    expect(v.navigation.base.value).toBe(-20);
    expect(v.occult.base.value).toBe(-10);
    expect(v.appraisal.base.value).toBe(45);
    expect(v.magicAppraisal.base.value).toBe(55);
  });

  it("format vigor skills", () => {
    const v = formatter.getSkills().vigor;

    expect(v.composure.base.value).toBe(-25);
    expect(v.featsOfStrength.base.value).toBe(-30);
    expect(v.withstandPain.base.value).toBe(-25);
  });

  it("format subterfuge skills", () => {
    const v = formatter.getSkills().subterfuge;

    expect(v.lockPicking.base.value).toBe(-20);
    expect(v.disguise.base.value).toBe(-20);
    expect(v.hide.base.value).toBe(-40);
    expect(v.theft.base.value).toBe(-20);
    expect(v.stealth.base.value).toBe(-25);
    expect(v.trapLore.base.value).toBe(-20);
    expect(v.poisons.base.value).toBe(UNKNOWN_SKILL_VALUE);
  });

  it("format creative skills", () => {
    const v = formatter.getSkills().creative;

    expect(v.art.base.value).toBe(-10);
    expect(v.dance.base.value).toBe(UNKNOWN_SKILL_VALUE);
    expect(v.forging.base.value).toBe(UNKNOWN_SKILL_VALUE);
    expect(v.runes.base.value).toBe(-20);
    expect(v.alchemy.base.value).toBe(-20);
    expect(v.animism.base.value).toBe(-10);
    expect(v.music.base.value).toBe(UNKNOWN_SKILL_VALUE);
    expect(v.sleightOfHand.base.value).toBe(-20);
    expect(v.ritualCalligraphy.base.value).toBe(-20);
    expect(v.jewelry.base.value).toBe(55);
    expect(v.tailoring.base.value).toBe(-20);
    expect(v.puppetMaking.base.value).toBe(-10);
  });
});
