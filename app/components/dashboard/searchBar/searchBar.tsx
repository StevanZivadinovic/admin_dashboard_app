"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const SearchBar: React.FC = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchHandler = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const pattern = /^[a-zA-Z0-9]+$/;
      if (
        e.target.value &&
        e.target.value.length > 2 &&
        pattern.test(e.target.value)
      ) {
        params.set("q", e.target.value);
      } else {
        params.delete("q");
      }
      replace(`${pathname}?${params}`);
    },
    300
  );
  return (
    <div className="flex justify-between">
      <div className="relative mr-4">
        <MdSearch className="absolute top-2 left-2" />
        <input
          onChange={(e) => {
            searchHandler(e);
          }}
          type="text"
          placeholder={`Search for user...`}
          className="p-1 pl-8 bg-bgMoreSoft rounded-md"
        />
      </div>
    </div>
  );
};

export default SearchBar;
