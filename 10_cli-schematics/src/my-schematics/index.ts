import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function mySchematics(_options: any): Rule {
  // A schematic does not interact directly with the filesystem.
  // Instead, it creates a virtual filesystem represented by a Tree object.
  // The virtual filesystem contains a staging area where all transformations from schematics happen.
  // This area aims to make sure that any transformations that are not valid will not propagate to the actual filesystem.
  // As soon as the schematic is valid to execute, the virtual filesystem will apply the changes to the real one.
  // All transformations of a schematic operate in a SchematicContext object.
  return (tree: Tree, _context: SchematicContext) => {
    return tree;
  };
}
