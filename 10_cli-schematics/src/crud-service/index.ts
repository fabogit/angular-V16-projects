import { normalize, strings } from '@angular-devkit/core';
import { apply, applyTemplates, chain, externalSchematic, MergeStrategy, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function crudService(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      applyTemplates({
        // Knowing which options will be used to generate the Angular service beforehand is impossible.
        // Thus, we use the spread operator to pass all available options to the templateSource method.
        // That is also why the _options parameter is of type any.
        ..._options,
        classify: strings.classify,
        dasherize: strings.dasherize
      }),
      move(normalize(_options.path ?? normalize('src/app/')))
    ]);
    return chain([
      // We use the externalSchematic method to call the built-in generation schematic for creating Angular services.
      // Then, we merge the result from executing that schematic with our templateSource variable.
      externalSchematic('@schematics/angular', 'service', _options),
      // We also define the strategy of the merge operation using MergeStrategy.Overwrite so that any changes made by our schematic will overwrite the default ones.
      mergeWith(templateSource, MergeStrategy.Overwrite)
    ]);
  };
}
