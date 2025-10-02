import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './features/auth/states/reducer';
import { usersReducer, profileReducer } from './features/users/states/reducer';
import {
  coursesReducer,
  myCoursesReducer,
  courseDetailReducer,
} from './features/courses/states/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    profile: profileReducer,
    courses: coursesReducer,
    myCourses: myCoursesReducer,
    courseDetail: courseDetailReducer,
  },
});

export default store;