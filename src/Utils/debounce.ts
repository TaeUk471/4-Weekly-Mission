type Timer = ReturnType<typeof setTimeout>;

export default function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: Timer | null = null;

  return function debounced(...args: Parameters<T>) {
    clearTimeout(timeoutId as Timer);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
