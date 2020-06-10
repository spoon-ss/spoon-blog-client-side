export const basicURL = 'http://localhost:3000'

export const categoryURL = (category)=>{
    return `${basicURL}/category/${category}`;
}

export function templateURL (param){
    return `https://87d397d9-b2a5-40b5-bb5b-e6bb033cc99c.mock.pstmn.io/${param}`;
}
