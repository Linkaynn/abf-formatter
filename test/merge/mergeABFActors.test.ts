import * as fs from "fs";
import { ExcelFormatter } from "../../src/domain/formatters/excel/ExcelFormatter";
import { mergeABFActors } from "../../src/domain/merge/mergeABFActors";
import { Actor } from "../../src/domain/types/actor/Actor";

test("should merge actors correctly", () => {
  const sourceActor: Actor = JSON.parse(
    fs.readFileSync(`${__dirname}/../fixtures/ABF-PJ-before.json`, {
      encoding: "utf8",
    })
  );

  const formatter = ExcelFormatter.fromPath(`${__dirname}/../fixtures/PJ.xlsm`);

  const formattedActor = formatter.getActor();

  const mergedActor = mergeABFActors(sourceActor, formattedActor);

  const fixtureActor: Actor = JSON.parse(
    fs.readFileSync(`${__dirname}/../fixtures/ABF-PJ-after.json`, {
      encoding: "utf8",
    })
  );

  expect(fixtureActor.name).toStrictEqual(mergedActor.name);
  expect(fixtureActor.data).toStrictEqual(mergedActor.data);
});
