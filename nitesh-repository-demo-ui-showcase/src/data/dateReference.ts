const baseDate = "2024-06-15T12:34:56.789Z";

export const dateReferenceEntries = [
  { slug: "date-constructor", title: "new Date()", description: "Create a Date object. Date-only ISO strings are interpreted as UTC; date-time strings without a timezone are interpreted as local time.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.toISOString();` },
  { slug: "date-constructor-property", title: "constructor", description: "The constructor property on a Date instance refers to the Date function.", code: `new Date().constructor === Date; // true` },
  { slug: "date-get-date", title: "getDate()", description: "Return the day of the month in local time, from 1 to 31.", code: `new Date("2024-06-15T12:34:56.789Z").getDate();` },
  { slug: "date-get-day", title: "getDay()", description: "Return the day of the week in local time: 0 is Sunday and 6 is Saturday.", code: `new Date("2024-06-15T12:34:56.789Z").getDay();` },
  { slug: "date-get-full-year", title: "getFullYear()", description: "Return the four-digit year in local time.", code: `new Date("2024-06-15T12:34:56.789Z").getFullYear();` },
  { slug: "date-get-hours", title: "getHours()", description: "Return the hour in local time, from 0 to 23.", code: `new Date("2024-06-15T12:34:56.789Z").getHours();` },
  { slug: "date-get-milliseconds", title: "getMilliseconds()", description: "Return the milliseconds component in local time, from 0 to 999.", code: `new Date("2024-06-15T12:34:56.789Z").getMilliseconds();` },
  { slug: "date-get-minutes", title: "getMinutes()", description: "Return the minutes component in local time, from 0 to 59.", code: `new Date("2024-06-15T12:34:56.789Z").getMinutes();` },
  { slug: "date-get-month", title: "getMonth()", description: "Return the month in local time, indexed from 0 for January to 11 for December.", code: `new Date("2024-06-15T12:34:56.789Z").getMonth(); // 5 for June in UTC` },
  { slug: "date-get-seconds", title: "getSeconds()", description: "Return the seconds component in local time, from 0 to 59.", code: `new Date("2024-06-15T12:34:56.789Z").getSeconds();` },
  { slug: "date-get-time", title: "getTime()", description: "Return milliseconds elapsed since the Unix epoch (1970-01-01T00:00:00Z).", code: `new Date("2024-06-15T12:34:56.789Z").getTime();` },
  { slug: "date-get-timezone-offset", title: "getTimezoneOffset()", description: "Return the local timezone's offset from UTC in minutes, using the sign convention UTC minus local time.", code: `new Date("2024-06-15T12:34:56.789Z").getTimezoneOffset();` },
  { slug: "date-get-utc-date", title: "getUTCDate()", description: "Return the day of the month in UTC, from 1 to 31.", code: `new Date("2024-06-15T12:34:56.789Z").getUTCDate(); // 15` },
  { slug: "date-get-utc-day", title: "getUTCDay()", description: "Return the day of the week in UTC: 0 is Sunday and 6 is Saturday.", code: `new Date("2024-06-15T12:34:56.789Z").getUTCDay(); // 6` },
  { slug: "date-get-utc-full-year", title: "getUTCFullYear()", description: "Return the four-digit year in UTC.", code: `new Date("2024-06-15T12:34:56.789Z").getUTCFullYear(); // 2024` },
  { slug: "date-get-utc-hours", title: "getUTCHours()", description: "Return the hour in UTC, from 0 to 23.", code: `new Date("2024-06-15T12:34:56.789Z").getUTCHours(); // 12` },
  { slug: "date-get-utc-milliseconds", title: "getUTCMilliseconds()", description: "Return the milliseconds component in UTC, from 0 to 999.", code: `new Date("2024-06-15T12:34:56.789Z").getUTCMilliseconds(); // 789` },
  { slug: "date-get-utc-minutes", title: "getUTCMinutes()", description: "Return the minutes component in UTC, from 0 to 59.", code: `new Date("2024-06-15T12:34:56.789Z").getUTCMinutes(); // 34` },
  { slug: "date-get-utc-month", title: "getUTCMonth()", description: "Return the month in UTC, indexed from 0 for January to 11 for December.", code: `new Date("2024-06-15T12:34:56.789Z").getUTCMonth(); // 5 for June` },
  { slug: "date-get-utc-seconds", title: "getUTCSeconds()", description: "Return the seconds component in UTC, from 0 to 59.", code: `new Date("2024-06-15T12:34:56.789Z").getUTCSeconds(); // 56` },
  { slug: "date-get-year", title: "getYear()", description: "Deprecated legacy method. It returns the year minus 1900; use getFullYear() instead.", code: `new Date("2024-06-15T12:34:56.789Z").getYear(); // 124 (in UTC)` },
  { slug: "date-now", title: "Date.now()", description: "Return the current time as milliseconds since the Unix epoch.", code: `Date.now();` },
  { slug: "date-parse", title: "Date.parse()", description: "Parse a date string and return milliseconds since the Unix epoch, or NaN for an invalid string. Prefer standard ISO date-time strings.", code: `Date.parse("2024-06-15T12:34:56.789Z");` },
  { slug: "date-prototype", title: "prototype", description: "Date.prototype provides shared methods for Date instances. Avoid modifying built-in prototypes.", code: `Object.getPrototypeOf(new Date()) === Date.prototype; // true` },
  { slug: "date-set-date", title: "setDate()", description: "Set the day of the month in local time. Values outside the month range roll into adjacent months.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setDate(20);\ndate.toISOString();` },
  { slug: "date-set-full-year", title: "setFullYear()", description: "Set the year in local time, optionally setting the month and day as well.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setFullYear(2025);\ndate.toISOString();` },
  { slug: "date-set-hours", title: "setHours()", description: "Set the hour in local time, optionally setting minutes, seconds, and milliseconds.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setHours(8);\ndate.toISOString();` },
  { slug: "date-set-milliseconds", title: "setMilliseconds()", description: "Set the milliseconds component in local time.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setMilliseconds(0);\ndate.toISOString();` },
  { slug: "date-set-minutes", title: "setMinutes()", description: "Set the minutes component in local time, optionally setting seconds and milliseconds.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setMinutes(0);\ndate.toISOString();` },
  { slug: "date-set-month", title: "setMonth()", description: "Set the month in local time, indexed from 0; out-of-range values roll into adjacent years.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setMonth(0);\ndate.toISOString();` },
  { slug: "date-set-seconds", title: "setSeconds()", description: "Set the seconds component in local time, optionally setting milliseconds.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setSeconds(0);\ndate.toISOString();` },
  { slug: "date-set-time", title: "setTime()", description: "Set the Date using milliseconds since the Unix epoch.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setTime(0);\ndate.toISOString(); // 1970-01-01T00:00:00.000Z` },
  { slug: "date-set-utc-date", title: "setUTCDate()", description: "Set the day of the month in UTC. Values outside the month range roll into adjacent months.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setUTCDate(20);\ndate.toISOString();` },
  { slug: "date-set-utc-full-year", title: "setUTCFullYear()", description: "Set the year in UTC, optionally setting the month and day as well.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setUTCFullYear(2025);\ndate.toISOString();` },
  { slug: "date-set-utc-hours", title: "setUTCHours()", description: "Set the hour in UTC, optionally setting minutes, seconds, and milliseconds.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setUTCHours(8);\ndate.toISOString();` },
  { slug: "date-set-utc-milliseconds", title: "setUTCMilliseconds()", description: "Set the milliseconds component in UTC.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setUTCMilliseconds(0);\ndate.toISOString();` },
  { slug: "date-set-utc-minutes", title: "setUTCMinutes()", description: "Set the minutes component in UTC, optionally setting seconds and milliseconds.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setUTCMinutes(0);\ndate.toISOString();` },
  { slug: "date-set-utc-month", title: "setUTCMonth()", description: "Set the month in UTC, indexed from 0; out-of-range values roll into adjacent years.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setUTCMonth(0);\ndate.toISOString();` },
  { slug: "date-set-utc-seconds", title: "setUTCSeconds()", description: "Set the seconds component in UTC, optionally setting milliseconds.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setUTCSeconds(0);\ndate.toISOString();` },
  { slug: "date-set-year", title: "setYear()", description: "Deprecated legacy method with special handling for years from 0 to 99. Use setFullYear() instead.", code: `const date = new Date("2024-06-15T12:34:56.789Z");\ndate.setYear(2025);\ndate.toISOString();` },
  { slug: "date-to-date-string", title: "toDateString()", description: "Return a human-readable date portion in the local timezone.", code: `new Date("2024-06-15T12:34:56.789Z").toDateString();` },
  { slug: "date-to-gmt-string", title: "toGMTString()", description: "Deprecated alias for toUTCString(). Use toUTCString() instead.", code: `new Date("2024-06-15T12:34:56.789Z").toGMTString();` },
  { slug: "date-to-iso-string", title: "toISOString()", description: "Return a standardized UTC date-time string. Throws RangeError for an invalid Date.", code: `new Date("2024-06-15T12:34:56.789Z").toISOString();` },
  { slug: "date-to-json", title: "toJSON()", description: "Return the ISO string used when serializing a valid Date as JSON, or null for an invalid date.", code: `new Date("2024-06-15T12:34:56.789Z").toJSON();` },
  { slug: "date-to-locale-date-string", title: "toLocaleDateString()", description: "Format the date portion according to locale conventions and the local timezone.", code: `new Date("2024-06-15T12:34:56.789Z").toLocaleDateString();` },
  { slug: "date-to-locale-time-string", title: "toLocaleTimeString()", description: "Format the time portion according to locale conventions and the local timezone.", code: `new Date("2024-06-15T12:34:56.789Z").toLocaleTimeString();` },
  { slug: "date-to-locale-string", title: "toLocaleString()", description: "Format a date and time according to locale conventions and the local timezone.", code: `new Date("2024-06-15T12:34:56.789Z").toLocaleString();` },
  { slug: "date-to-string", title: "toString()", description: "Return a human-readable representation of the date and time in the local timezone.", code: `new Date("2024-06-15T12:34:56.789Z").toString();` },
  { slug: "date-to-time-string", title: "toTimeString()", description: "Return a human-readable time portion in the local timezone.", code: `new Date("2024-06-15T12:34:56.789Z").toTimeString();` },
  { slug: "date-to-utc-string", title: "toUTCString()", description: "Return a human-readable representation of the date and time in UTC.", code: `new Date("2024-06-15T12:34:56.789Z").toUTCString();` },
  { slug: "date-utc", title: "Date.UTC()", description: "Return epoch milliseconds for the supplied UTC date parts. Months are zero-indexed; years from 0 to 99 are interpreted as 1900 to 1999.", code: `Date.UTC(2024, 5, 15, 12, 34, 56);` },
  { slug: "date-value-of", title: "valueOf()", description: "Return the numeric timestamp in milliseconds since the Unix epoch, equivalent to getTime().", code: `new Date("2024-06-15T12:34:56.789Z").valueOf();` },
] as const;

export type DateReferenceSlug = (typeof dateReferenceEntries)[number]["slug"];

export const dateReferenceSlugs = dateReferenceEntries.map(
  (entry) => entry.slug,
) as DateReferenceSlug[];

export const dateReferenceDetails = Object.fromEntries(
  dateReferenceEntries.map(({ slug, title, description, code }) => [
    slug,
    { title, description, code },
  ]),
) as Record<
  DateReferenceSlug,
  { title: string; description: string; code: string }
>;

export function isDateReferenceSlug(value: string): value is DateReferenceSlug {
  return dateReferenceSlugs.includes(value as DateReferenceSlug);
}

export function runDateExample(slug: DateReferenceSlug): unknown {
  const date = () => new Date(baseDate);
  const callDateMethod = (methodName: string, ...args: number[]): unknown => {
    const instance = date();
    const method = Reflect.get(instance, methodName);
    if (typeof method !== "function") {
      throw new TypeError(`Date method ${methodName} is unavailable.`);
    }
    return Reflect.apply(method, instance, args);
  };
  const setAndFormat = (methodName: string, ...args: number[]) => {
    const instance = date();
    const method = Reflect.get(instance, methodName);
    if (typeof method !== "function") {
      throw new TypeError(`Date method ${methodName} is unavailable.`);
    }
    Reflect.apply(method, instance, args);
    return instance.toISOString();
  };

  switch (slug) {
    case "date-constructor":
      return date().toISOString();
    case "date-constructor-property":
      return date().constructor === Date;
    case "date-get-date":
      return date().getDate();
    case "date-get-day":
      return date().getDay();
    case "date-get-full-year":
      return date().getFullYear();
    case "date-get-hours":
      return date().getHours();
    case "date-get-milliseconds":
      return date().getMilliseconds();
    case "date-get-minutes":
      return date().getMinutes();
    case "date-get-month":
      return date().getMonth();
    case "date-get-seconds":
      return date().getSeconds();
    case "date-get-time":
      return date().getTime();
    case "date-get-timezone-offset":
      return date().getTimezoneOffset();
    case "date-get-utc-date":
      return date().getUTCDate();
    case "date-get-utc-day":
      return date().getUTCDay();
    case "date-get-utc-full-year":
      return date().getUTCFullYear();
    case "date-get-utc-hours":
      return date().getUTCHours();
    case "date-get-utc-milliseconds":
      return date().getUTCMilliseconds();
    case "date-get-utc-minutes":
      return date().getUTCMinutes();
    case "date-get-utc-month":
      return date().getUTCMonth();
    case "date-get-utc-seconds":
      return date().getUTCSeconds();
    case "date-get-year":
      return callDateMethod("getYear");
    case "date-now":
      return Date.now();
    case "date-parse":
      return Date.parse(baseDate);
    case "date-prototype":
      return Object.getPrototypeOf(date()) === Date.prototype;
    case "date-set-date":
      return setAndFormat("setDate", 20);
    case "date-set-full-year":
      return setAndFormat("setFullYear", 2025);
    case "date-set-hours":
      return setAndFormat("setHours", 8);
    case "date-set-milliseconds":
      return setAndFormat("setMilliseconds", 0);
    case "date-set-minutes":
      return setAndFormat("setMinutes", 0);
    case "date-set-month":
      return setAndFormat("setMonth", 0);
    case "date-set-seconds":
      return setAndFormat("setSeconds", 0);
    case "date-set-time":
      return new Date(0).toISOString();
    case "date-set-utc-date":
      return setAndFormat("setUTCDate", 20);
    case "date-set-utc-full-year":
      return setAndFormat("setUTCFullYear", 2025);
    case "date-set-utc-hours":
      return setAndFormat("setUTCHours", 8);
    case "date-set-utc-milliseconds":
      return setAndFormat("setUTCMilliseconds", 0);
    case "date-set-utc-minutes":
      return setAndFormat("setUTCMinutes", 0);
    case "date-set-utc-month":
      return setAndFormat("setUTCMonth", 0);
    case "date-set-utc-seconds":
      return setAndFormat("setUTCSeconds", 0);
    case "date-set-year":
      return setAndFormat("setYear", 2025);
    case "date-to-date-string":
      return date().toDateString();
    case "date-to-gmt-string":
      return callDateMethod("toGMTString");
    case "date-to-iso-string":
      return date().toISOString();
    case "date-to-json":
      return date().toJSON();
    case "date-to-locale-date-string":
      return date().toLocaleDateString();
    case "date-to-locale-time-string":
      return date().toLocaleTimeString();
    case "date-to-locale-string":
      return date().toLocaleString();
    case "date-to-string":
      return date().toString();
    case "date-to-time-string":
      return date().toTimeString();
    case "date-to-utc-string":
      return date().toUTCString();
    case "date-utc":
      return Date.UTC(2024, 5, 15, 12, 34, 56);
    case "date-value-of":
      return date().valueOf();
  }
}
