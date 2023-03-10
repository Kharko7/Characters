export const debounce = (cb: (value: string) => void, delay: number) => {
  let timeout: NodeJS.Timeout;

  return (text: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(text);
    }, delay);
  };
};