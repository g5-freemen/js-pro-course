let student = {
    name: 'Fox',
    lastName: 'Mulder',
    grades: {
        math: 4,
    }
};

function deepFreeze (obj) {
    Object.freeze(obj);
    if (!obj) return obj;

    Object.getOwnPropertyNames(obj).forEach(function (property) {
        if (obj[property] && !Object.isFrozen(obj[property]) 
        && typeof obj[property] == 'object' ) {
            deepFreeze(obj[property]);
          }
    } )

    return obj;
}

deepFreeze(student);

student.grades.math = 11;

console.log(student.grades.math)
