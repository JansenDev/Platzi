// console.log("com estas");

// const btn = document.getElementById("btn");

// btn.addEventListener("click", greeting);

// function greeting() {
//   // const module = await import('./tests.js');
//   // module.saludar();

//   import("./tests.js").then((module) => {
//     module.saludar();
//   });
// }
const promesa1 = new Promise((resolve, reject) => resolve("error prro"));
const promesa2 = new Promise((resolve, reject) => resolve("resolve"));
const promesa3 = new Promise((resolve, reject) => resolve("resolve"));

// Promise.allSettled([promesa1, promesa2, promesa3]).then((result) =>
//   console.log(result)
// );

const foo = null ?? "Es nulo prro";
// console.log(foo);

const user = {};
// console.log(user?.name?.np);

globalThis.queueMicrotask(() => {
    Promise.allSettled([promesa1, promesa2, promesa3]).then((result) =>
      setTimeout(() => {
        console.log(result);
      }, 3000)
    );
  })

  const text = "java 1 vs java 2";

  const x = text.replaceAll("java","python");

  console.log(x);