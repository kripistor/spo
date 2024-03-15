import axios from 'axios';
import Cookies from 'js-cookie';

let serverPath = "";

serverPath = "http://localhost:8000"
axios.defaults.withCredentials = true;

export default class TaskService {
    static async getUserTasks() {
        const response = await axios.get(`${serverPath}/api/v1/tasks`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // If the response data is null or undefined, return an empty array
        return response.data || [];
    }

    static async deleteTask(taskId) {
        const response = await axios.delete(`${serverPath}/api/v1/tasks/${taskId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }

    static async getTasksByCategory(categoryId) {
        const response = await axios.get(`${serverPath}/api/v1/tasks/category/${categoryId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data || [];
    }

    static async createTask(task) {
        const response = await axios.post(`${serverPath}/api/v1/tasks`, task, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }
    static async updateTask(taskId, task) {
        const response = await axios.put(`${serverPath}/api/v1/tasks/${taskId}`, task, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    }
}