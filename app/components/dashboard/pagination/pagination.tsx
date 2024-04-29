"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface PaginationType{
  count:number
}
const Pagination = ({count}:PaginationType) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 3;

  const hasPrev = ITEM_PER_PAGE * (parseInt(String(page)) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(String(page)) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: string) => {
    type === "prev"
    // @ts-ignore
      ? params.set("page", parseInt(String(page)) - 1)
      // @ts-ignore
      : params.set("page", parseInt(String(page)) + 1);
    replace(`${pathname}?${params}`);
  };
  const previousBtnClass = !hasPrev ? 'opacity-50 cursor-not-allowed':'opacity-100 cursor-pointer';
  const nextBtnClass = !hasNext ? 'opacity-50 cursor-not-allowed':'opacity-100 cursor-pointer';
  return (
    <div className='flex justify-between'>
      <button
        className={`${previousBtnClass} bg-textSoft py-1 px-3 rounded-md `}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={`${nextBtnClass} bg-textSoft py-1 px-3 rounded-md`}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;