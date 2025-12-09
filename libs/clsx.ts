export default function clsx(...classNames: any[]) {
  // get the string classes only
  return classNames.filter((t) => typeof t === "string").join(" ");
}
