import { spawn } from "node:child_process";

const incoming = process.argv.slice(2);
const translated = [];
for (let index = 0; index < incoming.length; index += 1) {
  const argument = incoming[index];
  if (argument === "--strictPort") continue;
  if (argument === "--host") {
    translated.push("--hostname");
    if (incoming[index + 1]) translated.push(incoming[++index]);
    continue;
  }
  translated.push(argument);
}

const child = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", ...translated], {
  stdio: "inherit",
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});
