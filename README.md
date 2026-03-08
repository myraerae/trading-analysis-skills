# Trading Analysis Skills

Agent skills for crypto and US stock market analysis. Designed for OpenClaw, Cursor, and compatible AI agent platforms.

## Skills

| Skill | Description |
|-------|-------------|
| **crypto-analysis** | Crypto market analysis (BTC, ETH, SOL, top 100). Consolidation breakout + volume spike, sector heat. |
| **us-stock-analysis** | US stock analysis. Fundamentals, technicals, sector heat. Market cap filter, consolidation breakout + volume spike. |

## Project Structure

```
trading-analysis-skills/
├── README.md
├── crypto-analysis/
│   ├── SKILL.md
│   ├── _meta.json
│   └── references/
│       └── consolidation-breakout.md
└── us-stock-analysis/
    ├── SKILL.md
    ├── _meta.json
    └── references/
        └── consolidation-breakout.md
```

## Install

**OpenClaw** (link from workspace):
```bash
# Copy or symlink into your openclaw workspace skills
ln -s /Users/rae/trading-analysis-skills/crypto-analysis /path/to/openclaw/workspace/skills/
ln -s /path/to/openclaw/trading-analysis-skills/us-stock-analysis /path/to/openclaw/workspace/skills/
```

**ClawHub** (when published):
```bash
claw skill add clawhub://crypto-analysis
claw skill add clawhub://us-stock-analysis
```

**Cursor / Skills.sh**:
```bash
npx skills add https://github.com/YOUR_USERNAME/trading-analysis-skills --skill crypto-analysis
npx skills add https://github.com/YOUR_USERNAME/trading-analysis-skills --skill us-stock-analysis
```

## Dependencies

- Web search tool (Tavily, multi-search-engine, etc.) for market data
- Optional: `baoyu-post-to-wechat` for report publishing

## License

MIT
