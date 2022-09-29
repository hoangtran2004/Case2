export interface Manager<T> {
    create(t: any);

    read();

    update(index: number, t: T);

    findByIndex(index: number): T;

    deleteByIndex(index: number);

    findByName(name: string);

    findById(id: number);

}


