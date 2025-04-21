import { create } from 'zustand';
import { allNerves, Nerve } from '../data/nervesData';

interface SearchStore {
  query: string;
  results: Nerve[];
  setQuery: (query: string) => void;
  search: (query: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  query: '',
  results: [],
  setQuery: (query: string) => {
    set({ query });
    if (query.trim()) {
      const searchResults = allNerves.filter((nerve) => {
        const searchString = `${nerve.commonName} ${nerve.specificAnatomicalRegion || ''}`
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
        
        const normalizedQuery = query
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

        return searchString.includes(normalizedQuery);
      });
      set({ results: searchResults });
    } else {
      set({ results: [] });
    }
  },
  search: (query: string) => {
    set((state) => ({ ...state, query }));
  },
}));