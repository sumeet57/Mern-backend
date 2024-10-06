
// This function is used to handle async functions in a more readable way.

const asyncfunction = async (fn) = async() => {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}

export default asyncfunction;