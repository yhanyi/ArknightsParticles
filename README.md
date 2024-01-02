# Arknights Particles

A reverse engineer of the particle effects found on the Arknights website at https://ak.hypergryph.com/.

To run this project online: https://yeohhanyi-arknights-particles.vercel.app/.

This is an updated version of the project started by Eric-Schecter. His profile can be found at https://github.com/Eric-Schecter. This repo will periodically be updated to incorporate the latest versions of dependencies installed.

This was the front-end effect that inspired me to start learning web-dev over my winter break and piqued my interest in ThreeJS. There is still a lot of room for improvement as I learn more about web-development and ThreeJS.

To change the images being generated, copy the images to the public/images folder. Then, update the string array in the paths-data.tsx file within the particle folder.

To run this on your local machine,

1. Clone the repo.
```bash
git clone git@github.com:yhanyi/arknghts-particles.git
```
1. Navigate to the project folder.
```bash
cd arknights-particles
```
1. Install all packages/dependencies.
```bash
npm install
```
1. Optional: If you would like to individually download the packages/dependencies.
```bash
npm install raw-loader glslify-loader --save-dev

npm install --save-dev webpack webpack-cli

npm i three

npm i @types/three
```
5. Start the application.
```bash
npm run dev
```
6. Visit https://localhost:3000 to view the project.