export default function (plop) {
  plop.setGenerator("Component", {
    description: "Generate a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "plop/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/index.ts",
        templateFile: "plop/component/index.ts.hbs",
      },
    ],
  });

  plop.setGenerator("Component (with story)", {
    description: "Generate a new component with story",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "plop/component/component.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "plop/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/index.ts",
        templateFile: "plop/component/index.ts.hbs",
      },
    ],
  });

  plop.setGenerator("Page", {
    description: "Generate a new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{properCase name}}Page.tsx",
        templateFile: "plop/pages/page.tsx.hbs",
      },
    ],
  });
}
