import create from 'zustand'

export const useStore = create(set => ({
  counter: 0,
  increasePopulation: () => set(state => ({ counter: state.counter + 1 })),
  removeAllBears: () => set({ counter: 0 })
}))