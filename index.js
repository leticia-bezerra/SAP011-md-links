const fs = require("fs");

function mdLinks(filePath, validate = false) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) reject();
      const regexUrl = /\[([^\]]+)\]\((https?[^)]+)\)/g;
      const matches = [...data.matchAll(regexUrl)];
      const links = matches.map(match => {
        return {
          href: match[2],
          text: match[1],
          file: filePath
        }
      })
      if (validate === false) {
        resolve(links);
      } else {
        const validateLinks = links.map(link => {
          return fetch(link.href).then(response => {
            link.status = response.status
            if (response.status >= + 200 && response.status <= 299) {
              link.ok = 'ok';
            } else {
              link.ok = 'fail';
            }
            return link
          }
          ).catch(err => {
            link.ok = 'fail';
            link.status = 'ENOTFOUND'
            return link
          })
        })
        resolve(Promise.all(validateLinks))
      }
    });
  });
}

mdLinks('./test/test.md',  true ).then(result => {
  console.log(result);
});

// const pathsCommand = process.argv;
// const addressPath = process.argv[2];
// console.log(pathsCommand);

// const filePath = "./test/test.md";

// const readFile = fs.readFile(filePath, 'utf-8', (err, data) => {
//   let text;
//   let url;
//   let newContent;

//   while ((newContent = regexUrl.exec(data)) !== null) {
//     text = newContent[1];
//     url = newContent[2];
//     // links = {text, url};

//     links.push({ text, url });
//   }

//   console.log(links);
//   // console.log(line);
// });

// console.log(line);

// const rl = fs.readFile.({ input: readStream });

// console.log(links);

// const urlRegex = /^(https?):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
// const match;
// const urlRegex = [a-zA-Z\d]+://(\w+:\w+@)?([a-zA-Z\d.-]+\.[A-Za-z]{2,4})(:\d+)?(/.*)?

// if (urlRegex.test(url)) {
//     console.log("Valid URL");
//   } else {
//     console.log("Invalid URL");
//   }

//   const links = [];
module.exports = { mdLinks };
