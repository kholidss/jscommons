interface Repo {
    readonly clearRepo: () => Promise<void>;
    readonly migrate: () => Promise<void>;
    readonly rollback: () => Promise<void>;
}
export default Repo;
