// Used to store saved projects 

const projects = [
  {
    id: 1,
    name: 'Bobbieleelicious',
    description: 'Full stack recipe application with responsive design for Mobile and Web that includes a Node backend.',
    thumbnail: 'images/login.png',
    website: '',
    github: 'https://github.com/jdsghuman/solo-project-bobbieleelicious',
    tags: ['React', 'Redux-Saga', 'Node', 'Express', 'PostgreSQL']
  },
  {
    id: 2,
    name: 'Feedback',
    description: 'Feedback form is an application that allows user to provide feedback with ratings and comments. Admin users are able to view and delete feedback from the admin page.',
    thumbnail: 'images/feedback.png',
    website: '',
    github: 'https://github.com/jdsghuman/weekend-challenge-5-feedback',
    tags: ['React', 'Node', 'Express', 'PostgresSQL']
  },
  {
    id: 3,
    name: 'Portfolio',
    description: 'Responsive portfolio made with React, optimized for Mobile and Web',
    thumbnail: 'images/jdghuman.png',
    website: '',
    github: 'https://github.com/jdsghuman/portfolio-react',
    tags: ['React', 'Redux']
  }
]
const projectsReducer = (state = projects, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return state;
    default:
      return state;
  }
}

export default projectsReducer;