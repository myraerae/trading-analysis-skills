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

## Install via npx (one-off)

You can use npx to run the installer directly from the repository. This will copy the packaged `openclaw/skills` folder into a target directory (default `./openclaw/skills` in current working directory).

Examples:

```bash
# install to ./openclaw/skills in your current folder
npx github:myraerae/test123

# install to a custom path
npx github:myraerae/test123 --target ./my-skills-folder

# force overwrite if target exists
npx github:myraerae/test123 --target ./my-skills-folder --force
```

Notes:
- If you publish this package to npm, you can `npx trading-analysis-skills` directly after publishing.
- The installer copies the `openclaw/skills` bundled in the package. Ensure those files are present before publishing.

## Dependencies

- Web search tool (Tavily, multi-search-engine, etc.) for market data
- Optional: `baoyu-post-to-wechat` for report publishing

## License

MIT
