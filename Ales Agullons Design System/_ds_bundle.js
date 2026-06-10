/* @ds-bundle: {"format":3,"namespace":"AlesAgullonsDesignSystem_76dff6","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"BeerCard","sourcePath":"components/product/BeerCard.jsx"},{"name":"SpecList","sourcePath":"components/product/SpecList.jsx"}],"sourceHashes":{"components/core/Button.jsx":"cd9e2673a5bb","components/core/Eyebrow.jsx":"4d58172264f3","components/core/Input.jsx":"15e1b347986e","components/core/Tag.jsx":"dd427da56d52","components/product/BeerCard.jsx":"2f6845898a7d","components/product/SpecList.jsx":"e3718cc67853","ds-runtime.js":"84e32ea55791","ui_kits/website/app.jsx":"d87b7f87613f","ui_kits/website/chrome.jsx":"b2b0c383e3cb","ui_kits/website/data.js":"64310bd9a970","ui_kits/website/historia.jsx":"21acb6fb467d","ui_kits/website/screens.jsx":"718676f13c58"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AlesAgullonsDesignSystem_76dff6 = window.AlesAgullonsDesignSystem_76dff6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ales Agullons — Button
 * Letterpress-feeling button. Primary = barley gold, deep = roasted
 * brown, outline = ink hairline on paper, ghost = text-only.
 * Press state insets like type pressed into paper.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "13px"
    },
    md: {
      padding: "12px 24px",
      fontSize: "15px"
    },
    lg: {
      padding: "16px 34px",
      fontSize: "17px"
    }
  };
  const palette = {
    primary: {
      bg: "var(--barley-500)",
      bgHover: "var(--amber-500)",
      fg: "var(--ink-900)",
      border: "var(--ink-800)"
    },
    deep: {
      bg: "var(--brown-700)",
      bgHover: "var(--stout-900)",
      fg: "var(--paper-200)",
      border: "var(--stout-900)"
    },
    merlot: {
      bg: "var(--merlot-700)",
      bgHover: "var(--merlot-600)",
      fg: "var(--paper-200)",
      border: "var(--stout-900)"
    },
    outline: {
      bg: "transparent",
      bgHover: "var(--paper-300)",
      fg: "var(--ink-900)",
      border: "var(--ink-700)"
    },
    ghost: {
      bg: "transparent",
      bgHover: "var(--paper-300)",
      fg: "var(--brown-700)",
      border: "transparent"
    }
  };
  const p = palette[variant] || palette.primary;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-label)",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    lineHeight: 1,
    whiteSpace: "nowrap",
    color: p.fg,
    background: hover && !disabled ? p.bgHover : p.bg,
    border: `1.5px solid ${p.border}`,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    boxShadow: pressed && !disabled ? "var(--shadow-press)" : "var(--shadow-xs)",
    transform: pressed && !disabled ? "translateY(1px)" : "none",
    transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
    ...sizes[size],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ales Agullons — Eyebrow / overline
 * Uppercase, wide-tracked label that sits above headings.
 * Optional flanking rules for the centered "label" treatment.
 */
function Eyebrow({
  children,
  rules = false,
  tone = "accent",
  align = "left",
  style,
  ...rest
}) {
  const colors = {
    accent: "var(--merlot-700)",
    gold: "var(--barley-500)",
    ink: "var(--ink-700)",
    paper: "var(--paper-300)"
  };
  const label = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: colors[tone] || colors.accent,
      whiteSpace: "nowrap"
    }
  }, children);
  if (!rules) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        textAlign: align,
        ...style
      }
    }, rest), label);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      justifyContent: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      height: "1.5px",
      width: "44px",
      background: "currentColor",
      color: colors[tone] || colors.accent,
      opacity: 0.6
    }
  }), label, /*#__PURE__*/React.createElement("span", {
    style: {
      height: "1.5px",
      width: "44px",
      background: "currentColor",
      color: colors[tone] || colors.accent,
      opacity: 0.6
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ales Agullons — Input
 * Text field styled like a form on kraft paper: cream field, ink
 * hairline that deepens to gold on focus, letterpress inset.
 */
function Input({
  label,
  hint,
  type = "text",
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--ink-700)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      color: "var(--ink-900)",
      background: "var(--paper-100)",
      border: `1.5px solid ${focus ? "var(--barley-500)" : "var(--line-soft)"}`,
      borderRadius: "var(--radius-sm)",
      padding: "11px 13px",
      outline: "none",
      boxShadow: focus ? "var(--shadow-press)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "12px",
      color: "var(--ink-600)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ales Agullons — Tag / tasting chip
 * Small pill for beer styles, hop varieties, pairings. Tone maps to
 * the palette: gold (default), brown (dark ales), vine, merlot (specials).
 */
function Tag({
  children,
  tone = "default",
  outline = false,
  style,
  ...rest
}) {
  const tones = {
    default: {
      bg: "var(--barley-300)",
      fg: "var(--ink-900)",
      bd: "var(--barley-500)"
    },
    brown: {
      bg: "var(--brown-700)",
      fg: "var(--paper-200)",
      bd: "var(--brown-700)"
    },
    vine: {
      bg: "var(--vine-600)",
      fg: "var(--paper-100)",
      bd: "var(--vine-600)"
    },
    merlot: {
      bg: "var(--merlot-700)",
      fg: "var(--paper-100)",
      bd: "var(--merlot-700)"
    },
    plain: {
      bg: "var(--paper-300)",
      fg: "var(--ink-800)",
      bd: "var(--line-soft)"
    }
  };
  const t = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-label)",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      color: outline ? t.bd : t.fg,
      background: outline ? "transparent" : t.bg,
      border: `1.5px solid ${t.bd}`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/product/SpecList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ales Agullons — SpecList
 * Typewriter spec line for product data (ABV, IBU, format, malts…).
 * Pass an array of { label, value } items. Inline row or stacked.
 */
function SpecList({
  items = [],
  layout = "row",
  onDark = false,
  style,
  ...rest
}) {
  const labelColor = onDark ? "var(--paper-400)" : "var(--ink-500)";
  const valueColor = onDark ? "var(--paper-100)" : "var(--ink-900)";
  const divider = onDark ? "var(--paper-400)" : "var(--line-soft)";
  if (layout === "row") {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        fontFamily: "var(--font-spec)",
        ...style
      }
    }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        fontSize: "13px",
        color: labelColor,
        letterSpacing: "0.04em"
      }
    }, it.label, " ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: valueColor,
        fontWeight: 700
      }
    }, it.value))));
  }
  return /*#__PURE__*/React.createElement("dl", _extends({
    style: {
      margin: 0,
      fontFamily: "var(--font-spec)",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "16px",
      padding: "7px 0",
      borderBottom: i < items.length - 1 ? `1px solid ${divider}` : "none"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontSize: "12px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: labelColor
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: "13px",
      fontWeight: 700,
      color: valueColor,
      textAlign: "right"
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/product/BeerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ales Agullons — BeerCard
 * Product card built like a bottle label: a colored "cap" band with
 * the beer name set in display type, then style, description and a
 * typewriter spec line on cream stock. `tone` follows the beer family.
 */
function BeerCard({
  name,
  style: styleLabel,
  description,
  specs = [],
  tone = "pale",
  special = false,
  footer,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const caps = {
    pale: {
      bg: "var(--barley-300)",
      fg: "var(--ink-900)",
      tag: "default"
    },
    amber: {
      bg: "var(--amber-500)",
      fg: "var(--paper-100)",
      tag: "default"
    },
    brown: {
      bg: "var(--brown-700)",
      fg: "var(--paper-100)",
      tag: "brown"
    },
    wheat: {
      bg: "var(--barley-200)",
      fg: "var(--ink-900)",
      tag: "plain"
    },
    special: {
      bg: "var(--merlot-700)",
      fg: "var(--paper-100)",
      tag: "merlot"
    }
  };
  const c = caps[special ? "special" : tone] || caps.pale;
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: "1.5px solid var(--surface-card-edge)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      background: c.bg,
      color: c.fg,
      padding: "22px 22px 18px",
      textAlign: "center",
      borderBottom: "3px double var(--ink-800)"
    }
  }, special && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      opacity: 0.85,
      marginBottom: "6px"
    }
  }, "Edici\xF3 especial"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      lineHeight: 0.95
    }
  }, name), styleLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontStyle: "italic",
      fontSize: "14px",
      marginTop: "4px",
      opacity: 0.92
    }
  }, styleLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 22px 22px",
      display: "flex",
      flexDirection: "column",
      gap: "14px",
      flex: 1
    }
  }, styleLabel && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: c.tag
  }, styleLabel)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--ink-700)"
    }
  }, description), specs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "12px",
      borderTop: "1px solid var(--line-faint)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SpecList, {
    items: specs
  })), footer));
}
Object.assign(__ds_scope, { BeerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/BeerCard.jsx", error: String((e && e.message) || e) }); }

// ds-runtime.js
try { (() => {
/*
  Ales Agullons — runtime fallback for the design-system components.
  ------------------------------------------------------------------
  The compiler's generated `_ds_bundle.js` is the canonical runtime, but it
  is not always served at the project root in preview/consumer contexts.
  This file mirrors the component source in components/** so that @dsCard
  previews and the UI kit render reliably anywhere. It only fills in
  components that aren't already present on the namespace, so a real
  compiled bundle (if loaded first) always takes precedence.

  Plain JS (React.createElement) — loaded with a normal <script src>, no
  Babel. React is the global UMD. Keep in sync with the .jsx sources.
*/
(function () {
  var h = React.createElement;
  var NS = window.AlesAgullonsDesignSystem_76dff6 = window.AlesAgullonsDesignSystem_76dff6 || {};
  function def(name, fn) {
    if (!NS[name]) NS[name] = fn;
  }

  /* ---------- Button ---------- */
  def("Button", function Button(props) {
    var children = props.children,
      variant = props.variant || "primary",
      size = props.size || "md",
      fullWidth = props.fullWidth || false,
      disabled = props.disabled || false,
      type = props.type || "button",
      onClick = props.onClick,
      style = props.style;
    var rest = {};
    for (var k in props) if (["children", "variant", "size", "fullWidth", "disabled", "type", "onClick", "style"].indexOf(k) < 0) rest[k] = props[k];
    var st = React.useState(false),
      pressed = st[0],
      setPressed = st[1];
    var ho = React.useState(false),
      hover = ho[0],
      setHover = ho[1];
    var sizes = {
      sm: {
        padding: "8px 16px",
        fontSize: "13px"
      },
      md: {
        padding: "12px 24px",
        fontSize: "15px"
      },
      lg: {
        padding: "16px 34px",
        fontSize: "17px"
      }
    };
    var palette = {
      primary: {
        bg: "var(--barley-500)",
        bgHover: "var(--amber-500)",
        fg: "var(--ink-900)",
        border: "var(--ink-800)"
      },
      deep: {
        bg: "var(--brown-700)",
        bgHover: "var(--stout-900)",
        fg: "var(--paper-200)",
        border: "var(--stout-900)"
      },
      merlot: {
        bg: "var(--merlot-700)",
        bgHover: "var(--merlot-600)",
        fg: "var(--paper-200)",
        border: "var(--stout-900)"
      },
      outline: {
        bg: "transparent",
        bgHover: "var(--paper-300)",
        fg: "var(--ink-900)",
        border: "var(--ink-700)"
      },
      ghost: {
        bg: "transparent",
        bgHover: "var(--paper-300)",
        fg: "var(--brown-700)",
        border: "transparent"
      }
    };
    var p = palette[variant] || palette.primary;
    var base = Object.assign({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-label)",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap",
      color: p.fg,
      background: hover && !disabled ? p.bgHover : p.bg,
      border: "1.5px solid " + p.border,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      boxShadow: pressed && !disabled ? "var(--shadow-press)" : "var(--shadow-xs)",
      transform: pressed && !disabled ? "translateY(1px)" : "none",
      transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)"
    }, sizes[size], style);
    return h("button", Object.assign({
      type: type,
      disabled: disabled,
      onClick: onClick,
      onMouseEnter: function () {
        setHover(true);
      },
      onMouseLeave: function () {
        setHover(false);
        setPressed(false);
      },
      onMouseDown: function () {
        setPressed(true);
      },
      onMouseUp: function () {
        setPressed(false);
      },
      style: base
    }, rest), children);
  });

  /* ---------- Tag ---------- */
  def("Tag", function Tag(props) {
    var children = props.children,
      tone = props.tone || "default",
      outline = props.outline || false,
      style = props.style;
    var rest = {};
    for (var k in props) if (["children", "tone", "outline", "style"].indexOf(k) < 0) rest[k] = props[k];
    var tones = {
      default: {
        bg: "var(--barley-300)",
        fg: "var(--ink-900)",
        bd: "var(--barley-500)"
      },
      brown: {
        bg: "var(--brown-700)",
        fg: "var(--paper-200)",
        bd: "var(--brown-700)"
      },
      vine: {
        bg: "var(--vine-600)",
        fg: "var(--paper-100)",
        bd: "var(--vine-600)"
      },
      merlot: {
        bg: "var(--merlot-700)",
        fg: "var(--paper-100)",
        bd: "var(--merlot-700)"
      },
      plain: {
        bg: "var(--paper-300)",
        fg: "var(--ink-800)",
        bd: "var(--line-soft)"
      }
    };
    var t = tones[tone] || tones.default;
    return h("span", Object.assign({
      style: Object.assign({
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-label)",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        lineHeight: 1,
        whiteSpace: "nowrap",
        padding: "6px 12px",
        borderRadius: "var(--radius-pill)",
        color: outline ? t.bd : t.fg,
        background: outline ? "transparent" : t.bg,
        border: "1.5px solid " + t.bd
      }, style)
    }, rest), children);
  });

  /* ---------- Eyebrow ---------- */
  def("Eyebrow", function Eyebrow(props) {
    var children = props.children,
      rules = props.rules || false,
      tone = props.tone || "accent",
      align = props.align || "left",
      style = props.style;
    var rest = {};
    for (var k in props) if (["children", "rules", "tone", "align", "style"].indexOf(k) < 0) rest[k] = props[k];
    var colors = {
      accent: "var(--merlot-700)",
      gold: "var(--barley-500)",
      ink: "var(--ink-700)",
      paper: "var(--paper-300)"
    };
    var c = colors[tone] || colors.accent;
    var label = h("span", {
      style: {
        fontFamily: "var(--font-label)",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: c,
        whiteSpace: "nowrap"
      }
    }, children);
    if (!rules) return h("div", Object.assign({
      style: Object.assign({
        textAlign: align
      }, style)
    }, rest), label);
    var mkHr = function (key) {
      return h("span", {
        key: key,
        style: {
          height: "1.5px",
          width: "44px",
          background: "currentColor",
          color: c,
          opacity: 0.6
        }
      });
    };
    return h("div", Object.assign({
      style: Object.assign({
        display: "flex",
        alignItems: "center",
        gap: "14px",
        justifyContent: align === "center" ? "center" : "flex-start"
      }, style)
    }, rest), mkHr("a"), label, mkHr("b"));
  });

  /* ---------- Input ---------- */
  def("Input", function Input(props) {
    var label = props.label,
      hint = props.hint,
      type = props.type || "text",
      id = props.id,
      style = props.style;
    var rest = {};
    for (var k in props) if (["label", "hint", "type", "id", "style"].indexOf(k) < 0) rest[k] = props[k];
    var fs = React.useState(false),
      focus = fs[0],
      setFocus = fs[1];
    var inputId = id || (label ? "f-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
    return h("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        width: "100%"
      }
    }, label ? h("label", {
      htmlFor: inputId,
      style: {
        fontFamily: "var(--font-label)",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--ink-700)"
      }
    }, label) : null, h("input", Object.assign({
      id: inputId,
      type: type,
      onFocus: function () {
        setFocus(true);
      },
      onBlur: function () {
        setFocus(false);
      },
      style: Object.assign({
        fontFamily: "var(--font-text)",
        fontSize: "15px",
        color: "var(--ink-900)",
        background: "var(--paper-100)",
        border: "1.5px solid " + (focus ? "var(--barley-500)" : "var(--line-soft)"),
        borderRadius: "var(--radius-sm)",
        padding: "11px 13px",
        outline: "none",
        boxShadow: focus ? "var(--shadow-press)" : "none",
        transition: "border-color var(--dur-fast) var(--ease-standard)"
      }, style)
    }, rest)), hint ? h("span", {
      style: {
        fontFamily: "var(--font-text)",
        fontSize: "12px",
        color: "var(--ink-600)"
      }
    }, hint) : null);
  });

  /* ---------- SpecList ---------- */
  def("SpecList", function SpecList(props) {
    var items = props.items || [],
      layout = props.layout || "row",
      onDark = props.onDark || false,
      style = props.style;
    var rest = {};
    for (var k in props) if (["items", "layout", "onDark", "style"].indexOf(k) < 0) rest[k] = props[k];
    var labelColor = onDark ? "var(--paper-400)" : "var(--ink-500)";
    var valueColor = onDark ? "var(--paper-100)" : "var(--ink-900)";
    var divider = onDark ? "var(--paper-400)" : "var(--line-soft)";
    if (layout === "row") {
      return h("div", Object.assign({
        style: Object.assign({
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          fontFamily: "var(--font-spec)"
        }, style)
      }, rest), items.map(function (it, i) {
        return h("span", {
          key: i,
          style: {
            fontSize: "13px",
            color: labelColor,
            letterSpacing: "0.04em"
          }
        }, it.label, " ", h("b", {
          style: {
            color: valueColor,
            fontWeight: 700
          }
        }, it.value));
      }));
    }
    return h("dl", Object.assign({
      style: Object.assign({
        margin: 0,
        fontFamily: "var(--font-spec)"
      }, style)
    }, rest), items.map(function (it, i) {
      return h("div", {
        key: i,
        style: {
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          padding: "7px 0",
          borderBottom: i < items.length - 1 ? "1px solid " + divider : "none"
        }
      }, h("dt", {
        style: {
          fontSize: "12px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: labelColor
        }
      }, it.label), h("dd", {
        style: {
          margin: 0,
          fontSize: "13px",
          fontWeight: 700,
          color: valueColor,
          textAlign: "right"
        }
      }, it.value));
    }));
  });

  /* ---------- BeerCard ---------- */
  def("BeerCard", function BeerCard(props) {
    var name = props.name,
      styleLabel = props.style,
      description = props.description,
      specs = props.specs || [],
      tone = props.tone || "pale",
      special = props.special || false,
      footer = props.footer;
    var rest = {};
    for (var k in props) if (["name", "style", "description", "specs", "tone", "special", "footer"].indexOf(k) < 0) rest[k] = props[k];
    var hs = React.useState(false),
      hover = hs[0],
      setHover = hs[1];
    var caps = {
      pale: {
        bg: "var(--barley-300)",
        fg: "var(--ink-900)",
        tag: "default"
      },
      amber: {
        bg: "var(--amber-500)",
        fg: "var(--paper-100)",
        tag: "default"
      },
      brown: {
        bg: "var(--brown-700)",
        fg: "var(--paper-100)",
        tag: "brown"
      },
      wheat: {
        bg: "var(--barley-200)",
        fg: "var(--ink-900)",
        tag: "plain"
      },
      special: {
        bg: "var(--merlot-700)",
        fg: "var(--paper-100)",
        tag: "merlot"
      }
    };
    var c = caps[special ? "special" : tone] || caps.pale;
    var Tag = NS.Tag,
      SpecList = NS.SpecList;
    return h("article", Object.assign({
      onMouseEnter: function () {
        setHover(true);
      },
      onMouseLeave: function () {
        setHover(false);
      },
      style: {
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-card)",
        border: "1.5px solid var(--surface-card-edge)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)"
      }
    }, rest), h("div", {
      style: {
        background: c.bg,
        color: c.fg,
        padding: "22px 22px 18px",
        textAlign: "center",
        borderBottom: "3px double var(--ink-800)"
      }
    }, special ? h("div", {
      style: {
        fontFamily: "var(--font-label)",
        fontSize: "10px",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        opacity: 0.85,
        marginBottom: "6px"
      }
    }, "Edició especial") : null, h("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "34px",
        lineHeight: 0.95
      }
    }, name), styleLabel ? h("div", {
      style: {
        fontFamily: "var(--font-text)",
        fontStyle: "italic",
        fontSize: "14px",
        marginTop: "4px",
        opacity: 0.92
      }
    }, styleLabel) : null), h("div", {
      style: {
        padding: "18px 22px 22px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        flex: 1
      }
    }, styleLabel && Tag ? h("div", null, h(Tag, {
      tone: c.tag
    }, styleLabel)) : null, description ? h("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-text)",
        fontSize: "15px",
        lineHeight: 1.6,
        color: "var(--ink-700)"
      }
    }, description) : null, specs.length > 0 && SpecList ? h("div", {
      style: {
        marginTop: "auto",
        paddingTop: "12px",
        borderTop: "1px solid var(--line-faint)"
      }
    }, h(SpecList, {
      items: specs
    })) : null, footer));
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds-runtime.js", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Ales Agullons website — app router */
function App() {
  const [view, setView] = React.useState({
    screen: "home",
    beerId: null
  });
  const top = () => window.scrollTo({
    top: 0,
    left: 0
  });
  const nav = screen => {
    setView({
      screen,
      beerId: null
    });
    top();
  };
  const select = beerId => {
    setView({
      screen: "detail",
      beerId
    });
    top();
  };
  let body;
  if (view.screen === "home") body = /*#__PURE__*/React.createElement(HomeScreen, {
    onNav: nav,
    onSelect: select
  });else if (view.screen === "beers") body = /*#__PURE__*/React.createElement(BeersScreen, {
    onSelect: select
  });else if (view.screen === "historia") body = /*#__PURE__*/React.createElement(HistoriaScreen, {
    onNav: nav
  });else if (view.screen === "detail") body = /*#__PURE__*/React.createElement(BeerDetailScreen, {
    beerId: view.beerId,
    onBack: () => nav("beers"),
    onSelect: select
  });
  const current = view.screen === "detail" ? "beers" : view.screen;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    current: current,
    onNav: nav
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, body), /*#__PURE__*/React.createElement(Footer, {
    onNav: nav
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
/* Ales Agullons website — site chrome (header, footer, photo placeholder) */
const {
  Button: AgButton,
  Eyebrow: AgEyebrow
} = window.AlesAgullonsDesignSystem_76dff6;

/* Warm toned placeholder where real photography goes. */
function PhotoSlot({
  label,
  tone = "barley",
  height = 280,
  style
}) {
  const grounds = {
    barley: "var(--barley-400)",
    brown: "var(--brown-700)",
    vine: "var(--vine-600)",
    stout: "var(--stout-900)",
    kraft: "var(--paper-400)"
  };
  const dark = tone === "brown" || tone === "stout" || tone === "vine";
  return /*#__PURE__*/React.createElement("div", {
    className: "paper-grain",
    style: {
      background: grounds[tone] || grounds.barley,
      height,
      borderRadius: "var(--radius-md)",
      border: "1.5px solid rgba(42,27,16,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: dark ? "var(--paper-300)" : "var(--ink-700)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontStyle: "italic",
      fontSize: "14px",
      opacity: 0.8,
      textAlign: "center",
      padding: "0 16px"
    }
  }, label || "Imatge"));
}
function Header({
  current,
  onNav
}) {
  const items = [{
    id: "home",
    label: "Inici"
  }, {
    id: "beers",
    label: "Cerveses"
  }, {
    id: "historia",
    label: "Història"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--paper-200)",
      borderBottom: "1.5px solid var(--line-soft)",
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "16px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav("home"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "10px",
      letterSpacing: "0.4em",
      textTransform: "uppercase",
      color: "var(--ink-700)",
      marginLeft: "0.4em"
    }
  }, "Ales"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      lineHeight: 0.9,
      color: "var(--ink-900)"
    }
  }, "AGULLONS")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    onClick: () => onNav(it.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-label)",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: current === it.id ? "var(--brand-accent)" : "var(--ink-700)",
      padding: "8px 12px",
      borderBottom: current === it.id ? "2px solid var(--brand-accent)" : "2px solid transparent"
    }
  }, it.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: "var(--line-soft)",
      margin: "0 6px"
    }
  }), /*#__PURE__*/React.createElement(AgButton, {
    size: "sm",
    variant: "outline",
    onClick: () => onNav("beers")
  }, "Botiga"))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "paper-grain",
    style: {
      background: "var(--stout-900)",
      color: "var(--paper-300)",
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-xl)",
      margin: "0 auto",
      padding: "56px 32px 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "30px",
      color: "var(--paper-100)"
    }
  }, "Ales Agullons"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "14px",
      lineHeight: 1.7,
      color: "var(--paper-400)",
      maxWidth: 340,
      marginTop: 10
    }
  }, "Cervesa artesana i aut\xE8ntica, elaborada a la masia de Sant Joan de Mediona, a l'Alt Pened\xE8s, des de 2008.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "11px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--barley-400)",
      marginBottom: 14
    }
  }, "Navegaci\xF3"), [["home", "Inici"], ["beers", "Cerveses"], ["historia", "Història"]].map(([id, l]) => /*#__PURE__*/React.createElement("div", {
    key: id
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav(id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--paper-300)",
      fontFamily: "var(--font-text)",
      fontSize: "15px",
      padding: "5px 0"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "11px",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--barley-400)",
      marginBottom: 14
    }
  }, "Contacte"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-spec)",
      fontSize: "13px",
      color: "var(--paper-300)",
      lineHeight: 1.9
    }
  }, "Masia Agullons S.L.", /*#__PURE__*/React.createElement("br", null), "Sant Joan de Mediona", /*#__PURE__*/React.createElement("br", null), "Alt Pened\xE8s", /*#__PURE__*/React.createElement("br", null), "Tel. 649 50 50 33"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.12)",
      padding: "16px 32px",
      textAlign: "center",
      fontFamily: "var(--font-spec)",
      fontSize: "11px",
      color: "var(--paper-500)"
    }
  }, "\xA9 Masia Agullons \xB7 Beu amb moderaci\xF3 \xB7 CA \xB7 ES"));
}
Object.assign(window, {
  PhotoSlot,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Ales Agullons — beer catalogue (UI-kit sample data).
// ABV/IBU values are illustrative placeholders pending real brewery data.
window.AGULLONS_BEERS = [{
  id: "pura-pale",
  name: "Pura Pale",
  style: "Pale Ale",
  tone: "pale",
  tagline: "Una sola malta",
  desc: "Cervesa pàlida d'una sola malta amb llúpols de les varietats Cascade i Fuggles. Elaboració per infusió simple.",
  pairing: "Marida molt bé tant amb carns com amb peix; de vegades amb plàtan, poma golden i xocolata negra ratllada.",
  malts: "Pale",
  hops: "Cascade · Fuggles",
  specs: [{
    label: "ABV",
    value: "5.2%"
  }, {
    label: "IBU",
    value: "38"
  }, {
    label: "Format",
    value: "75 cl"
  }]
}, {
  id: "edgard",
  name: "Edgard",
  style: "Pale Ale",
  tone: "pale",
  tagline: "Monovarietal Cascade",
  desc: "Cervesa elaborada amb malta pàlida i monovarietal de Cascade.",
  pairing: "Aperitius, amanides i formatges tendres.",
  malts: "Pale",
  hops: "Cascade",
  specs: [{
    label: "ABV",
    value: "5.0%"
  }, {
    label: "IBU",
    value: "35"
  }, {
    label: "Format",
    value: "75 cl"
  }]
}, {
  id: "bruno",
  name: "Bruno",
  style: "Pale Ale",
  tone: "amber",
  tagline: "Dues maltes",
  desc: "Cervesa de dues maltes, Pale i Crystal, que li donen el seu color i sabor característics. Amb llúpol Cascade, Challenger i Fuggles.",
  pairing: "Ens agrada prendre-la amb carns vermelles i caça.",
  malts: "Pale · Crystal",
  hops: "Cascade · Challenger · Fuggles",
  specs: [{
    label: "ABV",
    value: "5.4%"
  }, {
    label: "IBU",
    value: "40"
  }, {
    label: "Format",
    value: "75 cl"
  }]
}, {
  id: "runa",
  name: "Runa",
  style: "Brown Ale",
  tone: "brown",
  tagline: "Torrada, no negra",
  desc: "Cervesa fosca de tres tipus de malta —Pale, Crystal, Chocolate i Roasted Barley sense maltejar— molt torrada però sense arribar a ser negra. Llúpols Northern Brewer i Fuggles.",
  pairing: "Marida amb carns i postres elaborats amb xocolata.",
  malts: "Pale · Crystal · Chocolate · Roasted",
  hops: "Northern Brewer · Fuggles",
  specs: [{
    label: "ABV",
    value: "5.6%"
  }, {
    label: "IBU",
    value: "30"
  }, {
    label: "Format",
    value: "75 cl"
  }]
}, {
  id: "dalmoru",
  name: "Dalmoru",
  style: "Cervesa de blat",
  tone: "wheat",
  tagline: "De blat",
  desc: "Cervesa de blat, fresca i lleugera.",
  pairing: "Aperitiu i menjars d'estiu.",
  malts: "Blat · Pale",
  hops: "Suau",
  specs: [{
    label: "ABV",
    value: "4.8%"
  }, {
    label: "IBU",
    value: "18"
  }, {
    label: "Format",
    value: "75 cl"
  }]
}, {
  id: "setembre",
  name: "Setembre",
  style: "Fermentació mixta",
  tone: "special",
  special: true,
  tagline: "Només una vegada l'any",
  desc: "Fermentació mixta: Pura Pale amb Lambic, envellida en bóta de roure 9 mesos i fins a l'any en ampolla. Cervesa de temporada.",
  pairing: "Abans dels àpats, amb formatges forts, olives i marisc. Recomanable en porró.",
  malts: "Pale",
  hops: "—",
  specs: [{
    label: "Bóta",
    value: "Roure"
  }, {
    label: "Guarda",
    value: "9 mesos"
  }, {
    label: "Format",
    value: "75 cl"
  }]
}, {
  id: "setembre-nadal",
  name: "Setembre Nadal",
  style: "Especial Nadal",
  tone: "special",
  special: true,
  tagline: "Amb moscatell",
  desc: "Maceració de Setembre de l'anyada anterior amb raïm moscatell.",
  pairing: "Postres i sobretaula de festa.",
  malts: "Pale",
  hops: "—",
  specs: [{
    label: "Raïm",
    value: "Moscatell"
  }, {
    label: "Format",
    value: "75 cl"
  }]
}, {
  id: "barrica",
  name: "Barrica",
  style: "Barrel-aged",
  tone: "special",
  special: true,
  tagline: "Bóta de roure 9–12 mesos",
  desc: "Pura Pale amb una segona fermentació i maduració en bóta de roure de 9 a 12 mesos, i una guarda després de l'embotellat d'un any.",
  pairing: "De meditació; formatges curats i embotits.",
  malts: "Pale",
  hops: "—",
  specs: [{
    label: "Bóta",
    value: "Roure"
  }, {
    label: "Guarda",
    value: "≤ 24 mesos"
  }, {
    label: "Format",
    value: "75 cl"
  }]
}, {
  id: "barrica-merlot",
  name: "Barrica Merlot",
  style: "Barrel-aged",
  tone: "special",
  special: true,
  tagline: "Amb merlot",
  desc: "Maceració de la cervesa Barrica amb raïm merlot.",
  pairing: "Carns a la brasa i guisats.",
  malts: "Pale",
  hops: "—",
  specs: [{
    label: "Raïm",
    value: "Merlot"
  }, {
    label: "Format",
    value: "75 cl"
  }]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/historia.jsx
try { (() => {
/* Ales Agullons website — Història screen */
const {
  Eyebrow: HxEyebrow,
  Button: HxButton,
  Tag: HxTag
} = window.AlesAgullonsDesignSystem_76dff6;
const _hxWrap = {
  maxWidth: "var(--container-md)",
  margin: "0 auto",
  padding: "0 32px"
};
function HistoriaScreen({
  onNav
}) {
  const milestones = [["2007", "Una idea a la masia", "Decidim recuperar el celler familiar, que abans feia vi, per elaborar-hi cervesa artesana."], ["2008", "Primera fornada", "Comencem a coure de manera experimental, aprenent pel carrer i a poc a poc."], ["2009", "Al mercat", "Les primeres ampolles d'Ales Agullons arriben a bars i botigues del Penedès."], ["Avui", "Temps i terra", "Seguim fent ales d'alta fermentació per infusió, amb edicions especials criades en bóta."]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "paper-grain",
    style: {
      background: "var(--paper-300)",
      borderBottom: "1.5px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ..._hxWrap,
      padding: "72px 32px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(HxEyebrow, {
    rules: true,
    align: "center"
  }, "Hist\xF2ria"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "56px",
      margin: "18px 0 14px"
    }
  }, "Cervesa al cor del Pened\xE8s"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "19px",
      lineHeight: 1.65,
      color: "var(--ink-700)",
      margin: "0 auto",
      maxWidth: 600
    }
  }, "Ales Agullons neix en una masia de Sant Joan de Mediona, envoltada de camps d'ordi i de vinya. Una manera de fer pausada, artesana i aut\xE8ntica."))), /*#__PURE__*/React.createElement("section", {
    style: {
      ..._hxWrap,
      padding: "64px 32px"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Foto: panor\xE0mica de la masia i els camps",
    tone: "vine",
    height: 320,
    style: {
      marginBottom: "48px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0"
    }
  }, milestones.map(([year, title, body], i) => /*#__PURE__*/React.createElement("div", {
    key: year,
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      gap: "28px",
      padding: "26px 0",
      borderTop: i === 0 ? "none" : "1px solid var(--line-faint)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "34px",
      color: "var(--brand-deep)",
      lineHeight: 1
    }
  }, year), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "22px",
      margin: "0 0 6px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--ink-700)"
    }
  }, body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "48px"
    }
  }, /*#__PURE__*/React.createElement(HxTag, {
    tone: "plain"
  }, "Sant Joan de Mediona \xB7 Alt Pened\xE8s"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/React.createElement(HxButton, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("beers")
  }, "Tastar les cerveses")))));
}
Object.assign(window, {
  HistoriaScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/historia.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screens.jsx
try { (() => {
/* Ales Agullons website — screens */
const _DS = window.AlesAgullonsDesignSystem_76dff6;
const {
  BeerCard,
  Button,
  Tag,
  Eyebrow,
  SpecList
} = _DS;
const wrap = {
  maxWidth: "var(--container-xl)",
  margin: "0 auto",
  padding: "0 32px"
};

/* ---------------- HOME ---------------- */
function HomeScreen({
  onNav,
  onSelect
}) {
  const beers = window.AGULLONS_BEERS;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "paper-grain",
    style: {
      background: "var(--paper-300)",
      borderBottom: "1.5px solid var(--line-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "48px",
      alignItems: "center",
      padding: "72px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Cervesa artesana \xB7 des de 2008"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "64px",
      lineHeight: 0.98,
      margin: "16px 0 18px",
      color: "var(--ink-900)"
    }
  }, "Feta a la masia,", /*#__PURE__*/React.createElement("br", null), "amb temps i terra."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "19px",
      lineHeight: 1.6,
      color: "var(--ink-700)",
      maxWidth: 480
    }
  }, "Ales d'alta fermentaci\xF3 elaborades per infusi\xF3 a Sant Joan de Mediona, envoltats dels nostres camps d'ordi i les vinyes del Pened\xE8s. Sense filtrar, sense pasteuritzar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginTop: "28px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav("beers")
  }, "Veure les cerveses"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => onNav("historia")
  }, "La nostra hist\xF2ria"))), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Foto: ampolles a la barra de fusta",
    tone: "barley",
    height: 360
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "72px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "32px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Les cerveses"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "40px",
      margin: "10px 0 0"
    }
  }, "De la p\xE0lida a la torrada")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav("beers")
  }, "Totes les cerveses")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px"
    }
  }, beers.slice(0, 3).map(b => /*#__PURE__*/React.createElement(BeerCard, {
    key: b.id,
    name: b.name,
    style: b.style,
    tone: b.tone,
    special: b.special,
    description: b.desc,
    specs: b.specs,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: b.tone === "brown" ? "deep" : "primary",
      size: "sm",
      fullWidth: true,
      onClick: () => onSelect(b.id)
    }, "Veure")
  })))), /*#__PURE__*/React.createElement("section", {
    className: "paper-grain",
    style: {
      background: "var(--brown-700)",
      color: "var(--paper-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "48px",
      alignItems: "center",
      padding: "72px 32px"
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Foto: b\xF3tes de roure al celler",
    tone: "stout",
    height: 300
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "paper"
  }, "Edicions especials"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "42px",
      margin: "12px 0 16px",
      color: "var(--paper-100)"
    }
  }, "Setembre & Barrica"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "18px",
      lineHeight: 1.65,
      color: "var(--paper-300)",
      maxWidth: 460
    }
  }, "Cerveses de fermentaci\xF3 mixta i crian\xE7a en b\xF3ta de roure, algunes macerades amb ra\xEFm del Pened\xE8s. Les elaborem nom\xE9s una vegada l'any \u2014d'aqu\xED el nom de la Setembre."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      marginTop: "22px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "merlot"
  }, "Roure 9 mesos"), /*#__PURE__*/React.createElement(Tag, {
    tone: "merlot"
  }, "Moscatell"), /*#__PURE__*/React.createElement(Tag, {
    tone: "merlot"
  }, "Merlot")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav("beers")
  }, "Descobrir-les"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: "72px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "La masia"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "40px",
      margin: "10px 0 16px"
    }
  }, "Un celler que abans feia vi"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "18px",
      lineHeight: 1.65,
      color: "var(--ink-700)",
      maxWidth: 480
    }
  }, "Vam comen\xE7ar el 2008 en una masia tradicional catalana que hist\xF2ricament havia elaborat vi. Hem apr\xE8s pel carrer, a poc a poc, fent cervesa com ens agrada beure-la."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "22px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav("historia")
  }, "Llegir la hist\xF2ria"))), /*#__PURE__*/React.createElement(PhotoSlot, {
    label: "Foto: la masia i els camps d'ordi",
    tone: "vine",
    height: 300
  })));
}

/* ---------------- BEERS LISTING ---------------- */
function BeersScreen({
  onSelect
}) {
  const beers = window.AGULLONS_BEERS;
  const regulars = beers.filter(b => !b.special);
  const specials = beers.filter(b => b.special);
  const Grid = ({
    list
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px"
    }
  }, list.map(b => /*#__PURE__*/React.createElement(BeerCard, {
    key: b.id,
    name: b.name,
    style: b.style,
    tone: b.tone,
    special: b.special,
    description: b.desc,
    specs: b.specs,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: b.tone === "brown" ? "deep" : b.special ? "merlot" : "primary",
      size: "sm",
      fullWidth: true,
      onClick: () => onSelect(b.id)
    }, "Veure")
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "56px 32px 0"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Cerveses"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "52px",
      margin: "12px 0 8px"
    }
  }, "El nostre cat\xE0leg"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "18px",
      color: "var(--ink-700)",
      maxWidth: 560,
      marginBottom: "40px"
    }
  }, "Ales d'alta fermentaci\xF3, sense filtrar ni pasteuritzar. Disponibles en ampolles de 50 i 75 cl i barrils de 20, 30 i 41 L (cask)."), /*#__PURE__*/React.createElement(Grid, {
    list: regulars
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      margin: "56px 0 32px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "32px",
      margin: 0,
      whiteSpace: "nowrap"
    }
  }, "Edicions especials"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1.5px",
      background: "var(--line-soft)"
    }
  }), /*#__PURE__*/React.createElement(Tag, {
    tone: "merlot",
    outline: true
  }, "Una vegada l'any")), /*#__PURE__*/React.createElement(Grid, {
    list: specials
  }));
}

/* ---------------- BEER DETAIL ---------------- */
function BeerDetailScreen({
  beerId,
  onBack,
  onSelect
}) {
  const beers = window.AGULLONS_BEERS;
  const b = beers.find(x => x.id === beerId) || beers[0];
  const dark = b.tone === "brown" || b.special;
  const cap = {
    pale: "var(--barley-300)",
    amber: "var(--amber-500)",
    brown: "var(--brown-700)",
    wheat: "var(--barley-200)",
    special: "var(--merlot-700)"
  }[b.special ? "special" : b.tone];
  const onCap = b.tone === "pale" || b.tone === "wheat" ? "var(--ink-900)" : "var(--paper-100)";
  const others = beers.filter(x => x.id !== b.id).slice(0, 3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "32px 32px 0"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-label)",
      fontSize: "12px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--ink-600)",
      padding: "8px 0",
      marginBottom: "16px"
    }
  }, "\u2190 Totes les cerveses"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "48px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper-grain",
    style: {
      background: cap,
      color: onCap,
      borderRadius: "var(--radius-md)",
      border: "3px double var(--ink-800)",
      padding: "56px 32px",
      textAlign: "center",
      boxShadow: "var(--shadow-md)"
    }
  }, b.special && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "11px",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      opacity: 0.85,
      marginBottom: 10
    }
  }, "Edici\xF3 especial"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "72px",
      lineHeight: 0.92
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-text)",
      fontStyle: "italic",
      fontSize: "18px",
      marginTop: 6,
      opacity: 0.92
    }
  }, b.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      paddingTop: 18,
      borderTop: `1px solid ${onCap}`,
      opacity: 0.95
    }
  }, /*#__PURE__*/React.createElement(SpecList, {
    items: b.specs,
    onDark: onCap !== "var(--ink-900)",
    style: {
      justifyContent: "center"
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, b.style), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "48px",
      margin: "10px 0 18px"
    }
  }, b.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "18px",
      lineHeight: 1.7,
      color: "var(--ink-700)"
    }
  }, b.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-100)",
      border: "1px solid var(--surface-card-edge)",
      borderRadius: "var(--radius-md)",
      padding: "20px 22px",
      margin: "24px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "11px",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--brand-accent)",
      marginBottom: 10
    }
  }, "Per acompanyar"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-text)",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--ink-800)"
    }
  }, b.pairing)), /*#__PURE__*/React.createElement(SpecList, {
    layout: "stack",
    items: [{
      label: "Maltes",
      value: b.malts
    }, {
      label: "Llúpols",
      value: b.hops
    }, ...b.specs]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      marginTop: "26px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: b.special ? "merlot" : "primary",
    size: "lg"
  }, "Afegir a la comanda"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "Punts de venda")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "72px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "28px",
      marginBottom: "22px"
    }
  }, "Altres cerveses"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px"
    }
  }, others.map(o => /*#__PURE__*/React.createElement(BeerCard, {
    key: o.id,
    name: o.name,
    style: o.style,
    tone: o.tone,
    special: o.special,
    description: o.desc,
    specs: o.specs,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: o.tone === "brown" ? "deep" : o.special ? "merlot" : "primary",
      size: "sm",
      fullWidth: true,
      onClick: () => onSelect(o.id)
    }, "Veure")
  })))));
}
Object.assign(window, {
  HomeScreen,
  BeersScreen,
  BeerDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BeerCard = __ds_scope.BeerCard;

__ds_ns.SpecList = __ds_scope.SpecList;

})();
