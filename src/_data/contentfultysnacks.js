const contentful = require("contentful");
require("dotenv").config();
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_PROD_READ_TOKEN,
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.

module.exports = async () => {
  return client
    .getEntries({ content_type: "snicketysnack", order: "sys.createdAt" })
    .then(function (response) {
      const snacktreat = response.items.map(function (snacktreat) {
        //snacktreat.fields.date = new Date(snacktreat.sys.updatedAt); // If, for example, we wanted to make it easier to get the "updated date"
        //console.log(snacktreat.fields.urlfragment); // DEBUG LINE ONLY
        return snacktreat.fields;
      });
      return snacktreat;
    })
    .catch(console.error);
};
