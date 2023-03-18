export function replaceSpecialChars(str: string): string {
  str = str.replace(/[ÀÁÂÃÄÅ]/, 'A');
  str = str.replace(/[àáâãäå]/, 'a');
  str = str.replace(/[ÈÉÊË]/, 'E');
  str = str.replace(/[éèê]/, 'e');
  str = str.replace(/[ÍÌ]/, 'I');
  str = str.replace(/[íì]/, 'i');
  str = str.replace(/[ÓÔ]/, 'O');
  str = str.replace(/[óô]/, 'o');
  str = str.replace(/[Ú]/, 'U');
  str = str.replace(/[ú]/, 'u');
  str = str.replace(/[Ç]/, 'C');
  str = str.replace(/[ç]/, 'c');

  // o resto

  return str.replace(/[^a-z0-9]/gi, '');
}
