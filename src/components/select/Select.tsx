import { SelectGroup, SelectItem } from "./Select.styles";
import { useState } from "react";

interface ISelectProps {
  options: ISelectOptions[];
}

interface ISelectOptions {
  text: string;
  value: string;
  icon: React.ReactNode;
}

export function Select({ options }: ISelectProps) {
  const [optionClicked, setOptionClicked] = useState<string>("");

  return (
    <SelectGroup role="radiogroup">
      {options.map((option) => (
        <SelectItem
          role="radio"
          onClick={() => setOptionClicked(option.value)}
          className={optionClicked === option.value ? "active" : undefined}
        >
          {option.icon}
          {option.text}
        </SelectItem>
      ))}
    </SelectGroup>
  );
}
