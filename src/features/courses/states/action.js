import { courseAPI, contentAPI } from '../api';

const ActionType = {
  SET_COURSES: 'SET_COURSES',
  SET_MY_COURSES: 'SET_MY_COURSES',
  SET_COURSE_DETAIL: 'SET_COURSE_DETAIL',
};

function setCourses(courses) {
  return {
    type: ActionType.SET_COURSES,
    payload: { courses },
  };
}

function setMyCourses(myCourses) {
  return {
    type: ActionType.SET_MY_COURSES,
    payload: { myCourses },
  };
}

function setCourseDetail(courseDetail) {
  return {
    type: ActionType.SET_COURSE_DETAIL,
    payload: { courseDetail },
  };
}

function asyncGetAllCourses() {
  return async (dispatch) => {
    try {
      const data = await courseAPI.getAllCourses();
      dispatch(setCourses(data.courses));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncGetMyCourses() {
  return async (dispatch) => {
    try {
      const data = await courseAPI.getAllCourses(true);
      dispatch(setMyCourses(data.courses));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncGetCourseDetail(courseId) {
  return async (dispatch) => {
    try {
      const data = await courseAPI.getCourseDetail(courseId);
      dispatch(setCourseDetail(data.course));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddCourse({ cover, title, description }) {
  return async (dispatch) => {
    try {
      await courseAPI.addCourse({ cover, title, description });
      alert('Berhasil menambahkan course!');
      dispatch(asyncGetMyCourses());
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncUpdateCourse(courseId, { title, description }) {
  return async (dispatch) => {
    try {
      await courseAPI.updateCourse(courseId, { title, description });
      alert('Berhasil mengubah course!');
      dispatch(asyncGetCourseDetail(courseId));
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncChangeCover(courseId, cover) {
  return async (dispatch) => {
    try {
      await courseAPI.changeCover(courseId, cover);
      alert('Berhasil mengubah cover!');
      dispatch(asyncGetCourseDetail(courseId));
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncDeleteCourse(courseId) {
  return async (dispatch) => {
    try {
      await courseAPI.deleteCourse(courseId);
      alert('Berhasil menghapus course!');
      dispatch(asyncGetMyCourses());
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncEnrollCourse(courseId) {
  return async (dispatch) => {
    try {
      await courseAPI.enrollCourse(courseId);
      alert('Berhasil mendaftar course!');
      dispatch(asyncGetCourseDetail(courseId));
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncUnenrollCourse(courseId) {
  return async (dispatch) => {
    try {
      await courseAPI.unenrollCourse(courseId);
      alert('Berhasil keluar dari course!');
      dispatch(asyncGetCourseDetail(courseId));
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncRatingCourse(courseId, { ratings, comment }) {
  return async (dispatch) => {
    try {
      await courseAPI.ratingCourse(courseId, { ratings, comment });
      alert('Berhasil memberikan rating!');
      dispatch(asyncGetCourseDetail(courseId));
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncAddContent(courseId, { title, youtube }) {
  return async (dispatch) => {
    try {
      await contentAPI.addContent(courseId, { title, youtube });
      alert('Berhasil menambahkan konten!');
      dispatch(asyncGetCourseDetail(courseId));
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncUpdateContent(contentId, courseId, { title, youtube }) {
  return async (dispatch) => {
    try {
      await contentAPI.updateContent(contentId, { title, youtube });
      alert('Berhasil mengubah konten!');
      dispatch(asyncGetCourseDetail(courseId));
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncDeleteContent(contentId, courseId) {
  return async (dispatch) => {
    try {
      await contentAPI.deleteContent(contentId);
      alert('Berhasil menghapus konten!');
      dispatch(asyncGetCourseDetail(courseId));
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

function asyncChangeContentStatus(contentId, courseId, status) {
  return async (dispatch) => {
    try {
      await contentAPI.changeContentStatus(contentId, status);
      dispatch(asyncGetCourseDetail(courseId));
      return { success: true };
    } catch (error) {
      alert(error.message);
      return { success: false };
    }
  };
}

export {
  ActionType,
  setCourses,
  setMyCourses,
  setCourseDetail,
  asyncGetAllCourses,
  asyncGetMyCourses,
  asyncGetCourseDetail,
  asyncAddCourse,
  asyncUpdateCourse,
  asyncChangeCover,
  asyncDeleteCourse,
  asyncEnrollCourse,
  asyncUnenrollCourse,
  asyncRatingCourse,
  asyncAddContent,
  asyncUpdateContent,
  asyncDeleteContent,
  asyncChangeContentStatus,
};