import { ChangeEvent, useState } from "react";
import { Actor } from "../../../domain/types/actor/Actor";
import FileUploader from "./FileUploader/FileUploader";

interface FoundryFileUploaderProps {
  className?: string;
  onFormatActor: (actor: Actor) => void;
}

const FoundryFileUploader = ({
  className,
  onFormatActor,
}: FoundryFileUploaderProps) => {
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProgress(0);

    const files = e.currentTarget.files;

    if (files != null && files.length > 0) {
      const file = files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (event) => {
        if (event.target?.result != null) {
          const result = event.target.result;

          if (typeof result === "string") {
            onFormatActor(JSON.parse(result));
          }
        }
      });

      reader.addEventListener("progress", (event) => {
        const progress = ((event.loaded / event.total) * 100).toFixed(0);

        setProgress(parseInt(progress, 10));
      });

      reader.readAsText(file);
    }
  };

  return (
    <FileUploader
      className={className}
      labelText="Foundry exported JSON actor file"
      progress={progress}
      onChange={handleFileChange}
    />
  );
};

export default FoundryFileUploader;
