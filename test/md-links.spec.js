const { mdLinks, readFiles, } = require('../src/index.js');
const fs = require('fs');
const path = require('path');

describe('readFiles', () => {
  it('should read and resolve the content of an existing .md file', () => {
    const filePath = path.join('text.md');
    readFiles(filePath)
      .then((data) => {
        expect(data).toBeTruthy();
      });
  });

  it('should reject for a non-existing .md file', () => {
    const filePath = 'nonexisting.md';
    expect(readFiles(filePath)).rejects.toThrow();
  });

  describe('mdLinks', () => {
    it('should read a Markdown file and return an array of links', async () => {
      const filePath = 'text.md';
      const links = await mdLinks(filePath);
      expect(Array.isArray(links)).toBe(true);
      expect(links.length).toBeGreaterThan(0);
    });

    it('should return link statistics if the "stats" option is provided', async () => {
      const filePath = 'text.md';
      const options = { stats: true };
      const stats = await mdLinks(filePath, options);
      expect(stats).toHaveProperty('total');
      expect(stats).toHaveProperty('unique');
      expect(stats).toHaveProperty('broken');
    });
  }
  )
}
);
