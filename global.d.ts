declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

declare module '*.otf' {
    const value: string;
    export default value;
}

declare module 'tags.json' {
    const value: {
        id: number,
        titulo: string,
        tag?: number
    }[];
    export default value
}

declare module 'fotos.json' {
    const value: {
        titulo: string,
        fonte: string,
        path: string
        id: string,
        tagId: number,
        favorita: boolean
    }[];
    export default value
}

declare module 'fotos-populares' {
    const value: {
        path: string,
        alt: string,
        id: number
    }[]
    export default value
}