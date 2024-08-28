import axios from 'axios';

interface ApplicationDetails {
    userId: string;
    id: string;
}

let cache: ApplicationDetails | null = null;

export async function fetchApplicationDetails(): Promise<ApplicationDetails> {
    if (cache) {
        console.log('returned from cache...');
        return cache;
    }

    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/55');
        cache = {
            userId: response.data.userId,
            id: response.data.id,
        };
        console.log('returned from Actual API...');

        return cache;
    } catch (error) {
        throw new Error('Failed to fetch appsetup details');
    }
}