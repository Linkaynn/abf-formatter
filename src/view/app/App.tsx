import React, { ChangeEvent, useEffect, useState } from "react";
import { Actor } from "../../domain/types/actor/Actor";
import { ExcelFormatter } from "../../domain/formatters/excel/ExcelFormatter";
import { Button, Form, Row } from "react-bootstrap";
import { mergeABFActors } from "../../domain/merge/mergeABFActors";
import Instructions from "./components/Instructions";
import FileInput from "./components/FileInput";
import Faq from "./components/Faq";

const downloadObjectAsJson = (exportObj: any, exportName: string) => {
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  const downloadAnchorNode = document.createElement("a");

  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

const App = () => {
  const [abfData, setAbfData] = useState<Actor>();
  const [formatter, setFormatter] = useState<ExcelFormatter>();

  const [abfActor, setAbfActor] = useState<Actor>();

  const handleFoundryFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (files != null && files.length > 0) {
      setAbfActor(undefined);

      const file = files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        if (event.target?.result != null) {
          const result = event.target.result;

          if (typeof result === "string") {
            setAbfData(JSON.parse(result));
          }
        }
      });

      reader.readAsText(file);
    }
  };

  const handleExcelFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (files != null && files.length > 0) {
      setAbfActor(undefined);

      const file = files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        if (event.target?.result != null) {
          const result = event.target.result as ArrayBuffer;

          setFormatter(ExcelFormatter.fromArrayBuffer(result));
        }
      });

      reader.readAsArrayBuffer(file);
    }
  };

  useEffect(() => {
    if (abfActor) return;

    if (abfData !== undefined && formatter !== undefined) {
      setAbfActor(mergeABFActors(abfData, formatter.getActor()));
    }
  }, [abfData, formatter]);

  const canDownloadMergedActor = abfActor !== undefined;

  const downloadMergedActor = () => {
    if (canDownloadMergedActor) {
      downloadObjectAsJson(abfActor, abfActor.name);
    }
  };

  return (
    <div className="container">
      <h1>Anima Beyond Foundry Formatter</h1>
      <Row className="mt-5">
        <div className="col-md-6 col-xs-12">
          <FileInput
            className="mb-3"
            labelText="Foundry exported JSON actor file"
            onChange={handleFoundryFile}
          />
        </div>
        <div className="col-md-6 col-xs-12">
          <FileInput
            className="mb-3"
            labelText="Excel file"
            onChange={handleExcelFile}
          />
        </div>
        <div className="col-12">
          <Button
            disabled={!canDownloadMergedActor}
            onClick={downloadMergedActor}
          >
            Download
          </Button>
        </div>
      </Row>
      <div className="mt-5">
        <Instructions />
      </div>
      <div className="mt-5">
        <Faq />
      </div>
    </div>
  );
};

export default App;
