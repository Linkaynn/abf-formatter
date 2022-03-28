import { ExcelFormatter } from "../../../src/formatters/excel/ExcelFormatter";

test("format primary characteristics", () => {
  const formatter = new ExcelFormatter(`${__dirname}/../../fixtures/PJ.xlsm`);

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
