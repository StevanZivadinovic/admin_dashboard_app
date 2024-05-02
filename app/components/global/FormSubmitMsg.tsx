import React from "react";
interface updateFormMsgType {
  type: string;
  display: boolean;
  typeOfMessage:string;
}

const FormSubmitMsg = ({ type, display, typeOfMessage }: updateFormMsgType) => {
  return (
    <>
      {display && (
        <div className="w-full absolute top-[50%] left-[50%] -translate-x-[50%] p-8 bg-bgMoreSoft rounded-md">
          <>
            <div className="h-1 bg-redBtn animate-line mt-4 text-center"></div>
            <p className="text-2xl text-center text-redBtn">
              {`${type} is ${typeOfMessage}!`}
            </p>
          </>
        </div>
      )}
    </>
  );
};

export default FormSubmitMsg;
