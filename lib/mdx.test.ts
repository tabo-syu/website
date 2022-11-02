import { getSlugs } from './mdx';

describe('Test getAllMdx', () => {
  test('Test multiple files', () => {
    const filepaths = ['path/to/file.a', 'hoge/fuga/piyo.b', 'foo/bar/baz.c'];
    expect(getSlugs(filepaths)).toStrictEqual(['file', 'piyo', 'baz']);
  });

  test('Test only file', () => {
    const filepaths = ['file.ext'];
    expect(getSlugs(filepaths)).toStrictEqual(['file']);
  });

  test('Test when multiple periods', () => {
    const filepaths = ['path/to/file.1.2.3.ext'];
    expect(getSlugs(filepaths)).toStrictEqual(['file']);
  });
});
