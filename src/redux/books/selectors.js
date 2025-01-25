import { createSelector } from "@reduxjs/toolkit";
//import { statusFilters } from './constants';
export const getBooksRec = (state) => state.books.results;
export const getTotal = (state) => state.books.totalPages;
export const getFilter = (state) => state.filters && state.filters.name;
// export const selectFilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
export const getTitleFilter = (state) => state.filters.title;
export const getAuthorFilter = (state) => state.filters.author;

export const selectFilteredContacts = createSelector(
  [getBooksRec, getTitleFilter, getAuthorFilter],
  (contacts, titleFilter, authorFilter) => {
    return contacts.filter((contact) => {
      const matchesTitle = contact.title
        .toLowerCase()
        .includes(titleFilter.toLowerCase());
      const matchesAuthor = contact.author
        .toLowerCase()
        .includes(authorFilter.toLowerCase());
      return matchesTitle && matchesAuthor; // Оба фильтра должны совпадать
    });
  }
);
export const selectIsLoading = (state) => state.books.loading;
export const selectError = (state) => state.books.error;
