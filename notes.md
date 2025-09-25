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

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

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
