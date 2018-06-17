import { ADD_USER_INFO } from "../constants/action-types";

export const initialState = {
  userInfo: {
    name: 'Ben Garcia',
    email: 'bgarcia@gmail.com',
    bio: 'Really cool dude who knows a lot about coding',
    userImage: 'https://www.veterantv.com/wp-content/uploads/2017/08/f5d784aa1eabbde15ba5e2d90c3ba828.jpg'
  },
  pinnedRepos: [
    {
      id: 1,
      title: 'Bamazon',
      image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',
      description: 'CLI store',
      githubLink: 'www.github.com',
      deployedLink:'www.google.com'
    },{
      id: 2,        
      title: 'Burger app',
      image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
      description: 'burger store',
      githubLink: 'www.github.com',
      deployedLink:'www.google.com'
    },{
      id: 3,        
      title: 'Pomo',
      image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
      description: 'student store',
      githubLink: 'www.github.com',
      deployedLink:'www.google.com'
    },{
      id: 4,        
      title: 'TuneUp',
      image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
      description: 'car stuffs',
      githubLink: 'www.github.com',
      deployedLink:'www.google.com'
    },{
      id: 5,        
      title: 'More stuff',
      image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
      description: 'stuff store',
      githubLink: 'www.github.com',
      deployedLink:'www.google.com'
    },{
      id: 6,        
      title: 'Other stuffs',
      image:'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1-994x559.jpg',        
      description: 'other stuff store',
      githubLink: 'www.github.com',
      deployedLink:'www.google.com'
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
    return { ...state, userInfo: state.userInfo, pinnedRepos: state.pinnedRepos };
    default:
      return state;
  }
};

export default rootReducer;
