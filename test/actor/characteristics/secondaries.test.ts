import { ExcelFormatter } from "../../../src/formatters/excel/ExcelFormatter";

test("format secondary characteristics", () => {
    const formatter = new ExcelFormatter(`${__dirname}/../../fixtures/PJ.xlsm`);

    const v = formatter.getSecondaryCharacteristics();

    expect(v.fatigue.max).toBe(9);
    expect(v.initiative.base).toBe(60);
    expect(v.lifePoints.max).toBe(150);
    expect(v.resistances.physical.base).toBe(50);
    expect(v.resistances.disease.base).toBe(50);
    expect(v.resistances.poison.base).toBe(50);
    expect(v.resistances.magic.base).toBe(70);
    expect(v.resistances.psychic.base).toBe(45);
});
