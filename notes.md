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

Deployed react-ified simon. It was pretty cool to see this work, and the way everything is laid out makes sense to me. Starting on react-ifying startup.

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
