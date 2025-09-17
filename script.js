:root{
  --bg:#fff; --fg:#111; --muted:#666;
  --line:#ececec; --card:#fff; --pill:#f6f6f6;
  --accent:#000; --accentfg:#fff; --gold:#E7C200;
}
*{box-sizing:border-box}
body{margin:0;font:16px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--fg);background:var(--bg)}
.bar{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border-bottom:1px solid var(--line);position:sticky;top:0;background:#fff}
.brand{display:flex;gap:8px;align-items:center;font-weight:700}
.dot{width:18px;height:18px;border-radius:6px;background:#000;display:inline-block}
.status{display:flex;gap:8px;align-items:center}
.badge{padding:4px 10px;border-radius:999px;border:1px solid var(--line);background:#fafafa;font-weight:600;font-size:12px}
.badge.gold{background:#fff7cc;border-color:#E7C200}
.wrap{max-width:900px;margin:0 auto;padding:18px 14px}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;margin:12px 0;box-shadow:0 1px 10px rgba(0,0,0,.04)}
h2{margin:0 0 10px}
.row{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0}
.lbl{min-width:120px;color:var(--muted)}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pill{padding:8px 12px;border:1px solid var(--line);border-radius:999px;background:var(--pill);cursor:pointer}
.pill.on{background:#000;color:#fff;border-color:#000}
.btn{padding:10px 14px;border-radius:999px;border:1px solid var(--line);background:#fff;cursor:pointer;font-weight:600}
.btn.primary{background:var(--accent);color:var(--accentfg)}
.hint,.muted{color:var(--muted);font-size:14px}
