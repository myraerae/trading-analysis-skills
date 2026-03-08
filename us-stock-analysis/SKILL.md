---
name: us-stock-analysis
description: Performs US stock analysis with fundamental, technical, and sector heat. Emphasizes consolidation breakout + volume spike signals. Filters by market cap (large/mid-cap preferred). Use when analyzing US stocks, NASDAQ, NYSE, S&P 500, or generating stock analysis reports.
metadata: {"clawdbot":{"emoji":"📈","requires":{"env":[]},"primaryEnv":null}}
---

# US Stock Analysis

Comprehensive US stock analysis covering fundamentals, technicals, and sector heat. Emphasizes **consolidation breakout + volume spike** as a key strategy signal. **Recommendations only for stocks with meaningful market cap** (avoid small-cap/low-liquidity names).

## Scope

- **Market**: US stocks (NYSE, NASDAQ, etc.)
- **Market cap filter**: Prefer large-cap ($10B+) and mid-cap ($2B–$10B). Avoid small-cap (<$2B) unless explicitly requested
- **Data sources**: Use web search for Yahoo Finance, MarketWatch, Seeking Alpha, Bloomberg, CNBC, SEC filings

## Data Acquisition

Use web search tools to gather:

1. **Price & volume**: Current price, 52-week range, average volume, recent volume
2. **Financials**: Revenue, EPS, P/E, margins, debt, cash flow (3–5 year trends)
3. **Technical data**: RSI, MACD, moving averages, support/resistance, volume trends
4. **Market structure**: Consolidation ranges, breakout levels, volume spikes
5. **Sector/industry**: GICS sector, industry performance, peer comparison
6. **News**: Earnings, guidance, macro events, analyst ratings

**Search strategy**:
- `AAPL stock price volume 2025` / `NVDA technical analysis`
- `S&P 500 sector performance` / `stock sector rotation`
- `Yahoo Finance [symbol]` / `MarketWatch [symbol]`
- Prefer data from last quarter

## Priority Strategy: Consolidation Breakout + Volume Spike

**When to emphasize**: Always check for this pattern. It is the highest-priority signal.

**Definition**:
- **Consolidation**: Price trades in a narrow range (e.g., ±5–15%) for an extended period (2–4+ weeks)
- **Volume spike**: Sudden 2–3x+ increase in trading volume vs. 20-day average
- **Breakout**: Price moves decisively above resistance or below support with volume confirmation

**Analysis workflow**:
1. Identify stocks in consolidation (narrow range, low volatility)
2. Detect volume spikes (compare to 20d average)
3. Check if price breaks key levels with volume confirmation
4. Flag as **high-priority signal** when all three align
5. **Ensure market cap filter** — only flag stocks with meaningful cap (e.g., $2B+)

**Output format for flagged signals**:
```
🚨 CONSOLIDATION BREAKOUT + VOLUME SPIKE
• Stock: [SYMBOL] ([Company])
• Market cap: [size]
• Consolidation: [range, duration]
• Volume spike: [current vs 20d avg, multiple]
• Breakout direction: [up/down]
• Key level: [price]
• Confidence: [high/medium]
```

## Sector Heat Summary

After analyzing individual stocks, summarize **sector heat**:

1. **Gather sector performance**: Technology, Healthcare, Financials, Consumer, Energy, etc. (GICS)
2. **Rank by momentum**: Which sectors show rising volume, relative strength, or breakout activity
3. **Output format**:
   - Top 3 heating sectors (rising momentum)
   - Bottom 2 cooling sectors (declining momentum)
   - Notable sector rotation (if any)

## Analysis Types

### 1. Basic Stock Info
- Company description, current price, key metrics
- Market cap, 52-week range, recent performance
- Consolidation + volume spike check

### 2. Fundamental Analysis
- Financial statements (income, balance sheet, cash flow)
- Profitability metrics (margins, ROE, ROIC)
- Valuation (P/E, PEG, EV/EBITDA) vs peers and history
- Business quality, risks, red flags

### 3. Technical Analysis
- RSI, MACD, moving averages, support/resistance
- **Heavy emphasis** on consolidation breakout + volume spike
- Trend identification, volume confirmation

### 4. Comprehensive Report
- Combined fundamental + technical
- Bull and bear cases
- Buy/Hold/Sell recommendation with target and conviction
- **Sector heat summary**
- **Market cap filter** applied throughout

## Report Template

```markdown
# US Stock Analysis — [Date]

## Executive Summary
[2–3 sentences: market stance, key signals, sector heat]

## Priority: Consolidation Breakout + Volume Spike
[Table or list of flagged stocks (market cap filter applied)]

## Stock Analysis
[Per-stock: fundamentals, technicals, consolidation check, volume analysis]

## Sector Heat
- 🔥 Heating: [sectors]
- ❄️ Cooling: [sectors]

## Recommendations
[Buy/Hold/Sell with rationale, market cap noted]

## Risks & Catalysts
[Brief list]
```

## Output Guidelines

- Use tables for financial data and comparisons
- Bold key signals and breakout flags
- Include data sources and dates
- Quantify: volume multiples, P/E, margins, price ranges
- Be objective; present bull and bear cases
- **Always state market cap** for recommended stocks

## References

- **Consolidation breakout details**: See [references/consolidation-breakout.md](references/consolidation-breakout.md) for detection checklist and market cap filter.

## Integration

- Works with web search (Tavily, multi-search-engine) for data
- Can be chained with `baoyu-post-to-wechat` for report publishing
- Suitable for daily/weekly stock analysis agents
