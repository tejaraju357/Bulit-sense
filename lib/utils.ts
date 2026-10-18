export function formatMoney(val: number): string {
  if (val >= 10000000) {
    return `₹${(val / 10000000).toFixed(2)} Cr`;
  }
  return `₹${(val / 100000).toFixed(1)} L`;
}

export function formatIndianNumber(num: number): string {
  return num.toLocaleString('en-IN');
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
