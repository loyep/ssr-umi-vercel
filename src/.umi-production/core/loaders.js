// src/pages/index.tsx
async function clientLoader() {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1e3));
  return { message: "data from client loader of index.tsx" };
}

// src/pages/users.tsx
async function clientLoader2() {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1e3));
  return { message: "data from client loader of users.tsx" };
}

// src/pages/users/user2.tsx
async function clientLoader3() {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1e3));
  return { message: "data from client loader of users/user2.tsx" };
}

// src/pages/users/user2/info.tsx
async function clientLoader4() {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1e3));
  return { message: "data from client loader of users/user2/info.tsx" };
}

// src/pages/users/user.tsx
async function clientLoader5() {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1e3));
  return { message: "data from client loader of users/user.tsx" };
}

// src/.umi-production/core/loaders.ts
var loaders_default = {
  "index": clientLoader,
  "users": clientLoader2,
  "users/user2": clientLoader3,
  "users/user2/info": clientLoader4,
  "users/user": clientLoader5
};
export {
  loaders_default as default
};
