export function validation(myRegExp: RegExp, item: string, set: (status: boolean) => void) {
  if (item.search(myRegExp) === -1) {
    set(true);
  } else {
    set(false);
  }
}
