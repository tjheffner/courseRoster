courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {
  $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId)

  $scope.addStudent = function() {
    $scope.course.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };

  $scope.deleteStudent = function(student) {
    var index = $scope.course.students.indexOf(student);
    $scope.course.students.splice(index, 1);
  };

});
