# Web-Tac-Toe

[My Notes](notes.md)

Have you ever wanted to play a game with a friend, but only had a few minutes to do so? Web-Tac-Toe is your solution! Web-Tac-Toe is a tic-tac-toe application that allows for quick games of tic-tac-toe between friends. Join a room with a friend and either play one quick game, or string several games back to back. The room will keep track of how many wins each player has so players can have proof of who is truly the tic-tac-toe master.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever wanted to play a game with a friend, but only had a few minutes to do so? Web-Tac-Toe is your solution! Web-Tac-Toe is a tic-tac-toe application that allows for quick games of tic-tac-toe between friends. Join a room with a friend and either play one quick game, or string several games back to back. The room will keep track of how many wins each player has so players can have proof of who is truly the tic-tac-toe master.

### Design

![Design image](DesignImage.png)

Three HTML pages. One for login/register, one for home/viewing rooms, and one for playing game inside a room. Users will be able to create and join rooms. Inside these rooms they will be able to play tic-tac-toe by making moves. They will also be able to randomize their own color on both the homepage and inside of a room. The win/loss record of the room will be shown in both the homepage list of rooms and the room itself.

```mermaid
sequenceDiagram
    actor John
    actor Billy
    actor Website
    John->>Website: Move Middle Middle
    Website-->>Billy: John Moved Middle Middle
    Billy->>Website: Move Top Left
    Website-->>John: Billy Moved Top Left
    John->>Website: Randomize Color
    Website-->>John: John New Color
    Website-->>Billy: John New Color
```

### Key features

- Secure login over HTTPS
- Ability to create and join rooms
- Ability to make Tic-Tac-Toe moves when it is your turn
- Total wins and losses shown for both users in the room displayed in realtime
- Ability for users to randomize their color
- Current game and wins/losses persistently stored

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for application. Two HTML pages. One for login/register/home/viewing rooms, and one for playing game inside a room.
- **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast. 
- **React** - Provides login, making moves, displaying win/loss record, backend endpoint calls, and use of React for routing and components.
- **Service** - Backend service endpoints for:
  - Register/Login/Logout users
  - Create/Join/Delete rooms
  - Making moves
  - Randomizing color (Third Party)
- **DB/Login** - Store users, rooms, and games in database. Register and login/logout users. Credentials securely stored in database. Can't make or join rooms, or make moves unless authenticated.
- **WebSocket** - As moves are made or colors are randomized, they are broadcast to all other users.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://mfcs260.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Used 2 HTML pages that represent login/home, and rooms/play.
- [x] **Proper HTML element usage** - Yup!
- [x] **Links** - Used to move to a room and to return to home/login page (index.html).
- [x] **Text** - Used for title and author at bottom. Also used for scoreboard and temporarily for game board.
- [x] **3rd party API placeholder** - Will be used in room.html to randomize player color.
- [x] **Images** - I could not think of anywhere it would be necessary to use an image, so I didn't implement one. I might go back and add one when I get more into styling if I feel it is necessary.
- [x] **Login placeholder** - Login from index.html. Will be able to see your available rooms.
- [x] **DB data placeholder** - Database data will be used for scoreboard/board in room.html and for your rooms on index.html.
- [x] **WebSocket placeholder** - Connect to websocket when joining a room. Making a move and updating scoreboard will use WebSocket connection.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - Done! Not sure if I'm supposed to include both the source and github in the footer, but I did it anyways just in case.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [x] **Responsive to window resizing** - Done! It was a nightmare to get the game board to resize properly, but after some investigating into css units and background image stuff I was able to get it working.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [x] **Application text content** - A bit of a basic font, but consistent throughout the application. 
- [x] **Application images** - Made and used a background image for the game board.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
