window.function = function (arr, format, jl, sep, type, tri) {
  if (arr == undefined && jl == undefined) return undefined;

  format = format.value ?? "short";
  jl = jl.value ?? "";
  sep = sep.value ?? "|";
  type = type.value ?? "string";
  tri = tri.value ?? 0;

  type = type.trim();
  let tab;

  if (arr != undefined) {
    tab = [...arr.value];
  } else {
    tab = jl.split(sep);
  }

  // String correction
  tab = tab.map((dt) => {
    if (type == "string") {
      // string
      return dt.trim();
    } else if (type == "number") {
      // number

      // string to number
      if (isNaN(dt)) {
        dt = dt.replace(",", ".");
        return parseFloat(dt);
      }
      return dt;
    } else {
      // date
      return glide2Date(dt, format);
    }
  });

  if (tri) {
    if (type == "string") {
      // Sort Descending
      tab.sort((a, b) => b.localeCompare(a));
    } else {
      tab.sort((a, b) => b - a);
    }
  } else {
    // Sort Ascending
    if (type == "string") {
      tab.sort((a, b) => a.localeCompare(b));
    } else {
      tab.sort((a, b) => a - b);
    }
  }

  if (type == "date") {
    tab = tab.map((dt) => {
      return date2Glide(dt, format);
    });
  }

  return tab.join(sep);
};
