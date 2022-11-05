import { getMdxSlugs } from './mdx';

describe('Test getMdxSlugs', () => {
  test('Test multiple files', () => {
    const input = ['path/to/file.a', 'hoge/fuga/piyo.b', 'foo/bar/baz.c'];
    const expected = ['file', 'piyo', 'baz'];
    const actual = getMdxSlugs(input);

    expect(actual).toStrictEqual(expected);
  });

  test('Test only file', () => {
    const input = ['file.ext'];
    const expected = ['file'];
    const actual = getMdxSlugs(input);

    expect(actual).toStrictEqual(expected);
  });

  test('Test when multiple periods', () => {
    const input = ['path/to/file.1.2.3.ext'];
    const expected = ['file'];
    const actual = getMdxSlugs(input);

    expect(actual).toStrictEqual(expected);
  });
});
