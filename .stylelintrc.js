module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-scss",
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["mixin", "extend", "content", "include"],
      },
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["export"],
      },
    ],
    indentation: 2,
    "no-descending-specificity": null,
  },
};
