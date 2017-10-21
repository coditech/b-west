export const websiteUrl = 'http://localhost:3000/';
export const rootPath = '/Users/gabykaram/Desktop-2/codi/b-westProject/b-west';
export const mixProps = (passed_props_home) => (props) => ({...passed_props_home, ...props});
export const isEmpty = function (objectTest) {
    for (let key in objectTest) {
        if (this.hasOwnProperty(key))
            return false;
    }
    return true;
};