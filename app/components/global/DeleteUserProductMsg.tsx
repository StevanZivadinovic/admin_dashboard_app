"use client";
import React, { useEffect, useState } from "react";

interface DeleteUserProductMsgProps {
  count: number;
  type: string;
}

const DeleteUserProductMsg: React.FC<DeleteUserProductMsgProps> = ({
  count,
  type,
}) => {
  const [display, setDisplay] = useState(false);
  const [initialCount, setInitialCount] = useState<number | undefined>(
    undefined
  );
  useEffect(() => {
    if (initialCount === undefined) {
      setInitialCount(count);
    } else {
      if (count !== initialCount) {
        setDisplay(true);
        const timeout = setTimeout(() => {
          setDisplay(false);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [count, initialCount]);

  return (
    <div className="w-full">
      {display && (
        <>
          <div className="h-1 bg-redBtn animate-line mt-4 text-center"></div>
          <p className="text-2xl text-center text-redBtn">
            {`${type} is deleted!`}
          </p>
        </>
      )}
    </div>
  );
};

export default DeleteUserProductMsg;
