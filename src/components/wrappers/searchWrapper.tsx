import { AvatarProfile } from "../avator/avator";
import { Input } from "../ui/input";
interface propTypes {
  category?: string;
  text: string;
  avatarName?: string;
  placeholder?: string;
  search: string;
  setSearch: any;
}

export default function SearchWrapper({
  category,
  text,
  avatarName,
  placeholder,
  search,
  setSearch,
}: propTypes) {
  return (
    <div className="flex flex-col w-[90%] justify-center gap-5 items-center px-12 bg-[#DAE7FF4D] py-16">
      <div className="flex items-center gap-3">
        {avatarName && <AvatarProfile name={`${avatarName}`} />}
        <div>
          <h3 className="font-bold">{category}</h3>
          <span>{text}</span>
        </div>
      </div>

      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={
          placeholder
            ? placeholder
            : "Type a name, email or username  to search"
        }
      />
    </div>
  );
}
