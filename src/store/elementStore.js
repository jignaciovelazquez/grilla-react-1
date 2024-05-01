import { create } from 'zustand';

import { cables as dataCable } from "../data/cables";
import { networkElement as dataPassives } from "../data/passives";

const passives = dataPassives.filter((element) => element.type === 'pasivo');
const actives = dataPassives.filter((element) => element.type === 'activo');

export const useElementStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),

  actives: actives,
  initActive: (active) => set(() => ({ actives: active })),
  updateActives: (newActive) => set(() => ({ actives: newActive })),

  passives: passives,
  initPassives: (passives) => set(() => ({ passives: passives })),
  updatePassives: (newPassives) => set(() => ({ passives: newPassives })),

  cables: dataCable,
  initCables: (cables) => set(() => ({ cables: cables })),
  updateCables: (newCables) => set(() => ({ cables: newCables })),

  drops: [],
  addDrop: (element) => set(({drops}) => ({ drops: {...drops, element} })),
  resetDrops: () => set(() => ({ drops: [] })),

}))