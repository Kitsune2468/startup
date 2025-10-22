# CS 260 Notes

[My startup - WebTacToe](https://mfcs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.235.222.79
Didn't initially make it an elastic IP address, but when I was setting up DNS stuff I realized I probably should so I did.

## Caddy

[instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

Had some issues editing Caddyfile, but eventually got it to work. Make sure to know all the vim commands lol

## HTML

We will see, working on it now. Getting a posix compliant shell working without a guide was horrible, but I eventually got it to work. Then I had issues running the deployFiles.sh because of some newline shenanigans. In the future if I run into the same problem, I'll use: "sed -i 's/\r//' deployFiles.sh" before running the deploy. Also, for cygwin, use "cd " /cygdrive/c/Users/$USER" " to get to main directory.

New: Nothing much here. Since taking this class last time, I have taken a class that has had me configure a posix compliant shell, and it seems to have fixed/simplified some of the old problems I had from last time.

## CSS

Looking through the simon-css is very interesting. I've always wondered how html & css worked together, so it's cool to learn about it and mess around with it.

This took a couple hours to get it how I wanted (true). It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Trying to get the game board to style correctly was a nightmare, but worked eventually.

I did like the navbar it made it super easy to build a responsive header. (Also true)

I also used SVG to make the background/board for the game.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Deployed react-ified simon. It was pretty cool to see this work, and the way everything is laid out makes sense to me. 
Deployed react-ified startup. Getting the picture to work took me a minute, as I had to change the path to /public/Board.png instead of just Board.png. Also played around with the CSS a bit and tweaked the spacing and style of a few things, and plan on continuing to do so in future parts of the project if something bugs me.

## Midterm Review

In the following code, what does the link element do?
- Link to another doc/page
In the following code,  what does a div tag do?
- Groups HTML elements
In the following code, what is the difference between the #title and .grid selector?
'#' applies to a single unique element, while . can apply to multiple elements so that they share the same properties
In the following code, what is the difference between padding and margin?
- padding creates space from the edge for child elements, and margins create space on the outside of the element from other sibling/parent elements
Given this HTML and this CSS how will the images be displayed using flex?
- ?
What does the following padding CSS do?
- ?
What does the following code using arrow syntax function declaration do?
- Shortened function declaration?
What does the following code using map with an array output?
- /**shrug*/*
What does the following code output using getElementByID and addEventListener?
- ?
What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of:
- Inline
How would you use CSS to change all the div elements to have a background color of red?
- div { background-color: red } (Pretty sure that's the right syntax.)
How would you display an image with a hyperlink in HTML?
- Image inside anchor element w/ href
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
- Content, padding, border, margin
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
- Give "trouble" tag in html and .trouble { color: green; } (Or whatever tag you use.)
What will the following code output when executed using a for loop and console.log?
- ?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
- elementOrWhatever = document.getElementByID("byu");
- elementOrWhatever.style.color = "green";
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
- "<p><ol><ul><h2><h1><h3>"
How do you declare the document type to be html?
- "<!DOCTYPE html>"
What is valid javascript syntax for if, else, for, while, switch statements?
- Not needed
What is the correct syntax for creating a javascript object?
- object = {
-    property1: 1,
-    property2: 2
-    }
Is it possible to add new properties to javascript objects?
- Yup
If you want to include JavaScript on an HTML page, which tag do you use?
- "<script>"
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
- ?
Which of the following correctly describes JSON?
- ?
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
- chmod: file/directory permissions, pwd: print working directory, cd: change directory, ls: list directory, vim: create/edit a file, nano: open/create file, mkdir: make directory, mv: move file, rm: remove file, man: manual pages/docs, ssh: secure connection to another machine, ps: process status, wget: download file from internet, sudo: execute command w/ root privileges
Which of the following console command creates a remote shell session?
- ssh
Which of the following is true when the -la parameter is specified for the ls console command?
- ?
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
- sub: banana.fruit. root: bozo top: .click
Is a web certificate is necessary to use HTTPS.
- Yes
Can a DNS A record can point to an IP address or another A record.
- only IP address
Port 443, 80, 22 is reserved for which protocol?
- Https, Http, and SSH respectively
What will the following code using Promises output when executed?
- ?

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
