export const slugify = str =>
str
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');


  export const deslugify = slug => {
    // Replace dashes with spaces or underscores.
    let string = slug.replace(/-/g, ' ');
    // Replace multiple spaces or underscores with a single space.
    string = string.replace(/\s+/g, ' ');
    // Remove leading and trailing spaces.
    string = string.trim();
    return string;
  }
  