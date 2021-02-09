export interface Actor {
    name: string;
    text: string;
    id: string;
    imageURL: string;
}
export interface Query {
    search: string;
    page: number;
}

export interface RootState {
    loaded: boolean;
    actors: Actor[];
}