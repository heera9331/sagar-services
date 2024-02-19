import { conn } from '../utils/index';

interface providerProp {
    name: string,
    mobile: string,
    district: string
}
interface ServiceProps {
    title: string,
    description: string,
    district: string,
    address: string,
    contact: string,
}

// @ts-ignore
const validateProvider: boolean = (provider: providerProp) => {
    if (!provider.name || !provider.mobile || !provider.district) {
        return false;
    }
    return !(provider.mobile.length > 10 || provider.mobile.length < 10);
}

// @ts-ignore
const validateService: boolean = (service: ServiceProps) => {
    if (!service.title || !service.description || !service.contact || !service.district || !service.address) {
        return false;
    }

    return !(service.contact.length > 10 || service.contact.length < 10);
}

const hasCategory = async (category: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM categories WHERE name='${category}'`, (error, rows) => {
            if (error) {
                console.error("Error while checking if category exists:", error);
                reject(false);
            } else {
                console.log('rows -> ', rows.length);
                if (rows.length == 0) {
                    resolve(false);
                } else {
                    resolve(true);
                }
            }
        });
    });
};


const dbQueryResult: object | null = async (sql: string) => {
    let result = await conn.query(sql);
    console.log(result);
    return null
}

export { validateProvider, validateService, dbQueryResult, hasCategory };