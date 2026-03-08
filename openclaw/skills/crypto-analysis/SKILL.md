---
name: crypto-analysis
description: Crypto market analysis for top 100 coins, with priority on long-term consolidation + sudden volume spike watch. Focused analysis for BTC, ETH, SOL and sector heat summaries.
metadata: {"clawdbot":{"emoji":"₿","requires":{"env":[]},"primaryEnv":null}}
---

## Contract (inputs / outputs / success)
- Inputs: coin symbol(s) (default: BTC, ETH, SOL), universe = top 100 by market cap, timeframe (daily by default), recent historical price & volume (>=30 days).
- Outputs: prioritized watchlist for consolidation-breakout+volume-spike signals; per-coin technical summary; sector heat ranking; confidence levels and data sources/dates.
- Success: signals include quantified consolidation range, duration, volume multiple, breakout level and a confidence rating.

## Purpose
A focused crypto analysis skill that:
- Watches the top-100 coins only (reduces noise from illiquid tokens).
- Emphasizes long-term consolidation that suddenly sees a volume expansion and a breakout (high-probability early signal).
- Summarizes sector-level heating/cooling to spot rotations.

## Scope & Filters
- Universe: top 100 coins by market cap (CoinGecko/CoinMarketCap ranking).
- Primary coins: BTC, ETH, SOL (always include quick overview for these).
- Timeframes supported: Daily (default), 4H (optional for intraday checks).
- Ignore very-low-liquidity coins (filter by avg daily volume threshold).

## Key Detection Parameters (configurable)
- Consolidation window: 14–56 days (default 14–28). Consolidation defined as price staying within ±X% of a range (default X = 10%).
- Volume baseline: 7-day and 14-day average volume.
- Volume spike threshold: current volume >= 2.0x baseline (configurable to 2.5x for higher confidence).
- Breakout confirmation: daily close above resistance (or below support) with volume >= threshold.
- Correlation check: compare coin movement vs BTC to detect correlation-driven moves.

## Priority Strategy: Long consolidation → sudden volume spike → breakout
1. Identify coins in consolidation (range + duration).
2. Detect volume spike relative to 7/14 day averages.
3. Confirm breakout (price action and close outside range) with volume.
4. Assign confidence: high (all checks pass + follow-through candle), medium (breakout but lower volume), low (spike only).

## Sector Heat Analysis
- Map coins to sectors/categories (DeFi, L1/L2, NFTs/Gaming, Oracles, AI, Infrastructure, Stablecoins, etc.).
- For each sector compute momentum score = weighted sum of recent volume change, price change, and count of coins breaking out.
- Output: Top 3 heating sectors, Bottom 2 cooling sectors, Notable cross-sector rotations.

## Output Format (recommended)
- Executive summary (1–3 lines)
- Flagged signals block (consolidation breakout + volume spike):
  • Coin, sector, consolidation range and duration, volume multiple, breakout price, confidence, why it matters.
- BTC / ETH / SOL quick view (price, RSI, MA, consolidation check)
- Sector heat snapshot
- Data sources & timestamp

## False-breakout and risk checks
- Ignore breakouts on low volume or with immediate reversal into range.
- Mark potential news-driven spikes and annotate sources (exchange listing, token unlock, major partnership, hack/news).
- Liquidity check: require min avg volume or market cap to treat as tradable signal.

## Integration notes
- Data sources: CoinGecko, CoinMarketCap, TradingView for charts, exchange pages, major crypto news.
- Suitable for daily/weekly runs. Can be chained to publishing agents.

## Examples
```
🚨 CONSOLIDATION BREAKOUT + VOLUME SPIKE
• Coin: SOL
• Sector: L1
• Consolidation: 80–92 (10%), duration 21 days
• Volume spike: 3.1x vs 14d avg
• Breakout price: 93 (daily close > resistance)
• Confidence: High
```

## References
See `references/consolidation-breakout.md` for detection checklist and crypto-specific notes.
