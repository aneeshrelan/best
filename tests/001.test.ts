import data from "./data";

export const handler = async () => {
  return test("First Test", async () => {
    console.log("Before");
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Done");
  });
};
