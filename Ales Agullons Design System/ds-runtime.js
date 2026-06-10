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
  var NS = (window.AlesAgullonsDesignSystem_76dff6 = window.AlesAgullonsDesignSystem_76dff6 || {});
  function def(name, fn) { if (!NS[name]) NS[name] = fn; }

  /* ---------- Button ---------- */
  def("Button", function Button(props) {
    var children = props.children, variant = props.variant || "primary", size = props.size || "md",
        fullWidth = props.fullWidth || false, disabled = props.disabled || false,
        type = props.type || "button", onClick = props.onClick, style = props.style;
    var rest = {};
    for (var k in props) if (["children","variant","size","fullWidth","disabled","type","onClick","style"].indexOf(k) < 0) rest[k] = props[k];
    var st = React.useState(false), pressed = st[0], setPressed = st[1];
    var ho = React.useState(false), hover = ho[0], setHover = ho[1];
    var sizes = { sm: { padding: "8px 16px", fontSize: "13px" }, md: { padding: "12px 24px", fontSize: "15px" }, lg: { padding: "16px 34px", fontSize: "17px" } };
    var palette = {
      primary: { bg: "var(--barley-500)", bgHover: "var(--amber-500)", fg: "var(--ink-900)", border: "var(--ink-800)" },
      deep:    { bg: "var(--brown-700)", bgHover: "var(--stout-900)", fg: "var(--paper-200)", border: "var(--stout-900)" },
      merlot:  { bg: "var(--merlot-700)", bgHover: "var(--merlot-600)", fg: "var(--paper-200)", border: "var(--stout-900)" },
      outline: { bg: "transparent", bgHover: "var(--paper-300)", fg: "var(--ink-900)", border: "var(--ink-700)" },
      ghost:   { bg: "transparent", bgHover: "var(--paper-300)", fg: "var(--brown-700)", border: "transparent" },
    };
    var p = palette[variant] || palette.primary;
    var base = Object.assign({
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
      width: fullWidth ? "100%" : "auto", fontFamily: "var(--font-label)", fontWeight: 700,
      letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1, whiteSpace: "nowrap", color: p.fg,
      background: hover && !disabled ? p.bgHover : p.bg, border: "1.5px solid " + p.border,
      borderRadius: "var(--radius-sm)", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1,
      boxShadow: pressed && !disabled ? "var(--shadow-press)" : "var(--shadow-xs)",
      transform: pressed && !disabled ? "translateY(1px)" : "none",
      transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
    }, sizes[size], style);
    return h("button", Object.assign({
      type: type, disabled: disabled, onClick: onClick,
      onMouseEnter: function () { setHover(true); },
      onMouseLeave: function () { setHover(false); setPressed(false); },
      onMouseDown: function () { setPressed(true); },
      onMouseUp: function () { setPressed(false); },
      style: base,
    }, rest), children);
  });

  /* ---------- Tag ---------- */
  def("Tag", function Tag(props) {
    var children = props.children, tone = props.tone || "default", outline = props.outline || false, style = props.style;
    var rest = {};
    for (var k in props) if (["children","tone","outline","style"].indexOf(k) < 0) rest[k] = props[k];
    var tones = {
      default: { bg: "var(--barley-300)", fg: "var(--ink-900)", bd: "var(--barley-500)" },
      brown:   { bg: "var(--brown-700)", fg: "var(--paper-200)", bd: "var(--brown-700)" },
      vine:    { bg: "var(--vine-600)", fg: "var(--paper-100)", bd: "var(--vine-600)" },
      merlot:  { bg: "var(--merlot-700)", fg: "var(--paper-100)", bd: "var(--merlot-700)" },
      plain:   { bg: "var(--paper-300)", fg: "var(--ink-800)", bd: "var(--line-soft)" },
    };
    var t = tones[tone] || tones.default;
    return h("span", Object.assign({
      style: Object.assign({
        display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-label)",
        fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
        lineHeight: 1, whiteSpace: "nowrap", padding: "6px 12px", borderRadius: "var(--radius-pill)",
        color: outline ? t.bd : t.fg, background: outline ? "transparent" : t.bg, border: "1.5px solid " + t.bd,
      }, style),
    }, rest), children);
  });

  /* ---------- Eyebrow ---------- */
  def("Eyebrow", function Eyebrow(props) {
    var children = props.children, rules = props.rules || false, tone = props.tone || "accent",
        align = props.align || "left", style = props.style;
    var rest = {};
    for (var k in props) if (["children","rules","tone","align","style"].indexOf(k) < 0) rest[k] = props[k];
    var colors = { accent: "var(--merlot-700)", gold: "var(--barley-500)", ink: "var(--ink-700)", paper: "var(--paper-300)" };
    var c = colors[tone] || colors.accent;
    var label = h("span", { style: { fontFamily: "var(--font-label)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: c, whiteSpace: "nowrap" } }, children);
    if (!rules) return h("div", Object.assign({ style: Object.assign({ textAlign: align }, style) }, rest), label);
    var mkHr = function (key) { return h("span", { key: key, style: { height: "1.5px", width: "44px", background: "currentColor", color: c, opacity: 0.6 } }); };
    return h("div", Object.assign({ style: Object.assign({ display: "flex", alignItems: "center", gap: "14px", justifyContent: align === "center" ? "center" : "flex-start" }, style) }, rest), mkHr("a"), label, mkHr("b"));
  });

  /* ---------- Input ---------- */
  def("Input", function Input(props) {
    var label = props.label, hint = props.hint, type = props.type || "text", id = props.id, style = props.style;
    var rest = {};
    for (var k in props) if (["label","hint","type","id","style"].indexOf(k) < 0) rest[k] = props[k];
    var fs = React.useState(false), focus = fs[0], setFocus = fs[1];
    var inputId = id || (label ? "f-" + label.replace(/\s+/g, "-").toLowerCase() : undefined);
    return h("div", { style: { display: "flex", flexDirection: "column", gap: "6px", width: "100%" } },
      label ? h("label", { htmlFor: inputId, style: { fontFamily: "var(--font-label)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-700)" } }, label) : null,
      h("input", Object.assign({
        id: inputId, type: type,
        onFocus: function () { setFocus(true); }, onBlur: function () { setFocus(false); },
        style: Object.assign({
          fontFamily: "var(--font-text)", fontSize: "15px", color: "var(--ink-900)", background: "var(--paper-100)",
          border: "1.5px solid " + (focus ? "var(--barley-500)" : "var(--line-soft)"), borderRadius: "var(--radius-sm)",
          padding: "11px 13px", outline: "none", boxShadow: focus ? "var(--shadow-press)" : "none",
          transition: "border-color var(--dur-fast) var(--ease-standard)",
        }, style),
      }, rest)),
      hint ? h("span", { style: { fontFamily: "var(--font-text)", fontSize: "12px", color: "var(--ink-600)" } }, hint) : null
    );
  });

  /* ---------- SpecList ---------- */
  def("SpecList", function SpecList(props) {
    var items = props.items || [], layout = props.layout || "row", onDark = props.onDark || false, style = props.style;
    var rest = {};
    for (var k in props) if (["items","layout","onDark","style"].indexOf(k) < 0) rest[k] = props[k];
    var labelColor = onDark ? "var(--paper-400)" : "var(--ink-500)";
    var valueColor = onDark ? "var(--paper-100)" : "var(--ink-900)";
    var divider = onDark ? "var(--paper-400)" : "var(--line-soft)";
    if (layout === "row") {
      return h("div", Object.assign({ style: Object.assign({ display: "flex", flexWrap: "wrap", gap: "20px", fontFamily: "var(--font-spec)" }, style) }, rest),
        items.map(function (it, i) {
          return h("span", { key: i, style: { fontSize: "13px", color: labelColor, letterSpacing: "0.04em" } }, it.label, " ", h("b", { style: { color: valueColor, fontWeight: 700 } }, it.value));
        }));
    }
    return h("dl", Object.assign({ style: Object.assign({ margin: 0, fontFamily: "var(--font-spec)" }, style) }, rest),
      items.map(function (it, i) {
        return h("div", { key: i, style: { display: "flex", justifyContent: "space-between", gap: "16px", padding: "7px 0", borderBottom: i < items.length - 1 ? "1px solid " + divider : "none" } },
          h("dt", { style: { fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: labelColor } }, it.label),
          h("dd", { style: { margin: 0, fontSize: "13px", fontWeight: 700, color: valueColor, textAlign: "right" } }, it.value));
      }));
  });

  /* ---------- BeerCard ---------- */
  def("BeerCard", function BeerCard(props) {
    var name = props.name, styleLabel = props.style, description = props.description, specs = props.specs || [],
        tone = props.tone || "pale", special = props.special || false, footer = props.footer;
    var rest = {};
    for (var k in props) if (["name","style","description","specs","tone","special","footer"].indexOf(k) < 0) rest[k] = props[k];
    var hs = React.useState(false), hover = hs[0], setHover = hs[1];
    var caps = {
      pale:   { bg: "var(--barley-300)", fg: "var(--ink-900)", tag: "default" },
      amber:  { bg: "var(--amber-500)", fg: "var(--paper-100)", tag: "default" },
      brown:  { bg: "var(--brown-700)", fg: "var(--paper-100)", tag: "brown" },
      wheat:  { bg: "var(--barley-200)", fg: "var(--ink-900)", tag: "plain" },
      special:{ bg: "var(--merlot-700)", fg: "var(--paper-100)", tag: "merlot" },
    };
    var c = caps[special ? "special" : tone] || caps.pale;
    var Tag = NS.Tag, SpecList = NS.SpecList;
    return h("article", Object.assign({
      onMouseEnter: function () { setHover(true); }, onMouseLeave: function () { setHover(false); },
      style: {
        display: "flex", flexDirection: "column", background: "var(--surface-card)",
        border: "1.5px solid var(--surface-card-edge)", borderRadius: "var(--radius-md)", overflow: "hidden",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)", transform: hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)",
      },
    }, rest),
      h("div", { style: { background: c.bg, color: c.fg, padding: "22px 22px 18px", textAlign: "center", borderBottom: "3px double var(--ink-800)" } },
        special ? h("div", { style: { fontFamily: "var(--font-label)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.85, marginBottom: "6px" } }, "Edició especial") : null,
        h("div", { style: { fontFamily: "var(--font-display)", fontSize: "34px", lineHeight: 0.95 } }, name),
        styleLabel ? h("div", { style: { fontFamily: "var(--font-text)", fontStyle: "italic", fontSize: "14px", marginTop: "4px", opacity: 0.92 } }, styleLabel) : null),
      h("div", { style: { padding: "18px 22px 22px", display: "flex", flexDirection: "column", gap: "14px", flex: 1 } },
        styleLabel && Tag ? h("div", null, h(Tag, { tone: c.tag }, styleLabel)) : null,
        description ? h("p", { style: { margin: 0, fontFamily: "var(--font-text)", fontSize: "15px", lineHeight: 1.6, color: "var(--ink-700)" } }, description) : null,
        specs.length > 0 && SpecList ? h("div", { style: { marginTop: "auto", paddingTop: "12px", borderTop: "1px solid var(--line-faint)" } }, h(SpecList, { items: specs })) : null,
        footer)
    );
  });
})();
