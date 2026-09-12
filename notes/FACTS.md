# Fact ledger for Stayers

Verified 2026-09-12 by five parallel researchers. Rule: nothing goes on the page
without a source below. Illustrative numbers are allowed only where the page
prints the word example. Full reports live in the scratchpad research folder as
A-ethglobal.md, B-tweets.md, C-site.md, D-whitepaper.md, E-chickenbonds.md.

---

## 1. Bear Bonds, ETHGlobal showcase + his own thread

Sources: https://ethglobal.com/showcase/bear-bonds-2pjsd and the six tweet thread
of 2023-11-06 starting at 1721602742710317431.

VERIFIED
- ERC-4626 vault, ETH becomes stETH, staking yield, an NFT represents the bond.
- Early exit returns the ETH principal; the accrued yield goes to bonds still open.
- Redemption when ETH passes its all time high. The showcase says "hit ATH", not
  "a NEW all time high", so the page does not say new.
- An early exit mints a soul bound token. The showcase says "soul bound token" and
  "paper handed". "Paperhand NFT" was our phrasing and has been removed.
- Prizes: three sponsor prizes plus a finalist spot. His own screenshot shows
  ETHOnline 2023 Finalist $500, Mantle Best DeFi $1250, Axelar Best Use of GMP
  $3000, Scroll Pool Prize $17.17.
- "Bear bonds are heavily inspired by Liquidity's chicken bonds", 2023-11-06.
  The misspelling is his, character for character. The page quotes it and notes
  the protocol is Liquity.
- "If enough people like it, I'll clean up the code and deploy it on mainnet",
  2023-11-06. This is why the page says he said he would, not that he never did.
- "some frens and I ... We made something called Bear Bonds", so the page credits
  0xbeans and friends, not a solo build.

REMOVED FROM THE DRAFT, because it could not be verified
- "Never launched on mainnet." Unprovable negative. The showcase is silent, and a
  logged out X profile cannot be enumerated. Circumstantial only: the demo UI says
  "Switch to Goerli", and the showcase's Source Code link to
  github.com/0xBeans/Bear-Bonds now returns 404. Not enough to assert.
- Any mention of a repo. The link exists but is dead; a dead link on our page reads
  as an accusation we did not intend.
- "Won ETHOnline 2023." ETHGlobal's own post says "The 11 ETHOnline 2023 Finalists"
  and types that row as finalist. He wrote "i won an ETHGlobal hackathon" in 2026,
  which is fair for the sponsor bounties. The page states the prizes and lets his
  quote speak for itself.

## 2. Chicken Bonds

Source: docs.chickenbonds.org and the Liquity whitepaper.
- The action is Chicken Out. You reclaim 100% of the bonded LUSD and forgo the
  accrued virtual bLUSD balance. LUSD Chicken Bonds went live 4 October 2022.
- CORRECTED: "the yield stays in the system" is true in effect but wrong in
  mechanism, because yield flows to the Reserve all along and a Chicken Out does
  not move it. The page now says you give up the balance you had accrued.
- The page does not say Chicken Bonds is still running. TVL is about 2% of peak
  and there is no shutdown announcement either way.
- CUT: "ERC-4626 handles rebasing stETH badly." The words rebasing and stETH do
  not appear in EIP-4626 at all, and Lido's own advice is to wrap rather than write
  custom math. The page never makes this claim.

## 3. The Standard Reserve, live site

Source: standardreserve.xyz. It is a Vite SPA; the copy lives in its JS chunks.
- Launch date, verbatim: "Standard is launching on September 14th." No year, no
  time zone. This is why the page prints Launch: Sept 14 and nothing more.
- The mint page still says "The mint is not live yet" and "Coming soon".
- The site says resolution fee, not cash out fee. The page uses plain words and
  notes their term once inside the tool.
- Charters are auctioned in ETH. Branch licenses are paid fully in $STANDARD and
  burned. CORRECTED: an earlier draft said the branch auction was in ETH. It is not.
- The site publishes a policy rate range of 0.2x to 1.25x. The whitepaper redacts
  that same multiplier. CORRECTED: the tool no longer lists the multiplier among
  the not published items, because their own site publishes it.
- No author is named anywhere on the site and 0xbeans appears nowhere on it.
  The only external link is x.com/standard_rsv. No GitHub. No wallet connect.
- Not on the live site, but in the whitepaper: genesis liquidity, issuance budget,
  the 7 day exit window, the whole dormancy mechanic, the auction multipliers.

## 4. The Standard Reserve, whitepaper v0.1

- Re-fetched today. Nothing has been un-redacted four days before launch: all
  fifteen rows of the parameter table are still bars.
- Still not published, and printed as such by the tool: base issuance, epoch
  length, the resolution fee floor and ceiling, auction floors.
- Dormancy is verbatim correct: 30 days, anyone can report, 2% bounty capped at
  100,000, the wallet pays 70% and receives 30%, the charter burns.
- The exit fee depends on how much of the bank left in the window, not on how many
  people left and not on the regime. The tool says a lot of the bank left this week,
  never many people are leaving.

## 5. Attribution of Standard Reserve to 0xbeans

NOT explicitly verified anywhere. His 2026-08-23 post says "we took that idea,
rebuilt it from the ground up, and supercharged it" while quoting the protocol's
own whitepaper post, which is him writing about it in the first person. The site
names no author. The page therefore quotes him and adds one plain line saying the
site names no author. It never asserts he is the author.

---

## 6. The builder block

Everything in it is sourced, and the weak items are phrased as his own claims.
- His X bio, quoted as his: "sometimes a dev / prev coinbase, cofounder frame
  (acquired), head of protocol abstract". Fetched 2026-09-12.
- DRIP20: his most starred repo, "Lean ERC20 token with gasless streaming to any
  wallet", shipped in production as Mirakai's $ORBS. This is the same idea as Bear
  Bonds, eighteen months earlier, which is why it opens the list.
- Frame: co-founder with Cygaar and Pablo. Igloo Inc, the parent of Pudgy Penguins,
  acquired the team on 28 June 2024, per their own press release. He confirmed it
  the next day. This is the one fully independent fact in the block.
- Abstract: third parties name him as a developer; "head of protocol" comes only
  from his own bio, so the page says exactly that. DROPPED: "until August 2026",
  which has no source anywhere.
- Coinbase: only his own bio plus a podcast introduction. The page does not state
  a role or dates, it just quotes the bio.
- The 2022 Blitmap interview about giving a project's artists skin in the game.
- NOT USED: a mention by @zacxbt. That handle is one letter from @zachxbt, the
  fraud investigator, and printing it would imply an endorsement that never
  happened.

## 7. The mechanics block

Transcribed from whitepaper v0.1 on 2026-09-12, formula by formula. The bars on
the page correspond to real redactions in the paper, which encodes them as a
component with a declared character width.
- Published in full, so printed in full: the regime test, your share, the buyback
  rate limit with its two constants, both supply identities, and every dormancy
  number.
- Partly redacted, so printed with bars: the flow signal, issuance, exit pressure
  and the license auction curve.
- Redacted completely: the multiplier rule, m(n+1). It is the largest bar in the
  document and the page says so.
- CORRECTED: exit pressure is not W / (D + W). The published form is
  W / max(D + W, bar), with a redacted floor inside the max. The page prints the
  max and the bar.
- The one inference the page makes, and it is airtight: the paper says the 70%
  dormancy fee is deliberately worse than the worst case resolution fee, which
  puts the resolution ceiling below 70% without printing it.
- NOT PRINTED, although the prose publishes them while the summary table bars
  them: licenses per day and the per charter daily cap. They are not needed here.

## 8. Fixed after the review in the role of 0xbeans (2026-09-12)

Seven real errors, all corrected. Kept here so they do not come back.
1. The hero said "the more people cash out at once". The fee runs on capital, not
   headcount: P = W / max(D + W, bar), where W is tokens withdrawn over 7 days.
   The paper is explicit that it is denominated in real capital, not trade counts.
   Now reads "the more of the bank cashes out at once". This is the one change made
   to the approved hero wording, and it was made because the original was wrong.
2. The regime row hung the wrong variable. The regime is set by the current epoch's
   flow F(n); the slower signal drives the issuance rate only. Fixed, and the page
   now names both levers.
3. The split bar labelled the whole fee "STAYS", which doubled the stayer share on
   the biggest graphic on a page called Stayers. It is now three segments: what you
   take, the half that burns, the half that goes to people who stayed.
4. The 2023 tool divided forfeited yield equally per bond. Bear Bonds is ERC-4626,
   so the yield returns to the vault and accrues pro rata to bond size. The per bond
   number is gone and the wording now says in proportion to size.
5. "Four days before launch" was hardcoded and would rot within a day. Removed.
6. "One detail the paper gives away without meaning to" was an accusation. The paper
   says deliberately. Reworded to say it bounds the number on purpose.
7. "Nothing here is a guess" was contradicted four rows later by an inference drawn
   from the size of a black box. The inference is gone.

## 9. Changed on the owner's instruction
- Removed the note about his Liquity spelling and the line saying the protocol
  names no author. The page now states plainly that he is the developer behind
  The Standard Reserve, which matches how he writes about it in the first person.
  The footer still says the page is unofficial and unaffiliated.
- Source brackets are now links, and every one was checked for a 200 response on
  2026-09-12: ETHGlobal, Chicken Bonds docs, the whitepaper, GitHub DRIP20, the
  Igloo press release, the Blitmap interview, his profile, and the tweets.

## 10. Fixed after the hostile review (2026-09-12)

Five fatal, thirteen lesser. The ones worth remembering:
- The tool's exit level and its fee slider had come apart. You could set exits to
  Low, drag the fee to 40%, and the page would say the fee was lower while charging
  4,000 of 10,000. The sentence now reads the fee itself, never the button that
  seeded it, so Medium is no longer silently bucketed with Low either.
- "Add a branch" at ten branches said you spent and burned $STANDARD for nothing.
  It now shows zero spent, zero burned, and says ten is the cap.
- The bar's three captions summed to 101% at every odd fee, because each half was
  rounded up independently. Percentages are now taken from the real amounts.
- The mechanics section blacked out P_start and then printed the 2x and 3x auction
  opens two lines below, which is the very thing the bar hides. The sentence is gone.
- The timeline never collapsed on a phone: the theme set four columns
  unconditionally and loaded after the base skin's media queries, so they were dead
  rules. At 500px the page scrolled 264px sideways with the 2026 card off screen.
  All the narrow layouts are now restated in sections.css, which loads last.
  Verified clean at 500, 768, 823, 900, 1024, 1280 and 1440.
- "His bio is four words long" sat next to a three word bio.
- The 2023 tool had a slider that changed nothing. It now drives a labelled
  conditional average, and says "1 bond" rather than "1 bonds".
- The compare table said a soulbound token marks you if you disappear, while the
  silent section said that in 2023 a bond could sit open forever. The token belongs
  to early exits, not to disappearing, and it moved.

## 11. Formula audit, second pass (2026-09-12)

Every formula on the page was printed out and compared symbol by symbol against
the whitepaper transcription. All ten match their source exactly. Nothing on the
page is reconstructed, averaged, or inferred from the size of a bar.

Each row now carries its provenance, and the section header explains the three:
- FROM THE PAPER: the formula is printed there with its numbers intact.
  The two regimes, the buyback limit, both supply identities, the dormancy split.
- SHAPE ONLY: the structure is printed, the values inside it are not.
  The signal, issuance, one branch's daily yield, exit pressure, the license curve.
- BLACKED OUT: nothing survives. The policy rule m(n+1), and only that.

Two rows say plainly that the paper states them in prose rather than typesetting
them: the regime test, and the dormancy split, where the arithmetic is the paper's
numbers written out.

CHANGED: the share row used to print "share = your branches / all branches", which
is a paraphrase. It now prints the paper's actual formula for one branch's daily
yield, with the base rate barred, and explains the share from that.

## 12. Wording, on the owner's instruction
- Exits are described in terms of people, which is how a reader thinks about them.
  Accuracy is kept where it matters: the tool says in plain words that the fee
  counts how much left, not how many wallets left, and the exit pressure row
  defines W and D exactly as the paper does.
- The masthead no longer carries the unofficial chip or the subtitle. The word
  unofficial now sits in the first line above the headline, in the footer, and on
  the share card, so a stranger still meets it before anything else.

## Checks that run on every change
- `python notes/check.py` scans visible copy for the client's banned words, banned
  metaphors, em dashes, and anything resembling a wallet or whitelist flow.
  Current state: PASS, 1660 visible words, zero hits.
