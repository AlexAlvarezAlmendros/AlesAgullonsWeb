Letterpress-style button for primary actions, in the Ales Agullons rustic palette; use `primary` (barley gold) for the main action, `deep`/`merlot` on light grounds for emphasis, `outline`/`ghost` for secondary.

```jsx
<Button variant="primary" size="md" onClick={buy}>Comprar</Button>
<Button variant="outline">Veure totes</Button>
```

Variants: `primary` (gold), `deep` (roasted brown), `merlot` (wine, for specials), `outline`, `ghost`. Sizes: `sm` · `md` · `lg`. Props: `fullWidth`, `disabled`. Label text renders uppercase + tracked automatically.
