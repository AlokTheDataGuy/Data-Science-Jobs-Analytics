import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

export const fetchTopSkills = () => axios.get(`${BASE_URL}/top-skills`);
export const fetchTopCities = () => axios.get(`${BASE_URL}/top-cities`);
export const fetchTopCompanies = () => axios.get(`${BASE_URL}/top-companies`);
export const fetchJobTrends = () => axios.get(`${BASE_URL}/trends`);
export const fetchRoles = () => axios.get(`${BASE_URL}/roles`);
export const fetchStates = () => axios.get(`${BASE_URL}/states`);
export const fetchFilteredSkills = (role, state) => 
    axios.get(`${BASE_URL}/skills`, { 
        params: { role: role || 'all', state: state || 'all' } 
    });

export const fetchFilteredCities = (role, state) => 
    axios.get(`${BASE_URL}/cities`, { 
        params: { role: role || 'all', state: state || 'all' } 
    });

export const fetchFilteredCompanies = (role, state) => 
    axios.get(`${BASE_URL}/companies`, { 
        params: { role: role || 'all', state: state || 'all' } 
    });