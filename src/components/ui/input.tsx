import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "px-4 py-2 outline-primary border border-primary rounded",
        className
      )}
      {...props}
    />
  );
}

export { Input };
