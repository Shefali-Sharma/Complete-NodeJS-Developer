const users = [{
    id: 1,
    name: 'Shefali',
    schoolId: 101
},{
    id: 2,
    name: 'Vaishnavi',
    schoolId: 999
}
];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 999,
    grade: 100
}
];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => {
            return user.id == id;
        });

        if(user) {
            resolve (user);
        } else {
            reject ('Unable to find user with id of ' + id);
        }

    });
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    })
};

// getUser(2).then((user) => {
//     console.log(user);
// }).catch((e) => {
//     console.log(e);
// });


const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempuser) => {
        user = tempuser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        let average = 0;
        if(grades.length > 0){
            average = grades.map((grade) => grade.grade).reduce((a,b) => a + b);
        }
 
        return (user.name + ' has scored ' + average + '% in the class');
    });
};

getStatus(123).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});

// getGrades(88).then((grades) => {
//     console.log(grades);
// }).catch((e) => {
//     console.log(e);
// });