import create from 'zustand'

interface storeState {
  counter: number,
  increasePopulation: any,
  removeAllBears: any
}

export const useStore = create<storeState>(set => ({
  counter: 0,
  increasePopulation: () => set(state => ({ counter: state.counter + 1 })),
  removeAllBears: () => set({ counter: 0 })
}))