import esbuild from 'esbuild';

const { Buffer } = globalThis;

export default async ({ file: { buffer, path }, options }) => {
  options = { sourcefile: path, ...options };
  const { code } = await esbuild.transform(buffer.toString(), options);
  return { buffer: Buffer.from(code) };
};
