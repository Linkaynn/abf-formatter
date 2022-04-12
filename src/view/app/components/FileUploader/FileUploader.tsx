import { ChangeEventHandler } from "react";
import { ProgressBar } from "react-bootstrap";
import FileInput from "./components/FileInput";

interface FileUploaderProps {
  className?: string;
  labelText: string;
  progress: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FileUploader = ({
  className,
  labelText,
  onChange,
  progress,
}: FileUploaderProps) => {
  return (
    <div className={className}>
      <FileInput className="mb-3" labelText={labelText} onChange={onChange} />
      <ProgressBar now={progress} />
    </div>
  );
};

export default FileUploader;
