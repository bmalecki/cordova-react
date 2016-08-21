export const TOGGLE_STATS = "TOGGLE_STATS";
export const ADD_TREE = "ADD_TREE";

export const toggleStats = () => {
  return {
    type: TOGGLE_STATS
  }
}

export const addTree = (tree) => {
  return {
    type: ADD_TREE,
    content: tree
  }
}
