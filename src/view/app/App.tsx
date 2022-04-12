import { useEffect, useState } from "react";
import { Actor } from "../../domain/types/actor/Actor";
import { Button, Row } from "react-bootstrap";
import { mergeABFActors } from "../../domain/merge/mergeABFActors";
import Instructions from "./components/Instructions";
import Faq from "./components/Faq";
import ExcelFileUploader from "./components/ExcelFileUploader";
import FoundryFileUploader from "./components/FoundryFileUploader";

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
  const [sourceActor, setSourceActor] = useState<Actor>();
  const [editedActor, setEditedActor] = useState<Actor>();

  const [newActor, setNewActor] = useState<Actor>();

  useEffect(() => {
    if (newActor) return;

    if (sourceActor !== undefined && editedActor !== undefined) {
      setNewActor(mergeABFActors(sourceActor, editedActor));
    }
  }, [sourceActor, editedActor]);

  const canDownloadMergedActor = newActor !== undefined;

  const downloadMergedActor = () => {
    if (canDownloadMergedActor) {
      downloadObjectAsJson(newActor, newActor.name);
    }
  };

  return (
    <div className="container m-md-5 mt-0">
      <h1>Anima Beyond Foundry Formatter</h1>
      <Row className="mt-5">
        <FoundryFileUploader
          className="col-md-6 col-xs-12"
          onFormatActor={setSourceActor}
        />
        <ExcelFileUploader
          className="col-md-6 col-xs-12"
          onFormatActor={setEditedActor}
        />
        <div className="col-12 mt-3">
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
