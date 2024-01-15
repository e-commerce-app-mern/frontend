# SCSS Styles

## Defining a mixin

The `@mixin` directive lets us create CSS code that is to be reused throughout the website.

```scss
@mixin mixin-name {
    property: value;
  property: value;
  ...
}
```

### Using the mixin

The `@include` directive is created to let us use (include) the mixin

```scss
selector {
  @include mixin-name;
}
```
