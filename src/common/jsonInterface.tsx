export interface IFoto {
    titulo: string;
    fonte: string;
    path: string;
    id?: string;
    tagId?: number;
    favorita?: boolean
}

export interface IFiltro{
    id: number,
    titulo: string
}