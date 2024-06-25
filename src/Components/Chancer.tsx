"use client";

import { PlaceholdersAndVanishInput } from '../Components/ui/placeholders-and-vanish-input';

export default function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Frontend Developer",
"Backend Developer",
"Expertise in React.js/Next.js",
"DevOps",
"Collaborative team player"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="items-center px-4">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
