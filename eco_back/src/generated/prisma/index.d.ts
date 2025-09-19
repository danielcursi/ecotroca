
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model PropostaTroca
 * 
 */
export type PropostaTroca = $Result.DefaultSelection<Prisma.$PropostaTrocaPayload>
/**
 * Model Mensagem
 * 
 */
export type Mensagem = $Result.DefaultSelection<Prisma.$MensagemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusItem: {
  DISPONIVEL: 'DISPONIVEL',
  RESERVADO: 'RESERVADO',
  INDISPONIVEL: 'INDISPONIVEL'
};

export type StatusItem = (typeof StatusItem)[keyof typeof StatusItem]


export const StatusProposta: {
  PENDENTE: 'PENDENTE',
  ACEITA: 'ACEITA',
  RECUSADA: 'RECUSADA',
  CANCELADA: 'CANCELADA'
};

export type StatusProposta = (typeof StatusProposta)[keyof typeof StatusProposta]

}

export type StatusItem = $Enums.StatusItem

export const StatusItem: typeof $Enums.StatusItem

export type StatusProposta = $Enums.StatusProposta

export const StatusProposta: typeof $Enums.StatusProposta

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propostaTroca`: Exposes CRUD operations for the **PropostaTroca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropostaTrocas
    * const propostaTrocas = await prisma.propostaTroca.findMany()
    * ```
    */
  get propostaTroca(): Prisma.PropostaTrocaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensagem`: Exposes CRUD operations for the **Mensagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensagems
    * const mensagems = await prisma.mensagem.findMany()
    * ```
    */
  get mensagem(): Prisma.MensagemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Item: 'Item',
    Categoria: 'Categoria',
    PropostaTroca: 'PropostaTroca',
    Mensagem: 'Mensagem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "item" | "categoria" | "propostaTroca" | "mensagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      PropostaTroca: {
        payload: Prisma.$PropostaTrocaPayload<ExtArgs>
        fields: Prisma.PropostaTrocaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropostaTrocaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropostaTrocaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload>
          }
          findFirst: {
            args: Prisma.PropostaTrocaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropostaTrocaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload>
          }
          findMany: {
            args: Prisma.PropostaTrocaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload>[]
          }
          create: {
            args: Prisma.PropostaTrocaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload>
          }
          createMany: {
            args: Prisma.PropostaTrocaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropostaTrocaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload>[]
          }
          delete: {
            args: Prisma.PropostaTrocaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload>
          }
          update: {
            args: Prisma.PropostaTrocaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload>
          }
          deleteMany: {
            args: Prisma.PropostaTrocaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropostaTrocaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropostaTrocaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload>[]
          }
          upsert: {
            args: Prisma.PropostaTrocaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropostaTrocaPayload>
          }
          aggregate: {
            args: Prisma.PropostaTrocaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropostaTroca>
          }
          groupBy: {
            args: Prisma.PropostaTrocaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropostaTrocaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropostaTrocaCountArgs<ExtArgs>
            result: $Utils.Optional<PropostaTrocaCountAggregateOutputType> | number
          }
        }
      }
      Mensagem: {
        payload: Prisma.$MensagemPayload<ExtArgs>
        fields: Prisma.MensagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findFirst: {
            args: Prisma.MensagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findMany: {
            args: Prisma.MensagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          create: {
            args: Prisma.MensagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          createMany: {
            args: Prisma.MensagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          delete: {
            args: Prisma.MensagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          update: {
            args: Prisma.MensagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          deleteMany: {
            args: Prisma.MensagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          upsert: {
            args: Prisma.MensagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          aggregate: {
            args: Prisma.MensagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagem>
          }
          groupBy: {
            args: Prisma.MensagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    item?: ItemOmit
    categoria?: CategoriaOmit
    propostaTroca?: PropostaTrocaOmit
    mensagem?: MensagemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    itens: number
    propostas: number
    mensagens: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | UsuarioCountOutputTypeCountItensArgs
    propostas?: boolean | UsuarioCountOutputTypeCountPropostasArgs
    mensagens?: boolean | UsuarioCountOutputTypeCountMensagensArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPropostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaTrocaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    propostas_oferecido: number
    propostas_desejado: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propostas_oferecido?: boolean | ItemCountOutputTypeCountPropostas_oferecidoArgs
    propostas_desejado?: boolean | ItemCountOutputTypeCountPropostas_desejadoArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountPropostas_oferecidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaTrocaWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountPropostas_desejadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaTrocaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    itens: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | CategoriaCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type PropostaTrocaCountOutputType
   */

  export type PropostaTrocaCountOutputType = {
    mensagens: number
  }

  export type PropostaTrocaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagens?: boolean | PropostaTrocaCountOutputTypeCountMensagensArgs
  }

  // Custom InputTypes
  /**
   * PropostaTrocaCountOutputType without action
   */
  export type PropostaTrocaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTrocaCountOutputType
     */
    select?: PropostaTrocaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropostaTrocaCountOutputType without action
   */
  export type PropostaTrocaCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    telefone: string | null
    cidade: string | null
    bairro: string | null
    data_cadastro: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nome: string | null
    email: string | null
    senha_hash: string | null
    telefone: string | null
    cidade: string | null
    bairro: string | null
    data_cadastro: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nome: number
    email: number
    senha_hash: number
    telefone: number
    cidade: number
    bairro: number
    data_cadastro: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha_hash?: true
    telefone?: true
    cidade?: true
    bairro?: true
    data_cadastro?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha_hash?: true
    telefone?: true
    cidade?: true
    bairro?: true
    data_cadastro?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nome?: true
    email?: true
    senha_hash?: true
    telefone?: true
    cidade?: true
    bairro?: true
    data_cadastro?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    telefone?: boolean
    cidade?: boolean
    bairro?: boolean
    data_cadastro?: boolean
    itens?: boolean | Usuario$itensArgs<ExtArgs>
    propostas?: boolean | Usuario$propostasArgs<ExtArgs>
    mensagens?: boolean | Usuario$mensagensArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    telefone?: boolean
    cidade?: boolean
    bairro?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    telefone?: boolean
    cidade?: boolean
    bairro?: boolean
    data_cadastro?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nome?: boolean
    email?: boolean
    senha_hash?: boolean
    telefone?: boolean
    cidade?: boolean
    bairro?: boolean
    data_cadastro?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nome" | "email" | "senha_hash" | "telefone" | "cidade" | "bairro" | "data_cadastro", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | Usuario$itensArgs<ExtArgs>
    propostas?: boolean | Usuario$propostasArgs<ExtArgs>
    mensagens?: boolean | Usuario$mensagensArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      itens: Prisma.$ItemPayload<ExtArgs>[]
      propostas: Prisma.$PropostaTrocaPayload<ExtArgs>[]
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nome: string
      email: string
      senha_hash: string
      telefone: string
      cidade: string
      bairro: string
      data_cadastro: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itens<T extends Usuario$itensArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propostas<T extends Usuario$propostasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$propostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mensagens<T extends Usuario$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha_hash: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly cidade: FieldRef<"Usuario", 'String'>
    readonly bairro: FieldRef<"Usuario", 'String'>
    readonly data_cadastro: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.itens
   */
  export type Usuario$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Usuario.propostas
   */
  export type Usuario$propostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    where?: PropostaTrocaWhereInput
    orderBy?: PropostaTrocaOrderByWithRelationInput | PropostaTrocaOrderByWithRelationInput[]
    cursor?: PropostaTrocaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaTrocaScalarFieldEnum | PropostaTrocaScalarFieldEnum[]
  }

  /**
   * Usuario.mensagens
   */
  export type Usuario$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id_item: number | null
    id_usuario_proprietario: number | null
    id_categoria: number | null
  }

  export type ItemSumAggregateOutputType = {
    id_item: number | null
    id_usuario_proprietario: number | null
    id_categoria: number | null
  }

  export type ItemMinAggregateOutputType = {
    id_item: number | null
    id_usuario_proprietario: number | null
    id_categoria: number | null
    titulo: string | null
    descricao: string | null
    condicao: string | null
    foto_uris: string | null
    data_publicacao: Date | null
    status_item: $Enums.StatusItem | null
  }

  export type ItemMaxAggregateOutputType = {
    id_item: number | null
    id_usuario_proprietario: number | null
    id_categoria: number | null
    titulo: string | null
    descricao: string | null
    condicao: string | null
    foto_uris: string | null
    data_publicacao: Date | null
    status_item: $Enums.StatusItem | null
  }

  export type ItemCountAggregateOutputType = {
    id_item: number
    id_usuario_proprietario: number
    id_categoria: number
    titulo: number
    descricao: number
    condicao: number
    foto_uris: number
    data_publicacao: number
    status_item: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id_item?: true
    id_usuario_proprietario?: true
    id_categoria?: true
  }

  export type ItemSumAggregateInputType = {
    id_item?: true
    id_usuario_proprietario?: true
    id_categoria?: true
  }

  export type ItemMinAggregateInputType = {
    id_item?: true
    id_usuario_proprietario?: true
    id_categoria?: true
    titulo?: true
    descricao?: true
    condicao?: true
    foto_uris?: true
    data_publicacao?: true
    status_item?: true
  }

  export type ItemMaxAggregateInputType = {
    id_item?: true
    id_usuario_proprietario?: true
    id_categoria?: true
    titulo?: true
    descricao?: true
    condicao?: true
    foto_uris?: true
    data_publicacao?: true
    status_item?: true
  }

  export type ItemCountAggregateInputType = {
    id_item?: true
    id_usuario_proprietario?: true
    id_categoria?: true
    titulo?: true
    descricao?: true
    condicao?: true
    foto_uris?: true
    data_publicacao?: true
    status_item?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id_item: number
    id_usuario_proprietario: number
    id_categoria: number
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao: Date
    status_item: $Enums.StatusItem
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    id_usuario_proprietario?: boolean
    id_categoria?: boolean
    titulo?: boolean
    descricao?: boolean
    condicao?: boolean
    foto_uris?: boolean
    data_publicacao?: boolean
    status_item?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    propostas_oferecido?: boolean | Item$propostas_oferecidoArgs<ExtArgs>
    propostas_desejado?: boolean | Item$propostas_desejadoArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    id_usuario_proprietario?: boolean
    id_categoria?: boolean
    titulo?: boolean
    descricao?: boolean
    condicao?: boolean
    foto_uris?: boolean
    data_publicacao?: boolean
    status_item?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_item?: boolean
    id_usuario_proprietario?: boolean
    id_categoria?: boolean
    titulo?: boolean
    descricao?: boolean
    condicao?: boolean
    foto_uris?: boolean
    data_publicacao?: boolean
    status_item?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id_item?: boolean
    id_usuario_proprietario?: boolean
    id_categoria?: boolean
    titulo?: boolean
    descricao?: boolean
    condicao?: boolean
    foto_uris?: boolean
    data_publicacao?: boolean
    status_item?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_item" | "id_usuario_proprietario" | "id_categoria" | "titulo" | "descricao" | "condicao" | "foto_uris" | "data_publicacao" | "status_item", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    propostas_oferecido?: boolean | Item$propostas_oferecidoArgs<ExtArgs>
    propostas_desejado?: boolean | Item$propostas_desejadoArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      propostas_oferecido: Prisma.$PropostaTrocaPayload<ExtArgs>[]
      propostas_desejado: Prisma.$PropostaTrocaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_item: number
      id_usuario_proprietario: number
      id_categoria: number
      titulo: string
      descricao: string
      condicao: string
      foto_uris: string
      data_publicacao: Date
      status_item: $Enums.StatusItem
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id_item`
     * const itemWithId_itemOnly = await prisma.item.findMany({ select: { id_item: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id_item`
     * const itemWithId_itemOnly = await prisma.item.createManyAndReturn({
     *   select: { id_item: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id_item`
     * const itemWithId_itemOnly = await prisma.item.updateManyAndReturn({
     *   select: { id_item: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    propostas_oferecido<T extends Item$propostas_oferecidoArgs<ExtArgs> = {}>(args?: Subset<T, Item$propostas_oferecidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propostas_desejado<T extends Item$propostas_desejadoArgs<ExtArgs> = {}>(args?: Subset<T, Item$propostas_desejadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id_item: FieldRef<"Item", 'Int'>
    readonly id_usuario_proprietario: FieldRef<"Item", 'Int'>
    readonly id_categoria: FieldRef<"Item", 'Int'>
    readonly titulo: FieldRef<"Item", 'String'>
    readonly descricao: FieldRef<"Item", 'String'>
    readonly condicao: FieldRef<"Item", 'String'>
    readonly foto_uris: FieldRef<"Item", 'String'>
    readonly data_publicacao: FieldRef<"Item", 'DateTime'>
    readonly status_item: FieldRef<"Item", 'StatusItem'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.propostas_oferecido
   */
  export type Item$propostas_oferecidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    where?: PropostaTrocaWhereInput
    orderBy?: PropostaTrocaOrderByWithRelationInput | PropostaTrocaOrderByWithRelationInput[]
    cursor?: PropostaTrocaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaTrocaScalarFieldEnum | PropostaTrocaScalarFieldEnum[]
  }

  /**
   * Item.propostas_desejado
   */
  export type Item$propostas_desejadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    where?: PropostaTrocaWhereInput
    orderBy?: PropostaTrocaOrderByWithRelationInput | PropostaTrocaOrderByWithRelationInput[]
    cursor?: PropostaTrocaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropostaTrocaScalarFieldEnum | PropostaTrocaScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id_categoria: number | null
    nome_categoria: string | null
    descricao: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id_categoria: number | null
    nome_categoria: string | null
    descricao: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id_categoria: number
    nome_categoria: number
    descricao: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaMinAggregateInputType = {
    id_categoria?: true
    nome_categoria?: true
    descricao?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id_categoria?: true
    nome_categoria?: true
    descricao?: true
  }

  export type CategoriaCountAggregateInputType = {
    id_categoria?: true
    nome_categoria?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id_categoria: number
    nome_categoria: string
    descricao: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nome_categoria?: boolean
    descricao?: boolean
    itens?: boolean | Categoria$itensArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nome_categoria?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nome_categoria?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id_categoria?: boolean
    nome_categoria?: boolean
    descricao?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nome_categoria" | "descricao", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | Categoria$itensArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      itens: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nome_categoria: string
      descricao: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id_categoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id_categoria: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itens<T extends Categoria$itensArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id_categoria: FieldRef<"Categoria", 'Int'>
    readonly nome_categoria: FieldRef<"Categoria", 'String'>
    readonly descricao: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.itens
   */
  export type Categoria$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model PropostaTroca
   */

  export type AggregatePropostaTroca = {
    _count: PropostaTrocaCountAggregateOutputType | null
    _avg: PropostaTrocaAvgAggregateOutputType | null
    _sum: PropostaTrocaSumAggregateOutputType | null
    _min: PropostaTrocaMinAggregateOutputType | null
    _max: PropostaTrocaMaxAggregateOutputType | null
  }

  export type PropostaTrocaAvgAggregateOutputType = {
    id_proposta: number | null
    id_item_oferecido: number | null
    id_item_desejado: number | null
    id_usuario_proponente: number | null
  }

  export type PropostaTrocaSumAggregateOutputType = {
    id_proposta: number | null
    id_item_oferecido: number | null
    id_item_desejado: number | null
    id_usuario_proponente: number | null
  }

  export type PropostaTrocaMinAggregateOutputType = {
    id_proposta: number | null
    id_item_oferecido: number | null
    id_item_desejado: number | null
    id_usuario_proponente: number | null
    status_proposta: $Enums.StatusProposta | null
    data_proposta: Date | null
    data_atualizacao_status: Date | null
  }

  export type PropostaTrocaMaxAggregateOutputType = {
    id_proposta: number | null
    id_item_oferecido: number | null
    id_item_desejado: number | null
    id_usuario_proponente: number | null
    status_proposta: $Enums.StatusProposta | null
    data_proposta: Date | null
    data_atualizacao_status: Date | null
  }

  export type PropostaTrocaCountAggregateOutputType = {
    id_proposta: number
    id_item_oferecido: number
    id_item_desejado: number
    id_usuario_proponente: number
    status_proposta: number
    data_proposta: number
    data_atualizacao_status: number
    _all: number
  }


  export type PropostaTrocaAvgAggregateInputType = {
    id_proposta?: true
    id_item_oferecido?: true
    id_item_desejado?: true
    id_usuario_proponente?: true
  }

  export type PropostaTrocaSumAggregateInputType = {
    id_proposta?: true
    id_item_oferecido?: true
    id_item_desejado?: true
    id_usuario_proponente?: true
  }

  export type PropostaTrocaMinAggregateInputType = {
    id_proposta?: true
    id_item_oferecido?: true
    id_item_desejado?: true
    id_usuario_proponente?: true
    status_proposta?: true
    data_proposta?: true
    data_atualizacao_status?: true
  }

  export type PropostaTrocaMaxAggregateInputType = {
    id_proposta?: true
    id_item_oferecido?: true
    id_item_desejado?: true
    id_usuario_proponente?: true
    status_proposta?: true
    data_proposta?: true
    data_atualizacao_status?: true
  }

  export type PropostaTrocaCountAggregateInputType = {
    id_proposta?: true
    id_item_oferecido?: true
    id_item_desejado?: true
    id_usuario_proponente?: true
    status_proposta?: true
    data_proposta?: true
    data_atualizacao_status?: true
    _all?: true
  }

  export type PropostaTrocaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropostaTroca to aggregate.
     */
    where?: PropostaTrocaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaTrocas to fetch.
     */
    orderBy?: PropostaTrocaOrderByWithRelationInput | PropostaTrocaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropostaTrocaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaTrocas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaTrocas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropostaTrocas
    **/
    _count?: true | PropostaTrocaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropostaTrocaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropostaTrocaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropostaTrocaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropostaTrocaMaxAggregateInputType
  }

  export type GetPropostaTrocaAggregateType<T extends PropostaTrocaAggregateArgs> = {
        [P in keyof T & keyof AggregatePropostaTroca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropostaTroca[P]>
      : GetScalarType<T[P], AggregatePropostaTroca[P]>
  }




  export type PropostaTrocaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropostaTrocaWhereInput
    orderBy?: PropostaTrocaOrderByWithAggregationInput | PropostaTrocaOrderByWithAggregationInput[]
    by: PropostaTrocaScalarFieldEnum[] | PropostaTrocaScalarFieldEnum
    having?: PropostaTrocaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropostaTrocaCountAggregateInputType | true
    _avg?: PropostaTrocaAvgAggregateInputType
    _sum?: PropostaTrocaSumAggregateInputType
    _min?: PropostaTrocaMinAggregateInputType
    _max?: PropostaTrocaMaxAggregateInputType
  }

  export type PropostaTrocaGroupByOutputType = {
    id_proposta: number
    id_item_oferecido: number
    id_item_desejado: number
    id_usuario_proponente: number
    status_proposta: $Enums.StatusProposta
    data_proposta: Date
    data_atualizacao_status: Date | null
    _count: PropostaTrocaCountAggregateOutputType | null
    _avg: PropostaTrocaAvgAggregateOutputType | null
    _sum: PropostaTrocaSumAggregateOutputType | null
    _min: PropostaTrocaMinAggregateOutputType | null
    _max: PropostaTrocaMaxAggregateOutputType | null
  }

  type GetPropostaTrocaGroupByPayload<T extends PropostaTrocaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropostaTrocaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropostaTrocaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropostaTrocaGroupByOutputType[P]>
            : GetScalarType<T[P], PropostaTrocaGroupByOutputType[P]>
        }
      >
    >


  export type PropostaTrocaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta?: boolean
    id_item_oferecido?: boolean
    id_item_desejado?: boolean
    id_usuario_proponente?: boolean
    status_proposta?: boolean
    data_proposta?: boolean
    data_atualizacao_status?: boolean
    item_oferecido?: boolean | ItemDefaultArgs<ExtArgs>
    item_desejado?: boolean | ItemDefaultArgs<ExtArgs>
    usuario_proponente?: boolean | UsuarioDefaultArgs<ExtArgs>
    mensagens?: boolean | PropostaTroca$mensagensArgs<ExtArgs>
    _count?: boolean | PropostaTrocaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propostaTroca"]>

  export type PropostaTrocaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta?: boolean
    id_item_oferecido?: boolean
    id_item_desejado?: boolean
    id_usuario_proponente?: boolean
    status_proposta?: boolean
    data_proposta?: boolean
    data_atualizacao_status?: boolean
    item_oferecido?: boolean | ItemDefaultArgs<ExtArgs>
    item_desejado?: boolean | ItemDefaultArgs<ExtArgs>
    usuario_proponente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propostaTroca"]>

  export type PropostaTrocaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposta?: boolean
    id_item_oferecido?: boolean
    id_item_desejado?: boolean
    id_usuario_proponente?: boolean
    status_proposta?: boolean
    data_proposta?: boolean
    data_atualizacao_status?: boolean
    item_oferecido?: boolean | ItemDefaultArgs<ExtArgs>
    item_desejado?: boolean | ItemDefaultArgs<ExtArgs>
    usuario_proponente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propostaTroca"]>

  export type PropostaTrocaSelectScalar = {
    id_proposta?: boolean
    id_item_oferecido?: boolean
    id_item_desejado?: boolean
    id_usuario_proponente?: boolean
    status_proposta?: boolean
    data_proposta?: boolean
    data_atualizacao_status?: boolean
  }

  export type PropostaTrocaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proposta" | "id_item_oferecido" | "id_item_desejado" | "id_usuario_proponente" | "status_proposta" | "data_proposta" | "data_atualizacao_status", ExtArgs["result"]["propostaTroca"]>
  export type PropostaTrocaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_oferecido?: boolean | ItemDefaultArgs<ExtArgs>
    item_desejado?: boolean | ItemDefaultArgs<ExtArgs>
    usuario_proponente?: boolean | UsuarioDefaultArgs<ExtArgs>
    mensagens?: boolean | PropostaTroca$mensagensArgs<ExtArgs>
    _count?: boolean | PropostaTrocaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropostaTrocaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_oferecido?: boolean | ItemDefaultArgs<ExtArgs>
    item_desejado?: boolean | ItemDefaultArgs<ExtArgs>
    usuario_proponente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PropostaTrocaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item_oferecido?: boolean | ItemDefaultArgs<ExtArgs>
    item_desejado?: boolean | ItemDefaultArgs<ExtArgs>
    usuario_proponente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PropostaTrocaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropostaTroca"
    objects: {
      item_oferecido: Prisma.$ItemPayload<ExtArgs>
      item_desejado: Prisma.$ItemPayload<ExtArgs>
      usuario_proponente: Prisma.$UsuarioPayload<ExtArgs>
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proposta: number
      id_item_oferecido: number
      id_item_desejado: number
      id_usuario_proponente: number
      status_proposta: $Enums.StatusProposta
      data_proposta: Date
      data_atualizacao_status: Date | null
    }, ExtArgs["result"]["propostaTroca"]>
    composites: {}
  }

  type PropostaTrocaGetPayload<S extends boolean | null | undefined | PropostaTrocaDefaultArgs> = $Result.GetResult<Prisma.$PropostaTrocaPayload, S>

  type PropostaTrocaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropostaTrocaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropostaTrocaCountAggregateInputType | true
    }

  export interface PropostaTrocaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropostaTroca'], meta: { name: 'PropostaTroca' } }
    /**
     * Find zero or one PropostaTroca that matches the filter.
     * @param {PropostaTrocaFindUniqueArgs} args - Arguments to find a PropostaTroca
     * @example
     * // Get one PropostaTroca
     * const propostaTroca = await prisma.propostaTroca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropostaTrocaFindUniqueArgs>(args: SelectSubset<T, PropostaTrocaFindUniqueArgs<ExtArgs>>): Prisma__PropostaTrocaClient<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropostaTroca that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropostaTrocaFindUniqueOrThrowArgs} args - Arguments to find a PropostaTroca
     * @example
     * // Get one PropostaTroca
     * const propostaTroca = await prisma.propostaTroca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropostaTrocaFindUniqueOrThrowArgs>(args: SelectSubset<T, PropostaTrocaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropostaTrocaClient<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropostaTroca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaTrocaFindFirstArgs} args - Arguments to find a PropostaTroca
     * @example
     * // Get one PropostaTroca
     * const propostaTroca = await prisma.propostaTroca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropostaTrocaFindFirstArgs>(args?: SelectSubset<T, PropostaTrocaFindFirstArgs<ExtArgs>>): Prisma__PropostaTrocaClient<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropostaTroca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaTrocaFindFirstOrThrowArgs} args - Arguments to find a PropostaTroca
     * @example
     * // Get one PropostaTroca
     * const propostaTroca = await prisma.propostaTroca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropostaTrocaFindFirstOrThrowArgs>(args?: SelectSubset<T, PropostaTrocaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropostaTrocaClient<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropostaTrocas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaTrocaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropostaTrocas
     * const propostaTrocas = await prisma.propostaTroca.findMany()
     * 
     * // Get first 10 PropostaTrocas
     * const propostaTrocas = await prisma.propostaTroca.findMany({ take: 10 })
     * 
     * // Only select the `id_proposta`
     * const propostaTrocaWithId_propostaOnly = await prisma.propostaTroca.findMany({ select: { id_proposta: true } })
     * 
     */
    findMany<T extends PropostaTrocaFindManyArgs>(args?: SelectSubset<T, PropostaTrocaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropostaTroca.
     * @param {PropostaTrocaCreateArgs} args - Arguments to create a PropostaTroca.
     * @example
     * // Create one PropostaTroca
     * const PropostaTroca = await prisma.propostaTroca.create({
     *   data: {
     *     // ... data to create a PropostaTroca
     *   }
     * })
     * 
     */
    create<T extends PropostaTrocaCreateArgs>(args: SelectSubset<T, PropostaTrocaCreateArgs<ExtArgs>>): Prisma__PropostaTrocaClient<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropostaTrocas.
     * @param {PropostaTrocaCreateManyArgs} args - Arguments to create many PropostaTrocas.
     * @example
     * // Create many PropostaTrocas
     * const propostaTroca = await prisma.propostaTroca.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropostaTrocaCreateManyArgs>(args?: SelectSubset<T, PropostaTrocaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropostaTrocas and returns the data saved in the database.
     * @param {PropostaTrocaCreateManyAndReturnArgs} args - Arguments to create many PropostaTrocas.
     * @example
     * // Create many PropostaTrocas
     * const propostaTroca = await prisma.propostaTroca.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropostaTrocas and only return the `id_proposta`
     * const propostaTrocaWithId_propostaOnly = await prisma.propostaTroca.createManyAndReturn({
     *   select: { id_proposta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropostaTrocaCreateManyAndReturnArgs>(args?: SelectSubset<T, PropostaTrocaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropostaTroca.
     * @param {PropostaTrocaDeleteArgs} args - Arguments to delete one PropostaTroca.
     * @example
     * // Delete one PropostaTroca
     * const PropostaTroca = await prisma.propostaTroca.delete({
     *   where: {
     *     // ... filter to delete one PropostaTroca
     *   }
     * })
     * 
     */
    delete<T extends PropostaTrocaDeleteArgs>(args: SelectSubset<T, PropostaTrocaDeleteArgs<ExtArgs>>): Prisma__PropostaTrocaClient<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropostaTroca.
     * @param {PropostaTrocaUpdateArgs} args - Arguments to update one PropostaTroca.
     * @example
     * // Update one PropostaTroca
     * const propostaTroca = await prisma.propostaTroca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropostaTrocaUpdateArgs>(args: SelectSubset<T, PropostaTrocaUpdateArgs<ExtArgs>>): Prisma__PropostaTrocaClient<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropostaTrocas.
     * @param {PropostaTrocaDeleteManyArgs} args - Arguments to filter PropostaTrocas to delete.
     * @example
     * // Delete a few PropostaTrocas
     * const { count } = await prisma.propostaTroca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropostaTrocaDeleteManyArgs>(args?: SelectSubset<T, PropostaTrocaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropostaTrocas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaTrocaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropostaTrocas
     * const propostaTroca = await prisma.propostaTroca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropostaTrocaUpdateManyArgs>(args: SelectSubset<T, PropostaTrocaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropostaTrocas and returns the data updated in the database.
     * @param {PropostaTrocaUpdateManyAndReturnArgs} args - Arguments to update many PropostaTrocas.
     * @example
     * // Update many PropostaTrocas
     * const propostaTroca = await prisma.propostaTroca.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropostaTrocas and only return the `id_proposta`
     * const propostaTrocaWithId_propostaOnly = await prisma.propostaTroca.updateManyAndReturn({
     *   select: { id_proposta: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropostaTrocaUpdateManyAndReturnArgs>(args: SelectSubset<T, PropostaTrocaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropostaTroca.
     * @param {PropostaTrocaUpsertArgs} args - Arguments to update or create a PropostaTroca.
     * @example
     * // Update or create a PropostaTroca
     * const propostaTroca = await prisma.propostaTroca.upsert({
     *   create: {
     *     // ... data to create a PropostaTroca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropostaTroca we want to update
     *   }
     * })
     */
    upsert<T extends PropostaTrocaUpsertArgs>(args: SelectSubset<T, PropostaTrocaUpsertArgs<ExtArgs>>): Prisma__PropostaTrocaClient<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropostaTrocas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaTrocaCountArgs} args - Arguments to filter PropostaTrocas to count.
     * @example
     * // Count the number of PropostaTrocas
     * const count = await prisma.propostaTroca.count({
     *   where: {
     *     // ... the filter for the PropostaTrocas we want to count
     *   }
     * })
    **/
    count<T extends PropostaTrocaCountArgs>(
      args?: Subset<T, PropostaTrocaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropostaTrocaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropostaTroca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaTrocaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropostaTrocaAggregateArgs>(args: Subset<T, PropostaTrocaAggregateArgs>): Prisma.PrismaPromise<GetPropostaTrocaAggregateType<T>>

    /**
     * Group by PropostaTroca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropostaTrocaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropostaTrocaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropostaTrocaGroupByArgs['orderBy'] }
        : { orderBy?: PropostaTrocaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropostaTrocaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropostaTrocaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropostaTroca model
   */
  readonly fields: PropostaTrocaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropostaTroca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropostaTrocaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item_oferecido<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item_desejado<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario_proponente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mensagens<T extends PropostaTroca$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, PropostaTroca$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropostaTroca model
   */
  interface PropostaTrocaFieldRefs {
    readonly id_proposta: FieldRef<"PropostaTroca", 'Int'>
    readonly id_item_oferecido: FieldRef<"PropostaTroca", 'Int'>
    readonly id_item_desejado: FieldRef<"PropostaTroca", 'Int'>
    readonly id_usuario_proponente: FieldRef<"PropostaTroca", 'Int'>
    readonly status_proposta: FieldRef<"PropostaTroca", 'StatusProposta'>
    readonly data_proposta: FieldRef<"PropostaTroca", 'DateTime'>
    readonly data_atualizacao_status: FieldRef<"PropostaTroca", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropostaTroca findUnique
   */
  export type PropostaTrocaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaTroca to fetch.
     */
    where: PropostaTrocaWhereUniqueInput
  }

  /**
   * PropostaTroca findUniqueOrThrow
   */
  export type PropostaTrocaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaTroca to fetch.
     */
    where: PropostaTrocaWhereUniqueInput
  }

  /**
   * PropostaTroca findFirst
   */
  export type PropostaTrocaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaTroca to fetch.
     */
    where?: PropostaTrocaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaTrocas to fetch.
     */
    orderBy?: PropostaTrocaOrderByWithRelationInput | PropostaTrocaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropostaTrocas.
     */
    cursor?: PropostaTrocaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaTrocas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaTrocas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropostaTrocas.
     */
    distinct?: PropostaTrocaScalarFieldEnum | PropostaTrocaScalarFieldEnum[]
  }

  /**
   * PropostaTroca findFirstOrThrow
   */
  export type PropostaTrocaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaTroca to fetch.
     */
    where?: PropostaTrocaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaTrocas to fetch.
     */
    orderBy?: PropostaTrocaOrderByWithRelationInput | PropostaTrocaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropostaTrocas.
     */
    cursor?: PropostaTrocaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaTrocas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaTrocas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropostaTrocas.
     */
    distinct?: PropostaTrocaScalarFieldEnum | PropostaTrocaScalarFieldEnum[]
  }

  /**
   * PropostaTroca findMany
   */
  export type PropostaTrocaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    /**
     * Filter, which PropostaTrocas to fetch.
     */
    where?: PropostaTrocaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropostaTrocas to fetch.
     */
    orderBy?: PropostaTrocaOrderByWithRelationInput | PropostaTrocaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropostaTrocas.
     */
    cursor?: PropostaTrocaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropostaTrocas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropostaTrocas.
     */
    skip?: number
    distinct?: PropostaTrocaScalarFieldEnum | PropostaTrocaScalarFieldEnum[]
  }

  /**
   * PropostaTroca create
   */
  export type PropostaTrocaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    /**
     * The data needed to create a PropostaTroca.
     */
    data: XOR<PropostaTrocaCreateInput, PropostaTrocaUncheckedCreateInput>
  }

  /**
   * PropostaTroca createMany
   */
  export type PropostaTrocaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropostaTrocas.
     */
    data: PropostaTrocaCreateManyInput | PropostaTrocaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropostaTroca createManyAndReturn
   */
  export type PropostaTrocaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * The data used to create many PropostaTrocas.
     */
    data: PropostaTrocaCreateManyInput | PropostaTrocaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropostaTroca update
   */
  export type PropostaTrocaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    /**
     * The data needed to update a PropostaTroca.
     */
    data: XOR<PropostaTrocaUpdateInput, PropostaTrocaUncheckedUpdateInput>
    /**
     * Choose, which PropostaTroca to update.
     */
    where: PropostaTrocaWhereUniqueInput
  }

  /**
   * PropostaTroca updateMany
   */
  export type PropostaTrocaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropostaTrocas.
     */
    data: XOR<PropostaTrocaUpdateManyMutationInput, PropostaTrocaUncheckedUpdateManyInput>
    /**
     * Filter which PropostaTrocas to update
     */
    where?: PropostaTrocaWhereInput
    /**
     * Limit how many PropostaTrocas to update.
     */
    limit?: number
  }

  /**
   * PropostaTroca updateManyAndReturn
   */
  export type PropostaTrocaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * The data used to update PropostaTrocas.
     */
    data: XOR<PropostaTrocaUpdateManyMutationInput, PropostaTrocaUncheckedUpdateManyInput>
    /**
     * Filter which PropostaTrocas to update
     */
    where?: PropostaTrocaWhereInput
    /**
     * Limit how many PropostaTrocas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropostaTroca upsert
   */
  export type PropostaTrocaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    /**
     * The filter to search for the PropostaTroca to update in case it exists.
     */
    where: PropostaTrocaWhereUniqueInput
    /**
     * In case the PropostaTroca found by the `where` argument doesn't exist, create a new PropostaTroca with this data.
     */
    create: XOR<PropostaTrocaCreateInput, PropostaTrocaUncheckedCreateInput>
    /**
     * In case the PropostaTroca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropostaTrocaUpdateInput, PropostaTrocaUncheckedUpdateInput>
  }

  /**
   * PropostaTroca delete
   */
  export type PropostaTrocaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
    /**
     * Filter which PropostaTroca to delete.
     */
    where: PropostaTrocaWhereUniqueInput
  }

  /**
   * PropostaTroca deleteMany
   */
  export type PropostaTrocaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropostaTrocas to delete
     */
    where?: PropostaTrocaWhereInput
    /**
     * Limit how many PropostaTrocas to delete.
     */
    limit?: number
  }

  /**
   * PropostaTroca.mensagens
   */
  export type PropostaTroca$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * PropostaTroca without action
   */
  export type PropostaTrocaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropostaTroca
     */
    select?: PropostaTrocaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropostaTroca
     */
    omit?: PropostaTrocaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropostaTrocaInclude<ExtArgs> | null
  }


  /**
   * Model Mensagem
   */

  export type AggregateMensagem = {
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  export type MensagemAvgAggregateOutputType = {
    id_mensagem: number | null
    id_proposta_troca: number | null
    id_usuario_remetente: number | null
  }

  export type MensagemSumAggregateOutputType = {
    id_mensagem: number | null
    id_proposta_troca: number | null
    id_usuario_remetente: number | null
  }

  export type MensagemMinAggregateOutputType = {
    id_mensagem: number | null
    id_proposta_troca: number | null
    id_usuario_remetente: number | null
    conteudo_mensagem: string | null
    data_envio: Date | null
    lida: boolean | null
  }

  export type MensagemMaxAggregateOutputType = {
    id_mensagem: number | null
    id_proposta_troca: number | null
    id_usuario_remetente: number | null
    conteudo_mensagem: string | null
    data_envio: Date | null
    lida: boolean | null
  }

  export type MensagemCountAggregateOutputType = {
    id_mensagem: number
    id_proposta_troca: number
    id_usuario_remetente: number
    conteudo_mensagem: number
    data_envio: number
    lida: number
    _all: number
  }


  export type MensagemAvgAggregateInputType = {
    id_mensagem?: true
    id_proposta_troca?: true
    id_usuario_remetente?: true
  }

  export type MensagemSumAggregateInputType = {
    id_mensagem?: true
    id_proposta_troca?: true
    id_usuario_remetente?: true
  }

  export type MensagemMinAggregateInputType = {
    id_mensagem?: true
    id_proposta_troca?: true
    id_usuario_remetente?: true
    conteudo_mensagem?: true
    data_envio?: true
    lida?: true
  }

  export type MensagemMaxAggregateInputType = {
    id_mensagem?: true
    id_proposta_troca?: true
    id_usuario_remetente?: true
    conteudo_mensagem?: true
    data_envio?: true
    lida?: true
  }

  export type MensagemCountAggregateInputType = {
    id_mensagem?: true
    id_proposta_troca?: true
    id_usuario_remetente?: true
    conteudo_mensagem?: true
    data_envio?: true
    lida?: true
    _all?: true
  }

  export type MensagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagem to aggregate.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensagems
    **/
    _count?: true | MensagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemMaxAggregateInputType
  }

  export type GetMensagemAggregateType<T extends MensagemAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagem[P]>
      : GetScalarType<T[P], AggregateMensagem[P]>
  }




  export type MensagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithAggregationInput | MensagemOrderByWithAggregationInput[]
    by: MensagemScalarFieldEnum[] | MensagemScalarFieldEnum
    having?: MensagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemCountAggregateInputType | true
    _avg?: MensagemAvgAggregateInputType
    _sum?: MensagemSumAggregateInputType
    _min?: MensagemMinAggregateInputType
    _max?: MensagemMaxAggregateInputType
  }

  export type MensagemGroupByOutputType = {
    id_mensagem: number
    id_proposta_troca: number
    id_usuario_remetente: number
    conteudo_mensagem: string
    data_envio: Date
    lida: boolean
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  type GetMensagemGroupByPayload<T extends MensagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemGroupByOutputType[P]>
        }
      >
    >


  export type MensagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mensagem?: boolean
    id_proposta_troca?: boolean
    id_usuario_remetente?: boolean
    conteudo_mensagem?: boolean
    data_envio?: boolean
    lida?: boolean
    proposta_troca?: boolean | PropostaTrocaDefaultArgs<ExtArgs>
    usuario_remetente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mensagem?: boolean
    id_proposta_troca?: boolean
    id_usuario_remetente?: boolean
    conteudo_mensagem?: boolean
    data_envio?: boolean
    lida?: boolean
    proposta_troca?: boolean | PropostaTrocaDefaultArgs<ExtArgs>
    usuario_remetente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mensagem?: boolean
    id_proposta_troca?: boolean
    id_usuario_remetente?: boolean
    conteudo_mensagem?: boolean
    data_envio?: boolean
    lida?: boolean
    proposta_troca?: boolean | PropostaTrocaDefaultArgs<ExtArgs>
    usuario_remetente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectScalar = {
    id_mensagem?: boolean
    id_proposta_troca?: boolean
    id_usuario_remetente?: boolean
    conteudo_mensagem?: boolean
    data_envio?: boolean
    lida?: boolean
  }

  export type MensagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mensagem" | "id_proposta_troca" | "id_usuario_remetente" | "conteudo_mensagem" | "data_envio" | "lida", ExtArgs["result"]["mensagem"]>
  export type MensagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposta_troca?: boolean | PropostaTrocaDefaultArgs<ExtArgs>
    usuario_remetente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposta_troca?: boolean | PropostaTrocaDefaultArgs<ExtArgs>
    usuario_remetente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposta_troca?: boolean | PropostaTrocaDefaultArgs<ExtArgs>
    usuario_remetente?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $MensagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensagem"
    objects: {
      proposta_troca: Prisma.$PropostaTrocaPayload<ExtArgs>
      usuario_remetente: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mensagem: number
      id_proposta_troca: number
      id_usuario_remetente: number
      conteudo_mensagem: string
      data_envio: Date
      lida: boolean
    }, ExtArgs["result"]["mensagem"]>
    composites: {}
  }

  type MensagemGetPayload<S extends boolean | null | undefined | MensagemDefaultArgs> = $Result.GetResult<Prisma.$MensagemPayload, S>

  type MensagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensagemCountAggregateInputType | true
    }

  export interface MensagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensagem'], meta: { name: 'Mensagem' } }
    /**
     * Find zero or one Mensagem that matches the filter.
     * @param {MensagemFindUniqueArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensagemFindUniqueArgs>(args: SelectSubset<T, MensagemFindUniqueArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensagemFindUniqueOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensagemFindUniqueOrThrowArgs>(args: SelectSubset<T, MensagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensagemFindFirstArgs>(args?: SelectSubset<T, MensagemFindFirstArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensagemFindFirstOrThrowArgs>(args?: SelectSubset<T, MensagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensagems
     * const mensagems = await prisma.mensagem.findMany()
     * 
     * // Get first 10 Mensagems
     * const mensagems = await prisma.mensagem.findMany({ take: 10 })
     * 
     * // Only select the `id_mensagem`
     * const mensagemWithId_mensagemOnly = await prisma.mensagem.findMany({ select: { id_mensagem: true } })
     * 
     */
    findMany<T extends MensagemFindManyArgs>(args?: SelectSubset<T, MensagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensagem.
     * @param {MensagemCreateArgs} args - Arguments to create a Mensagem.
     * @example
     * // Create one Mensagem
     * const Mensagem = await prisma.mensagem.create({
     *   data: {
     *     // ... data to create a Mensagem
     *   }
     * })
     * 
     */
    create<T extends MensagemCreateArgs>(args: SelectSubset<T, MensagemCreateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensagems.
     * @param {MensagemCreateManyArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensagemCreateManyArgs>(args?: SelectSubset<T, MensagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensagems and returns the data saved in the database.
     * @param {MensagemCreateManyAndReturnArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensagems and only return the `id_mensagem`
     * const mensagemWithId_mensagemOnly = await prisma.mensagem.createManyAndReturn({
     *   select: { id_mensagem: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensagemCreateManyAndReturnArgs>(args?: SelectSubset<T, MensagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensagem.
     * @param {MensagemDeleteArgs} args - Arguments to delete one Mensagem.
     * @example
     * // Delete one Mensagem
     * const Mensagem = await prisma.mensagem.delete({
     *   where: {
     *     // ... filter to delete one Mensagem
     *   }
     * })
     * 
     */
    delete<T extends MensagemDeleteArgs>(args: SelectSubset<T, MensagemDeleteArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensagem.
     * @param {MensagemUpdateArgs} args - Arguments to update one Mensagem.
     * @example
     * // Update one Mensagem
     * const mensagem = await prisma.mensagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensagemUpdateArgs>(args: SelectSubset<T, MensagemUpdateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensagems.
     * @param {MensagemDeleteManyArgs} args - Arguments to filter Mensagems to delete.
     * @example
     * // Delete a few Mensagems
     * const { count } = await prisma.mensagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensagemDeleteManyArgs>(args?: SelectSubset<T, MensagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensagemUpdateManyArgs>(args: SelectSubset<T, MensagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems and returns the data updated in the database.
     * @param {MensagemUpdateManyAndReturnArgs} args - Arguments to update many Mensagems.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensagems and only return the `id_mensagem`
     * const mensagemWithId_mensagemOnly = await prisma.mensagem.updateManyAndReturn({
     *   select: { id_mensagem: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MensagemUpdateManyAndReturnArgs>(args: SelectSubset<T, MensagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensagem.
     * @param {MensagemUpsertArgs} args - Arguments to update or create a Mensagem.
     * @example
     * // Update or create a Mensagem
     * const mensagem = await prisma.mensagem.upsert({
     *   create: {
     *     // ... data to create a Mensagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensagem we want to update
     *   }
     * })
     */
    upsert<T extends MensagemUpsertArgs>(args: SelectSubset<T, MensagemUpsertArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemCountArgs} args - Arguments to filter Mensagems to count.
     * @example
     * // Count the number of Mensagems
     * const count = await prisma.mensagem.count({
     *   where: {
     *     // ... the filter for the Mensagems we want to count
     *   }
     * })
    **/
    count<T extends MensagemCountArgs>(
      args?: Subset<T, MensagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensagemAggregateArgs>(args: Subset<T, MensagemAggregateArgs>): Prisma.PrismaPromise<GetMensagemAggregateType<T>>

    /**
     * Group by Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemGroupByArgs['orderBy'] }
        : { orderBy?: MensagemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensagem model
   */
  readonly fields: MensagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proposta_troca<T extends PropostaTrocaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropostaTrocaDefaultArgs<ExtArgs>>): Prisma__PropostaTrocaClient<$Result.GetResult<Prisma.$PropostaTrocaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario_remetente<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mensagem model
   */
  interface MensagemFieldRefs {
    readonly id_mensagem: FieldRef<"Mensagem", 'Int'>
    readonly id_proposta_troca: FieldRef<"Mensagem", 'Int'>
    readonly id_usuario_remetente: FieldRef<"Mensagem", 'Int'>
    readonly conteudo_mensagem: FieldRef<"Mensagem", 'String'>
    readonly data_envio: FieldRef<"Mensagem", 'DateTime'>
    readonly lida: FieldRef<"Mensagem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Mensagem findUnique
   */
  export type MensagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findUniqueOrThrow
   */
  export type MensagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findFirst
   */
  export type MensagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findFirstOrThrow
   */
  export type MensagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findMany
   */
  export type MensagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagems to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem create
   */
  export type MensagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensagem.
     */
    data: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
  }

  /**
   * Mensagem createMany
   */
  export type MensagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensagem createManyAndReturn
   */
  export type MensagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem update
   */
  export type MensagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensagem.
     */
    data: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
    /**
     * Choose, which Mensagem to update.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem updateMany
   */
  export type MensagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
  }

  /**
   * Mensagem updateManyAndReturn
   */
  export type MensagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem upsert
   */
  export type MensagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensagem to update in case it exists.
     */
    where: MensagemWhereUniqueInput
    /**
     * In case the Mensagem found by the `where` argument doesn't exist, create a new Mensagem with this data.
     */
    create: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
    /**
     * In case the Mensagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
  }

  /**
   * Mensagem delete
   */
  export type MensagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter which Mensagem to delete.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem deleteMany
   */
  export type MensagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagems to delete
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to delete.
     */
    limit?: number
  }

  /**
   * Mensagem without action
   */
  export type MensagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    telefone: 'telefone',
    cidade: 'cidade',
    bairro: 'bairro',
    data_cadastro: 'data_cadastro'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id_item: 'id_item',
    id_usuario_proprietario: 'id_usuario_proprietario',
    id_categoria: 'id_categoria',
    titulo: 'titulo',
    descricao: 'descricao',
    condicao: 'condicao',
    foto_uris: 'foto_uris',
    data_publicacao: 'data_publicacao',
    status_item: 'status_item'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nome_categoria: 'nome_categoria',
    descricao: 'descricao'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const PropostaTrocaScalarFieldEnum: {
    id_proposta: 'id_proposta',
    id_item_oferecido: 'id_item_oferecido',
    id_item_desejado: 'id_item_desejado',
    id_usuario_proponente: 'id_usuario_proponente',
    status_proposta: 'status_proposta',
    data_proposta: 'data_proposta',
    data_atualizacao_status: 'data_atualizacao_status'
  };

  export type PropostaTrocaScalarFieldEnum = (typeof PropostaTrocaScalarFieldEnum)[keyof typeof PropostaTrocaScalarFieldEnum]


  export const MensagemScalarFieldEnum: {
    id_mensagem: 'id_mensagem',
    id_proposta_troca: 'id_proposta_troca',
    id_usuario_remetente: 'id_usuario_remetente',
    conteudo_mensagem: 'conteudo_mensagem',
    data_envio: 'data_envio',
    lida: 'lida'
  };

  export type MensagemScalarFieldEnum = (typeof MensagemScalarFieldEnum)[keyof typeof MensagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusItem'
   */
  export type EnumStatusItemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusItem'>
    


  /**
   * Reference to a field of type 'StatusItem[]'
   */
  export type ListEnumStatusItemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusItem[]'>
    


  /**
   * Reference to a field of type 'StatusProposta'
   */
  export type EnumStatusPropostaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProposta'>
    


  /**
   * Reference to a field of type 'StatusProposta[]'
   */
  export type ListEnumStatusPropostaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusProposta[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    cidade?: StringFilter<"Usuario"> | string
    bairro?: StringFilter<"Usuario"> | string
    data_cadastro?: DateTimeFilter<"Usuario"> | Date | string
    itens?: ItemListRelationFilter
    propostas?: PropostaTrocaListRelationFilter
    mensagens?: MensagemListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    data_cadastro?: SortOrder
    itens?: ItemOrderByRelationAggregateInput
    propostas?: PropostaTrocaOrderByRelationAggregateInput
    mensagens?: MensagemOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha_hash?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    cidade?: StringFilter<"Usuario"> | string
    bairro?: StringFilter<"Usuario"> | string
    data_cadastro?: DateTimeFilter<"Usuario"> | Date | string
    itens?: ItemListRelationFilter
    propostas?: PropostaTrocaListRelationFilter
    mensagens?: MensagemListRelationFilter
  }, "id_usuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    data_cadastro?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha_hash?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringWithAggregatesFilter<"Usuario"> | string
    cidade?: StringWithAggregatesFilter<"Usuario"> | string
    bairro?: StringWithAggregatesFilter<"Usuario"> | string
    data_cadastro?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id_item?: IntFilter<"Item"> | number
    id_usuario_proprietario?: IntFilter<"Item"> | number
    id_categoria?: IntFilter<"Item"> | number
    titulo?: StringFilter<"Item"> | string
    descricao?: StringFilter<"Item"> | string
    condicao?: StringFilter<"Item"> | string
    foto_uris?: StringFilter<"Item"> | string
    data_publicacao?: DateTimeFilter<"Item"> | Date | string
    status_item?: EnumStatusItemFilter<"Item"> | $Enums.StatusItem
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    propostas_oferecido?: PropostaTrocaListRelationFilter
    propostas_desejado?: PropostaTrocaListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id_item?: SortOrder
    id_usuario_proprietario?: SortOrder
    id_categoria?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    condicao?: SortOrder
    foto_uris?: SortOrder
    data_publicacao?: SortOrder
    status_item?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    propostas_oferecido?: PropostaTrocaOrderByRelationAggregateInput
    propostas_desejado?: PropostaTrocaOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id_item?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id_usuario_proprietario?: IntFilter<"Item"> | number
    id_categoria?: IntFilter<"Item"> | number
    titulo?: StringFilter<"Item"> | string
    descricao?: StringFilter<"Item"> | string
    condicao?: StringFilter<"Item"> | string
    foto_uris?: StringFilter<"Item"> | string
    data_publicacao?: DateTimeFilter<"Item"> | Date | string
    status_item?: EnumStatusItemFilter<"Item"> | $Enums.StatusItem
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    propostas_oferecido?: PropostaTrocaListRelationFilter
    propostas_desejado?: PropostaTrocaListRelationFilter
  }, "id_item">

  export type ItemOrderByWithAggregationInput = {
    id_item?: SortOrder
    id_usuario_proprietario?: SortOrder
    id_categoria?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    condicao?: SortOrder
    foto_uris?: SortOrder
    data_publicacao?: SortOrder
    status_item?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id_item?: IntWithAggregatesFilter<"Item"> | number
    id_usuario_proprietario?: IntWithAggregatesFilter<"Item"> | number
    id_categoria?: IntWithAggregatesFilter<"Item"> | number
    titulo?: StringWithAggregatesFilter<"Item"> | string
    descricao?: StringWithAggregatesFilter<"Item"> | string
    condicao?: StringWithAggregatesFilter<"Item"> | string
    foto_uris?: StringWithAggregatesFilter<"Item"> | string
    data_publicacao?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    status_item?: EnumStatusItemWithAggregatesFilter<"Item"> | $Enums.StatusItem
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id_categoria?: IntFilter<"Categoria"> | number
    nome_categoria?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    itens?: ItemListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nome_categoria?: SortOrder
    descricao?: SortOrderInput | SortOrder
    itens?: ItemOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nome_categoria?: StringFilter<"Categoria"> | string
    descricao?: StringNullableFilter<"Categoria"> | string | null
    itens?: ItemListRelationFilter
  }, "id_categoria">

  export type CategoriaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nome_categoria?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"Categoria"> | number
    nome_categoria?: StringWithAggregatesFilter<"Categoria"> | string
    descricao?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
  }

  export type PropostaTrocaWhereInput = {
    AND?: PropostaTrocaWhereInput | PropostaTrocaWhereInput[]
    OR?: PropostaTrocaWhereInput[]
    NOT?: PropostaTrocaWhereInput | PropostaTrocaWhereInput[]
    id_proposta?: IntFilter<"PropostaTroca"> | number
    id_item_oferecido?: IntFilter<"PropostaTroca"> | number
    id_item_desejado?: IntFilter<"PropostaTroca"> | number
    id_usuario_proponente?: IntFilter<"PropostaTroca"> | number
    status_proposta?: EnumStatusPropostaFilter<"PropostaTroca"> | $Enums.StatusProposta
    data_proposta?: DateTimeFilter<"PropostaTroca"> | Date | string
    data_atualizacao_status?: DateTimeNullableFilter<"PropostaTroca"> | Date | string | null
    item_oferecido?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    item_desejado?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    usuario_proponente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mensagens?: MensagemListRelationFilter
  }

  export type PropostaTrocaOrderByWithRelationInput = {
    id_proposta?: SortOrder
    id_item_oferecido?: SortOrder
    id_item_desejado?: SortOrder
    id_usuario_proponente?: SortOrder
    status_proposta?: SortOrder
    data_proposta?: SortOrder
    data_atualizacao_status?: SortOrderInput | SortOrder
    item_oferecido?: ItemOrderByWithRelationInput
    item_desejado?: ItemOrderByWithRelationInput
    usuario_proponente?: UsuarioOrderByWithRelationInput
    mensagens?: MensagemOrderByRelationAggregateInput
  }

  export type PropostaTrocaWhereUniqueInput = Prisma.AtLeast<{
    id_proposta?: number
    id_item_oferecido_id_item_desejado_id_usuario_proponente_status_proposta?: PropostaTrocaId_item_oferecidoId_item_desejadoId_usuario_proponenteStatus_propostaCompoundUniqueInput
    AND?: PropostaTrocaWhereInput | PropostaTrocaWhereInput[]
    OR?: PropostaTrocaWhereInput[]
    NOT?: PropostaTrocaWhereInput | PropostaTrocaWhereInput[]
    id_item_oferecido?: IntFilter<"PropostaTroca"> | number
    id_item_desejado?: IntFilter<"PropostaTroca"> | number
    id_usuario_proponente?: IntFilter<"PropostaTroca"> | number
    status_proposta?: EnumStatusPropostaFilter<"PropostaTroca"> | $Enums.StatusProposta
    data_proposta?: DateTimeFilter<"PropostaTroca"> | Date | string
    data_atualizacao_status?: DateTimeNullableFilter<"PropostaTroca"> | Date | string | null
    item_oferecido?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    item_desejado?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    usuario_proponente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    mensagens?: MensagemListRelationFilter
  }, "id_proposta" | "id_item_oferecido_id_item_desejado_id_usuario_proponente_status_proposta">

  export type PropostaTrocaOrderByWithAggregationInput = {
    id_proposta?: SortOrder
    id_item_oferecido?: SortOrder
    id_item_desejado?: SortOrder
    id_usuario_proponente?: SortOrder
    status_proposta?: SortOrder
    data_proposta?: SortOrder
    data_atualizacao_status?: SortOrderInput | SortOrder
    _count?: PropostaTrocaCountOrderByAggregateInput
    _avg?: PropostaTrocaAvgOrderByAggregateInput
    _max?: PropostaTrocaMaxOrderByAggregateInput
    _min?: PropostaTrocaMinOrderByAggregateInput
    _sum?: PropostaTrocaSumOrderByAggregateInput
  }

  export type PropostaTrocaScalarWhereWithAggregatesInput = {
    AND?: PropostaTrocaScalarWhereWithAggregatesInput | PropostaTrocaScalarWhereWithAggregatesInput[]
    OR?: PropostaTrocaScalarWhereWithAggregatesInput[]
    NOT?: PropostaTrocaScalarWhereWithAggregatesInput | PropostaTrocaScalarWhereWithAggregatesInput[]
    id_proposta?: IntWithAggregatesFilter<"PropostaTroca"> | number
    id_item_oferecido?: IntWithAggregatesFilter<"PropostaTroca"> | number
    id_item_desejado?: IntWithAggregatesFilter<"PropostaTroca"> | number
    id_usuario_proponente?: IntWithAggregatesFilter<"PropostaTroca"> | number
    status_proposta?: EnumStatusPropostaWithAggregatesFilter<"PropostaTroca"> | $Enums.StatusProposta
    data_proposta?: DateTimeWithAggregatesFilter<"PropostaTroca"> | Date | string
    data_atualizacao_status?: DateTimeNullableWithAggregatesFilter<"PropostaTroca"> | Date | string | null
  }

  export type MensagemWhereInput = {
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    id_mensagem?: IntFilter<"Mensagem"> | number
    id_proposta_troca?: IntFilter<"Mensagem"> | number
    id_usuario_remetente?: IntFilter<"Mensagem"> | number
    conteudo_mensagem?: StringFilter<"Mensagem"> | string
    data_envio?: DateTimeFilter<"Mensagem"> | Date | string
    lida?: BoolFilter<"Mensagem"> | boolean
    proposta_troca?: XOR<PropostaTrocaScalarRelationFilter, PropostaTrocaWhereInput>
    usuario_remetente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type MensagemOrderByWithRelationInput = {
    id_mensagem?: SortOrder
    id_proposta_troca?: SortOrder
    id_usuario_remetente?: SortOrder
    conteudo_mensagem?: SortOrder
    data_envio?: SortOrder
    lida?: SortOrder
    proposta_troca?: PropostaTrocaOrderByWithRelationInput
    usuario_remetente?: UsuarioOrderByWithRelationInput
  }

  export type MensagemWhereUniqueInput = Prisma.AtLeast<{
    id_mensagem?: number
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    id_proposta_troca?: IntFilter<"Mensagem"> | number
    id_usuario_remetente?: IntFilter<"Mensagem"> | number
    conteudo_mensagem?: StringFilter<"Mensagem"> | string
    data_envio?: DateTimeFilter<"Mensagem"> | Date | string
    lida?: BoolFilter<"Mensagem"> | boolean
    proposta_troca?: XOR<PropostaTrocaScalarRelationFilter, PropostaTrocaWhereInput>
    usuario_remetente?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id_mensagem">

  export type MensagemOrderByWithAggregationInput = {
    id_mensagem?: SortOrder
    id_proposta_troca?: SortOrder
    id_usuario_remetente?: SortOrder
    conteudo_mensagem?: SortOrder
    data_envio?: SortOrder
    lida?: SortOrder
    _count?: MensagemCountOrderByAggregateInput
    _avg?: MensagemAvgOrderByAggregateInput
    _max?: MensagemMaxOrderByAggregateInput
    _min?: MensagemMinOrderByAggregateInput
    _sum?: MensagemSumOrderByAggregateInput
  }

  export type MensagemScalarWhereWithAggregatesInput = {
    AND?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    OR?: MensagemScalarWhereWithAggregatesInput[]
    NOT?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    id_mensagem?: IntWithAggregatesFilter<"Mensagem"> | number
    id_proposta_troca?: IntWithAggregatesFilter<"Mensagem"> | number
    id_usuario_remetente?: IntWithAggregatesFilter<"Mensagem"> | number
    conteudo_mensagem?: StringWithAggregatesFilter<"Mensagem"> | string
    data_envio?: DateTimeWithAggregatesFilter<"Mensagem"> | Date | string
    lida?: BoolWithAggregatesFilter<"Mensagem"> | boolean
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro?: Date | string
    itens?: ItemCreateNestedManyWithoutUsuarioInput
    propostas?: PropostaTrocaCreateNestedManyWithoutUsuario_proponenteInput
    mensagens?: MensagemCreateNestedManyWithoutUsuario_remetenteInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro?: Date | string
    itens?: ItemUncheckedCreateNestedManyWithoutUsuarioInput
    propostas?: PropostaTrocaUncheckedCreateNestedManyWithoutUsuario_proponenteInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutUsuario_remetenteInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUpdateManyWithoutUsuarioNestedInput
    propostas?: PropostaTrocaUpdateManyWithoutUsuario_proponenteNestedInput
    mensagens?: MensagemUpdateManyWithoutUsuario_remetenteNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUncheckedUpdateManyWithoutUsuarioNestedInput
    propostas?: PropostaTrocaUncheckedUpdateManyWithoutUsuario_proponenteNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutUsuario_remetenteNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    usuario: UsuarioCreateNestedOneWithoutItensInput
    categoria: CategoriaCreateNestedOneWithoutItensInput
    propostas_oferecido?: PropostaTrocaCreateNestedManyWithoutItem_oferecidoInput
    propostas_desejado?: PropostaTrocaCreateNestedManyWithoutItem_desejadoInput
  }

  export type ItemUncheckedCreateInput = {
    id_item?: number
    id_usuario_proprietario: number
    id_categoria: number
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    propostas_oferecido?: PropostaTrocaUncheckedCreateNestedManyWithoutItem_oferecidoInput
    propostas_desejado?: PropostaTrocaUncheckedCreateNestedManyWithoutItem_desejadoInput
  }

  export type ItemUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    usuario?: UsuarioUpdateOneRequiredWithoutItensNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutItensNestedInput
    propostas_oferecido?: PropostaTrocaUpdateManyWithoutItem_oferecidoNestedInput
    propostas_desejado?: PropostaTrocaUpdateManyWithoutItem_desejadoNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_usuario_proprietario?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    propostas_oferecido?: PropostaTrocaUncheckedUpdateManyWithoutItem_oferecidoNestedInput
    propostas_desejado?: PropostaTrocaUncheckedUpdateManyWithoutItem_desejadoNestedInput
  }

  export type ItemCreateManyInput = {
    id_item?: number
    id_usuario_proprietario: number
    id_categoria: number
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
  }

  export type ItemUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
  }

  export type ItemUncheckedUpdateManyInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_usuario_proprietario?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
  }

  export type CategoriaCreateInput = {
    nome_categoria: string
    descricao?: string | null
    itens?: ItemCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id_categoria?: number
    nome_categoria: string
    descricao?: string | null
    itens?: ItemUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome_categoria?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    itens?: ItemUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome_categoria?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    itens?: ItemUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id_categoria?: number
    nome_categoria: string
    descricao?: string | null
  }

  export type CategoriaUpdateManyMutationInput = {
    nome_categoria?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome_categoria?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropostaTrocaCreateInput = {
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
    item_oferecido: ItemCreateNestedOneWithoutPropostas_oferecidoInput
    item_desejado: ItemCreateNestedOneWithoutPropostas_desejadoInput
    usuario_proponente: UsuarioCreateNestedOneWithoutPropostasInput
    mensagens?: MensagemCreateNestedManyWithoutProposta_trocaInput
  }

  export type PropostaTrocaUncheckedCreateInput = {
    id_proposta?: number
    id_item_oferecido: number
    id_item_desejado: number
    id_usuario_proponente: number
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
    mensagens?: MensagemUncheckedCreateNestedManyWithoutProposta_trocaInput
  }

  export type PropostaTrocaUpdateInput = {
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_oferecido?: ItemUpdateOneRequiredWithoutPropostas_oferecidoNestedInput
    item_desejado?: ItemUpdateOneRequiredWithoutPropostas_desejadoNestedInput
    usuario_proponente?: UsuarioUpdateOneRequiredWithoutPropostasNestedInput
    mensagens?: MensagemUpdateManyWithoutProposta_trocaNestedInput
  }

  export type PropostaTrocaUncheckedUpdateInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    id_item_oferecido?: IntFieldUpdateOperationsInput | number
    id_item_desejado?: IntFieldUpdateOperationsInput | number
    id_usuario_proponente?: IntFieldUpdateOperationsInput | number
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensagens?: MensagemUncheckedUpdateManyWithoutProposta_trocaNestedInput
  }

  export type PropostaTrocaCreateManyInput = {
    id_proposta?: number
    id_item_oferecido: number
    id_item_desejado: number
    id_usuario_proponente: number
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
  }

  export type PropostaTrocaUpdateManyMutationInput = {
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropostaTrocaUncheckedUpdateManyInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    id_item_oferecido?: IntFieldUpdateOperationsInput | number
    id_item_desejado?: IntFieldUpdateOperationsInput | number
    id_usuario_proponente?: IntFieldUpdateOperationsInput | number
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MensagemCreateInput = {
    conteudo_mensagem: string
    data_envio?: Date | string
    lida?: boolean
    proposta_troca: PropostaTrocaCreateNestedOneWithoutMensagensInput
    usuario_remetente: UsuarioCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateInput = {
    id_mensagem?: number
    id_proposta_troca: number
    id_usuario_remetente: number
    conteudo_mensagem: string
    data_envio?: Date | string
    lida?: boolean
  }

  export type MensagemUpdateInput = {
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    proposta_troca?: PropostaTrocaUpdateOneRequiredWithoutMensagensNestedInput
    usuario_remetente?: UsuarioUpdateOneRequiredWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateInput = {
    id_mensagem?: IntFieldUpdateOperationsInput | number
    id_proposta_troca?: IntFieldUpdateOperationsInput | number
    id_usuario_remetente?: IntFieldUpdateOperationsInput | number
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemCreateManyInput = {
    id_mensagem?: number
    id_proposta_troca: number
    id_usuario_remetente: number
    conteudo_mensagem: string
    data_envio?: Date | string
    lida?: boolean
  }

  export type MensagemUpdateManyMutationInput = {
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateManyInput = {
    id_mensagem?: IntFieldUpdateOperationsInput | number
    id_proposta_troca?: IntFieldUpdateOperationsInput | number
    id_usuario_remetente?: IntFieldUpdateOperationsInput | number
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type PropostaTrocaListRelationFilter = {
    every?: PropostaTrocaWhereInput
    some?: PropostaTrocaWhereInput
    none?: PropostaTrocaWhereInput
  }

  export type MensagemListRelationFilter = {
    every?: MensagemWhereInput
    some?: MensagemWhereInput
    none?: MensagemWhereInput
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropostaTrocaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MensagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    data_cadastro?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    data_cadastro?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha_hash?: SortOrder
    telefone?: SortOrder
    cidade?: SortOrder
    bairro?: SortOrder
    data_cadastro?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusItemFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusItem | EnumStatusItemFieldRefInput<$PrismaModel>
    in?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusItemFilter<$PrismaModel> | $Enums.StatusItem
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ItemCountOrderByAggregateInput = {
    id_item?: SortOrder
    id_usuario_proprietario?: SortOrder
    id_categoria?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    condicao?: SortOrder
    foto_uris?: SortOrder
    data_publicacao?: SortOrder
    status_item?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id_item?: SortOrder
    id_usuario_proprietario?: SortOrder
    id_categoria?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id_item?: SortOrder
    id_usuario_proprietario?: SortOrder
    id_categoria?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    condicao?: SortOrder
    foto_uris?: SortOrder
    data_publicacao?: SortOrder
    status_item?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id_item?: SortOrder
    id_usuario_proprietario?: SortOrder
    id_categoria?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    condicao?: SortOrder
    foto_uris?: SortOrder
    data_publicacao?: SortOrder
    status_item?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id_item?: SortOrder
    id_usuario_proprietario?: SortOrder
    id_categoria?: SortOrder
  }

  export type EnumStatusItemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusItem | EnumStatusItemFieldRefInput<$PrismaModel>
    in?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusItemWithAggregatesFilter<$PrismaModel> | $Enums.StatusItem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusItemFilter<$PrismaModel>
    _max?: NestedEnumStatusItemFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nome_categoria?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nome_categoria?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nome_categoria?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatusPropostaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProposta | EnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropostaFilter<$PrismaModel> | $Enums.StatusProposta
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type PropostaTrocaId_item_oferecidoId_item_desejadoId_usuario_proponenteStatus_propostaCompoundUniqueInput = {
    id_item_oferecido: number
    id_item_desejado: number
    id_usuario_proponente: number
    status_proposta: $Enums.StatusProposta
  }

  export type PropostaTrocaCountOrderByAggregateInput = {
    id_proposta?: SortOrder
    id_item_oferecido?: SortOrder
    id_item_desejado?: SortOrder
    id_usuario_proponente?: SortOrder
    status_proposta?: SortOrder
    data_proposta?: SortOrder
    data_atualizacao_status?: SortOrder
  }

  export type PropostaTrocaAvgOrderByAggregateInput = {
    id_proposta?: SortOrder
    id_item_oferecido?: SortOrder
    id_item_desejado?: SortOrder
    id_usuario_proponente?: SortOrder
  }

  export type PropostaTrocaMaxOrderByAggregateInput = {
    id_proposta?: SortOrder
    id_item_oferecido?: SortOrder
    id_item_desejado?: SortOrder
    id_usuario_proponente?: SortOrder
    status_proposta?: SortOrder
    data_proposta?: SortOrder
    data_atualizacao_status?: SortOrder
  }

  export type PropostaTrocaMinOrderByAggregateInput = {
    id_proposta?: SortOrder
    id_item_oferecido?: SortOrder
    id_item_desejado?: SortOrder
    id_usuario_proponente?: SortOrder
    status_proposta?: SortOrder
    data_proposta?: SortOrder
    data_atualizacao_status?: SortOrder
  }

  export type PropostaTrocaSumOrderByAggregateInput = {
    id_proposta?: SortOrder
    id_item_oferecido?: SortOrder
    id_item_desejado?: SortOrder
    id_usuario_proponente?: SortOrder
  }

  export type EnumStatusPropostaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProposta | EnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropostaWithAggregatesFilter<$PrismaModel> | $Enums.StatusProposta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPropostaFilter<$PrismaModel>
    _max?: NestedEnumStatusPropostaFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PropostaTrocaScalarRelationFilter = {
    is?: PropostaTrocaWhereInput
    isNot?: PropostaTrocaWhereInput
  }

  export type MensagemCountOrderByAggregateInput = {
    id_mensagem?: SortOrder
    id_proposta_troca?: SortOrder
    id_usuario_remetente?: SortOrder
    conteudo_mensagem?: SortOrder
    data_envio?: SortOrder
    lida?: SortOrder
  }

  export type MensagemAvgOrderByAggregateInput = {
    id_mensagem?: SortOrder
    id_proposta_troca?: SortOrder
    id_usuario_remetente?: SortOrder
  }

  export type MensagemMaxOrderByAggregateInput = {
    id_mensagem?: SortOrder
    id_proposta_troca?: SortOrder
    id_usuario_remetente?: SortOrder
    conteudo_mensagem?: SortOrder
    data_envio?: SortOrder
    lida?: SortOrder
  }

  export type MensagemMinOrderByAggregateInput = {
    id_mensagem?: SortOrder
    id_proposta_troca?: SortOrder
    id_usuario_remetente?: SortOrder
    conteudo_mensagem?: SortOrder
    data_envio?: SortOrder
    lida?: SortOrder
  }

  export type MensagemSumOrderByAggregateInput = {
    id_mensagem?: SortOrder
    id_proposta_troca?: SortOrder
    id_usuario_remetente?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ItemCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ItemCreateWithoutUsuarioInput, ItemUncheckedCreateWithoutUsuarioInput> | ItemCreateWithoutUsuarioInput[] | ItemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUsuarioInput | ItemCreateOrConnectWithoutUsuarioInput[]
    createMany?: ItemCreateManyUsuarioInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type PropostaTrocaCreateNestedManyWithoutUsuario_proponenteInput = {
    create?: XOR<PropostaTrocaCreateWithoutUsuario_proponenteInput, PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput> | PropostaTrocaCreateWithoutUsuario_proponenteInput[] | PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutUsuario_proponenteInput | PropostaTrocaCreateOrConnectWithoutUsuario_proponenteInput[]
    createMany?: PropostaTrocaCreateManyUsuario_proponenteInputEnvelope
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
  }

  export type MensagemCreateNestedManyWithoutUsuario_remetenteInput = {
    create?: XOR<MensagemCreateWithoutUsuario_remetenteInput, MensagemUncheckedCreateWithoutUsuario_remetenteInput> | MensagemCreateWithoutUsuario_remetenteInput[] | MensagemUncheckedCreateWithoutUsuario_remetenteInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutUsuario_remetenteInput | MensagemCreateOrConnectWithoutUsuario_remetenteInput[]
    createMany?: MensagemCreateManyUsuario_remetenteInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ItemCreateWithoutUsuarioInput, ItemUncheckedCreateWithoutUsuarioInput> | ItemCreateWithoutUsuarioInput[] | ItemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUsuarioInput | ItemCreateOrConnectWithoutUsuarioInput[]
    createMany?: ItemCreateManyUsuarioInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type PropostaTrocaUncheckedCreateNestedManyWithoutUsuario_proponenteInput = {
    create?: XOR<PropostaTrocaCreateWithoutUsuario_proponenteInput, PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput> | PropostaTrocaCreateWithoutUsuario_proponenteInput[] | PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutUsuario_proponenteInput | PropostaTrocaCreateOrConnectWithoutUsuario_proponenteInput[]
    createMany?: PropostaTrocaCreateManyUsuario_proponenteInputEnvelope
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutUsuario_remetenteInput = {
    create?: XOR<MensagemCreateWithoutUsuario_remetenteInput, MensagemUncheckedCreateWithoutUsuario_remetenteInput> | MensagemCreateWithoutUsuario_remetenteInput[] | MensagemUncheckedCreateWithoutUsuario_remetenteInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutUsuario_remetenteInput | MensagemCreateOrConnectWithoutUsuario_remetenteInput[]
    createMany?: MensagemCreateManyUsuario_remetenteInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ItemCreateWithoutUsuarioInput, ItemUncheckedCreateWithoutUsuarioInput> | ItemCreateWithoutUsuarioInput[] | ItemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUsuarioInput | ItemCreateOrConnectWithoutUsuarioInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUsuarioInput | ItemUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ItemCreateManyUsuarioInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUsuarioInput | ItemUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUsuarioInput | ItemUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type PropostaTrocaUpdateManyWithoutUsuario_proponenteNestedInput = {
    create?: XOR<PropostaTrocaCreateWithoutUsuario_proponenteInput, PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput> | PropostaTrocaCreateWithoutUsuario_proponenteInput[] | PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutUsuario_proponenteInput | PropostaTrocaCreateOrConnectWithoutUsuario_proponenteInput[]
    upsert?: PropostaTrocaUpsertWithWhereUniqueWithoutUsuario_proponenteInput | PropostaTrocaUpsertWithWhereUniqueWithoutUsuario_proponenteInput[]
    createMany?: PropostaTrocaCreateManyUsuario_proponenteInputEnvelope
    set?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    disconnect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    delete?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    update?: PropostaTrocaUpdateWithWhereUniqueWithoutUsuario_proponenteInput | PropostaTrocaUpdateWithWhereUniqueWithoutUsuario_proponenteInput[]
    updateMany?: PropostaTrocaUpdateManyWithWhereWithoutUsuario_proponenteInput | PropostaTrocaUpdateManyWithWhereWithoutUsuario_proponenteInput[]
    deleteMany?: PropostaTrocaScalarWhereInput | PropostaTrocaScalarWhereInput[]
  }

  export type MensagemUpdateManyWithoutUsuario_remetenteNestedInput = {
    create?: XOR<MensagemCreateWithoutUsuario_remetenteInput, MensagemUncheckedCreateWithoutUsuario_remetenteInput> | MensagemCreateWithoutUsuario_remetenteInput[] | MensagemUncheckedCreateWithoutUsuario_remetenteInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutUsuario_remetenteInput | MensagemCreateOrConnectWithoutUsuario_remetenteInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutUsuario_remetenteInput | MensagemUpsertWithWhereUniqueWithoutUsuario_remetenteInput[]
    createMany?: MensagemCreateManyUsuario_remetenteInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutUsuario_remetenteInput | MensagemUpdateWithWhereUniqueWithoutUsuario_remetenteInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutUsuario_remetenteInput | MensagemUpdateManyWithWhereWithoutUsuario_remetenteInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ItemCreateWithoutUsuarioInput, ItemUncheckedCreateWithoutUsuarioInput> | ItemCreateWithoutUsuarioInput[] | ItemUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUsuarioInput | ItemCreateOrConnectWithoutUsuarioInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUsuarioInput | ItemUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ItemCreateManyUsuarioInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUsuarioInput | ItemUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUsuarioInput | ItemUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type PropostaTrocaUncheckedUpdateManyWithoutUsuario_proponenteNestedInput = {
    create?: XOR<PropostaTrocaCreateWithoutUsuario_proponenteInput, PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput> | PropostaTrocaCreateWithoutUsuario_proponenteInput[] | PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutUsuario_proponenteInput | PropostaTrocaCreateOrConnectWithoutUsuario_proponenteInput[]
    upsert?: PropostaTrocaUpsertWithWhereUniqueWithoutUsuario_proponenteInput | PropostaTrocaUpsertWithWhereUniqueWithoutUsuario_proponenteInput[]
    createMany?: PropostaTrocaCreateManyUsuario_proponenteInputEnvelope
    set?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    disconnect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    delete?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    update?: PropostaTrocaUpdateWithWhereUniqueWithoutUsuario_proponenteInput | PropostaTrocaUpdateWithWhereUniqueWithoutUsuario_proponenteInput[]
    updateMany?: PropostaTrocaUpdateManyWithWhereWithoutUsuario_proponenteInput | PropostaTrocaUpdateManyWithWhereWithoutUsuario_proponenteInput[]
    deleteMany?: PropostaTrocaScalarWhereInput | PropostaTrocaScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutUsuario_remetenteNestedInput = {
    create?: XOR<MensagemCreateWithoutUsuario_remetenteInput, MensagemUncheckedCreateWithoutUsuario_remetenteInput> | MensagemCreateWithoutUsuario_remetenteInput[] | MensagemUncheckedCreateWithoutUsuario_remetenteInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutUsuario_remetenteInput | MensagemCreateOrConnectWithoutUsuario_remetenteInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutUsuario_remetenteInput | MensagemUpsertWithWhereUniqueWithoutUsuario_remetenteInput[]
    createMany?: MensagemCreateManyUsuario_remetenteInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutUsuario_remetenteInput | MensagemUpdateWithWhereUniqueWithoutUsuario_remetenteInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutUsuario_remetenteInput | MensagemUpdateManyWithWhereWithoutUsuario_remetenteInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutItensInput = {
    create?: XOR<UsuarioCreateWithoutItensInput, UsuarioUncheckedCreateWithoutItensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutItensInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutItensInput = {
    create?: XOR<CategoriaCreateWithoutItensInput, CategoriaUncheckedCreateWithoutItensInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutItensInput
    connect?: CategoriaWhereUniqueInput
  }

  export type PropostaTrocaCreateNestedManyWithoutItem_oferecidoInput = {
    create?: XOR<PropostaTrocaCreateWithoutItem_oferecidoInput, PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput> | PropostaTrocaCreateWithoutItem_oferecidoInput[] | PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutItem_oferecidoInput | PropostaTrocaCreateOrConnectWithoutItem_oferecidoInput[]
    createMany?: PropostaTrocaCreateManyItem_oferecidoInputEnvelope
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
  }

  export type PropostaTrocaCreateNestedManyWithoutItem_desejadoInput = {
    create?: XOR<PropostaTrocaCreateWithoutItem_desejadoInput, PropostaTrocaUncheckedCreateWithoutItem_desejadoInput> | PropostaTrocaCreateWithoutItem_desejadoInput[] | PropostaTrocaUncheckedCreateWithoutItem_desejadoInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutItem_desejadoInput | PropostaTrocaCreateOrConnectWithoutItem_desejadoInput[]
    createMany?: PropostaTrocaCreateManyItem_desejadoInputEnvelope
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
  }

  export type PropostaTrocaUncheckedCreateNestedManyWithoutItem_oferecidoInput = {
    create?: XOR<PropostaTrocaCreateWithoutItem_oferecidoInput, PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput> | PropostaTrocaCreateWithoutItem_oferecidoInput[] | PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutItem_oferecidoInput | PropostaTrocaCreateOrConnectWithoutItem_oferecidoInput[]
    createMany?: PropostaTrocaCreateManyItem_oferecidoInputEnvelope
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
  }

  export type PropostaTrocaUncheckedCreateNestedManyWithoutItem_desejadoInput = {
    create?: XOR<PropostaTrocaCreateWithoutItem_desejadoInput, PropostaTrocaUncheckedCreateWithoutItem_desejadoInput> | PropostaTrocaCreateWithoutItem_desejadoInput[] | PropostaTrocaUncheckedCreateWithoutItem_desejadoInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutItem_desejadoInput | PropostaTrocaCreateOrConnectWithoutItem_desejadoInput[]
    createMany?: PropostaTrocaCreateManyItem_desejadoInputEnvelope
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
  }

  export type EnumStatusItemFieldUpdateOperationsInput = {
    set?: $Enums.StatusItem
  }

  export type UsuarioUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<UsuarioCreateWithoutItensInput, UsuarioUncheckedCreateWithoutItensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutItensInput
    upsert?: UsuarioUpsertWithoutItensInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutItensInput, UsuarioUpdateWithoutItensInput>, UsuarioUncheckedUpdateWithoutItensInput>
  }

  export type CategoriaUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<CategoriaCreateWithoutItensInput, CategoriaUncheckedCreateWithoutItensInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutItensInput
    upsert?: CategoriaUpsertWithoutItensInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutItensInput, CategoriaUpdateWithoutItensInput>, CategoriaUncheckedUpdateWithoutItensInput>
  }

  export type PropostaTrocaUpdateManyWithoutItem_oferecidoNestedInput = {
    create?: XOR<PropostaTrocaCreateWithoutItem_oferecidoInput, PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput> | PropostaTrocaCreateWithoutItem_oferecidoInput[] | PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutItem_oferecidoInput | PropostaTrocaCreateOrConnectWithoutItem_oferecidoInput[]
    upsert?: PropostaTrocaUpsertWithWhereUniqueWithoutItem_oferecidoInput | PropostaTrocaUpsertWithWhereUniqueWithoutItem_oferecidoInput[]
    createMany?: PropostaTrocaCreateManyItem_oferecidoInputEnvelope
    set?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    disconnect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    delete?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    update?: PropostaTrocaUpdateWithWhereUniqueWithoutItem_oferecidoInput | PropostaTrocaUpdateWithWhereUniqueWithoutItem_oferecidoInput[]
    updateMany?: PropostaTrocaUpdateManyWithWhereWithoutItem_oferecidoInput | PropostaTrocaUpdateManyWithWhereWithoutItem_oferecidoInput[]
    deleteMany?: PropostaTrocaScalarWhereInput | PropostaTrocaScalarWhereInput[]
  }

  export type PropostaTrocaUpdateManyWithoutItem_desejadoNestedInput = {
    create?: XOR<PropostaTrocaCreateWithoutItem_desejadoInput, PropostaTrocaUncheckedCreateWithoutItem_desejadoInput> | PropostaTrocaCreateWithoutItem_desejadoInput[] | PropostaTrocaUncheckedCreateWithoutItem_desejadoInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutItem_desejadoInput | PropostaTrocaCreateOrConnectWithoutItem_desejadoInput[]
    upsert?: PropostaTrocaUpsertWithWhereUniqueWithoutItem_desejadoInput | PropostaTrocaUpsertWithWhereUniqueWithoutItem_desejadoInput[]
    createMany?: PropostaTrocaCreateManyItem_desejadoInputEnvelope
    set?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    disconnect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    delete?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    update?: PropostaTrocaUpdateWithWhereUniqueWithoutItem_desejadoInput | PropostaTrocaUpdateWithWhereUniqueWithoutItem_desejadoInput[]
    updateMany?: PropostaTrocaUpdateManyWithWhereWithoutItem_desejadoInput | PropostaTrocaUpdateManyWithWhereWithoutItem_desejadoInput[]
    deleteMany?: PropostaTrocaScalarWhereInput | PropostaTrocaScalarWhereInput[]
  }

  export type PropostaTrocaUncheckedUpdateManyWithoutItem_oferecidoNestedInput = {
    create?: XOR<PropostaTrocaCreateWithoutItem_oferecidoInput, PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput> | PropostaTrocaCreateWithoutItem_oferecidoInput[] | PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutItem_oferecidoInput | PropostaTrocaCreateOrConnectWithoutItem_oferecidoInput[]
    upsert?: PropostaTrocaUpsertWithWhereUniqueWithoutItem_oferecidoInput | PropostaTrocaUpsertWithWhereUniqueWithoutItem_oferecidoInput[]
    createMany?: PropostaTrocaCreateManyItem_oferecidoInputEnvelope
    set?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    disconnect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    delete?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    update?: PropostaTrocaUpdateWithWhereUniqueWithoutItem_oferecidoInput | PropostaTrocaUpdateWithWhereUniqueWithoutItem_oferecidoInput[]
    updateMany?: PropostaTrocaUpdateManyWithWhereWithoutItem_oferecidoInput | PropostaTrocaUpdateManyWithWhereWithoutItem_oferecidoInput[]
    deleteMany?: PropostaTrocaScalarWhereInput | PropostaTrocaScalarWhereInput[]
  }

  export type PropostaTrocaUncheckedUpdateManyWithoutItem_desejadoNestedInput = {
    create?: XOR<PropostaTrocaCreateWithoutItem_desejadoInput, PropostaTrocaUncheckedCreateWithoutItem_desejadoInput> | PropostaTrocaCreateWithoutItem_desejadoInput[] | PropostaTrocaUncheckedCreateWithoutItem_desejadoInput[]
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutItem_desejadoInput | PropostaTrocaCreateOrConnectWithoutItem_desejadoInput[]
    upsert?: PropostaTrocaUpsertWithWhereUniqueWithoutItem_desejadoInput | PropostaTrocaUpsertWithWhereUniqueWithoutItem_desejadoInput[]
    createMany?: PropostaTrocaCreateManyItem_desejadoInputEnvelope
    set?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    disconnect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    delete?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    connect?: PropostaTrocaWhereUniqueInput | PropostaTrocaWhereUniqueInput[]
    update?: PropostaTrocaUpdateWithWhereUniqueWithoutItem_desejadoInput | PropostaTrocaUpdateWithWhereUniqueWithoutItem_desejadoInput[]
    updateMany?: PropostaTrocaUpdateManyWithWhereWithoutItem_desejadoInput | PropostaTrocaUpdateManyWithWhereWithoutItem_desejadoInput[]
    deleteMany?: PropostaTrocaScalarWhereInput | PropostaTrocaScalarWhereInput[]
  }

  export type ItemCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ItemCreateWithoutCategoriaInput, ItemUncheckedCreateWithoutCategoriaInput> | ItemCreateWithoutCategoriaInput[] | ItemUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoriaInput | ItemCreateOrConnectWithoutCategoriaInput[]
    createMany?: ItemCreateManyCategoriaInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ItemCreateWithoutCategoriaInput, ItemUncheckedCreateWithoutCategoriaInput> | ItemCreateWithoutCategoriaInput[] | ItemUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoriaInput | ItemCreateOrConnectWithoutCategoriaInput[]
    createMany?: ItemCreateManyCategoriaInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ItemUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ItemCreateWithoutCategoriaInput, ItemUncheckedCreateWithoutCategoriaInput> | ItemCreateWithoutCategoriaInput[] | ItemUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoriaInput | ItemCreateOrConnectWithoutCategoriaInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCategoriaInput | ItemUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ItemCreateManyCategoriaInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCategoriaInput | ItemUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCategoriaInput | ItemUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ItemCreateWithoutCategoriaInput, ItemUncheckedCreateWithoutCategoriaInput> | ItemCreateWithoutCategoriaInput[] | ItemUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutCategoriaInput | ItemCreateOrConnectWithoutCategoriaInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutCategoriaInput | ItemUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ItemCreateManyCategoriaInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutCategoriaInput | ItemUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutCategoriaInput | ItemUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutPropostas_oferecidoInput = {
    create?: XOR<ItemCreateWithoutPropostas_oferecidoInput, ItemUncheckedCreateWithoutPropostas_oferecidoInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPropostas_oferecidoInput
    connect?: ItemWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutPropostas_desejadoInput = {
    create?: XOR<ItemCreateWithoutPropostas_desejadoInput, ItemUncheckedCreateWithoutPropostas_desejadoInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPropostas_desejadoInput
    connect?: ItemWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPropostasInput = {
    create?: XOR<UsuarioCreateWithoutPropostasInput, UsuarioUncheckedCreateWithoutPropostasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPropostasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type MensagemCreateNestedManyWithoutProposta_trocaInput = {
    create?: XOR<MensagemCreateWithoutProposta_trocaInput, MensagemUncheckedCreateWithoutProposta_trocaInput> | MensagemCreateWithoutProposta_trocaInput[] | MensagemUncheckedCreateWithoutProposta_trocaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutProposta_trocaInput | MensagemCreateOrConnectWithoutProposta_trocaInput[]
    createMany?: MensagemCreateManyProposta_trocaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutProposta_trocaInput = {
    create?: XOR<MensagemCreateWithoutProposta_trocaInput, MensagemUncheckedCreateWithoutProposta_trocaInput> | MensagemCreateWithoutProposta_trocaInput[] | MensagemUncheckedCreateWithoutProposta_trocaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutProposta_trocaInput | MensagemCreateOrConnectWithoutProposta_trocaInput[]
    createMany?: MensagemCreateManyProposta_trocaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type EnumStatusPropostaFieldUpdateOperationsInput = {
    set?: $Enums.StatusProposta
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ItemUpdateOneRequiredWithoutPropostas_oferecidoNestedInput = {
    create?: XOR<ItemCreateWithoutPropostas_oferecidoInput, ItemUncheckedCreateWithoutPropostas_oferecidoInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPropostas_oferecidoInput
    upsert?: ItemUpsertWithoutPropostas_oferecidoInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutPropostas_oferecidoInput, ItemUpdateWithoutPropostas_oferecidoInput>, ItemUncheckedUpdateWithoutPropostas_oferecidoInput>
  }

  export type ItemUpdateOneRequiredWithoutPropostas_desejadoNestedInput = {
    create?: XOR<ItemCreateWithoutPropostas_desejadoInput, ItemUncheckedCreateWithoutPropostas_desejadoInput>
    connectOrCreate?: ItemCreateOrConnectWithoutPropostas_desejadoInput
    upsert?: ItemUpsertWithoutPropostas_desejadoInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutPropostas_desejadoInput, ItemUpdateWithoutPropostas_desejadoInput>, ItemUncheckedUpdateWithoutPropostas_desejadoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutPropostasNestedInput = {
    create?: XOR<UsuarioCreateWithoutPropostasInput, UsuarioUncheckedCreateWithoutPropostasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPropostasInput
    upsert?: UsuarioUpsertWithoutPropostasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPropostasInput, UsuarioUpdateWithoutPropostasInput>, UsuarioUncheckedUpdateWithoutPropostasInput>
  }

  export type MensagemUpdateManyWithoutProposta_trocaNestedInput = {
    create?: XOR<MensagemCreateWithoutProposta_trocaInput, MensagemUncheckedCreateWithoutProposta_trocaInput> | MensagemCreateWithoutProposta_trocaInput[] | MensagemUncheckedCreateWithoutProposta_trocaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutProposta_trocaInput | MensagemCreateOrConnectWithoutProposta_trocaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutProposta_trocaInput | MensagemUpsertWithWhereUniqueWithoutProposta_trocaInput[]
    createMany?: MensagemCreateManyProposta_trocaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutProposta_trocaInput | MensagemUpdateWithWhereUniqueWithoutProposta_trocaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutProposta_trocaInput | MensagemUpdateManyWithWhereWithoutProposta_trocaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutProposta_trocaNestedInput = {
    create?: XOR<MensagemCreateWithoutProposta_trocaInput, MensagemUncheckedCreateWithoutProposta_trocaInput> | MensagemCreateWithoutProposta_trocaInput[] | MensagemUncheckedCreateWithoutProposta_trocaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutProposta_trocaInput | MensagemCreateOrConnectWithoutProposta_trocaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutProposta_trocaInput | MensagemUpsertWithWhereUniqueWithoutProposta_trocaInput[]
    createMany?: MensagemCreateManyProposta_trocaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutProposta_trocaInput | MensagemUpdateWithWhereUniqueWithoutProposta_trocaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutProposta_trocaInput | MensagemUpdateManyWithWhereWithoutProposta_trocaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type PropostaTrocaCreateNestedOneWithoutMensagensInput = {
    create?: XOR<PropostaTrocaCreateWithoutMensagensInput, PropostaTrocaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutMensagensInput
    connect?: PropostaTrocaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMensagensInput = {
    create?: XOR<UsuarioCreateWithoutMensagensInput, UsuarioUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensagensInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PropostaTrocaUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: XOR<PropostaTrocaCreateWithoutMensagensInput, PropostaTrocaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: PropostaTrocaCreateOrConnectWithoutMensagensInput
    upsert?: PropostaTrocaUpsertWithoutMensagensInput
    connect?: PropostaTrocaWhereUniqueInput
    update?: XOR<XOR<PropostaTrocaUpdateToOneWithWhereWithoutMensagensInput, PropostaTrocaUpdateWithoutMensagensInput>, PropostaTrocaUncheckedUpdateWithoutMensagensInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: XOR<UsuarioCreateWithoutMensagensInput, UsuarioUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMensagensInput
    upsert?: UsuarioUpsertWithoutMensagensInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutMensagensInput, UsuarioUpdateWithoutMensagensInput>, UsuarioUncheckedUpdateWithoutMensagensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusItemFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusItem | EnumStatusItemFieldRefInput<$PrismaModel>
    in?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusItemFilter<$PrismaModel> | $Enums.StatusItem
  }

  export type NestedEnumStatusItemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusItem | EnumStatusItemFieldRefInput<$PrismaModel>
    in?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusItem[] | ListEnumStatusItemFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusItemWithAggregatesFilter<$PrismaModel> | $Enums.StatusItem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusItemFilter<$PrismaModel>
    _max?: NestedEnumStatusItemFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusPropostaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProposta | EnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropostaFilter<$PrismaModel> | $Enums.StatusProposta
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatusPropostaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusProposta | EnumStatusPropostaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusProposta[] | ListEnumStatusPropostaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPropostaWithAggregatesFilter<$PrismaModel> | $Enums.StatusProposta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPropostaFilter<$PrismaModel>
    _max?: NestedEnumStatusPropostaFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ItemCreateWithoutUsuarioInput = {
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    categoria: CategoriaCreateNestedOneWithoutItensInput
    propostas_oferecido?: PropostaTrocaCreateNestedManyWithoutItem_oferecidoInput
    propostas_desejado?: PropostaTrocaCreateNestedManyWithoutItem_desejadoInput
  }

  export type ItemUncheckedCreateWithoutUsuarioInput = {
    id_item?: number
    id_categoria: number
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    propostas_oferecido?: PropostaTrocaUncheckedCreateNestedManyWithoutItem_oferecidoInput
    propostas_desejado?: PropostaTrocaUncheckedCreateNestedManyWithoutItem_desejadoInput
  }

  export type ItemCreateOrConnectWithoutUsuarioInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutUsuarioInput, ItemUncheckedCreateWithoutUsuarioInput>
  }

  export type ItemCreateManyUsuarioInputEnvelope = {
    data: ItemCreateManyUsuarioInput | ItemCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PropostaTrocaCreateWithoutUsuario_proponenteInput = {
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
    item_oferecido: ItemCreateNestedOneWithoutPropostas_oferecidoInput
    item_desejado: ItemCreateNestedOneWithoutPropostas_desejadoInput
    mensagens?: MensagemCreateNestedManyWithoutProposta_trocaInput
  }

  export type PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput = {
    id_proposta?: number
    id_item_oferecido: number
    id_item_desejado: number
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
    mensagens?: MensagemUncheckedCreateNestedManyWithoutProposta_trocaInput
  }

  export type PropostaTrocaCreateOrConnectWithoutUsuario_proponenteInput = {
    where: PropostaTrocaWhereUniqueInput
    create: XOR<PropostaTrocaCreateWithoutUsuario_proponenteInput, PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput>
  }

  export type PropostaTrocaCreateManyUsuario_proponenteInputEnvelope = {
    data: PropostaTrocaCreateManyUsuario_proponenteInput | PropostaTrocaCreateManyUsuario_proponenteInput[]
    skipDuplicates?: boolean
  }

  export type MensagemCreateWithoutUsuario_remetenteInput = {
    conteudo_mensagem: string
    data_envio?: Date | string
    lida?: boolean
    proposta_troca: PropostaTrocaCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateWithoutUsuario_remetenteInput = {
    id_mensagem?: number
    id_proposta_troca: number
    conteudo_mensagem: string
    data_envio?: Date | string
    lida?: boolean
  }

  export type MensagemCreateOrConnectWithoutUsuario_remetenteInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutUsuario_remetenteInput, MensagemUncheckedCreateWithoutUsuario_remetenteInput>
  }

  export type MensagemCreateManyUsuario_remetenteInputEnvelope = {
    data: MensagemCreateManyUsuario_remetenteInput | MensagemCreateManyUsuario_remetenteInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutUsuarioInput, ItemUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ItemCreateWithoutUsuarioInput, ItemUncheckedCreateWithoutUsuarioInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutUsuarioInput, ItemUncheckedUpdateWithoutUsuarioInput>
  }

  export type ItemUpdateManyWithWhereWithoutUsuarioInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id_item?: IntFilter<"Item"> | number
    id_usuario_proprietario?: IntFilter<"Item"> | number
    id_categoria?: IntFilter<"Item"> | number
    titulo?: StringFilter<"Item"> | string
    descricao?: StringFilter<"Item"> | string
    condicao?: StringFilter<"Item"> | string
    foto_uris?: StringFilter<"Item"> | string
    data_publicacao?: DateTimeFilter<"Item"> | Date | string
    status_item?: EnumStatusItemFilter<"Item"> | $Enums.StatusItem
  }

  export type PropostaTrocaUpsertWithWhereUniqueWithoutUsuario_proponenteInput = {
    where: PropostaTrocaWhereUniqueInput
    update: XOR<PropostaTrocaUpdateWithoutUsuario_proponenteInput, PropostaTrocaUncheckedUpdateWithoutUsuario_proponenteInput>
    create: XOR<PropostaTrocaCreateWithoutUsuario_proponenteInput, PropostaTrocaUncheckedCreateWithoutUsuario_proponenteInput>
  }

  export type PropostaTrocaUpdateWithWhereUniqueWithoutUsuario_proponenteInput = {
    where: PropostaTrocaWhereUniqueInput
    data: XOR<PropostaTrocaUpdateWithoutUsuario_proponenteInput, PropostaTrocaUncheckedUpdateWithoutUsuario_proponenteInput>
  }

  export type PropostaTrocaUpdateManyWithWhereWithoutUsuario_proponenteInput = {
    where: PropostaTrocaScalarWhereInput
    data: XOR<PropostaTrocaUpdateManyMutationInput, PropostaTrocaUncheckedUpdateManyWithoutUsuario_proponenteInput>
  }

  export type PropostaTrocaScalarWhereInput = {
    AND?: PropostaTrocaScalarWhereInput | PropostaTrocaScalarWhereInput[]
    OR?: PropostaTrocaScalarWhereInput[]
    NOT?: PropostaTrocaScalarWhereInput | PropostaTrocaScalarWhereInput[]
    id_proposta?: IntFilter<"PropostaTroca"> | number
    id_item_oferecido?: IntFilter<"PropostaTroca"> | number
    id_item_desejado?: IntFilter<"PropostaTroca"> | number
    id_usuario_proponente?: IntFilter<"PropostaTroca"> | number
    status_proposta?: EnumStatusPropostaFilter<"PropostaTroca"> | $Enums.StatusProposta
    data_proposta?: DateTimeFilter<"PropostaTroca"> | Date | string
    data_atualizacao_status?: DateTimeNullableFilter<"PropostaTroca"> | Date | string | null
  }

  export type MensagemUpsertWithWhereUniqueWithoutUsuario_remetenteInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutUsuario_remetenteInput, MensagemUncheckedUpdateWithoutUsuario_remetenteInput>
    create: XOR<MensagemCreateWithoutUsuario_remetenteInput, MensagemUncheckedCreateWithoutUsuario_remetenteInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutUsuario_remetenteInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutUsuario_remetenteInput, MensagemUncheckedUpdateWithoutUsuario_remetenteInput>
  }

  export type MensagemUpdateManyWithWhereWithoutUsuario_remetenteInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutUsuario_remetenteInput>
  }

  export type MensagemScalarWhereInput = {
    AND?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    OR?: MensagemScalarWhereInput[]
    NOT?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    id_mensagem?: IntFilter<"Mensagem"> | number
    id_proposta_troca?: IntFilter<"Mensagem"> | number
    id_usuario_remetente?: IntFilter<"Mensagem"> | number
    conteudo_mensagem?: StringFilter<"Mensagem"> | string
    data_envio?: DateTimeFilter<"Mensagem"> | Date | string
    lida?: BoolFilter<"Mensagem"> | boolean
  }

  export type UsuarioCreateWithoutItensInput = {
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro?: Date | string
    propostas?: PropostaTrocaCreateNestedManyWithoutUsuario_proponenteInput
    mensagens?: MensagemCreateNestedManyWithoutUsuario_remetenteInput
  }

  export type UsuarioUncheckedCreateWithoutItensInput = {
    id_usuario?: number
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro?: Date | string
    propostas?: PropostaTrocaUncheckedCreateNestedManyWithoutUsuario_proponenteInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutUsuario_remetenteInput
  }

  export type UsuarioCreateOrConnectWithoutItensInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutItensInput, UsuarioUncheckedCreateWithoutItensInput>
  }

  export type CategoriaCreateWithoutItensInput = {
    nome_categoria: string
    descricao?: string | null
  }

  export type CategoriaUncheckedCreateWithoutItensInput = {
    id_categoria?: number
    nome_categoria: string
    descricao?: string | null
  }

  export type CategoriaCreateOrConnectWithoutItensInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutItensInput, CategoriaUncheckedCreateWithoutItensInput>
  }

  export type PropostaTrocaCreateWithoutItem_oferecidoInput = {
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
    item_desejado: ItemCreateNestedOneWithoutPropostas_desejadoInput
    usuario_proponente: UsuarioCreateNestedOneWithoutPropostasInput
    mensagens?: MensagemCreateNestedManyWithoutProposta_trocaInput
  }

  export type PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput = {
    id_proposta?: number
    id_item_desejado: number
    id_usuario_proponente: number
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
    mensagens?: MensagemUncheckedCreateNestedManyWithoutProposta_trocaInput
  }

  export type PropostaTrocaCreateOrConnectWithoutItem_oferecidoInput = {
    where: PropostaTrocaWhereUniqueInput
    create: XOR<PropostaTrocaCreateWithoutItem_oferecidoInput, PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput>
  }

  export type PropostaTrocaCreateManyItem_oferecidoInputEnvelope = {
    data: PropostaTrocaCreateManyItem_oferecidoInput | PropostaTrocaCreateManyItem_oferecidoInput[]
    skipDuplicates?: boolean
  }

  export type PropostaTrocaCreateWithoutItem_desejadoInput = {
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
    item_oferecido: ItemCreateNestedOneWithoutPropostas_oferecidoInput
    usuario_proponente: UsuarioCreateNestedOneWithoutPropostasInput
    mensagens?: MensagemCreateNestedManyWithoutProposta_trocaInput
  }

  export type PropostaTrocaUncheckedCreateWithoutItem_desejadoInput = {
    id_proposta?: number
    id_item_oferecido: number
    id_usuario_proponente: number
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
    mensagens?: MensagemUncheckedCreateNestedManyWithoutProposta_trocaInput
  }

  export type PropostaTrocaCreateOrConnectWithoutItem_desejadoInput = {
    where: PropostaTrocaWhereUniqueInput
    create: XOR<PropostaTrocaCreateWithoutItem_desejadoInput, PropostaTrocaUncheckedCreateWithoutItem_desejadoInput>
  }

  export type PropostaTrocaCreateManyItem_desejadoInputEnvelope = {
    data: PropostaTrocaCreateManyItem_desejadoInput | PropostaTrocaCreateManyItem_desejadoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutItensInput = {
    update: XOR<UsuarioUpdateWithoutItensInput, UsuarioUncheckedUpdateWithoutItensInput>
    create: XOR<UsuarioCreateWithoutItensInput, UsuarioUncheckedCreateWithoutItensInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutItensInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutItensInput, UsuarioUncheckedUpdateWithoutItensInput>
  }

  export type UsuarioUpdateWithoutItensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    propostas?: PropostaTrocaUpdateManyWithoutUsuario_proponenteNestedInput
    mensagens?: MensagemUpdateManyWithoutUsuario_remetenteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutItensInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    propostas?: PropostaTrocaUncheckedUpdateManyWithoutUsuario_proponenteNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutUsuario_remetenteNestedInput
  }

  export type CategoriaUpsertWithoutItensInput = {
    update: XOR<CategoriaUpdateWithoutItensInput, CategoriaUncheckedUpdateWithoutItensInput>
    create: XOR<CategoriaCreateWithoutItensInput, CategoriaUncheckedCreateWithoutItensInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutItensInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutItensInput, CategoriaUncheckedUpdateWithoutItensInput>
  }

  export type CategoriaUpdateWithoutItensInput = {
    nome_categoria?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateWithoutItensInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome_categoria?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropostaTrocaUpsertWithWhereUniqueWithoutItem_oferecidoInput = {
    where: PropostaTrocaWhereUniqueInput
    update: XOR<PropostaTrocaUpdateWithoutItem_oferecidoInput, PropostaTrocaUncheckedUpdateWithoutItem_oferecidoInput>
    create: XOR<PropostaTrocaCreateWithoutItem_oferecidoInput, PropostaTrocaUncheckedCreateWithoutItem_oferecidoInput>
  }

  export type PropostaTrocaUpdateWithWhereUniqueWithoutItem_oferecidoInput = {
    where: PropostaTrocaWhereUniqueInput
    data: XOR<PropostaTrocaUpdateWithoutItem_oferecidoInput, PropostaTrocaUncheckedUpdateWithoutItem_oferecidoInput>
  }

  export type PropostaTrocaUpdateManyWithWhereWithoutItem_oferecidoInput = {
    where: PropostaTrocaScalarWhereInput
    data: XOR<PropostaTrocaUpdateManyMutationInput, PropostaTrocaUncheckedUpdateManyWithoutItem_oferecidoInput>
  }

  export type PropostaTrocaUpsertWithWhereUniqueWithoutItem_desejadoInput = {
    where: PropostaTrocaWhereUniqueInput
    update: XOR<PropostaTrocaUpdateWithoutItem_desejadoInput, PropostaTrocaUncheckedUpdateWithoutItem_desejadoInput>
    create: XOR<PropostaTrocaCreateWithoutItem_desejadoInput, PropostaTrocaUncheckedCreateWithoutItem_desejadoInput>
  }

  export type PropostaTrocaUpdateWithWhereUniqueWithoutItem_desejadoInput = {
    where: PropostaTrocaWhereUniqueInput
    data: XOR<PropostaTrocaUpdateWithoutItem_desejadoInput, PropostaTrocaUncheckedUpdateWithoutItem_desejadoInput>
  }

  export type PropostaTrocaUpdateManyWithWhereWithoutItem_desejadoInput = {
    where: PropostaTrocaScalarWhereInput
    data: XOR<PropostaTrocaUpdateManyMutationInput, PropostaTrocaUncheckedUpdateManyWithoutItem_desejadoInput>
  }

  export type ItemCreateWithoutCategoriaInput = {
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    usuario: UsuarioCreateNestedOneWithoutItensInput
    propostas_oferecido?: PropostaTrocaCreateNestedManyWithoutItem_oferecidoInput
    propostas_desejado?: PropostaTrocaCreateNestedManyWithoutItem_desejadoInput
  }

  export type ItemUncheckedCreateWithoutCategoriaInput = {
    id_item?: number
    id_usuario_proprietario: number
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    propostas_oferecido?: PropostaTrocaUncheckedCreateNestedManyWithoutItem_oferecidoInput
    propostas_desejado?: PropostaTrocaUncheckedCreateNestedManyWithoutItem_desejadoInput
  }

  export type ItemCreateOrConnectWithoutCategoriaInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCategoriaInput, ItemUncheckedCreateWithoutCategoriaInput>
  }

  export type ItemCreateManyCategoriaInputEnvelope = {
    data: ItemCreateManyCategoriaInput | ItemCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutCategoriaInput, ItemUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ItemCreateWithoutCategoriaInput, ItemUncheckedCreateWithoutCategoriaInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutCategoriaInput, ItemUncheckedUpdateWithoutCategoriaInput>
  }

  export type ItemUpdateManyWithWhereWithoutCategoriaInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ItemCreateWithoutPropostas_oferecidoInput = {
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    usuario: UsuarioCreateNestedOneWithoutItensInput
    categoria: CategoriaCreateNestedOneWithoutItensInput
    propostas_desejado?: PropostaTrocaCreateNestedManyWithoutItem_desejadoInput
  }

  export type ItemUncheckedCreateWithoutPropostas_oferecidoInput = {
    id_item?: number
    id_usuario_proprietario: number
    id_categoria: number
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    propostas_desejado?: PropostaTrocaUncheckedCreateNestedManyWithoutItem_desejadoInput
  }

  export type ItemCreateOrConnectWithoutPropostas_oferecidoInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPropostas_oferecidoInput, ItemUncheckedCreateWithoutPropostas_oferecidoInput>
  }

  export type ItemCreateWithoutPropostas_desejadoInput = {
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    usuario: UsuarioCreateNestedOneWithoutItensInput
    categoria: CategoriaCreateNestedOneWithoutItensInput
    propostas_oferecido?: PropostaTrocaCreateNestedManyWithoutItem_oferecidoInput
  }

  export type ItemUncheckedCreateWithoutPropostas_desejadoInput = {
    id_item?: number
    id_usuario_proprietario: number
    id_categoria: number
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
    propostas_oferecido?: PropostaTrocaUncheckedCreateNestedManyWithoutItem_oferecidoInput
  }

  export type ItemCreateOrConnectWithoutPropostas_desejadoInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPropostas_desejadoInput, ItemUncheckedCreateWithoutPropostas_desejadoInput>
  }

  export type UsuarioCreateWithoutPropostasInput = {
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro?: Date | string
    itens?: ItemCreateNestedManyWithoutUsuarioInput
    mensagens?: MensagemCreateNestedManyWithoutUsuario_remetenteInput
  }

  export type UsuarioUncheckedCreateWithoutPropostasInput = {
    id_usuario?: number
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro?: Date | string
    itens?: ItemUncheckedCreateNestedManyWithoutUsuarioInput
    mensagens?: MensagemUncheckedCreateNestedManyWithoutUsuario_remetenteInput
  }

  export type UsuarioCreateOrConnectWithoutPropostasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPropostasInput, UsuarioUncheckedCreateWithoutPropostasInput>
  }

  export type MensagemCreateWithoutProposta_trocaInput = {
    conteudo_mensagem: string
    data_envio?: Date | string
    lida?: boolean
    usuario_remetente: UsuarioCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateWithoutProposta_trocaInput = {
    id_mensagem?: number
    id_usuario_remetente: number
    conteudo_mensagem: string
    data_envio?: Date | string
    lida?: boolean
  }

  export type MensagemCreateOrConnectWithoutProposta_trocaInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutProposta_trocaInput, MensagemUncheckedCreateWithoutProposta_trocaInput>
  }

  export type MensagemCreateManyProposta_trocaInputEnvelope = {
    data: MensagemCreateManyProposta_trocaInput | MensagemCreateManyProposta_trocaInput[]
    skipDuplicates?: boolean
  }

  export type ItemUpsertWithoutPropostas_oferecidoInput = {
    update: XOR<ItemUpdateWithoutPropostas_oferecidoInput, ItemUncheckedUpdateWithoutPropostas_oferecidoInput>
    create: XOR<ItemCreateWithoutPropostas_oferecidoInput, ItemUncheckedCreateWithoutPropostas_oferecidoInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutPropostas_oferecidoInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutPropostas_oferecidoInput, ItemUncheckedUpdateWithoutPropostas_oferecidoInput>
  }

  export type ItemUpdateWithoutPropostas_oferecidoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    usuario?: UsuarioUpdateOneRequiredWithoutItensNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutItensNestedInput
    propostas_desejado?: PropostaTrocaUpdateManyWithoutItem_desejadoNestedInput
  }

  export type ItemUncheckedUpdateWithoutPropostas_oferecidoInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_usuario_proprietario?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    propostas_desejado?: PropostaTrocaUncheckedUpdateManyWithoutItem_desejadoNestedInput
  }

  export type ItemUpsertWithoutPropostas_desejadoInput = {
    update: XOR<ItemUpdateWithoutPropostas_desejadoInput, ItemUncheckedUpdateWithoutPropostas_desejadoInput>
    create: XOR<ItemCreateWithoutPropostas_desejadoInput, ItemUncheckedCreateWithoutPropostas_desejadoInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutPropostas_desejadoInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutPropostas_desejadoInput, ItemUncheckedUpdateWithoutPropostas_desejadoInput>
  }

  export type ItemUpdateWithoutPropostas_desejadoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    usuario?: UsuarioUpdateOneRequiredWithoutItensNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutItensNestedInput
    propostas_oferecido?: PropostaTrocaUpdateManyWithoutItem_oferecidoNestedInput
  }

  export type ItemUncheckedUpdateWithoutPropostas_desejadoInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_usuario_proprietario?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    propostas_oferecido?: PropostaTrocaUncheckedUpdateManyWithoutItem_oferecidoNestedInput
  }

  export type UsuarioUpsertWithoutPropostasInput = {
    update: XOR<UsuarioUpdateWithoutPropostasInput, UsuarioUncheckedUpdateWithoutPropostasInput>
    create: XOR<UsuarioCreateWithoutPropostasInput, UsuarioUncheckedCreateWithoutPropostasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPropostasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPropostasInput, UsuarioUncheckedUpdateWithoutPropostasInput>
  }

  export type UsuarioUpdateWithoutPropostasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUpdateManyWithoutUsuarioNestedInput
    mensagens?: MensagemUpdateManyWithoutUsuario_remetenteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPropostasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUncheckedUpdateManyWithoutUsuarioNestedInput
    mensagens?: MensagemUncheckedUpdateManyWithoutUsuario_remetenteNestedInput
  }

  export type MensagemUpsertWithWhereUniqueWithoutProposta_trocaInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutProposta_trocaInput, MensagemUncheckedUpdateWithoutProposta_trocaInput>
    create: XOR<MensagemCreateWithoutProposta_trocaInput, MensagemUncheckedCreateWithoutProposta_trocaInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutProposta_trocaInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutProposta_trocaInput, MensagemUncheckedUpdateWithoutProposta_trocaInput>
  }

  export type MensagemUpdateManyWithWhereWithoutProposta_trocaInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutProposta_trocaInput>
  }

  export type PropostaTrocaCreateWithoutMensagensInput = {
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
    item_oferecido: ItemCreateNestedOneWithoutPropostas_oferecidoInput
    item_desejado: ItemCreateNestedOneWithoutPropostas_desejadoInput
    usuario_proponente: UsuarioCreateNestedOneWithoutPropostasInput
  }

  export type PropostaTrocaUncheckedCreateWithoutMensagensInput = {
    id_proposta?: number
    id_item_oferecido: number
    id_item_desejado: number
    id_usuario_proponente: number
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
  }

  export type PropostaTrocaCreateOrConnectWithoutMensagensInput = {
    where: PropostaTrocaWhereUniqueInput
    create: XOR<PropostaTrocaCreateWithoutMensagensInput, PropostaTrocaUncheckedCreateWithoutMensagensInput>
  }

  export type UsuarioCreateWithoutMensagensInput = {
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro?: Date | string
    itens?: ItemCreateNestedManyWithoutUsuarioInput
    propostas?: PropostaTrocaCreateNestedManyWithoutUsuario_proponenteInput
  }

  export type UsuarioUncheckedCreateWithoutMensagensInput = {
    id_usuario?: number
    nome: string
    email: string
    senha_hash: string
    telefone: string
    cidade: string
    bairro: string
    data_cadastro?: Date | string
    itens?: ItemUncheckedCreateNestedManyWithoutUsuarioInput
    propostas?: PropostaTrocaUncheckedCreateNestedManyWithoutUsuario_proponenteInput
  }

  export type UsuarioCreateOrConnectWithoutMensagensInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMensagensInput, UsuarioUncheckedCreateWithoutMensagensInput>
  }

  export type PropostaTrocaUpsertWithoutMensagensInput = {
    update: XOR<PropostaTrocaUpdateWithoutMensagensInput, PropostaTrocaUncheckedUpdateWithoutMensagensInput>
    create: XOR<PropostaTrocaCreateWithoutMensagensInput, PropostaTrocaUncheckedCreateWithoutMensagensInput>
    where?: PropostaTrocaWhereInput
  }

  export type PropostaTrocaUpdateToOneWithWhereWithoutMensagensInput = {
    where?: PropostaTrocaWhereInput
    data: XOR<PropostaTrocaUpdateWithoutMensagensInput, PropostaTrocaUncheckedUpdateWithoutMensagensInput>
  }

  export type PropostaTrocaUpdateWithoutMensagensInput = {
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_oferecido?: ItemUpdateOneRequiredWithoutPropostas_oferecidoNestedInput
    item_desejado?: ItemUpdateOneRequiredWithoutPropostas_desejadoNestedInput
    usuario_proponente?: UsuarioUpdateOneRequiredWithoutPropostasNestedInput
  }

  export type PropostaTrocaUncheckedUpdateWithoutMensagensInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    id_item_oferecido?: IntFieldUpdateOperationsInput | number
    id_item_desejado?: IntFieldUpdateOperationsInput | number
    id_usuario_proponente?: IntFieldUpdateOperationsInput | number
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUpsertWithoutMensagensInput = {
    update: XOR<UsuarioUpdateWithoutMensagensInput, UsuarioUncheckedUpdateWithoutMensagensInput>
    create: XOR<UsuarioCreateWithoutMensagensInput, UsuarioUncheckedCreateWithoutMensagensInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutMensagensInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutMensagensInput, UsuarioUncheckedUpdateWithoutMensagensInput>
  }

  export type UsuarioUpdateWithoutMensagensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUpdateManyWithoutUsuarioNestedInput
    propostas?: PropostaTrocaUpdateManyWithoutUsuario_proponenteNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMensagensInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha_hash?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ItemUncheckedUpdateManyWithoutUsuarioNestedInput
    propostas?: PropostaTrocaUncheckedUpdateManyWithoutUsuario_proponenteNestedInput
  }

  export type ItemCreateManyUsuarioInput = {
    id_item?: number
    id_categoria: number
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
  }

  export type PropostaTrocaCreateManyUsuario_proponenteInput = {
    id_proposta?: number
    id_item_oferecido: number
    id_item_desejado: number
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
  }

  export type MensagemCreateManyUsuario_remetenteInput = {
    id_mensagem?: number
    id_proposta_troca: number
    conteudo_mensagem: string
    data_envio?: Date | string
    lida?: boolean
  }

  export type ItemUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    categoria?: CategoriaUpdateOneRequiredWithoutItensNestedInput
    propostas_oferecido?: PropostaTrocaUpdateManyWithoutItem_oferecidoNestedInput
    propostas_desejado?: PropostaTrocaUpdateManyWithoutItem_desejadoNestedInput
  }

  export type ItemUncheckedUpdateWithoutUsuarioInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    propostas_oferecido?: PropostaTrocaUncheckedUpdateManyWithoutItem_oferecidoNestedInput
    propostas_desejado?: PropostaTrocaUncheckedUpdateManyWithoutItem_desejadoNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutUsuarioInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
  }

  export type PropostaTrocaUpdateWithoutUsuario_proponenteInput = {
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_oferecido?: ItemUpdateOneRequiredWithoutPropostas_oferecidoNestedInput
    item_desejado?: ItemUpdateOneRequiredWithoutPropostas_desejadoNestedInput
    mensagens?: MensagemUpdateManyWithoutProposta_trocaNestedInput
  }

  export type PropostaTrocaUncheckedUpdateWithoutUsuario_proponenteInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    id_item_oferecido?: IntFieldUpdateOperationsInput | number
    id_item_desejado?: IntFieldUpdateOperationsInput | number
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensagens?: MensagemUncheckedUpdateManyWithoutProposta_trocaNestedInput
  }

  export type PropostaTrocaUncheckedUpdateManyWithoutUsuario_proponenteInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    id_item_oferecido?: IntFieldUpdateOperationsInput | number
    id_item_desejado?: IntFieldUpdateOperationsInput | number
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MensagemUpdateWithoutUsuario_remetenteInput = {
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    proposta_troca?: PropostaTrocaUpdateOneRequiredWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateWithoutUsuario_remetenteInput = {
    id_mensagem?: IntFieldUpdateOperationsInput | number
    id_proposta_troca?: IntFieldUpdateOperationsInput | number
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateManyWithoutUsuario_remetenteInput = {
    id_mensagem?: IntFieldUpdateOperationsInput | number
    id_proposta_troca?: IntFieldUpdateOperationsInput | number
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropostaTrocaCreateManyItem_oferecidoInput = {
    id_proposta?: number
    id_item_desejado: number
    id_usuario_proponente: number
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
  }

  export type PropostaTrocaCreateManyItem_desejadoInput = {
    id_proposta?: number
    id_item_oferecido: number
    id_usuario_proponente: number
    status_proposta?: $Enums.StatusProposta
    data_proposta?: Date | string
    data_atualizacao_status?: Date | string | null
  }

  export type PropostaTrocaUpdateWithoutItem_oferecidoInput = {
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_desejado?: ItemUpdateOneRequiredWithoutPropostas_desejadoNestedInput
    usuario_proponente?: UsuarioUpdateOneRequiredWithoutPropostasNestedInput
    mensagens?: MensagemUpdateManyWithoutProposta_trocaNestedInput
  }

  export type PropostaTrocaUncheckedUpdateWithoutItem_oferecidoInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    id_item_desejado?: IntFieldUpdateOperationsInput | number
    id_usuario_proponente?: IntFieldUpdateOperationsInput | number
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensagens?: MensagemUncheckedUpdateManyWithoutProposta_trocaNestedInput
  }

  export type PropostaTrocaUncheckedUpdateManyWithoutItem_oferecidoInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    id_item_desejado?: IntFieldUpdateOperationsInput | number
    id_usuario_proponente?: IntFieldUpdateOperationsInput | number
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PropostaTrocaUpdateWithoutItem_desejadoInput = {
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    item_oferecido?: ItemUpdateOneRequiredWithoutPropostas_oferecidoNestedInput
    usuario_proponente?: UsuarioUpdateOneRequiredWithoutPropostasNestedInput
    mensagens?: MensagemUpdateManyWithoutProposta_trocaNestedInput
  }

  export type PropostaTrocaUncheckedUpdateWithoutItem_desejadoInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    id_item_oferecido?: IntFieldUpdateOperationsInput | number
    id_usuario_proponente?: IntFieldUpdateOperationsInput | number
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mensagens?: MensagemUncheckedUpdateManyWithoutProposta_trocaNestedInput
  }

  export type PropostaTrocaUncheckedUpdateManyWithoutItem_desejadoInput = {
    id_proposta?: IntFieldUpdateOperationsInput | number
    id_item_oferecido?: IntFieldUpdateOperationsInput | number
    id_usuario_proponente?: IntFieldUpdateOperationsInput | number
    status_proposta?: EnumStatusPropostaFieldUpdateOperationsInput | $Enums.StatusProposta
    data_proposta?: DateTimeFieldUpdateOperationsInput | Date | string
    data_atualizacao_status?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ItemCreateManyCategoriaInput = {
    id_item?: number
    id_usuario_proprietario: number
    titulo: string
    descricao: string
    condicao: string
    foto_uris: string
    data_publicacao?: Date | string
    status_item: $Enums.StatusItem
  }

  export type ItemUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    usuario?: UsuarioUpdateOneRequiredWithoutItensNestedInput
    propostas_oferecido?: PropostaTrocaUpdateManyWithoutItem_oferecidoNestedInput
    propostas_desejado?: PropostaTrocaUpdateManyWithoutItem_desejadoNestedInput
  }

  export type ItemUncheckedUpdateWithoutCategoriaInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_usuario_proprietario?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
    propostas_oferecido?: PropostaTrocaUncheckedUpdateManyWithoutItem_oferecidoNestedInput
    propostas_desejado?: PropostaTrocaUncheckedUpdateManyWithoutItem_desejadoNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutCategoriaInput = {
    id_item?: IntFieldUpdateOperationsInput | number
    id_usuario_proprietario?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    condicao?: StringFieldUpdateOperationsInput | string
    foto_uris?: StringFieldUpdateOperationsInput | string
    data_publicacao?: DateTimeFieldUpdateOperationsInput | Date | string
    status_item?: EnumStatusItemFieldUpdateOperationsInput | $Enums.StatusItem
  }

  export type MensagemCreateManyProposta_trocaInput = {
    id_mensagem?: number
    id_usuario_remetente: number
    conteudo_mensagem: string
    data_envio?: Date | string
    lida?: boolean
  }

  export type MensagemUpdateWithoutProposta_trocaInput = {
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    usuario_remetente?: UsuarioUpdateOneRequiredWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateWithoutProposta_trocaInput = {
    id_mensagem?: IntFieldUpdateOperationsInput | number
    id_usuario_remetente?: IntFieldUpdateOperationsInput | number
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateManyWithoutProposta_trocaInput = {
    id_mensagem?: IntFieldUpdateOperationsInput | number
    id_usuario_remetente?: IntFieldUpdateOperationsInput | number
    conteudo_mensagem?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    lida?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}