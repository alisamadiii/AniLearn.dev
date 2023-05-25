import React from "react";

type Props = {};

export default function Inputs({}: Props) {
  return (
    <div className="grid mt-12 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
      <Input name="button" type="button" />
      <Input name="checkbox" type="checkbox" />
      <Input name="color" type="color" />
      <Input name="date" type="date" />
      <Input name="datetime-local" type="datetime-local" />
      <Input name="email" type="email" />
      <Input name="file" type="file" />
      <Input name="hidden" type="hidden" />
      <Input name="image" type="image" />
      <Input name="month" type="month" />
      <Input name="number" type="number" />
      <Input name="password" type="password" />
      <Input name="radio" type="radio" />
      <Input name="range" type="range" />
      <Input name="reset" type="reset" />
      <Input name="search" type="search" />
      <Input name="submit" type="submit" />
      <Input name="tel" type="tel" />
      <Input name="text" type="text" />
      <Input name="time" type="time" />
      <Input name="url" type="url" />
      <Input name="week" type="week" />
    </div>
  );
}

type InputProps = {
  name: string;
  type: string;
};

export const Input = ({ name, type }: InputProps) => {
  return (
    <label
      htmlFor={name}
      className="grid items-center grid-cols-4 gap-6 p-4 border rounded-md shadow-sm cursor-pointer border-white-low-opacity hover:border-primary"
    >
      <span className="capitalize">{type}</span>
      <input
        type={type}
        id={name}
        className="w-full col-span-3 px-2 py-1 text-black bg-white border-2 rounded outline-none focus:border-primary"
        placeholder={type}
      />
    </label>
  );
};
