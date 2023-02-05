export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let counter: number = 1;
    h = h * bounce;
    while (window < h) {
      counter += 2;
      h = h * bounce;
    }
    return counter;
  }
  return -1;
}

/*
export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  return 2 * Math.ceil(Math.log(window/h)/Math.log(bounce)) - 1; 
}
*/

/*
export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  return 2 + bouncingBall(h * bounce, bounce, window);
}
*/

console.log(bouncingBall(9, 0.66, 1.5)); //3
console.log(bouncingBall(3.0, 0.66, 1.5)); //15
console.log(bouncingBall(30, 0.75, 1.5)); //21
console.log(bouncingBall(30, 0.4, 10)); //3
