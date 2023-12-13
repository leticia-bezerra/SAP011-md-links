const { mdLinks } = require('../index.js');

describe('mdLinks', () => {
  it('should return extracted links when validate is false', () => {
    return mdLinks('./test/test.md', false).then((links) => {
      expect(links).toStrictEqual([
        { href: "https://www.youtube.com/watch?v=Lub5qOmY4JQ", text: "recurso", file: "./test/test.md" },
        { href: "https://www.youtube.com/watch?v=Lub5qOmY4JQ", text: "recurso ll", file: "./test/test.md" },
        { href: "https://www.youtube.com/watch?v=Lub5qOmY4JQ", text: "recurso lll", file: "./test/test.md" },
        { href: "https://www.youtube.com/leticiav=Lubkejfrngiuhdio5qOmY4JQ", text: "recurso lV", file: "./test/test.md" },
      ]);
    });
  });

  it('should return extracted links when validate is true', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      status:200
    }));
    return mdLinks('./test/test.md', true).then((links) => {
      expect(links).toStrictEqual([
        { href: "https://www.youtube.com/watch?v=Lub5qOmY4JQ", text: "recurso", file: "./test/test.md", status:"200", ok: "ok"  },
        { href: "https://www.youtube.com/watch?v=Lub5qOmY4JQ", text: "recurso ll", file: "./test/test.md",  status:"200", ok: "ok" },
        { href: "https://www.youtube.com/watch?v=Lub5qOmY4JQ", text: "recurso lll", file: "./test/test.md",  status:"200", ok: "ok" },
        { href: "https://www.youtube.com/leticiav=Lubkejfrngiuhdio5qOmY4JQ", text: "recurso lV", file: "./test/test.md",  status:"ENOTFOUND", ok: "fail" },
      ]);
    });
  });
});