import React, { ChangeEventHandler } from "react";
import { Form } from "react-bootstrap";

interface FileInputProps {
  className?: string;
  labelText: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const FileInput = ({ className, labelText, onChange }: FileInputProps) => {
  return (
    <Form.Group controlId={labelText} className={className}>
      <Form.Label>
        <b>{labelText}</b>
      </Form.Label>
      <Form.Control type="file" onChange={onChange} />
    </Form.Group>
  );
};

export default FileInput;
