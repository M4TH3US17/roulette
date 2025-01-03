
export interface IBaseRepositoryContract<
    Entity,
    UpdateEntity,
    UniqueEntityRefs
> {
    create(entity: Entity): Promise<Entity>;
    getBy(unqRef: UniqueEntityRefs): Promise<Entity | null>;
    update(unqRef: UniqueEntityRefs, UpdateEntity: UpdateEntity): Promise<Entity>;
    delete(unqRef: UniqueEntityRefs): Promise<void>;
    getAll(): Promise<Entity[]>;
    /*getWithPaginationAndfilters<R extends keyof Entity>(
        paginationDto: GenericPaginationDto
    ): Promise<PaginationResult<Entity[]>>;*/
}