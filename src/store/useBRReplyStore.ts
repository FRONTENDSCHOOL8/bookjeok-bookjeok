import { create } from 'zustand';

type State = {
  replyTo: {
    id?: string;
    nickname?: string;
  };
};

type Action = {
  setReplyTo: any;
};

const useBRReplyStore = create<State & Action>((set) => ({
  replyTo: {},
  setReplyTo: (id: string, author: string) =>
    set({ replyTo: { id: id, nickname: author } }),
}));

export default useBRReplyStore;
