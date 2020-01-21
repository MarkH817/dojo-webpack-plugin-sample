define([], function() {
  return () => console.log("Lazy loaded function".padStart(40, "*"));
});
