import React, { useState } from "react";

const TreeStruct = ({ files }: { files: any }): any => {
  const [expanded, setExpanded] = useState(false);
  if (files.type === "folder") {
    return (
      <div key={files.name}>
        <span onClick={() => setExpanded(!expanded)}>{files.name}📂</span>
        <div className="expanded">
          {files.data.map((file: any) => {
            if (file.type === "file") return <div key={file.name}>{file.name}</div>;
            else if (file.type === "folder") return <TreeStruct key={file.name} files={file} />;
          })}
        </div>
      </div>
    );
  } else if (files.type === "file") {
    return <div>{files.name}</div>;
  }
};

export default TreeStruct;
