import { ChangeEvent, useState } from "react";
import { ExcelFormatter } from "../../../domain/formatters/excel/ExcelFormatter";
import { Actor } from "../../../domain/types/actor/Actor";
import FileUploader from "./FileUploader/FileUploader";

interface ExcelFileUploadProps {
  className?: string;
  onFormatActor: (actor: Actor) => void;
}

const ExcelFileUploader = ({
  className,
  onFormatActor,
}: ExcelFileUploadProps) => {
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProgress(0);

    const files = e.currentTarget.files;

    if (files != null && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        if (event.target?.result != null) {
          const result = event.target.result as ArrayBuffer;

          const formatter = ExcelFormatter.fromArrayBuffer(result);
          onFormatActor(formatter.getActor());
        }
      });

      reader.addEventListener("progress", (event) => {
        const progress = ((event.loaded / event.total) * 100).toFixed(0);

        setProgress(parseInt(progress, 10));
      });

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <FileUploader
      className={className}
      labelText="Excel file"
      progress={progress}
      onChange={handleFileChange}
    />
  );
};

export default ExcelFileUploader;
