import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
  documents: ["src/**/*.{tsx,ts}"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/__types__/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false, // codegen이 fragment 를 타입으로 변환할 때 fragment 자체가 아닌 내부의 타입을 변환
      },
    },
  },
};

export default config;
