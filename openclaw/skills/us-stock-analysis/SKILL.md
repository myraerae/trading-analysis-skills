---
name: us-stock-analysis
description: US stock analysis skill emphasizing consolidation + volume spike signals, with market cap filtering and sector heat summaries.
metadata: {"clawdbot":{"emoji":"📈","requires":{"env":[]},"primaryEnv":null}}
---

## Contract (inputs / outputs / success)
- Inputs: ticker(s) (default: major indices / watchlist), timeframe (daily), market cap filter (default >= $2B).
- Outputs: flagged consolidation-breakout+volume-spike stocks (market-cap filtered), per-stock fundamentals & technicals, sector heat ranking, confidence metrics.
- Success: recommendations only for stocks with meaningful liquidity and market cap; flagged signals include quantified metrics and data sources.

## Purpose
Provide fundamental + technical oriented analysis for US equities while:
- Emphasizing long consolidation then sudden volume surge breakout signals.
- Filtering out small/illiquid names that produce noisy signals.
- Summarizing sector-level momentum and rotations.

## Scope & Filters
- Market: NYSE, NASDAQ, major US exchanges.
- Market cap filter: default >= $2B for being considered tradable; prefer >= $10B for high-conviction recommendations. Configurable per run.
- Timeframe: Daily (default). Intraday (60m/4H) optional for monitoring.

## Key Detection Parameters
- Consolidation window: 14–56 trading days (default 21–42 days).
- Range threshold: price inside ±X% of range (X default 8–12%).
- Volume baseline: 20-day average volume.
- Volume spike threshold: current volume >= 2.0x 20d avg (2.5x for higher confidence).
- Breakout confirmation: daily close above resistance (or below support) on volume; follow-through next session preferred.

## Priority Strategy
1. Filter by market cap & liquidity.
2. Identify consolidation ranges and durations.
3. Detect volume spike vs 20d average.
4. Confirm breakout and assign confidence.

## Sector Heat Analysis
- Use GICS or equivalent sector mapping.
- Momentum score = weighted combination of price change, volume change, and breakout counts among sector members.
- Output Top 3 heating sectors, Bottom 2 cooling sectors, and notable rotations.

## Fundamental checks (for recommended names)
- Revenue and EPS trends (past 3–5 years / quarters).
- Debt levels, cash flows, margins, and valuation multiples vs peers.
- Earnings or macro catalysts that could have driven the volume spike.

## Output Format
- Executive summary
- Flagged signals (with market cap and liquidity checks)
- Per-stock: fundamentals, technical indicators, consolidation check, risk notes
- Sector heat snapshot
- Sources & timestamp

## Risk controls
- Ignore breakouts on extremely low float or low liquidity.
- Annotate earnings, guidance, SEC filings, or other event drivers.
- For recommendations include market cap and liquidity as explicit fields.

## References
See `references/consolidation-breakout.md` for the detection checklist and market-cap guidance.
