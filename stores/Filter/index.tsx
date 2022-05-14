import create, { SetState } from "zustand";

type FilterState = {
  state: {
    isOpen: boolean;
  };
  toggleModal: () => void;
};

export const useFilter = create<FilterState>((set: SetState<FilterState>) => {
  const initialState = {
    isOpen: false,
  };

  return {
    state: {
      ...initialState,
    },
    toggleModal: () =>
      set(({ state: { isOpen } }) => ({ state: { isOpen: !isOpen } })),
  };
});
