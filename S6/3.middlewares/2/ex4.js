import express from 'express'

const app = express();

app.use((req, res, next) => {
    console.clear();
    next();
})

app.get("/abc", (req, res, next) => {
    console.log("A GET request received to middleware 1");
    next();
})

//? Matching /ac and /abc - the "b" is optional
app.get(/\/ab?c/, (req, res, next) => {
    console.log("A GET request received to middleware 2");
    next();
})

//? Matching /ac and /abc - "b" can occur one or more times
app.get(/\/ab+c/, (req, res, next) => {
    console.log("A GET request received to middleware 3");
    next();
})

//? Matching /ac, /abc, /abbc, /abbbc, etc. - "b" can occur zero or more times
app.get(/\/ab*c/, (req, res, next) => {
    console.log("A GET request received to middleware 4");
    next();
})

//? Matching /abc, /abxc, /ab123c, etc. - ".*" matches any characters (zero or more) between "ab" and "c"
app.get(/\/ab.*c/, (req, res, next) => {
    console.log("A GET request received to middleware 5");
    next();
})

//? Matching /abcd, /abcbcd, /abcbcbcd, etc. - "(bc)+" matches one or more occurrences of "bc" between "a" and "d"
app.get(/\/a(bc)+d/, (req, res, next) => {
    console.log("A GET request received to middleware 6");
    next();
})

//? Matching /ab.c - We escape the dot (.) to match it literally, so it matches "ab.c" but not "abc" or "abxc"
app.get(/\/ab\.c/, (req, res, next) => {
    console.log("A GET request received to middleware 7");
    next();
})

//? Matching /abxc, /ab-c, /ab_c, etc. - The dot (.) matches any single character between "ab" and "c"
app.get(/\/ab.c/, (req, res, next) => {
    console.log("A GET request received to middleware 8");
    next();
})

//? Matching /ab0c, /ab1c, etc. - It will accept and digit between "ab" and "c" - The backslash (\) is used to escape the "d" in the regex, which stands for any digit (0-9)
app.get(/\/ab\dc/, (req, res, next) => {
    console.log("A GET request received to middleware 9");
    next();
})

app.use((req, res, next) => {
    console.log("------------------------------------------------------------------------------");
    next();
})
//! Above middlewares will accept any path that a part of it matches the regex pattern. For example, we can call /asd2314abc0poipor and it will match the regex pattern in middleware 1, 2, 3, 4, 5, and 9.
//! To avoid this and make sure that the entire path matches the regex pattern, we can use the start (^) and end ($) anchors in the regex pattern.
//! For example, we can use /^\/ab?c$/ to match only the exact path "/abc" or "/ac" and not any path that contains "abc" or "ac".

//? Matching only the exact path "/abc", "/abbc", "/abbbc", etc. - "b" can occur one or more times
app.get(/^\/ab+c$/, (req, res, next) => {
    console.log("A GET request received to middleware 10");
    next();
})

//? Matching only the exact path "/ac", "/abc", "/abbc", "/abbbc", etc. - "b" can occur zero or more times
app.get(/^\/ab*c$/, (req, res, next) => {
    console.log("A GET request received to middleware 11");
    next();
})

//? Matching only the exact path "/abc" or "/ac" - the "b" is optional
app.get(/^\/ab?c$/, (req, res, next) => {
    console.log("A GET request received to middleware 12");
    next();
})

//? Matching only the exact path "/abc/123", "/abc/1234", etc. - The regex pattern matches paths that start with "/abc/" followed by 3 or 4 digits, and nothing else after that.
app.get(/^\/abc\/\d{3,4}$/, (req, res, next) => {
    console.log("A GET request received to middleware 13");
    next();
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});