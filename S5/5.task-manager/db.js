
import chalk from 'chalk';
import fs from 'fs'

const filename = process.env.DB_FILE;

const warn = chalk.yellowBright.bold;
const success = chalk.greenBright.bold;

export default class DB {
    //? [Best Practice] --- Always just return true/false and don't show any messages from methods
    static createDB() {
        if (fs.existsSync(filename)) {
            console.log(warn('Database already exists!'));
            return false
        }
        try {
            fs.writeFileSync(filename, '[]', 'utf-8');
            console.log(success('Database created successfully!'));
            return true;
        } catch (error) {
            throw new Error('Could not create database file!', error);
        }
    }
    static resetDB() {
        try {
            fs.writeFileSync(filename, '[]', 'utf-8');
            console.log(success('Database reset successfully!'));
            return true;
        } catch (error) {
            throw new Error('Could not reset database file!', error);
        }
    }
    static DBExists() {
        if (fs.existsSync(filename)) {
            return true;
        } else {
            return false;
        }
    }
    static getTaskById(id) {
        let data;
        if (this.DBExists()) {
            data = fs.readFileSync(filename, 'utf-8');
        } else {
            this.createDB();
            return false;
        }

        try {
            data = JSON.parse(data);
            const task = data.find(task => task.id === Number(id));
            return task ?? false
        } catch (error) {
            throw new Error("Syntax error. \nPlease check the DB file.", error);
        }
    }
        static getTaskByTitle(title) {
        let data;
        if (this.DBExists()) {
            data = fs.readFileSync(filename, 'utf-8');
        } else {
            this.createDB();
            return false;
        }

        try {
            data = JSON.parse(data);
            const task = data.find(task => task.title === title);
            return task ?? false
        } catch (error) {
            throw new Error("Syntax error. \nPlease check the DB file.", error);
        }
    }
    static getAllTasks() {
        let data;
        if (this.DBExists()) {
            data = fs.readFileSync(filename, 'utf-8');
        } else {
            this.createDB();
            return [];
        }

        try {
            return JSON.parse(data);
        } catch (error) {
            throw new Error("Syntax error. \nPlease check the DB file.", error);
        }
    }
    static saveTask(title, completed = false, id = 0) {
        id = Number(id);
        if (id < 0 || id !== parseInt(id)) {
            throw new Error('ID must be a positive integer or zero.');
        } else if (typeof title !== 'string' || title.length < 3) {
            throw new Error('Title must be a string with at least 3 characters.');
        }

        let task = this.getTaskByTitle(title);
        if (task && task.id != id) {
            throw new Error('A task with this title already exists.');
        }

        let data = this.getAllTasks();

        //! New Task
        if (id === 0) {
            const newId = data.at(-1)?.id + 1 || 1;

            data = [...data, {id: newId, title, completed}]

            const str = JSON.stringify(data, null, "    ");
            try {
                fs.writeFileSync(filename, str, 'utf-8');
                return true;
            } catch (error) {
                throw new Error('Could not save task to database.', error);
            }
        //! Update Task
        } else {
            let taskIndex = data.findIndex(task => task.id === id);
            if (taskIndex === -1 || data[taskIndex] === undefined) {
                throw new Error('Task with the given ID does not exist.');
            } else {
                data[taskIndex] = {...data[taskIndex], title, completed};
                const str = JSON.stringify(data, null, "    ");
                try {
                    fs.writeFileSync(filename, str, 'utf-8');
                    return true;
                } catch (error) {
                    throw new Error('Could not update task in database.', error);
                }
            }
        }
    }
    static insertBulkData(data) {
        if (typeof data === 'string') {
            try {
                data = JSON.parse(data);
            } catch (error) {
                throw new Error("Invalid data format. Could not parse string to JSON.", error);
            }
        }
        if (data instanceof Array) {
            const str = JSON.stringify(data, null, "    ");
            try {
                fs.writeFileSync(filename, str, 'utf-8');
                return true;
            } catch (error) {
                throw new Error('Could not insert bulk data to database.', error);
            }
        }
    }
    static deleteTaskById(id) {
        id = Number(id);
        if (id > 0 && id === parseInt(id)) {
            let task = this.getTaskById(id);
            if (!task) {
                throw new Error('Task with the given ID does not exist.');
            }
            let data = this.getAllTasks();
            if (data.length === 0) {
                throw new Error('No tasks available to delete.');
            }
            data = data.filter(task => task.id !== id);
            const str = JSON.stringify(data, null, "    ");
            this.insertBulkData(str);
            return true;
        }
    }
}