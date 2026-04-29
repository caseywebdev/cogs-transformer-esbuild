import { transform } from 'esbuild';

const { Buffer } = globalThis;

export default async ({ file: { buffer, path }, options }) => {
  options = { sourcefile: path, ...options };
  const { code } = await transform(buffer.toString(), options);
  return { buffer: Buffer.from(code) };
};
