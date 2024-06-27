import FormStepContext from "@/context/FormStepContext";
import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import React, { useContext } from "react";

export default function Floors() {
  const { formState, setFormState, updateFormData } = useContext<any>(
    QuoteGeneratorContext
  );
  const { goNext } = useContext(FormStepContext);

  return (
    <div className="flex flex-col justify-center md:w-[400px] items-center gap-6 md:pt-0 pt-5">
      <div className="font-semibold text-2xl text-center animate-in slide-in-from-top-4 duration-1000">
        How many floors does your building have?
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-4">
          <div
            onClick={() => {
              updateFormData({ floors: 1 });
              goNext();
            }}
            className={`${
              formState && formState.floors == 1 ? "bg-primary" : "bg-white"
            } animate-in slide-in-from-bottom-4 duration-1000 border-black border-[1px] hover:bg-primary w-full justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
          >
            <span className="font-medium">1</span>
          </div>
          <div
            onClick={() => {
              updateFormData({ floors: 2 });
              goNext();
            }}
            className={`${
              formState && formState.floors == 2 ? "bg-primary" : "bg-white"
            } animate-in slide-in-from-bottom-4 duration-1000 border-black border-[1px] hover:bg-primary w-full justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
          >
            <span className="font-medium">2</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div
            onClick={() => {
              updateFormData({ floors: 3 });
              goNext();
            }}
            className={`${
              formState && formState.floors == 3 ? "bg-primary" : "bg-white"
            } animate-in slide-in-from-bottom-6 duration-1000 border-black border-[1px] hover:bg-primary w-full justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
          >
            <span className="font-medium">3</span>
          </div>
          <div
            onClick={() => {
              updateFormData({ floors: 4 });
              goNext();
            }}
            className={`${
              formState && formState.floors == 4 ? "bg-primary" : "bg-white"
            } animate-in slide-in-from-bottom-6 duration-1000 border-black border-[1px] hover:bg-primary w-full justify-center flex gap-2 items-center rounded-full cursor-pointer py-2 px-6`}
          >
            <span className="font-medium">4 +</span>
          </div>
        </div>
      </div>
    </div>
  );
}
