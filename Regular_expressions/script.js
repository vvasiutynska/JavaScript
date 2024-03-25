^(?!.*[Aa]).{6,}$


var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

var trustedEmails = arr.filter(function (obj) {
    var emailCheck = /@(gmail|yahoo)\.com$/;
    var isValidFormat = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@/.test(obj.email);
    return emailCheck.test(obj.email) && isValidFormat;
});

console.log(trustedEmails);


