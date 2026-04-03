import tokensJson from "../../tokens/src/tokens.json";

const tokens = tokensJson as {
  brand: Record<string, string>;
  alias: Record<string, string>;
  shadow: Record<string, string>;
  radius: Record<string, string>;
  spacing: Record<string, string>;
};

type TokenGroup = keyof typeof tokens;

export function resolve(ref: string): string {
  const match = ref.match(/^\{(\w+)\.(.+)\}$/);
  if (!match) return ref;
  const [, group, key] = match;
  const g = tokens[group as TokenGroup];
  if (!g) return ref;
  const value = (g as Record<string, string>)[key];
  if (!value) return ref;
  if (value.startsWith("{")) return resolve(value);
  return value;
}

export { tokens };
