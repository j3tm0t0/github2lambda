~/work/lambda$ cat index.js
console.log('Loading event');

exports.handler = function(event, context) {
  console.log(event);
  context.succeed(JSON.stringify(event));
};
