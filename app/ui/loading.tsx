import React from "react";
import {Spinner} from "@nextui-org/react";

export default function Loading() {
  return (
      <div className="flex justify-center h-screen">
        <Spinner size="md" color="primary" />
      </div>
    
  );
}