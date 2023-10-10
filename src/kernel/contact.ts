export interface UseCase<Input, Output>{
    execute(playload?: Input): Promise<Output>;
}