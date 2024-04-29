
import React from "react";

export const ErrorFormDisplay = (state: any) => {
  return (
    <div>
      {state!==null && (
        <p className="text-redBtn -mt-[10px] mb-4">
          <strong>{state?.state?._errors?.[0]}</strong>
        </p>
      )}
    </div>
  );
};

