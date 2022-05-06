import type { Container } from 'postcss';

// Declarations with !important have inverse priority in layers.
// Splitting rules allows us to assign different specificity to rules with or without !important declarations.
export function splitImportantStyles(root: Container) {
	root.walkDecls((decl) => {
		if (!decl.important) {
			return;
		}

		const parent = decl.parent;
		const parentClone = parent.clone();

		parentClone.each((node) => {
			if (node.type === 'decl' && node.important) {
				return;
			}

			node.remove();
		});

		parent.each((node) => {
			if (node.type === 'decl' && node.important) {
				node.remove();
			}
		});

		parent.before(parentClone);
	});
}
