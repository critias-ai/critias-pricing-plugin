# Contributing to Pricing Plugin

Thank you for helping. This project is the pricing skills behind [Critias](https://critias.ai), an open-source pricing analyst.

## Before you start

- Open an issue or a [discussion](https://github.com/critias-ai/critias-pricing-plugin/discussions) before a large change, so we can agree the approach first.
- Never attach real business data to an issue, pull request or test. Use synthetic or redacted figures.

## Making a change

1. Fork the repository and create a branch from `main`.
2. Keep the `skills/` layout, shared `skills/knowledge/` and relative references intact.
3. Run the package check and make sure it passes:

   ```bash
   python3 scripts/check_package.py
   ```

4. If you change a skill's behaviour, add or update a worked example under `examples/` that shows the effect.
5. Open a pull request and fill in the template.

## Style

- British spelling in prose (`analyse`, `behaviour`, `realisation`).
- Plain, specific sentences. Name the figure, the method and the limit.
- One change per pull request.

## Licence

By contributing, you agree that your contribution is licensed under the [MIT License](LICENSE).
