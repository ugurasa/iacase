export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function createArray(start: number, end: number) {
  return Array.from({ length: end + 1 }, (_, i) => i + 1).slice(start - 1, end);
}

export function isEmpty(value: string) {
  return (
    value == null || (typeof value === "string" && value.trim().length === 0)
  );
}
