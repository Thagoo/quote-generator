"use client";

import { QuoteGeneratorContext } from "@/context/QuoteGeneratorContext";

import { calculateCostWithSolar, calculateSolarSize } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import MapSelected from "../maps/MapSelected";

export default function SystemSize() {
  const { formState, setFormState, updateFormState } = useContext<any>(
    QuoteGeneratorContext
  );

  const router = useRouter();
  if (formState == null) {
    // router.replace("/form");
    return null;
  }

  return (
    <div className="bg-white rounded-3xl px-5 pt-8 pb-4 w-full md:w-1/3 gap-4 flex flex-col items-center animate-in fade-in duration-1000">
      <h1 className="font-medium">Your system size</h1>
      <Image
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${formState.center.lat},${formState.center.lng}&zoom=18&size=400x300&maptype=satellite&key=AIzaSyCBAkfjgh0sZBWGf7EIab1PRBAwwi9CL5Y`}
        alt="map"
        width={400}
        height={350}
        className="rounded-3xl"
      />

      <div className="w-fit rounded-full border-[1px] flex px-5  justify-center py-1 items-center">
        <span className="font-semibold">
          <span className="text-xs">Solar System Size:</span>{" "}
          {formState?.solarSize} KW
        </span>
      </div>

      <p className="flex items-center gap-2">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2269 12.7871L14.1009 10.8984L12.2122 5.77246C12.116 5.51166 11.9422 5.28661 11.7141 5.12766C11.4861 4.96871 11.2148 4.88349 10.9368 4.88349C10.6588 4.88349 10.3876 4.96871 10.1595 5.12766C9.93146 5.28661 9.75763 5.51166 9.66143 5.77246L7.77276 10.8984L2.64678 12.7871C2.38598 12.8833 2.16094 13.0571 2.00198 13.2852C1.84303 13.5132 1.75781 13.7845 1.75781 14.0625C1.75781 14.3405 1.84303 14.6118 2.00198 14.8398C2.16094 15.0679 2.38598 15.2417 2.64678 15.3379L7.77276 17.2266L9.66143 22.3525C9.75763 22.6133 9.93146 22.8384 10.1595 22.9973C10.3876 23.1563 10.6588 23.2415 10.9368 23.2415C11.2148 23.2415 11.4861 23.1563 11.7141 22.9973C11.9422 22.8384 12.116 22.6133 12.2122 22.3525L14.1009 17.2266L19.2269 15.3379C19.4877 15.2417 19.7127 15.0679 19.8717 14.8398C20.0306 14.6118 20.1158 14.3405 20.1158 14.0625C20.1158 13.7845 20.0306 13.5132 19.8717 13.2852C19.7127 13.0571 19.4877 12.8833 19.2269 12.7871ZM18.8216 14.2383L13.4427 16.2207C13.363 16.25 13.2907 16.2963 13.2306 16.3563C13.1706 16.4163 13.1243 16.4887 13.095 16.5684L11.1126 21.9473C11.0993 21.9831 11.0753 22.0141 11.0439 22.0359C11.0125 22.0578 10.9751 22.0695 10.9368 22.0695C10.8985 22.0695 10.8612 22.0578 10.8298 22.0359C10.7983 22.0141 10.7744 21.9831 10.761 21.9473L8.77862 16.5684C8.74932 16.4887 8.70305 16.4163 8.64302 16.3563C8.58299 16.2963 8.51064 16.25 8.43096 16.2207L3.05206 14.2383C3.01617 14.225 2.98523 14.201 2.96337 14.1696C2.94152 14.1381 2.9298 14.1008 2.9298 14.0625C2.9298 14.0242 2.94152 13.9869 2.96337 13.9554C2.98523 13.924 3.01617 13.9 3.05206 13.8867L8.43096 11.9043C8.51064 11.875 8.58299 11.8287 8.64302 11.7687C8.70305 11.7087 8.74932 11.6363 8.77862 11.5566L10.761 6.17773C10.7744 6.14185 10.7983 6.1109 10.8298 6.08905C10.8612 6.0672 10.8985 6.05548 10.9368 6.05548C10.9751 6.05548 11.0125 6.0672 11.0439 6.08905C11.0753 6.1109 11.0993 6.14185 11.1126 6.17773L13.095 11.5566C13.1243 11.6363 13.1706 11.7087 13.2306 11.7687C13.2907 11.8287 13.363 11.875 13.4427 11.9043L18.8216 13.8867C18.8575 13.9 18.8884 13.924 18.9103 13.9554C18.9321 13.9869 18.9438 14.0242 18.9438 14.0625C18.9438 14.1008 18.9321 14.1381 18.9103 14.1696C18.8884 14.201 18.8575 14.225 18.8216 14.2383ZM14.2571 3.90625C14.2571 3.75085 14.3189 3.60181 14.4288 3.49193C14.5386 3.38204 14.6877 3.32031 14.8431 3.32031H16.6009V1.5625C16.6009 1.4071 16.6626 1.25806 16.7725 1.14818C16.8824 1.0383 17.0314 0.976563 17.1868 0.976562C17.3422 0.976562 17.4913 1.0383 17.6011 1.14818C17.711 1.25806 17.7728 1.4071 17.7728 1.5625V3.32031H19.5306C19.686 3.32031 19.835 3.38204 19.9449 3.49193C20.0548 3.60181 20.1165 3.75085 20.1165 3.90625C20.1165 4.06165 20.0548 4.21069 19.9449 4.32057C19.835 4.43046 19.686 4.49219 19.5306 4.49219H17.7728V6.25C17.7728 6.4054 17.711 6.55444 17.6011 6.66432C17.4913 6.7742 17.3422 6.83594 17.1868 6.83594C17.0314 6.83594 16.8824 6.7742 16.7725 6.66432C16.6626 6.55444 16.6009 6.4054 16.6009 6.25V4.49219H14.8431C14.6877 4.49219 14.5386 4.43046 14.4288 4.32057C14.3189 4.21069 14.2571 4.06165 14.2571 3.90625ZM24.0228 8.59375C24.0228 8.74915 23.961 8.89819 23.8511 9.00807C23.7413 9.11795 23.5922 9.17969 23.4368 9.17969H22.4603V10.1562C22.4603 10.3117 22.3985 10.4607 22.2886 10.5706C22.1788 10.6805 22.0297 10.7422 21.8743 10.7422C21.7189 10.7422 21.5699 10.6805 21.46 10.5706C21.3501 10.4607 21.2884 10.3117 21.2884 10.1562V9.17969H20.3118C20.1564 9.17969 20.0074 9.11795 19.8975 9.00807C19.7876 8.89819 19.7259 8.74915 19.7259 8.59375C19.7259 8.43835 19.7876 8.28931 19.8975 8.17943C20.0074 8.06955 20.1564 8.00781 20.3118 8.00781H21.2884V7.03125C21.2884 6.87585 21.3501 6.72681 21.46 6.61693C21.5699 6.50705 21.7189 6.44531 21.8743 6.44531C22.0297 6.44531 22.1788 6.50705 22.2886 6.61693C22.3985 6.72681 22.4603 6.87585 22.4603 7.03125V8.00781H23.4368C23.5922 8.00781 23.7413 8.06955 23.8511 8.17943C23.961 8.28931 24.0228 8.43835 24.0228 8.59375Z"
            fill="#868687"
          />
        </svg>
        <span className="font-light text-[#868687] text-sm">
          Your recommended solar system size is {formState.solarSize} KW. <br />
          You can adjust it as needed with our solar advisor.
        </span>
      </p>
    </div>
  );
}
