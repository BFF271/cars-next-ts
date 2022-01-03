module.exports = {
  '**/*.(j|t)s?(x)?': (filenames) => [
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
    'yarn prettier-format',
  ],
};
