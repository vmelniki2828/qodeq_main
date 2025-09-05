module.exports = function override(config, env) {
  // Игнорируем предупреждения source-map для node_modules
  config.module.rules.forEach(rule => {
    if (rule.oneOf) {
      rule.oneOf.forEach(subRule => {
        if (subRule.loader && subRule.loader.includes('source-map-loader')) {
          subRule.exclude = /node_modules/;
        }
      });
    }
  });

  // Альтернативный способ - фильтрация предупреждений
  config.stats = {
    ...config.stats,
    warnings: false,
    warningsFilter: [
      /Failed to parse source map/,
      /@mediapipe/
    ]
  };

  return config;
};
