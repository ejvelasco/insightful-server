const gulp = require("gulp");
const ts = require("gulp-typescript");
const nodemon = require("gulp-nodemon");
const clean = require("gulp-clean");
//clean js
gulp.task("clean", () => {
  return gulp.src("./lib").pipe(clean());
});
//transpile ts
gulp.task("compile", () => {
  return gulp
    .src("./src/**/*.ts")
    .pipe(
      ts({
        lib: ["es5", "es6"],
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        experimentalDecorators: true,
        sourceMap: true,
        noImplicitAny: true,
        strict: true,
        outDir: "./lib",
        strictPropertyInitialization: false
      })
    )
    .pipe(gulp.dest("lib"));
});
//start
gulp.task("start", () => {
  nodemon({
    script: "./lib/index.js",
    ext: "ts",
    tasks: ["compile"]
  });
});
// default
gulp.task("default", gulp.series("clean", "compile", "start"));
