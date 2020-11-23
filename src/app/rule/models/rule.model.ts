export interface Rule {
    id: string;
    name: string;
    items: Item[];
}

export interface RuleForm {
    name: string;
}

export interface Item {
    id: string;
    name: string;
    prob: number;
}

export interface ItemForm {
    name: string;
    prob: number;
}

export interface ProofForm {
    proof: string;
    token: string;
}
