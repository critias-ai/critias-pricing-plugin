#!/usr/bin/env node
// Copies the complete plugin (manifests, licence, all skills and shared knowledge) into <folder>/pricing-plugin,
// ready to add as a local plugin catalogue in the host. Running it again replaces that copy.
import {cpSync, existsSync, mkdirSync, readFileSync, rmSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const {version} = JSON.parse(readFileSync(join(root, 'plugin.json'), 'utf8'));
const argument = process.argv[2];

if (argument === '--version' || argument === '-v') {
  console.log(version);
} else if (!argument || argument === '--help' || argument === '-h') {
  console.log(`Critias Pricing Plugin ${version}

Usage: npx @critias/pricing-plugin <folder>

Copies the plugin to <folder>/pricing-plugin. Then, in Claude Code:
  /plugin marketplace add <folder>/pricing-plugin
  /plugin install pricing-plugin@critias
For other hosts, register that folder as a local plugin catalogue (see INSTALL.md).`);
  process.exit(argument ? 0 : 1);
} else {
  const destination = join(resolve(argument), 'pricing-plugin');
  if (existsSync(destination)) {
    let name;
    try {
      name = JSON.parse(readFileSync(join(destination, 'plugin.json'), 'utf8')).name;
    } catch {}
    if (name !== 'pricing-plugin') {
      console.error(`${destination} exists and is not a Pricing Plugin copy; choose another folder.`);
      process.exit(1);
    }
    rmSync(destination, {recursive: true});
  }
  mkdirSync(destination, {recursive: true});
  for (const entry of ['plugin.json', '.claude-plugin', 'LICENSE', 'skills']) cpSync(join(root, entry), join(destination, entry), {recursive: true});
  console.log(`Pricing Plugin ${version} copied to ${destination}

In Claude Code:
  /plugin marketplace add ${destination}
  /plugin install pricing-plugin@critias
Other hosts: register that folder as a local plugin catalogue (see INSTALL.md).`);
}
