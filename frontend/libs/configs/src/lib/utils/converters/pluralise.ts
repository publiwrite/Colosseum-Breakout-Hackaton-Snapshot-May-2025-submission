export function pluralise(count: number, one: string, other: string) {
  const pluralRules = new Intl.PluralRules('en-US');
  const rule = pluralRules.select(count);

  if (rule === 'one') {
    return `${count} ${one}`;
  } else {
    return `${count} ${other}`;
  }
}
