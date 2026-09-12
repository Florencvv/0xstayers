# Stayers

An unofficial one page site about Bear Bonds (2023) and The Standard Reserve
(2026). One argument: the same rule about leaving, three years apart, now on a
whole system. It has a tool you can click in both versions.

Built by @flxrnc. Not affiliated with Standard Reserve or 0xbeans.

## Run it

Open `index.html` in a browser. That is the whole thing. No build step, no
server, no dependencies, no network calls at runtime. Fonts are local files.

## Publish it

The folder is a static site, so anything that serves files works.

- Vercel: drag this folder onto vercel.com/new, or `vercel --prod` inside it.
- Netlify: drag the folder onto app.netlify.com/drop.
- GitHub Pages: push the folder, then enable Pages on the branch root.

Nothing here needs environment variables or a backend.

One thing to do after the domain is live: open `index.html` and change the two
image tags near the top from `assets/og.png` to the full address, for example
`https://yourdomain.xyz/assets/og.png`. X wants an absolute address for the link
preview card, and it will show nothing if the path is relative. The card itself is
already drawn and sits at `assets/og.png`; regenerate it from `notes/og.html` if
the headline ever changes.

## Files

    index.html            the page. All copy lives here.
    assets/site.css       the base layout and type
    assets/theme-*.css    alternative visual skins, one is linked from index.html
    assets/site.js        the tool. Every number on screen is computed here.
    assets/fonts.css      IBM Plex Sans and IBM Plex Mono, local woff2
    assets/fonts*/        the font files
    notes/FACTS.md        the fact ledger. Read this before changing any claim.
    notes/check.py        the copy police, see below
    notes/*.png           renders kept for reference

## The two rules this site is built on

1. Every claim has a source in `notes/FACTS.md`. If a number is not published by
   the protocol, the page prints "not published" instead of guessing. Illustrative
   numbers are allowed only in the tool, and only where the label says example.
2. The copy uses plain words. No metaphors, no em dashes, no crypto slang.

Run the checker after any copy change:

    python notes/check.py

It scans the visible text for banned words, banned metaphors, em dashes and
anything that looks like a wallet or whitelist flow. It must print PASS.

## The tool

Two tabs, four presets.

- 2023 bond: ETH deposited, days held, yearly stETH yield, other open bonds.
  Cash out returns the principal in full and forfeits the accrued yield to the
  bonds still open. The tool computes the yield and the split.
- 2026 charter: your branches, all branches, ETH flow, last 7 days of exits, an
  example branch balance and an example cash out fee. Cashing out shows what you
  receive, the fee, the half that burns and the half that goes to people who
  stayed. Closing the last branch burns the charter.

The 2026 fee is an example, not a protocol number. The whitepaper does not
publish the curve, and the slider says so in three places. The exits level moves
the slider to a sensible starting point; the reader can move it anywhere.
