import {
  ExcelFormatter,
  UNKNOWN_SKILL_VALUE,
} from "../../src/domain/formatters/excel/ExcelFormatter";

describe("Excel formatter must", () => {
  let formatter: ExcelFormatter;

  beforeAll(() => {
    formatter = ExcelFormatter.fromPath(`${__dirname}/../fixtures/PJ.xlsm`);
  });

  it("format primary characteristics", () => {
    const v = formatter.getPrimaryCharacteristics();

    expect(v.agility.value).toBe(7);
    expect(v.constitution.value).toBe(9);
    expect(v.dexterity.value).toBe(9);
    expect(v.strength.value).toBe(9);
    expect(v.intelligence.value).toBe(9);
    expect(v.perception.value).toBe(5);
    expect(v.power.value).toBe(10);
    expect(v.willPower.value).toBe(7);
  });

  it("format secondary characteristics", () => {
    const v = formatter.getSecondaryCharacteristics();

    expect(v.fatigue.max).toBe(9);
    expect(v.initiative.base.value).toBe(60);
    expect(v.lifePoints.max).toBe(150);
    expect(v.resistances.physical.base.value).toBe(50);
    expect(v.resistances.disease.base.value).toBe(50);
    expect(v.resistances.poison.base.value).toBe(50);
    expect(v.resistances.magic.base.value).toBe(70);
    expect(v.resistances.psychic.base.value).toBe(45);
  });

  it("format aspect", () => {
    const v = formatter.getAspect();

    expect(v.hair.value).toBe("Naranja");
    expect(v.eyes.value).toBe("Verdes");
    expect(v.height.value).toBe("1,80");
    expect(v.weight.value).toBe("99,8");
    expect(v.age.value).toBe(24);
    expect(v.gender.value).toBe("Hombre");
    expect(v.race.value).toBe("Humano");
    expect(v.appearance.value).toBe("grande con gafas");
    expect(v.size.value).toBe(18);
  });

  it("format general data", () => {
    const v = formatter.getGeneralData();

    expect(v.presence.base.value).toBe(40);
    expect(v.money.gold.value).toBe(5);
    expect(v.money.silver.value).toBe(131);
    expect(v.money.cooper.value).toBe(8);
  });

  it("format athletic skills", () => {
    const v = formatter.getAthleticSkills();

    expect(v.acrobatics.base.value).toBe(-25);
    expect(v.athleticism.base.value).toBe(-10);
    expect(v.ride.base.value).toBe(45);
    expect(v.swim.base.value).toBe(-25);
    expect(v.climb.base.value).toBe(-25);
    expect(v.jump.base.value).toBe(-30);
    expect(v.piloting.base.value).toBe(-20);
  });

  it("format social skills", () => {
    const v = formatter.getSocialSkills();

    expect(v.style.base.value).toBe(-10);
    expect(v.intimidate.base.value).toBe(-25);
    expect(v.leadership.base.value).toBe(-10);
    expect(v.persuasion.base.value).toBe(-20);
    expect(v.trading.base.value).toBe(65);
    expect(v.streetwise.base.value).toBe(0);
    expect(v.etiquette.base.value).toBe(-20);
  });

  it("format perception skills", () => {
    const v = formatter.getPerceptionSkills();

    expect(v.notice.base.value).toBe(70);
    expect(v.search.base.value).toBe(-20);
    expect(v.track.base.value).toBe(-30);
  });

  it("format intellectual skills", () => {
    const v = formatter.getIntellectualSkills();

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
    const v = formatter.getVigorSkills();

    expect(v.composure.base.value).toBe(-25);
    expect(v.featsOfStrength.base.value).toBe(-30);
    expect(v.withstandPain.base.value).toBe(-25);
  });

  it("format subterfuge skills", () => {
    const v = formatter.getSubterfugeSkills();

    expect(v.lockPicking.base.value).toBe(-20);
    expect(v.disguise.base.value).toBe(-20);
    expect(v.hide.base.value).toBe(-40);
    expect(v.theft.base.value).toBe(-20);
    expect(v.stealth.base.value).toBe(-25);
    expect(v.trapLore.base.value).toBe(-20);
    expect(v.poisons.base.value).toBe(UNKNOWN_SKILL_VALUE);
  });

  it("format creative skills", () => {
    const v = formatter.getCreativeSkills();

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

  it("format combat data", () => {
    const v = formatter.getCombatData();

    expect(v.attack.base.value).toBe(120);
    expect(v.dodge.base.value).toBe(20);
    expect(v.block.base.value).toBe(150);
    expect(v.wearArmor.value).toBe(10);
  });

  it("format mystic data", () => {
    const v = formatter.getMysticData();

    expect(v.act.main.base.value).toBe(65);

    expect(v.zeon.max).toBe(870);

    expect(v.innateMagic.main.value).toBe(20);

    expect(v.summoning.summon.base.value).toBe(20);
    expect(v.summoning.control.base.value).toBe(5);
    expect(v.summoning.bind.base.value).toBe(20);
    expect(v.summoning.banish.base.value).toBe(20);

    expect(v.magicProjection.base.value).toBe(60);
    expect(v.magicProjection.imbalance.offensive.base.value).toBe(90);
    expect(v.magicProjection.imbalance.defensive.base.value).toBe(10);

    expect(v.zeonRegeneration.base.value).toBe(205);
  });

  it("format domine data", () => {
    const v = formatter.getDomineData();

    expect(v.seals.minor.earth.isActive.value).toBe(false);
    expect(v.seals.minor.metal.isActive.value).toBe(false);
    expect(v.seals.minor.wind.isActive.value).toBe(false);
    expect(v.seals.minor.water.isActive.value).toBe(false);
    expect(v.seals.minor.wood.isActive.value).toBe(false);

    expect(v.seals.major.earth.isActive.value).toBe(false);
    expect(v.seals.major.metal.isActive.value).toBe(false);
    expect(v.seals.major.wind.isActive.value).toBe(false);
    expect(v.seals.major.water.isActive.value).toBe(false);
    expect(v.seals.major.wood.isActive.value).toBe(false);

    expect(v.kiAccumulation.agility.base.value).toBe(1);
    expect(v.kiAccumulation.constitution.base.value).toBe(1);
    expect(v.kiAccumulation.dexterity.base.value).toBe(1);
    expect(v.kiAccumulation.strength.base.value).toBe(1);
    expect(v.kiAccumulation.power.base.value).toBe(2);
    expect(v.kiAccumulation.willPower.base.value).toBe(1);
    expect(v.kiAccumulation.generic.max).toBe(55);
  });

  it("format psychic data", () => {
    const v = formatter.getPsychicData();

    expect(v.psychicPoints.max).toBe(1);
    expect(v.psychicProjection.base.value).toBe(10);
  });

  it("format actor without errors", () => {
    formatter.getActor();
  });
});
