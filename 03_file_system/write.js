const fs = require('fs');
const path = require('path');

const content =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus corrupti odio accusantium labore blanditiis distinctio pariatur ab aliquam nisi porro illo iusto vel ut, quidem, odit aut similique delectus culpa?';

fs.writeFile('./test.txt', content, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
