import { default as plugin } from 'tailwindcss/plugin.js';

export default plugin(({ addVariant }) => {
  addVariant('not-last', '&:not(:last-child)');
  addVariant('not-first-of-type', '&:not(:first-of-type)');
  addVariant('not-last-of-type', '&:not(:last-of-type)');
  addVariant('not-placeholder-shown', '&:not(:placeholder-shown)');
  addVariant('not-autofill', '&:not(:autofill)');
  addVariant('not-first', '&:not(:first-child)');
  addVariant('not-only', '&:not(:only-child)');
  addVariant('not-odd', '&:not(:nth-child(odd))');
  addVariant('not-even', '&:not(:nth-child(even))');
  addVariant('not-hover', '&:not(:hover)');
  addVariant('not-focus', '&:not(:focus)');
  addVariant('not-active', '&:not(:active)');
  addVariant('not-disabled', '&:not(:disabled)');
  addVariant('not-checked', '&:not(:checked)');
  addVariant('not-empty', '&:not(:empty)');
  addVariant('not-read-only', '&:not(:read-only)');
  addVariant('not-required', '&:not(:required)');
  addVariant('not-valid', '&:not(:valid)');
  addVariant('not-invalid', '&:not(:invalid)');

  addVariant('group-not-last', ':not(.group:last-child) &');
  addVariant('group-not-first-of-type', ':not(.group:first-of-type) &');
  addVariant('group-not-last-of-type', ':not(.group:last-of-type) &');
  addVariant('group-not-placeholder-shown', ':not(.group:placeholder-shown) &');
  addVariant('group-not-autofill', ':not(.group:autofill) &');
  addVariant('group-not-first', ':not(.group:first-child) &');
  addVariant('group-not-only', ':not(.group:only-child) &');
  addVariant('group-not-odd', ':not(.group:nth-child(odd)) &');
  addVariant('group-not-even', ':not(.group:nth-child(even)) &');
  addVariant('group-not-hover', ':not(.group:hover) &');
  addVariant('group-not-focus', ':not(.group:focus) &');
  addVariant('group-not-active', ':not(.group:active) &');
  addVariant('group-not-disabled', ':not(.group:disabled) &');
  addVariant('group-not-checked', ':not(.group:checked) &');
  addVariant('group-not-empty', ':not(.group:empty) &');
  addVariant('group-not-read-only', ':not(.group:read-only) &');
  addVariant('group-not-required', ':not(.group:required) &');
  addVariant('group-not-valid', ':not(.group:valid) &');
  addVariant('group-not-invalid', ':not(.group:invalid) &');

  addVariant('peer-not-last', ':not(.peer:last-child) ~ &');
  addVariant('peer-not-first-of-type', ':not(.peer:first-of-type) ~ &');
  addVariant('peer-not-last-of-type', ':not(.peer:last-of-type) ~ &');
  addVariant('peer-not-placeholder-shown', ':not(.peer:placeholder-shown) ~ &');
  addVariant('peer-not-autofill', ':not(.peer:autofill) ~ &');
  addVariant('peer-not-first', ':not(.peer:first-child) ~ &');
  addVariant('peer-not-only', ':not(.peer:only-child) ~ &');
  addVariant('peer-not-odd', ':not(.peer:nth-child(odd)) ~ &');
  addVariant('peer-not-even', ':not(.peer:nth-child(even)) ~ &');
  addVariant('peer-not-hover', ':not(.peer:hover) ~ &');
  addVariant('peer-not-focus', ':not(.peer:focus) ~ &');
  addVariant('peer-not-active', ':not(.peer:active) ~ &');
  addVariant('peer-not-disabled', ':not(.peer:disabled) ~ &');
  addVariant('peer-not-checked', ':not(.peer:checked) ~ &');
  addVariant('peer-not-empty', ':not(.peer:empty) ~ &');
  addVariant('peer-not-read-only', ':not(.peer:read-only) ~ &');
  addVariant('peer-not-required', ':not(.peer:required) ~ &');
  addVariant('peer-not-valid', ':not(.peer:valid) ~ &');
  addVariant('peer-not-invalid', ':not(.peer:invalid) ~ &');
});
