const handleActions = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'TEST_ACTION':
      return { ...state, hola: 'mundo' };
    default:
      return state;
  }
};
export default handleActions;
