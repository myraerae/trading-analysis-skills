# Consolidation Breakout + Volume Spike — Crypto (Optimized)

## Detection checklist
1. Consolidation range: measure high/low over the consolidation window (default 14–28 days). Compute range % = (high - low) / midpoint.
2. Duration: count consecutive days within the range; require >= 14 by default for long consolidation.
3. Volume baseline: compute 7d and 14d average; prefer 14d for crypto due to 24/7 market.
4. Volume spike: current daily volume >= 2.0x 14d avg (2.5x for high-confidence)
5. Breakout: daily close outside the consolidation range; confirm with volume expansion and subsequent follow-through candle.
6. Liquidity filter: avg daily volume > configurable threshold or market cap rank within top 100.

## Crypto-specific cautions
- Token unlocks, exchange listings, or airdrops can create big spikes — always annotate news sources.
- BTC dominance shifts can cause correlated moves; always check BTC trend.
- For low-liquidity tokens (even inside top-100 occasionally), treat signals cautiously and increase volume threshold.

## Tuning
- Shorter-term watch: use 4H timeframe and shorter windows (e.g., 7d consolidation, 7-period average volume).
- Longer-term swing: use 30–56 day consolidation window and 14/30d volume baselines.

## False-breakout signals
- On-chain whale transfers, social-driven pump, and wash trading may look like volume spikes; mark 'news' and 'on-chain' indicators if possible.

## Example
(Same format as main SKILL)