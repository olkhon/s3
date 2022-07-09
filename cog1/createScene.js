/**
 * Populate the scene-graph with nodes,
 * calling methods form the scene-graph and node modules.
 * 
 * Texture files have to exist in the "textures" sub-directory.
 * 
 * @namespace cog1
 * @module createScene
 */
define(["exports", "scenegraph", "animation"], //
	function (exports, scenegraph, animation) {
		"use strict";

		/**
		 * 	Call methods form the scene-graph (tree) module to create the scene.
		 *
		 */
		function init() {

			var box = scenegraph.createNodeWithModel("box", "cube", { scale: 400 })

				var star_1 = scenegraph.createNodeWithModel("star_1", "star", { scale: 2 }, box);
			animation.assign(star_1, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-370, -370, -370],
				boundingBoxMax: [370, 370, 370]
			});

			var diamond_1 = scenegraph.createNodeWithModel("diamond_1", "diamond", { resursionDepth: 2, scale: 20 }, box);
			animation.assign(diamond_1, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-400, -400, -400],
				boundingBoxMax: [400, 400, 400]
			});

		

			var cube_1 = scenegraph.createNodeWithModel("cube_1", "cube", { scale: 20 }, box);
			animation.assign(cube_1, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-400, -400, -400],
				boundingBoxMax: [400, 400, 400]
			});
			
			var cube_2 = scenegraph.createNodeWithModel("cube_2", "cube", { scale: 20 }, box);
			animation.assign(cube_2, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-400, -400, -400],
				boundingBoxMax: [400, 400, 400]
			});


				var sphere_1 = scenegraph.createNodeWithModel("sphere_1", "sphere", { resursionDepth: 2, scale: 20 }, box);
			animation.assign(sphere_1, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-400, -400, -400],
				boundingBoxMax: [400, 400, 400]
			});

			var teapot_1 = scenegraph.createNodeWithModel("teapot_1", "teapot", { scale: 2 }, box);
			animation.assign(teapot_1, 'move', {
				movementSpeed: [Math.random() * 2, Math.random() * 2, Math.random() * 2],
				sphereRadius: 20,
				boundingBoxMin: [-390, -390, -390],
				boundingBoxMax: [390, 390, 390]
			});

		

			return;

			


			// Set visibility of nodes (hide: set to false).
			// Comment out what you want to see as the default is visible.
			// cubeNode.setVisible(false);
			cubeNode1.setVisible(false);
			cubeNode2.setVisible(false);
			cubeNode3.setVisible(false);
			cubeNode4.setVisible(false);
			cubeNode5.setVisible(false);
			cubeNode6.setVisible(false);
			insideOutPolyNode.setVisible(false);
			diamondNode.setVisible(false);
			torusNode.setVisible(false);
			torusNode1.setVisible(false);
			teapotNode.setVisible(false);
			dirtyTeapotNode.setVisible(false);
			waltheadNode.setVisible(false);
			plainNode1.setVisible(false);
			emptyNode1.setVisible(false);

			// Set the initially interactive node [by name].
			// If not set, it is the first node created.
			// scenegraph.setInteractiveNodeByName("mySphere");
			//scenegraph.setInteractiveNode(torusNode);
			// scenegraph.setInteractiveNodeByName("insideOutPoly");

			// Create a node for the light, which is not visible by default.
			var lightnode = scenegraph.createPointLightNode("light", "diamond");

			// Set light parameter.
			// ambientLI, pointLI, pointPos, specularLI, specularLIExpo
			// scenegraph.setLights(0.5, 0.6, [200, 200, 300], 4.0, 10);
		}

		// Public API.
		exports.init = init;
	});
