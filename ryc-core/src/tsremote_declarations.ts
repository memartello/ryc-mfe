declare module "ryc-auth/Button";
declare module "ryc-auth/Store" {
  export default function useCount(): readonly [
    number,
    (count: number) => void
  ];
}
