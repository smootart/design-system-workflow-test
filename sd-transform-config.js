import {
    register,
    transformDimension,
    expandTypesMap,
  } from "@tokens-studio/sd-transforms";
  import StyleDictionary from "style-dictionary";
  
  register(StyleDictionary);
  
  const sd = new StyleDictionary({
    source: [
      'src/tokens/figma/$metadata.json',
      'src/tokens/figma/$themes.json',
      'src/tokens/figma/border-radius.json',
      'src/tokens/figma/semantic.json',
      'src/tokens/figma/spacing.json',
    ],
    preprocessors: ['tokens-studio'], 
    platforms: {
      css: {
        transformGroup: 'tokens-studio', // <-- apply the tokens-studio transformGroup to apply all transforms
        transforms: ['name/kebab'], // <-- add a token name transform for generating token names, default is camel
        buildPath: 'build/css/',
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
          },
        ],
      },
    },
  });
  
//   console.log("Registered Transforms:", sd);
  
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
  