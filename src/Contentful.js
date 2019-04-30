const contentful = require("contentful");

export default contentful.createClient({
  // space: "48t1s0p1dk0p",
  // accessToken:
  //   "8bcdb00a5433f65ca9c9059c7ba3e3a7d0b3a2ccb293eb4a3c4af6951d9047a0"
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
