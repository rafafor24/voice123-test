export interface Actor {
    name: string;
    text: string;
    id: string;
    imageURL: string;
    stringify: string;
}
export interface Query {
    search: string;
    page: number;
}

export interface ResponseActors {
    actors: Actor[];
    pages: number;
}
export interface RootState {
    loaded: boolean;
    actors: Actor[];
    pages: number;
}