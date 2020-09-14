/* eslint-disable no-console */
// eslint-disable-next-line import/prefer-default-export
export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json", {
    method: "get",
  })
    .then((response) => {
      const json = response.json();
      return json;
    })
    .then((data) => {
      const result = [];
      result.push(data.origin);
      result.push(data.author);
      result.push(data.content);
      return result;
    })
    .catch((error) => console.log(error.message));
};
