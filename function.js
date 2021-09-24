window.function = function (jl, sep, tri) {
  if (jl.value == undefined) return undefined;
  sep = sep.value ?? ", ";
  tri = tri.value ?? 0;

  let tab = jl.value.split(sep);

  tab = tab.map((dt) => {
    return dt.trim();
  });

  if (tri) {
    // Sort Descending
    tab.sort((a, b) => b.localeCompare(a));
  } else {
    // Sort Ascending
    tab.sort((a, b) => a.localeCompare(b));
  }

  return tab.join(sep);
};
