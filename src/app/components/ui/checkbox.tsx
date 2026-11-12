"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "./utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border border-solid border-[#aeaeae] bg-white data-[state=checked]:bg-[#1a4d8f] data-[state=checked]:border-[#1a4d8f] size-[24px] shrink-0 rounded-[3px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#1a4d8f] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-white transition-none"
      >
        <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 16 12">
          <path 
            d="M5.288 8.775L13.763 0.3C13.963 0.1 14.1963 0 14.463 0C14.7297 0 14.963 0.1 15.163 0.3C15.363 0.5 15.463 0.7375 15.463 1.0125C15.463 1.2875 15.363 1.525 15.163 1.725L5.988 10.925C5.788 11.125 5.55467 11.225 5.288 11.225C5.02133 11.225 4.788 11.125 4.588 10.925L0.288 6.625C0.088 6.425 -0.00783333 6.1875 0.0005 5.9125C0.00883333 5.6375 0.113 5.4 0.313 5.2C0.513 5 0.7505 4.9 1.0255 4.9C1.3005 4.9 1.538 5 1.738 5.2L5.288 8.775Z" 
            fill="white" 
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };