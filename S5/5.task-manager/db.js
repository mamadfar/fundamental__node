
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
            data = JSON.parse(data);
            return data;
        } catch (error) {
            throw new Error("Syntax error. \nPlease check the DB file.", error);
        }
    }

}