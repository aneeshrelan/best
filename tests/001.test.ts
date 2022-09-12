import data from "./data";

test("First Test", async () => {
  console.log("01", data);
  await new Promise((r) => setTimeout(r, 2000));
  console.log("01 Finished");
});
