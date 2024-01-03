# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!

### Use schematics

-Build

```bash
npm run build
npm link
ng new my-app --defaults
```

- Navigate to the `my-app` folder and run the following command to install our schematics:
`npm link my-schematics`

The previous npm command will install the my-schematics library in the current Angular CLI workspace.

The `npm link` command is like running `npm install my-schematics`, except that it downloads the npm package from the global npm cache of our machine and does not add it to the `package.json` file.

- Use the generate command of the Angular CLI to create a dashboard component:

`ng generate my-schematics:tailwind-container --name=dashboard`

we use our custom schematic by passing the name of our collection, `my-schematics`, followed by the specific schematic name, `tailwind-container`, separated by a colon. We also pass a name for our component using the `--name` option of the schematic.