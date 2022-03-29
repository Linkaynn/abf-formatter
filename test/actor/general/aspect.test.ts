import { ExcelFormatter } from "../../../src/formatters/excel/ExcelFormatter";

test("format aspect", () => {
  const formatter = new ExcelFormatter(`${__dirname}/../../fixtures/PJ.xlsm`);

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
