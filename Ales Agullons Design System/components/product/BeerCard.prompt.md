Product card shaped like a bottle label — a colored cap band with the beer name in display type, then style, description and a typewriter spec line. Composes `Tag` and `SpecList`.

```jsx
<BeerCard
  name="Runa"
  style="Brown Ale"
  tone="brown"
  description="Cervesa fosca de tres maltes; torrada però sense arribar a negra."
  specs={[{label:"ABV",value:"5.6%"},{label:"IBU",value:"30"},{label:"Format",value:"75 cl"}]}
  footer={<Button variant="deep" size="sm" fullWidth>Veure</Button>}
/>
```

`tone`: `pale` · `amber` · `brown` · `wheat` · `special`. Set `special` for once-a-year editions (merlot cap). Pass a `Button` via `footer`.
