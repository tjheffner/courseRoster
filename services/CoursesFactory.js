courseRoster.factory('CoursesFactory', function CoursesFactory() {
  var factory = {};
  factory.courses = [];
  factory.addCourse = function() {
    factory.courses.push({ name: factory.courseName, id: factory.courses.length + 1, students: [] });
    factory.courseName = null;
  };

  factory.deleteCourse = function(course) {
    var index = factory.courses.indexOf(course);
    factory.courses[index].students = [];
    factory.courses.splice(index, 1);
  };

  return factory;

});
