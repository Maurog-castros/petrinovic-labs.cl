"use client";

import { useState } from "react";
import { formatRUT, validateRUT } from "@/lib/rut-validator";
import { Check, X } from "lucide-react";

interface RutInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onValidChange?: (isValid: boolean) => void;
}

export function RutInput({ className, onValidChange, ...props }: RutInputProps) {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const formatted = formatRUT(inputValue);
        setValue(formatted);

        const valid = validateRUT(formatted);
        setIsValid(valid);
        if (onValidChange) onValidChange(valid);

        if (props.onChange) props.onChange(e);
    };

    return (
        <div className="relative">
            <input
                {...props}
                type="text"
                value={value}
                onChange={handleChange}
                maxLength={12}
                className={`w-full rounded-md border py-2 pl-3 pr-10 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${isValid === false
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : isValid === true
                            ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                            : "border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800"
                    } ${className}`}
                placeholder="12.345.678-K"
            />
            <div className="absolute right-3 top-2.5">
                {isValid === true && <Check className="h-5 w-5 text-green-500" />}
                {isValid === false && <X className="h-5 w-5 text-red-500" />}
            </div>
            {isValid === false && (
                <p className="mt-1 text-xs text-red-500 absolute left-0 -bottom-5">
                    RUT inválido
                </p>
            )}
        </div>
    );
}
