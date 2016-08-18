import * as crypto from "crypto-js";
export function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
}

export function curr<T, U, Z>(fun: (par1: T, par2: U) => Z): (t: T) => (u: U) => Z {
    return (t: T) => {
        return (u: U) => {
            return fun(t, u);
        }
    }
}

function encrypt(secret: string, text: string): string {
    return crypto.MD5(text, secret).toString();
}
