import { ExcelFormatter } from "../../src/formatters/excel/ExcelFormatter";

test("format secondary characteristics", () => {
    const formatter = new ExcelFormatter(`${__dirname}/../fixtures/PJ.xlsm`);

    const primaries = formatter.getSecondaryCharacteristics();

    expect(primaries.fatigue.max).toBe(9);
    expect(primaries.initiative.base).toBe(60);
    expect(primaries.lifePoints.max).toBe(150);
    expect(primaries.resistances.physical.base).toBe(50);
    expect(primaries.resistances.disease.base).toBe(50);
    expect(primaries.resistances.poison.base).toBe(50);
    expect(primaries.resistances.magic.base).toBe(70);
    expect(primaries.resistances.psychic.base).toBe(45);
});
