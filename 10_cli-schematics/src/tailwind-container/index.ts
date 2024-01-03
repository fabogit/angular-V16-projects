import { normalize, strings } from '@angular-devkit/core';
import { apply, applyTemplates, chain, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';
import { Schema } from './schema';

export function tailwindContainer(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    // We set the path property of the component in case one is not passed in the schematic.
    // By default, we create a folder inside the src\app folder with the same name as the component.
    _options.path = _options.path ?? normalize('src/app/' + _options.name as string);
    // We then use the apply method to read the template files from the files folder and pass the dasherize, classify, and name properties using the applyTemplates function.
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: _options.name
      }),
      // Finally, we call the move method to create the generated component files in the provided path.
      move(normalize(_options.path as string))
    ]);
    // We call the chain method to execute our schematic, passing the result of the mergeWith function, which uses the templateSource variable we created
    return chain([
      mergeWith(templateSource)
    ]);
  };
}