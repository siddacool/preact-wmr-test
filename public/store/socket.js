import create from 'zustand';

const socket = create((set, get) => ({
  data: {},
  oldData: {},
  update: (d = {}) => {
    const prevData = get().data;
    set({ data: d, oldData: prevData });
  },
}));

export default socket;
