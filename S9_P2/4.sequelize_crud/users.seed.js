import User from "./user.model.js";

//? bulkCreate() unlike create(), by default does not run validators, so we need to set validate: true
//? in options to run validators for each record.
async function insertUsers() {
    await User.bulkCreate(
        [
            {
                username: "user1",
                email: "email1@gmail.com",
                password: "asqwrds",
                birthYear: 1999,
            },
            {
                username: "user2",
                email: "email2@gmail.com",
                password: "sdgxcv",
                birthYear: 1989,
            },
            {
                username: "user3",
                password: "qqwrsa",
                birthYear: 1998,
            },
            {
                username: "user4",
                email: "email4@gmail.com",
                password: "fgcss",
                birthYear: 2002,
            },
            {
                username: "user5",
                password: "fdgdc",
                birthYear: 2003,
            },
            {
                username: "user6",
                email: "email6@gmail.com",
                password: "ararz",
                birthYear: 1979,
            },
            {
                username: "user7",
                email: "email7@gmail.com",
                password: "xcvrrt",
                birthYear: 1996,
            },
            {
                username: "user8",
                email: "email8@gmail.com",
                password: "yyookfg",
                birthYear: 1995,
            },
            {
                username: "user9",
                email: "email9@gmail.com",
                password: "opiy",
                birthYear: 2001,
            },
            {
                username: "user10",
                email: "email10@gmail.com",
                password: "aaqsdsf",
                birthYear: 2000,
            },
            {
                username: "user11",
                email: "email11@gmail.com",
                password: "aaxxf",
                birthYear: 1988,
            },
            {
                username: "user12",
                email: "email12@gmail.com",
                password: "vbfqq",
                birthYear: 1987,
            },
            {
                username: "user13",
                email: "email13@gmail.com",
                password: "araghg",
                birthYear: 1977,
            },
            {
                username: "user14",
                email: "email14@gmail.com",
                password: "sadqqq",
                birthYear: 1973,
            },
            {
                username: "user15",
                email: "email15@gmail.com",
                password: "aotyww",
                birthYear: 1982,
            },
        ],
        {
            validate: true,
        }
    );
}

export default insertUsers;
