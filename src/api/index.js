import axios from 'axios'

const apiEndpoint = "http://localhost:5000/posts"

export const fetchVocabs = async () => await axios.get(apiEndpoint)
export const createVocab = async (vocab) => await axios.post(apiEndpoint, vocab)