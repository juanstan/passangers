import { Child } from './child.interface';

export interface Passanger {
    id: number;
    name: string;
    age: number;
    checking: boolean;
    children: Child[];
}
