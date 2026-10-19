# Security policy

## Supported versions

Only the latest release on `main` receives fixes.

## Reporting a vulnerability

Please do not open a public issue.

- Preferred: [report it privately on GitHub](https://github.com/critias-ai/critias-pricing-plugin/security/advisories/new).
- Or email **hello@critias.ai** with "Security" in the subject.

Include what you found, how to reproduce it and the impact you expect. We aim to reply within five working days and will keep you updated until it is resolved. We credit reporters who want to be named.

## Scope

The plugin is a set of instructions and reference files for AI hosts. It runs no service of its own. Reports about prompt injection through skill content, unsafe file handling in `scripts/`, or instructions that could leak company context are in scope. How your AI host processes prompts and files is governed by that host's own policy.
