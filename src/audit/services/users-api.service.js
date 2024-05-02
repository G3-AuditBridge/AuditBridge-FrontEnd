/**
 * Users API Service
 * @summary REST operations client for user endpoint.
 */
import http from "../../shared/services/http-common.js";

export class UsersApiService {
    /**
     * Get all users
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getAll() {
        return http.get('/users');
    }

    /**
     * Get users by id
     * @param id - user id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getById(id) {
        return http.get(`/users/${id}`);
    }

    /**
     * Create new user
     * @param userResource - tutorial data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    create(userResource) {
        return http.post('/users', userResource);
    }

    /**
     * Update user by id
     * @param id - user id to update
     * @param userResource - user data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    update(id, userResource) {
        return http.put(`/users/${id}`, userResource);
    }

    /**
     * Delete user by id
     * @param id - user id to delete
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    delete(id) {
        return http.delete(`/users/${id}`);
    }

    /**
     * Get all users that match the last name criteria
     * @param lastname - user lastname criteria
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    findByLastName(lastname) {
        return http.get(`/users?lastname=${lastname}`);
    }
}