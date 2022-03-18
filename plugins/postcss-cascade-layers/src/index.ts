import { AtRule, Container } from "postcss";

function postcssCascadeLayers(opts) {
	return {
		postcssPlugin: "postcss-cascade-layers",
		Once(root: Container) {
			let layerCount = 0;
			let layerOrder = {};

			// 1st walkthrough to rename anon layers and store state (no modification of layer styles)
			root.walkAtRules("layer", (atRule) => {
				// give anonymous layers a name
				if (!atRule.params) {
					atRule.params = `anon${layerCount}`;
				}

				let hasNestedLayers = false;
				let hasUnlayeredStyles = false;

				// check for where a layer has nested layers AND styles outside of those layers
				atRule.each((node) => {
					if (node.type == "atrule") {
						hasNestedLayers = true;
					} else if (node.type == "rule") {
						hasUnlayeredStyles = true;
					}
				});

				if (hasNestedLayers && hasUnlayeredStyles) {
					let cloned = [];
					//create final layer
					atRule.append({
						name: `layer ${atRule.params}-last `,
					});

					// go through the unlayered rules, clone, and delete from top level atRule
					atRule.each((node) => {
						if (node.type == "rule") {
							cloned.push(node.clone());
							node.remove();
						}
					});
					// add cloned rules to new final layer
					const lastNode = atRule.last as AtRule;
					lastNode.append(cloned);
				}
			});

			root.walkAtRules("layer", (layer) => {
				layerCount += 1;
				layerOrder[layer.params] = layerCount;
				console.log(layerOrder);
			});

			// 2nd walkthrough to transform unlayered styles - need highest specificity (layerCount + 1)
			// root.walkRules((rule) => {
			// 	console.log("second walkthrough");
			// });

			// 3rd walkthrough to transform layered styles:
			//  - move out styles from atRule, insert before: https://postcss.org/api/#container-insertbefore
			//  - delete empty atRule
			//  - give selectors the specifity they need based on layerPriority state
			// root.walkAtRules((atRule) => {
			// 	console.log(atRule, "third walkthrough");
			// });
		},
	};
}

postcssCascadeLayers.postcss = true;

export default postcssCascadeLayers;
