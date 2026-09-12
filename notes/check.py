"""Copy police for Stayers. Scans visible text for banned words, em dashes and
anything that smells like a wallet connect flow. Run: python notes/check.py"""
import io, re, sys, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BANNED = """unlock seamless cutting-edge revolutionary groundbreaking robust utilize delve
landscape narrative flywheel ecosystem embark foster empower vibrant community-driven
game-changer next-gen paradigm meticulously crafted unleash journey moreover furthermore
gm ser king desk door tape seat record terms workbench line""".split()
PHRASES = ["dive in", "at its core", "don't fade", "held the line", "the door is expensive",
           "burn the seat", "same hands", "four desks", "unofficial desk", "connect wallet",
           "whitelist check", "allowlist"]

html = io.open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
js = io.open(os.path.join(ROOT, "assets", "site.js"), encoding="utf-8").read()

# visible text only: drop tags, scripts and styles
vis = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", html, flags=re.S)
vis = re.sub(r"<[^>]+>", " ", vis)
vis = re.sub(r"&[a-z]+;", "'", vis)
# strings inside the js are rendered to the page too
vis += " " + " ".join(re.findall(r'"([^"]{4,})"', js))
vis = re.sub(r"\s+", " ", vis)

bad = 0
for w in BANNED:
    for m in re.finditer(r"\b" + re.escape(w) + r"\b", vis, re.I):
        print("BANNED WORD  %-16s ... %s ..." % (w, vis[max(0, m.start()-45):m.end()+45].strip()))
        bad += 1
for p in PHRASES:
    for m in re.finditer(re.escape(p), vis, re.I):
        print("BANNED PHRASE %-16s ... %s ..." % (p, vis[max(0, m.start()-45):m.end()+45].strip()))
        bad += 1
for ch, name in (("\u2014", "em dash"), ("\u2013", "en dash")):
    for m in re.finditer(re.escape(ch), vis):
        print("%s ... %s ..." % (name.upper(), vis[max(0, m.start()-45):m.end()+45].strip()))
        bad += 1

print("\nvisible words: %d" % len(vis.split()))
print("PASS" if bad == 0 else "FAIL: %d hits" % bad)
sys.exit(0)
