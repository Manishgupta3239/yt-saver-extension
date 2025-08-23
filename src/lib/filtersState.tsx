import { create } from "zustand";

type FiltersStore = {
  isSearching: boolean;
  searchQuery: string;
  sortBy: "name" | "date";
  orderBy: "ascending" | "descending";
  showFavourites: boolean;
  toggleSearching: () => void;
  setSearchQuery: (query: string) => void;
  setOrder: (newOrder: "ascending" | "descending") => void;
  setSort: (newSort: "name" | "date") => void;
  toggleShowFavourites: () => void;
};

const useFiltersState = create<FiltersStore>()((set, get) => ({
  isSearching: true,
  searchQuery: "",
  sortBy: "date",
  orderBy: "ascending",
  showFavourites: false,
  toggleSearching: () => {
    const { isSearching } = get();
    set({ isSearching: !isSearching });
  },
  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },
  setOrder: (newOrder) => {
    set({ orderBy: newOrder });
  },
  setSort: (newSort) => {
    set({ sortBy: newSort });
  },
  toggleShowFavourites: () => {
    const { showFavourites } = get();
    set({ showFavourites: !showFavourites });
  },
}));

export default useFiltersState;
