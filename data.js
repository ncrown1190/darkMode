const articles = [
    {
      id: 1,
      title: 'the LOREM Ipsum',
      date: new Date(2022, 9, 24),
      length: 11,
      snippet: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem laudantium nam in consequatur sunt molestias praesentium libero, illo aspernatur consectetur quis animi, labore doloremque voluptate optio at! Laboriosam, commodi quas?` },
    {
      id: 2,
      title: 'goodbye, clean code',
      date: new Date(2019, 12, 11),
      length: 5,
      snippet: `Coding is a journey. Think how far you came from your first line of code to where you are now.f you find pride in your craft, it is tempting to pursue cleanliness in code. Do it for a while.<br> 
        But don’t stop there. Don’t be a clean code zealot. Clean code is not a goal. It’s an attempt to make some sense out of the immense complexity of systems we’re dealing with. It’s a defense mechanism when you’re not yet sure how a change would affect the codebase but you need guidance in a sea of unknowns.`,
    },
    {
      id: 3,
      title: 'my decade in review',
      date: new Date(2018, 7, 11),
      length: 5,
      snippet: `A journey from India to USA. April 2011, Myself and my two children moved to US for good. Before moving to US I was doing research at IIT Kanpur, Which was about modelling the Data. Once I landed at US, I decided to start tutoring as I had to take care mychildren, but my passion for coding did not ended. I was constantly improving my coding skills along with Tutoring. Thanks to pendamic I joined JavaScript bootcamp to learn the latest things which I would not have learned by myself. `,
    },
    {
      id: 4,
      title: 'what are the react Hooks',
      // title: 'what are the react team principles',
      date: new Date(2015, 5, 4),
      length: 5,
      snippet: `Hooks in React- useState.During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).

      The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value. Here’s an example of a counter component that uses both forms of setState:`,
    },
  ];