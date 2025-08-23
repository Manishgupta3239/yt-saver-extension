import { CheckIcon, FilterIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button.tsx";
import useFiltersState from "@/lib/filtersState";

export function FiltersMenu() {
  const {
    sortBy,
    orderBy,
    setOrder,
    showFavourites,
    setSort,
    toggleShowFavourites,
  } = useFiltersState();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <FilterIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Sort and Filter</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              setSort("name");
            }}
          >
            <span>Name</span>
            {sortBy == "name" && (
              <DropdownMenuShortcut>
                <CheckIcon className="size-5" />
              </DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setSort("date");
            }}
          >
            <span>Date</span>
            {sortBy == "date" && (
              <DropdownMenuShortcut>
                <CheckIcon className="size-5" />
              </DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              setOrder("ascending");
            }}
          >
            <span>Ascending</span>
            {orderBy == "ascending" && (
              <DropdownMenuShortcut>
                <CheckIcon className="size-5" />
              </DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setOrder("descending");
            }}
          >
            <span>Descending</span>
            {orderBy == "descending" && (
              <DropdownMenuShortcut>
                <CheckIcon className="size-5" />
              </DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => toggleShowFavourites()}>
            <span>Show favourites</span>
            {showFavourites && (
              <DropdownMenuShortcut>
                <CheckIcon className="size-5" />
              </DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
