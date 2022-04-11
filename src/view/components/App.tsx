import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Actor } from "../../domain/types/actor/Actor";
import { ExcelFormatter } from "../../domain/formatters/excel/ExcelFormatter";

const App = () => {
  const [abfActor, setAbfActor] = useState<Actor>();
  const [formatter, setFormatter] = useState<ExcelFormatter>();

  const handleFoundryFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (files != null && files.length > 0) {
      const json = files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        if (event.target?.result != null) {
          const result = event.target.result;

          if (typeof result === "string") {
            setAbfActor(JSON.parse(result));
          }
        }
      });

      reader.readAsText(json);
    }
  };

  const handleExcelFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if (files != null && files.length > 0) {
      const json = files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        if (event.target?.result != null) {
          const result = event.target.result as ArrayBuffer;

          const formatter = ExcelFormatter.fromArrayBuffer(result);

          console.log(formatter.getPrimaryCharacteristics());
        }
      });

      reader.readAsArrayBuffer(json);
    }
  };

  return (
    <div className="App">
      <input type="file" onChange={handleFoundryFile} />
      <input type="file" onChange={handleExcelFile} />
    </div>
  );
};

export default App;
