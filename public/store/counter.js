import create from 'zustand';

const counter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => ({ count: state.count == 0 ? 0 : state.count - 1 })),
}));

export default counter;
