---
name: crypto-analysis
description: Performs crypto market analysis for top 100 coins with focus on BTC, ETH, SOL. Emphasizes consolidation breakout + volume spike signals, technical indicators, and sector heat summary. Use when analyzing cryptocurrency, crypto markets, Bitcoin, Ethereum, Solana, or generating crypto analysis reports.
metadata: {"clawdbot":{"emoji":"₿","requires":{"env":[]},"primaryEnv":null}}
---

# Crypto Market Analysis

Comprehensive cryptocurrency analysis for top 100 coins by market cap. Primary focus on **BTC, ETH, SOL**. Emphasizes **consolidation breakout + volume spike** as a key strategy signal.

## Scope

- **Primary focus**: Bitcoin (BTC), Ethereum (ETH), Solana (SOL)
- **Universe**: Top 100 coins by market cap only (exclude lower-ranked coins)
- **Data sources**: Use web search to fetch CoinGecko, CoinMarketCap, TradingView, crypto news, and exchange data

## Data Acquisition

Use web search tools to gather:

1. **Price & volume**: Current price, 24h volume, 7d/30d price action
2. **Technical data**: RSI, MACD, Bollinger Bands, volume trends, support/resistance
3. **Market structure**: Consolidation ranges, breakout levels, volume spikes
4. **Sector/category data**: DeFi, L1/L2, Meme, AI, Gaming, etc. — for sector heat
5. **News**: Major developments, protocol upgrades, regulatory events

**Search strategy**:
- `BTC technical analysis 2025` / `ETH volume breakout`
- `top 100 crypto market cap` / `crypto sector performance`
- `CoinGecko BTC` / `TradingView SOL`
- Prefer data from last 7–30 days

## Priority Strategy: Consolidation Breakout + Volume Spike

**When to emphasize**: Always check for this pattern. It is the highest-priority signal.

**Definition**:
- **Consolidation**: Price trades in a narrow range (e.g., ±5–15%) for an extended period (7+ days, ideally 2–4 weeks)
- **Volume spike**: Sudden 2–3x+ increase in trading volume vs. recent average
- **Breakout**: Price moves decisively above resistance or below support with volume confirmation

**Analysis workflow**:
1. Identify coins in consolidation (narrow range, low volatility)
2. Detect volume spikes (compare to 7d/14d average)
3. Check if price breaks key levels with volume confirmation
4. Flag as **high-priority signal** when all three align

**Output format for flagged signals**:
```
🚨 CONSOLIDATION BREAKOUT + VOLUME SPIKE
• Coin: [SYMBOL]
• Consolidation: [range, duration]
• Volume spike: [current vs avg, multiple]
• Breakout direction: [up/down]
• Key level: [price]
• Confidence: [high/medium]
```

## Sector Heat Summary

After analyzing individual coins, summarize **sector heat**:

1. **Gather sector performance**: DeFi, L1, L2, Meme, AI, Gaming, RWA, etc.
2. **Rank by momentum**: Which sectors show rising volume, price strength, or breakout activity
3. **Output format**:
   - Top 3 heating sectors (rising momentum)
   - Bottom 2 cooling sectors (declining momentum)
   - Notable cross-sector rotation (if any)

## Analysis Types

### 1. Quick Overview (BTC/ETH/SOL)
- Current price, 24h change, key metrics
- Brief technical stance (bullish/bearish/neutral)
- Consolidation + volume spike check

### 2. Deep Technical Analysis
- Multi-indicator view (RSI, MACD, BB, volume)
- Support/resistance, trend identification
- **Heavy emphasis** on consolidation breakout + volume spike
- Divergence detection (RSI/MACD vs price)

### 3. Full Market Report
- BTC, ETH, SOL detailed analysis
- Top movers in top 100 (breakouts, volume spikes)
- **Sector heat summary** (which sectors heating up)
- Consolidation breakout watchlist
- Risk factors and catalysts

## Report Template

```markdown
# Crypto Market Analysis — [Date]

## Executive Summary
[2–3 sentences: market stance, key signals, sector heat]

## Priority: Consolidation Breakout + Volume Spike
[Table or list of flagged coins with the pattern]

## BTC / ETH / SOL
[Per-coin: price, technicals, consolidation check, volume analysis]

## Sector Heat
- 🔥 Heating: [sectors]
- ❄️ Cooling: [sectors]

## Top 100 Snapshot
[Notable movers, breakouts, volume leaders]

## Risks & Catalysts
[Brief list]
```

## Output Guidelines

- Use tables for metrics and comparisons
- Bold key signals and breakout flags
- Include data sources and dates
- Quantify: volume multiples, price ranges, RSI values
- Be objective; present bull and bear cases for flagged signals

## References

- **Consolidation breakout details**: See [references/consolidation-breakout.md](references/consolidation-breakout.md) for detection checklist and false breakout warnings.

## Integration

- Works with web search (Tavily, multi-search-engine) for data
- Can be chained with `baoyu-post-to-wechat` for report publishing
- Suitable for daily/weekly crypto analysis agents
