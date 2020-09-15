import { morphism, StrictSchema } from 'morphism'
import middy from '@middy/core'

class TransformObject<To, From> implements middy.MiddlewareObject<any, any, any> {
    private schema : StrictSchema<To, From>

    constructor (schema: StrictSchema<To, From>) {
        this.schema = schema
    }

    public static create<To, From> (schema: StrictSchema<To, From>): TransformObject<To, From> {
        return new TransformObject(schema)
    }

    public after: middy.MiddlewareFunction<any, any> = async (handler: middy.HandlerLambda) => {
        handler.response = morphism(this.schema, handler.response)
        return
    }
}

export default TransformObject.create
