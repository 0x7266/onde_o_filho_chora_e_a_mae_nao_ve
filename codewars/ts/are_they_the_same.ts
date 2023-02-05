export const comp = (a1: number[] | null, a2: number[] | null): boolean =>
  !a1 || !a2 || a1.length !== a2.length
    ? false
    : a1
        .map((n) => n * n)
        .sort()
        .toString() === a2.sort().toString()
    ? true
    : false;
