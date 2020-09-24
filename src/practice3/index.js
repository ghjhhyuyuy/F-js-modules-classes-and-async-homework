/* eslint-disable no-console */
// eslint-disable-next-line import/prefer-default-export
export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json", {
    method: "get",
  })
    .then((response) => {
      // TODO feedback: 可以直接返回response.json(),少定义个变量
      const json = response.json();
      return json;
    })
    .then((data) => {
      // TODO feedback: 可以用ES6新特性解构result
      const result = [];
      result.push(data.origin);
      result.push(data.author);
      result.push(data.content);
      return result;
    })
    .catch((error) => console.log(error.message));
};
