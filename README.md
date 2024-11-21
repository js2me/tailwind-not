# tailwind :NOT()  

negative :not() pseudo-classes to create opposite states of existing Tailwind CSS pseudo-classes.  

`not-last`, `not-first-of-type`, `not-last-of-type`, `not-placeholder-shown`, `not-autofill`, `not-first`, `not-only`, `not-odd`, `not-even`, `not-hover`, `not-focus`, `not-active`, `not-disabled`, `not-checked`, `not-empty`, `not-read-only`, `not-required`, `not-valid`, `not-invalid`, 
`group-not-last`, `group-not-first-of-type`, `group-not-last-of-type`, `group-not-placeholder-shown`, `group-not-autofill`, `group-not-first`, `group-not-only`, `group-not-odd`, `group-not-even`, `group-not-hover`, `group-not-focus`, `group-not-active`, `group-not-disabled`, `group-not-checked`, `group-not-empty`, `group-not-read-only`, `group-not-required`, `group-not-valid`, `group-not-invalid`,  `peer-not-last`, `peer-not-first-of-type`, `peer-not-last-of-type`, `peer-not-placeholder-shown`, `peer-not-autofill`, `peer-not-first`, `peer-not-only`, `peer-not-odd`, `peer-not-even`, `peer-not-hover`, `peer-not-focus`, `peer-not-active`, `peer-not-disabled`, `peer-not-checked`, `peer-not-empty`, `peer-not-read-only`, `peer-not-required`, `peer-not-valid`, `peer-not-invalid`  

## Install  

```bash
pnpm add -E -D tailwind-not
```

## Configuration  

> tailwind.config.cjs  

```js
{
  plugins: [
    require('tailwind-not'),
  ],
}
```  

## Examples  

`not-last:bg-[red]` `not-checked:opacity-0`  