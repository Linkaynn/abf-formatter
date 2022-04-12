import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { Actor } from "../../domain/types/actor/Actor";
import { ExcelFormatter } from "../../domain/formatters/excel/ExcelFormatter";
import { Button, Form, Row } from "react-bootstrap";
import { mergeABFActors } from "../../domain/merge/mergeABFActors";

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
      <h1>Anima Beyond Foundry Importer</h1>
      <Row>
        <div className="col-md-6 col-xs-12">
          <Form.Group controlId="abf-actor" className="mb-3">
            <Form.Label>
              <b>Foundry exported JSON actor file</b>
            </Form.Label>
            <Form.Control type="file" onChange={handleFoundryFile} />
          </Form.Group>
        </div>
        <div className="col-md-6 col-xs-12">
          <Form.Group controlId="excel-data" className="mb-3">
            <Form.Label>
              <b>Excel file</b>
            </Form.Label>
            <Form.Control type="file" onChange={handleExcelFile} />
          </Form.Group>
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
        <h5>Instructions</h5>
        <p>To make this work, we need 2 ingredients:</p>
        <ul>
          <li>
            Exported actor data in JSON format (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="assets/export-actor-example.mp4"
            >
              instructions
            </a>
            )
          </li>
          <li>
            Excel with the current data of your character (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://discord.com/channels/327226685399367680/898902689918894090"
            >
              discord channel
            </a>
            )
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
