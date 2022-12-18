# Setting up Node project using Typescript

This this guide, we going to wall through the process of creating a Node project using Typescript from scratch. We also use Hapi framework to define API and integrate with MongoDB via Mongoose. Let's get started

## 🌄 Initialize Project

To manage dependencies and devDependencies, we need to generate the package.json. Using -y to keep default settings

    npm init -y
    npm i @types/node -D

## 🌄 Install and setup Typescript

Install Typescript

    npm install typescript --save-dev

Create `tsconfig.json` at root dir

    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "lib": ["es6"],
        "allowJs": true,
        "outDir": "build",
        "rootDir": "src",
        "strict": true,
        "noImplicitAny": true,
        "esModuleInterop": true,
        "resolveJsonModule": true
      }
    }

## 🌄 Install and setup Nodemon

Install nodemon

    npm i nodemon -D

Create `nodemon.json` at root dir

    {
      "watch": ["src"],
      "ignore": ["src/**/*.spec.ts"],
      "exec": "ts-node -r tsconfig-paths/register ./src/index.ts",
      "ext": "ts,json"
    }

Add start script to package.json

    "start": "nodemon "

## 🌄 Create Production build

Install rimraf to clean build directory before generate a new one

    npm i rimraf -D

Add `build` and `start:prod` scripts to package.json

## 🌄 Install and setup ESLint

Install ESLint and dependencies

    npm i eslint @typescript-eslint/eslint-plugin eslint-plugin-import -D

Create `.eslintrc.json` at root dir

    {
      "parser": "@typescript-eslint/parser",
      "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      "plugins": ["@typescript-eslint", "import"],
      "env": {
        "node": true,
        "es6": true,
        "jest": true
      },
      "rules": {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-var-requires": "off",
        "arrow-body-style": "off",
        "func-names": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "import/order": [
          "error",
          {
            "groups": ["builtin", "external", "internal", "parent", "sibling"]
          }
        ]
      }
    }

Add `lint` script to package.json

    "lint": "eslint src --ext .ts,.js --fix",

## 🌄 Install and setup Prettier

Install ESLint and dependencies

    npm i prettier eslint-config-prettier eslint-plugin-prettier -D

Create `.prettierrc.json` at root dir

    {
      "printWidth": 80,
      "tabWidth": 2,
      "semi": true,
      "trailingComma": "es5",
      "endOfLine": "crlf"
    }

Update the `eslintrc.json`

- Add `prettier` and `plugin:prettier/recommended` to `extends` property
- Add `prettier` to `plugins` property

Add `format` script to package.json

    "format": "prettier src/**/*.{ts,js} --write",

## 🌄 Install and setup Husky and Lint-Staged

Install Husky and Lint-Staged

    npm i lint-staged husky -D

Initial husky

    npx husky-init && npm install

Adding the `lint-staged` to `package.json`

    "lint-staged": {
      "src/**/*.{ts,tsx,js,json}": [
        "prettier --write",
        "eslint --fix"
      ]
    }

## 🌄 Resolve Absolute Paths

Create `jsconfig.json` at root dir

    {
      "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "paths": {
          "*": ["src/*"]
        }
      }
    }

## 🌄 Install and setup Commit Lint

Install `commit-lint`

    npm i @commitlint/config-conventional @commitlint/cli -D

Add `commit-lint` to `husky`

    npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'

Add `.commitlintrc.json` at root dir

    {
      "extends": ["@commitlint/config-conventional"]
    }

## 🌄 Install and setup Jest

Install Jest

    npm i jest ts-jest eslint-plugin-jest @types/jest -D

Create `jest.config.js` at root dir

    module.exports = {
      preset: "ts-jest",
      testEnvironment: "node",
      setupFiles: ['dotenv/config'],
    }

Update `eslintrc.json`

- Add `jest` to `plugins`

Add `jest` script to `package.json`

## 🌄 Install Hapi, Joi and Mongoose

    npm i hapi joi mongoose
    npm i @types/hapi__hapi -D
