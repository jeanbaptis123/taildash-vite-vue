export function useState(initialState: any) {
  const state = ref(initialState);
  const setState = (newState: any) => {
    state.value = newState;
  };

  return [state, setState];
}
