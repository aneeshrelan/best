import data from "./data";

(async () => {
  console.log("Before");
  await new Promise((r) => setTimeout(r, 2000));
  console.log("Done");
})();
