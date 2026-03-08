# Consolidation Breakout + Volume Spike — US Stocks (Optimized)

## Detection Checklist
1. Consolidation window: measure high/low over 21–42 trading days (configurable).
2. Duration: require at least 14 trading days inside range for long consolidation.
3. Volume baseline: 20-day average volume.
4. Volume spike: current volume >= 2.0x 20d avg (2.5x for high-confidence).
5. Breakout: daily close above resistance (or below support) and ideally follow-through next session.
6. Market cap & liquidity check: default require market cap >= $2B and average volume above a min threshold.

## False-breakout cautions
- Breakouts on low float or around earnings/microcap news can be illiquid and risky.
- Single-day spike with no follow-through is low-confidence.

## Market-cap guidance
- Use >= $2B as default filter for signals; for tradability and recommendation, prefer >= $10B.

## Example
(See main skill formatting)