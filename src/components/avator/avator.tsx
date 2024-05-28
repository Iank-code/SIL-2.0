import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AvatarProfile({ name }: { name: string }) {
  const abbName = function abbreviateName(fullName: string) {
    return fullName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // Call the abbreviateName function to get the abbreviated name
  const abbreviatedName = abbName(name);

  return (
    <Avatar>
      <AvatarFallback>{abbreviatedName}</AvatarFallback>
    </Avatar>
  );
}
