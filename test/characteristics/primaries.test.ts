import { ExcelFormatter } from "../../src/formatters/excel/ExcelFormatter";

test("format primary characteristics", () => {
  const formatter = new ExcelFormatter(`${__dirname}/../fixtures/PJ.xlsm`);

  const primaries = formatter.getPrimaryCharacteristics();

  expect(primaries.agility.value).toBe(7);
  expect(primaries.constitution.value).toBe(9);
  expect(primaries.dexterity.value).toBe(9);
  expect(primaries.strength.value).toBe(9);
  expect(primaries.intelligence.value).toBe(9);
  expect(primaries.perception.value).toBe(5);
  expect(primaries.power.value).toBe(10);
  expect(primaries.willPower.value).toBe(7);
});
