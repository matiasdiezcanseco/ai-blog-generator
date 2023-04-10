import { APIEvent, json } from "solid-start/api";

export async function GET({ params }: APIEvent) {
  const post = {
    title: "Component library setup with React, TypeScript and Rollup",
    introduction: `Component libraries are becoming more and more popular by the day,
    especially at organisations with multiple products and teams.
    Organisations are dedicating teams just to maintain the component
    library.`,
    body: [
      ` y preferred way of organising components is inside src/components
    folder, where each component would have its own folder. For example,
    if we have a Button component, there would be a folder called Button
    in src/components with all the button related files like Button.tsx,
    Button.css, Button.types.ts, and an index.ts file to export the
    component`,
      `y preferred way of organising components is inside src/components
    folder, where each component would have its own folder. For example,
    if we have a Button component, there would be a folder called Button
    in src/components with all the button related files like Button.tsx,
    Button.css, Button.types.ts, and an index.ts file to export the
    component`,
    ],
    conclusion: `The entrypoint to our library is the src/index.ts file and we'll be
    bundling our library into both commonjs and es modules formats. If
    the app using this library supports esmodules, it will use the esm
    build, otherwise cjs build will be used.`,
  };

  return json(post);
}
