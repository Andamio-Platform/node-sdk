
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
 * Model BlockAddress
 * 
 */
export type BlockAddress = $Result.DefaultSelection<Prisma.$BlockAddressPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Blocks
 * 
 */
export type Blocks = $Result.DefaultSelection<Prisma.$BlocksPayload>
/**
 * Model AddressToWatch
 * 
 */
export type AddressToWatch = $Result.DefaultSelection<Prisma.$AddressToWatchPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LocalStateType: {
  Course: 'Course',
  Assignment: 'Assignment',
  ModuleRef: 'ModuleRef',
  Treasury: 'Treasury',
  Escrow: 'Escrow',
  ContributorState: 'ContributorState'
};

export type LocalStateType = (typeof LocalStateType)[keyof typeof LocalStateType]

}

export type LocalStateType = $Enums.LocalStateType

export const LocalStateType: typeof $Enums.LocalStateType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BlockAddresses
 * const blockAddresses = await prisma.blockAddress.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more BlockAddresses
   * const blockAddresses = await prisma.blockAddress.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.blockAddress`: Exposes CRUD operations for the **BlockAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockAddresses
    * const blockAddresses = await prisma.blockAddress.findMany()
    * ```
    */
  get blockAddress(): Prisma.BlockAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blocks`: Exposes CRUD operations for the **Blocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.blocks.findMany()
    * ```
    */
  get blocks(): Prisma.BlocksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addressToWatch`: Exposes CRUD operations for the **AddressToWatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddressToWatches
    * const addressToWatches = await prisma.addressToWatch.findMany()
    * ```
    */
  get addressToWatch(): Prisma.AddressToWatchDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    BlockAddress: 'BlockAddress',
    Transaction: 'Transaction',
    Blocks: 'Blocks',
    AddressToWatch: 'AddressToWatch'
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
      modelProps: "blockAddress" | "transaction" | "blocks" | "addressToWatch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BlockAddress: {
        payload: Prisma.$BlockAddressPayload<ExtArgs>
        fields: Prisma.BlockAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload>
          }
          findFirst: {
            args: Prisma.BlockAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload>
          }
          findMany: {
            args: Prisma.BlockAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload>[]
          }
          create: {
            args: Prisma.BlockAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload>
          }
          createMany: {
            args: Prisma.BlockAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload>[]
          }
          delete: {
            args: Prisma.BlockAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload>
          }
          update: {
            args: Prisma.BlockAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload>
          }
          deleteMany: {
            args: Prisma.BlockAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload>[]
          }
          upsert: {
            args: Prisma.BlockAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockAddressPayload>
          }
          aggregate: {
            args: Prisma.BlockAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockAddress>
          }
          groupBy: {
            args: Prisma.BlockAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockAddressCountArgs<ExtArgs>
            result: $Utils.Optional<BlockAddressCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Blocks: {
        payload: Prisma.$BlocksPayload<ExtArgs>
        fields: Prisma.BlocksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlocksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlocksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          findFirst: {
            args: Prisma.BlocksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlocksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          findMany: {
            args: Prisma.BlocksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>[]
          }
          create: {
            args: Prisma.BlocksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          createMany: {
            args: Prisma.BlocksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlocksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>[]
          }
          delete: {
            args: Prisma.BlocksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          update: {
            args: Prisma.BlocksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          deleteMany: {
            args: Prisma.BlocksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlocksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlocksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>[]
          }
          upsert: {
            args: Prisma.BlocksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlocksPayload>
          }
          aggregate: {
            args: Prisma.BlocksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlocks>
          }
          groupBy: {
            args: Prisma.BlocksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlocksGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlocksCountArgs<ExtArgs>
            result: $Utils.Optional<BlocksCountAggregateOutputType> | number
          }
        }
      }
      AddressToWatch: {
        payload: Prisma.$AddressToWatchPayload<ExtArgs>
        fields: Prisma.AddressToWatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressToWatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressToWatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload>
          }
          findFirst: {
            args: Prisma.AddressToWatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressToWatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload>
          }
          findMany: {
            args: Prisma.AddressToWatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload>[]
          }
          create: {
            args: Prisma.AddressToWatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload>
          }
          createMany: {
            args: Prisma.AddressToWatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressToWatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload>[]
          }
          delete: {
            args: Prisma.AddressToWatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload>
          }
          update: {
            args: Prisma.AddressToWatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload>
          }
          deleteMany: {
            args: Prisma.AddressToWatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressToWatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressToWatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload>[]
          }
          upsert: {
            args: Prisma.AddressToWatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchPayload>
          }
          aggregate: {
            args: Prisma.AddressToWatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddressToWatch>
          }
          groupBy: {
            args: Prisma.AddressToWatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressToWatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressToWatchCountArgs<ExtArgs>
            result: $Utils.Optional<AddressToWatchCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    blockAddress?: BlockAddressOmit
    transaction?: TransactionOmit
    blocks?: BlocksOmit
    addressToWatch?: AddressToWatchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type BlockAddressCountOutputType
   */

  export type BlockAddressCountOutputType = {
    transactions: number
  }

  export type BlockAddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | BlockAddressCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BlockAddressCountOutputType without action
   */
  export type BlockAddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddressCountOutputType
     */
    select?: BlockAddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlockAddressCountOutputType without action
   */
  export type BlockAddressCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type BlocksCountOutputType
   */

  export type BlocksCountOutputType = {
    addresses: number
  }

  export type BlocksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | BlocksCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * BlocksCountOutputType without action
   */
  export type BlocksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlocksCountOutputType
     */
    select?: BlocksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlocksCountOutputType without action
   */
  export type BlocksCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockAddressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BlockAddress
   */

  export type AggregateBlockAddress = {
    _count: BlockAddressCountAggregateOutputType | null
    _avg: BlockAddressAvgAggregateOutputType | null
    _sum: BlockAddressSumAggregateOutputType | null
    _min: BlockAddressMinAggregateOutputType | null
    _max: BlockAddressMaxAggregateOutputType | null
  }

  export type BlockAddressAvgAggregateOutputType = {
    id: number | null
    blockId: number | null
  }

  export type BlockAddressSumAggregateOutputType = {
    id: number | null
    blockId: number | null
  }

  export type BlockAddressMinAggregateOutputType = {
    id: number | null
    address: string | null
    blockId: number | null
  }

  export type BlockAddressMaxAggregateOutputType = {
    id: number | null
    address: string | null
    blockId: number | null
  }

  export type BlockAddressCountAggregateOutputType = {
    id: number
    address: number
    blockId: number
    _all: number
  }


  export type BlockAddressAvgAggregateInputType = {
    id?: true
    blockId?: true
  }

  export type BlockAddressSumAggregateInputType = {
    id?: true
    blockId?: true
  }

  export type BlockAddressMinAggregateInputType = {
    id?: true
    address?: true
    blockId?: true
  }

  export type BlockAddressMaxAggregateInputType = {
    id?: true
    address?: true
    blockId?: true
  }

  export type BlockAddressCountAggregateInputType = {
    id?: true
    address?: true
    blockId?: true
    _all?: true
  }

  export type BlockAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockAddress to aggregate.
     */
    where?: BlockAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockAddresses to fetch.
     */
    orderBy?: BlockAddressOrderByWithRelationInput | BlockAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockAddresses
    **/
    _count?: true | BlockAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockAddressMaxAggregateInputType
  }

  export type GetBlockAddressAggregateType<T extends BlockAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockAddress[P]>
      : GetScalarType<T[P], AggregateBlockAddress[P]>
  }




  export type BlockAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockAddressWhereInput
    orderBy?: BlockAddressOrderByWithAggregationInput | BlockAddressOrderByWithAggregationInput[]
    by: BlockAddressScalarFieldEnum[] | BlockAddressScalarFieldEnum
    having?: BlockAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockAddressCountAggregateInputType | true
    _avg?: BlockAddressAvgAggregateInputType
    _sum?: BlockAddressSumAggregateInputType
    _min?: BlockAddressMinAggregateInputType
    _max?: BlockAddressMaxAggregateInputType
  }

  export type BlockAddressGroupByOutputType = {
    id: number
    address: string
    blockId: number
    _count: BlockAddressCountAggregateOutputType | null
    _avg: BlockAddressAvgAggregateOutputType | null
    _sum: BlockAddressSumAggregateOutputType | null
    _min: BlockAddressMinAggregateOutputType | null
    _max: BlockAddressMaxAggregateOutputType | null
  }

  type GetBlockAddressGroupByPayload<T extends BlockAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockAddressGroupByOutputType[P]>
            : GetScalarType<T[P], BlockAddressGroupByOutputType[P]>
        }
      >
    >


  export type BlockAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    blockId?: boolean
    block?: boolean | BlocksDefaultArgs<ExtArgs>
    transactions?: boolean | BlockAddress$transactionsArgs<ExtArgs>
    _count?: boolean | BlockAddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockAddress"]>

  export type BlockAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    blockId?: boolean
    block?: boolean | BlocksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockAddress"]>

  export type BlockAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    blockId?: boolean
    block?: boolean | BlocksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockAddress"]>

  export type BlockAddressSelectScalar = {
    id?: boolean
    address?: boolean
    blockId?: boolean
  }

  export type BlockAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "blockId", ExtArgs["result"]["blockAddress"]>
  export type BlockAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | BlocksDefaultArgs<ExtArgs>
    transactions?: boolean | BlockAddress$transactionsArgs<ExtArgs>
    _count?: boolean | BlockAddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlockAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | BlocksDefaultArgs<ExtArgs>
  }
  export type BlockAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    block?: boolean | BlocksDefaultArgs<ExtArgs>
  }

  export type $BlockAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockAddress"
    objects: {
      block: Prisma.$BlocksPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      blockId: number
    }, ExtArgs["result"]["blockAddress"]>
    composites: {}
  }

  type BlockAddressGetPayload<S extends boolean | null | undefined | BlockAddressDefaultArgs> = $Result.GetResult<Prisma.$BlockAddressPayload, S>

  type BlockAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockAddressCountAggregateInputType | true
    }

  export interface BlockAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockAddress'], meta: { name: 'BlockAddress' } }
    /**
     * Find zero or one BlockAddress that matches the filter.
     * @param {BlockAddressFindUniqueArgs} args - Arguments to find a BlockAddress
     * @example
     * // Get one BlockAddress
     * const blockAddress = await prisma.blockAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockAddressFindUniqueArgs>(args: SelectSubset<T, BlockAddressFindUniqueArgs<ExtArgs>>): Prisma__BlockAddressClient<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockAddressFindUniqueOrThrowArgs} args - Arguments to find a BlockAddress
     * @example
     * // Get one BlockAddress
     * const blockAddress = await prisma.blockAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockAddressClient<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAddressFindFirstArgs} args - Arguments to find a BlockAddress
     * @example
     * // Get one BlockAddress
     * const blockAddress = await prisma.blockAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockAddressFindFirstArgs>(args?: SelectSubset<T, BlockAddressFindFirstArgs<ExtArgs>>): Prisma__BlockAddressClient<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAddressFindFirstOrThrowArgs} args - Arguments to find a BlockAddress
     * @example
     * // Get one BlockAddress
     * const blockAddress = await prisma.blockAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockAddressClient<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockAddresses
     * const blockAddresses = await prisma.blockAddress.findMany()
     * 
     * // Get first 10 BlockAddresses
     * const blockAddresses = await prisma.blockAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockAddressWithIdOnly = await prisma.blockAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockAddressFindManyArgs>(args?: SelectSubset<T, BlockAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockAddress.
     * @param {BlockAddressCreateArgs} args - Arguments to create a BlockAddress.
     * @example
     * // Create one BlockAddress
     * const BlockAddress = await prisma.blockAddress.create({
     *   data: {
     *     // ... data to create a BlockAddress
     *   }
     * })
     * 
     */
    create<T extends BlockAddressCreateArgs>(args: SelectSubset<T, BlockAddressCreateArgs<ExtArgs>>): Prisma__BlockAddressClient<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockAddresses.
     * @param {BlockAddressCreateManyArgs} args - Arguments to create many BlockAddresses.
     * @example
     * // Create many BlockAddresses
     * const blockAddress = await prisma.blockAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockAddressCreateManyArgs>(args?: SelectSubset<T, BlockAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockAddresses and returns the data saved in the database.
     * @param {BlockAddressCreateManyAndReturnArgs} args - Arguments to create many BlockAddresses.
     * @example
     * // Create many BlockAddresses
     * const blockAddress = await prisma.blockAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockAddresses and only return the `id`
     * const blockAddressWithIdOnly = await prisma.blockAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockAddress.
     * @param {BlockAddressDeleteArgs} args - Arguments to delete one BlockAddress.
     * @example
     * // Delete one BlockAddress
     * const BlockAddress = await prisma.blockAddress.delete({
     *   where: {
     *     // ... filter to delete one BlockAddress
     *   }
     * })
     * 
     */
    delete<T extends BlockAddressDeleteArgs>(args: SelectSubset<T, BlockAddressDeleteArgs<ExtArgs>>): Prisma__BlockAddressClient<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockAddress.
     * @param {BlockAddressUpdateArgs} args - Arguments to update one BlockAddress.
     * @example
     * // Update one BlockAddress
     * const blockAddress = await prisma.blockAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockAddressUpdateArgs>(args: SelectSubset<T, BlockAddressUpdateArgs<ExtArgs>>): Prisma__BlockAddressClient<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockAddresses.
     * @param {BlockAddressDeleteManyArgs} args - Arguments to filter BlockAddresses to delete.
     * @example
     * // Delete a few BlockAddresses
     * const { count } = await prisma.blockAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockAddressDeleteManyArgs>(args?: SelectSubset<T, BlockAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockAddresses
     * const blockAddress = await prisma.blockAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockAddressUpdateManyArgs>(args: SelectSubset<T, BlockAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockAddresses and returns the data updated in the database.
     * @param {BlockAddressUpdateManyAndReturnArgs} args - Arguments to update many BlockAddresses.
     * @example
     * // Update many BlockAddresses
     * const blockAddress = await prisma.blockAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockAddresses and only return the `id`
     * const blockAddressWithIdOnly = await prisma.blockAddress.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends BlockAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockAddress.
     * @param {BlockAddressUpsertArgs} args - Arguments to update or create a BlockAddress.
     * @example
     * // Update or create a BlockAddress
     * const blockAddress = await prisma.blockAddress.upsert({
     *   create: {
     *     // ... data to create a BlockAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockAddress we want to update
     *   }
     * })
     */
    upsert<T extends BlockAddressUpsertArgs>(args: SelectSubset<T, BlockAddressUpsertArgs<ExtArgs>>): Prisma__BlockAddressClient<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAddressCountArgs} args - Arguments to filter BlockAddresses to count.
     * @example
     * // Count the number of BlockAddresses
     * const count = await prisma.blockAddress.count({
     *   where: {
     *     // ... the filter for the BlockAddresses we want to count
     *   }
     * })
    **/
    count<T extends BlockAddressCountArgs>(
      args?: Subset<T, BlockAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockAddressAggregateArgs>(args: Subset<T, BlockAddressAggregateArgs>): Prisma.PrismaPromise<GetBlockAddressAggregateType<T>>

    /**
     * Group by BlockAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAddressGroupByArgs} args - Group by arguments.
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
      T extends BlockAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockAddressGroupByArgs['orderBy'] }
        : { orderBy?: BlockAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockAddress model
   */
  readonly fields: BlockAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    block<T extends BlocksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlocksDefaultArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends BlockAddress$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, BlockAddress$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BlockAddress model
   */
  interface BlockAddressFieldRefs {
    readonly id: FieldRef<"BlockAddress", 'Int'>
    readonly address: FieldRef<"BlockAddress", 'String'>
    readonly blockId: FieldRef<"BlockAddress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BlockAddress findUnique
   */
  export type BlockAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    /**
     * Filter, which BlockAddress to fetch.
     */
    where: BlockAddressWhereUniqueInput
  }

  /**
   * BlockAddress findUniqueOrThrow
   */
  export type BlockAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    /**
     * Filter, which BlockAddress to fetch.
     */
    where: BlockAddressWhereUniqueInput
  }

  /**
   * BlockAddress findFirst
   */
  export type BlockAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    /**
     * Filter, which BlockAddress to fetch.
     */
    where?: BlockAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockAddresses to fetch.
     */
    orderBy?: BlockAddressOrderByWithRelationInput | BlockAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockAddresses.
     */
    cursor?: BlockAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockAddresses.
     */
    distinct?: BlockAddressScalarFieldEnum | BlockAddressScalarFieldEnum[]
  }

  /**
   * BlockAddress findFirstOrThrow
   */
  export type BlockAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    /**
     * Filter, which BlockAddress to fetch.
     */
    where?: BlockAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockAddresses to fetch.
     */
    orderBy?: BlockAddressOrderByWithRelationInput | BlockAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockAddresses.
     */
    cursor?: BlockAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockAddresses.
     */
    distinct?: BlockAddressScalarFieldEnum | BlockAddressScalarFieldEnum[]
  }

  /**
   * BlockAddress findMany
   */
  export type BlockAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    /**
     * Filter, which BlockAddresses to fetch.
     */
    where?: BlockAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockAddresses to fetch.
     */
    orderBy?: BlockAddressOrderByWithRelationInput | BlockAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockAddresses.
     */
    cursor?: BlockAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockAddresses.
     */
    skip?: number
    distinct?: BlockAddressScalarFieldEnum | BlockAddressScalarFieldEnum[]
  }

  /**
   * BlockAddress create
   */
  export type BlockAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockAddress.
     */
    data: XOR<BlockAddressCreateInput, BlockAddressUncheckedCreateInput>
  }

  /**
   * BlockAddress createMany
   */
  export type BlockAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockAddresses.
     */
    data: BlockAddressCreateManyInput | BlockAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockAddress createManyAndReturn
   */
  export type BlockAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * The data used to create many BlockAddresses.
     */
    data: BlockAddressCreateManyInput | BlockAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockAddress update
   */
  export type BlockAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockAddress.
     */
    data: XOR<BlockAddressUpdateInput, BlockAddressUncheckedUpdateInput>
    /**
     * Choose, which BlockAddress to update.
     */
    where: BlockAddressWhereUniqueInput
  }

  /**
   * BlockAddress updateMany
   */
  export type BlockAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockAddresses.
     */
    data: XOR<BlockAddressUpdateManyMutationInput, BlockAddressUncheckedUpdateManyInput>
    /**
     * Filter which BlockAddresses to update
     */
    where?: BlockAddressWhereInput
    /**
     * Limit how many BlockAddresses to update.
     */
    limit?: number
  }

  /**
   * BlockAddress updateManyAndReturn
   */
  export type BlockAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * The data used to update BlockAddresses.
     */
    data: XOR<BlockAddressUpdateManyMutationInput, BlockAddressUncheckedUpdateManyInput>
    /**
     * Filter which BlockAddresses to update
     */
    where?: BlockAddressWhereInput
    /**
     * Limit how many BlockAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockAddress upsert
   */
  export type BlockAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockAddress to update in case it exists.
     */
    where: BlockAddressWhereUniqueInput
    /**
     * In case the BlockAddress found by the `where` argument doesn't exist, create a new BlockAddress with this data.
     */
    create: XOR<BlockAddressCreateInput, BlockAddressUncheckedCreateInput>
    /**
     * In case the BlockAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockAddressUpdateInput, BlockAddressUncheckedUpdateInput>
  }

  /**
   * BlockAddress delete
   */
  export type BlockAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    /**
     * Filter which BlockAddress to delete.
     */
    where: BlockAddressWhereUniqueInput
  }

  /**
   * BlockAddress deleteMany
   */
  export type BlockAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockAddresses to delete
     */
    where?: BlockAddressWhereInput
    /**
     * Limit how many BlockAddresses to delete.
     */
    limit?: number
  }

  /**
   * BlockAddress.transactions
   */
  export type BlockAddress$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * BlockAddress without action
   */
  export type BlockAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    blockAddressId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    blockAddressId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    txHash: string | null
    blockAddressId: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    txHash: string | null
    blockAddressId: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    txHash: number
    blockAddressId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    blockAddressId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    blockAddressId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    txHash?: true
    blockAddressId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    txHash?: true
    blockAddressId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    txHash?: true
    blockAddressId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    txHash: string
    blockAddressId: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    blockAddressId?: boolean
    blockAddress?: boolean | BlockAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    blockAddressId?: boolean
    blockAddress?: boolean | BlockAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    blockAddressId?: boolean
    blockAddress?: boolean | BlockAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    txHash?: boolean
    blockAddressId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txHash" | "blockAddressId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blockAddress?: boolean | BlockAddressDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blockAddress?: boolean | BlockAddressDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blockAddress?: boolean | BlockAddressDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      blockAddress: Prisma.$BlockAddressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      txHash: string
      blockAddressId: number
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blockAddress<T extends BlockAddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlockAddressDefaultArgs<ExtArgs>>): Prisma__BlockAddressClient<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly txHash: FieldRef<"Transaction", 'String'>
    readonly blockAddressId: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Blocks
   */

  export type AggregateBlocks = {
    _count: BlocksCountAggregateOutputType | null
    _avg: BlocksAvgAggregateOutputType | null
    _sum: BlocksSumAggregateOutputType | null
    _min: BlocksMinAggregateOutputType | null
    _max: BlocksMaxAggregateOutputType | null
  }

  export type BlocksAvgAggregateOutputType = {
    id: number | null
  }

  export type BlocksSumAggregateOutputType = {
    id: number | null
  }

  export type BlocksMinAggregateOutputType = {
    id: number | null
    blockHash: string | null
    createdAt: Date | null
  }

  export type BlocksMaxAggregateOutputType = {
    id: number | null
    blockHash: string | null
    createdAt: Date | null
  }

  export type BlocksCountAggregateOutputType = {
    id: number
    blockHash: number
    createdAt: number
    _all: number
  }


  export type BlocksAvgAggregateInputType = {
    id?: true
  }

  export type BlocksSumAggregateInputType = {
    id?: true
  }

  export type BlocksMinAggregateInputType = {
    id?: true
    blockHash?: true
    createdAt?: true
  }

  export type BlocksMaxAggregateInputType = {
    id?: true
    blockHash?: true
    createdAt?: true
  }

  export type BlocksCountAggregateInputType = {
    id?: true
    blockHash?: true
    createdAt?: true
    _all?: true
  }

  export type BlocksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to aggregate.
     */
    where?: BlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlocksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlocksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlocksMaxAggregateInputType
  }

  export type GetBlocksAggregateType<T extends BlocksAggregateArgs> = {
        [P in keyof T & keyof AggregateBlocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlocks[P]>
      : GetScalarType<T[P], AggregateBlocks[P]>
  }




  export type BlocksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlocksWhereInput
    orderBy?: BlocksOrderByWithAggregationInput | BlocksOrderByWithAggregationInput[]
    by: BlocksScalarFieldEnum[] | BlocksScalarFieldEnum
    having?: BlocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlocksCountAggregateInputType | true
    _avg?: BlocksAvgAggregateInputType
    _sum?: BlocksSumAggregateInputType
    _min?: BlocksMinAggregateInputType
    _max?: BlocksMaxAggregateInputType
  }

  export type BlocksGroupByOutputType = {
    id: number
    blockHash: string
    createdAt: Date
    _count: BlocksCountAggregateOutputType | null
    _avg: BlocksAvgAggregateOutputType | null
    _sum: BlocksSumAggregateOutputType | null
    _min: BlocksMinAggregateOutputType | null
    _max: BlocksMaxAggregateOutputType | null
  }

  type GetBlocksGroupByPayload<T extends BlocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlocksGroupByOutputType[P]>
            : GetScalarType<T[P], BlocksGroupByOutputType[P]>
        }
      >
    >


  export type BlocksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockHash?: boolean
    createdAt?: boolean
    addresses?: boolean | Blocks$addressesArgs<ExtArgs>
    _count?: boolean | BlocksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blocks"]>

  export type BlocksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blocks"]>

  export type BlocksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blocks"]>

  export type BlocksSelectScalar = {
    id?: boolean
    blockHash?: boolean
    createdAt?: boolean
  }

  export type BlocksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockHash" | "createdAt", ExtArgs["result"]["blocks"]>
  export type BlocksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | Blocks$addressesArgs<ExtArgs>
    _count?: boolean | BlocksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlocksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlocksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlocksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blocks"
    objects: {
      addresses: Prisma.$BlockAddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blockHash: string
      createdAt: Date
    }, ExtArgs["result"]["blocks"]>
    composites: {}
  }

  type BlocksGetPayload<S extends boolean | null | undefined | BlocksDefaultArgs> = $Result.GetResult<Prisma.$BlocksPayload, S>

  type BlocksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlocksCountAggregateInputType | true
    }

  export interface BlocksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blocks'], meta: { name: 'Blocks' } }
    /**
     * Find zero or one Blocks that matches the filter.
     * @param {BlocksFindUniqueArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlocksFindUniqueArgs>(args: SelectSubset<T, BlocksFindUniqueArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blocks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlocksFindUniqueOrThrowArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlocksFindUniqueOrThrowArgs>(args: SelectSubset<T, BlocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksFindFirstArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlocksFindFirstArgs>(args?: SelectSubset<T, BlocksFindFirstArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blocks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksFindFirstOrThrowArgs} args - Arguments to find a Blocks
     * @example
     * // Get one Blocks
     * const blocks = await prisma.blocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlocksFindFirstOrThrowArgs>(args?: SelectSubset<T, BlocksFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.blocks.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.blocks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blocksWithIdOnly = await prisma.blocks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlocksFindManyArgs>(args?: SelectSubset<T, BlocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blocks.
     * @param {BlocksCreateArgs} args - Arguments to create a Blocks.
     * @example
     * // Create one Blocks
     * const Blocks = await prisma.blocks.create({
     *   data: {
     *     // ... data to create a Blocks
     *   }
     * })
     * 
     */
    create<T extends BlocksCreateArgs>(args: SelectSubset<T, BlocksCreateArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blocks.
     * @param {BlocksCreateManyArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const blocks = await prisma.blocks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlocksCreateManyArgs>(args?: SelectSubset<T, BlocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blocks and returns the data saved in the database.
     * @param {BlocksCreateManyAndReturnArgs} args - Arguments to create many Blocks.
     * @example
     * // Create many Blocks
     * const blocks = await prisma.blocks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blocks and only return the `id`
     * const blocksWithIdOnly = await prisma.blocks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlocksCreateManyAndReturnArgs>(args?: SelectSubset<T, BlocksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blocks.
     * @param {BlocksDeleteArgs} args - Arguments to delete one Blocks.
     * @example
     * // Delete one Blocks
     * const Blocks = await prisma.blocks.delete({
     *   where: {
     *     // ... filter to delete one Blocks
     *   }
     * })
     * 
     */
    delete<T extends BlocksDeleteArgs>(args: SelectSubset<T, BlocksDeleteArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blocks.
     * @param {BlocksUpdateArgs} args - Arguments to update one Blocks.
     * @example
     * // Update one Blocks
     * const blocks = await prisma.blocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlocksUpdateArgs>(args: SelectSubset<T, BlocksUpdateArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blocks.
     * @param {BlocksDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.blocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlocksDeleteManyArgs>(args?: SelectSubset<T, BlocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const blocks = await prisma.blocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlocksUpdateManyArgs>(args: SelectSubset<T, BlocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks and returns the data updated in the database.
     * @param {BlocksUpdateManyAndReturnArgs} args - Arguments to update many Blocks.
     * @example
     * // Update many Blocks
     * const blocks = await prisma.blocks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blocks and only return the `id`
     * const blocksWithIdOnly = await prisma.blocks.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends BlocksUpdateManyAndReturnArgs>(args: SelectSubset<T, BlocksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blocks.
     * @param {BlocksUpsertArgs} args - Arguments to update or create a Blocks.
     * @example
     * // Update or create a Blocks
     * const blocks = await prisma.blocks.upsert({
     *   create: {
     *     // ... data to create a Blocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blocks we want to update
     *   }
     * })
     */
    upsert<T extends BlocksUpsertArgs>(args: SelectSubset<T, BlocksUpsertArgs<ExtArgs>>): Prisma__BlocksClient<$Result.GetResult<Prisma.$BlocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.blocks.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlocksCountArgs>(
      args?: Subset<T, BlocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlocksAggregateArgs>(args: Subset<T, BlocksAggregateArgs>): Prisma.PrismaPromise<GetBlocksAggregateType<T>>

    /**
     * Group by Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlocksGroupByArgs} args - Group by arguments.
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
      T extends BlocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlocksGroupByArgs['orderBy'] }
        : { orderBy?: BlocksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blocks model
   */
  readonly fields: BlocksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlocksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends Blocks$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Blocks$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Blocks model
   */
  interface BlocksFieldRefs {
    readonly id: FieldRef<"Blocks", 'Int'>
    readonly blockHash: FieldRef<"Blocks", 'String'>
    readonly createdAt: FieldRef<"Blocks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blocks findUnique
   */
  export type BlocksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where: BlocksWhereUniqueInput
  }

  /**
   * Blocks findUniqueOrThrow
   */
  export type BlocksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where: BlocksWhereUniqueInput
  }

  /**
   * Blocks findFirst
   */
  export type BlocksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * Blocks findFirstOrThrow
   */
  export type BlocksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * Blocks findMany
   */
  export type BlocksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlocksOrderByWithRelationInput | BlocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlocksScalarFieldEnum | BlocksScalarFieldEnum[]
  }

  /**
   * Blocks create
   */
  export type BlocksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * The data needed to create a Blocks.
     */
    data: XOR<BlocksCreateInput, BlocksUncheckedCreateInput>
  }

  /**
   * Blocks createMany
   */
  export type BlocksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlocksCreateManyInput | BlocksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blocks createManyAndReturn
   */
  export type BlocksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * The data used to create many Blocks.
     */
    data: BlocksCreateManyInput | BlocksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blocks update
   */
  export type BlocksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * The data needed to update a Blocks.
     */
    data: XOR<BlocksUpdateInput, BlocksUncheckedUpdateInput>
    /**
     * Choose, which Blocks to update.
     */
    where: BlocksWhereUniqueInput
  }

  /**
   * Blocks updateMany
   */
  export type BlocksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlocksUpdateManyMutationInput, BlocksUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlocksWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Blocks updateManyAndReturn
   */
  export type BlocksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlocksUpdateManyMutationInput, BlocksUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlocksWhereInput
    /**
     * Limit how many Blocks to update.
     */
    limit?: number
  }

  /**
   * Blocks upsert
   */
  export type BlocksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * The filter to search for the Blocks to update in case it exists.
     */
    where: BlocksWhereUniqueInput
    /**
     * In case the Blocks found by the `where` argument doesn't exist, create a new Blocks with this data.
     */
    create: XOR<BlocksCreateInput, BlocksUncheckedCreateInput>
    /**
     * In case the Blocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlocksUpdateInput, BlocksUncheckedUpdateInput>
  }

  /**
   * Blocks delete
   */
  export type BlocksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
    /**
     * Filter which Blocks to delete.
     */
    where: BlocksWhereUniqueInput
  }

  /**
   * Blocks deleteMany
   */
  export type BlocksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlocksWhereInput
    /**
     * Limit how many Blocks to delete.
     */
    limit?: number
  }

  /**
   * Blocks.addresses
   */
  export type Blocks$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockAddress
     */
    select?: BlockAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockAddress
     */
    omit?: BlockAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockAddressInclude<ExtArgs> | null
    where?: BlockAddressWhereInput
    orderBy?: BlockAddressOrderByWithRelationInput | BlockAddressOrderByWithRelationInput[]
    cursor?: BlockAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockAddressScalarFieldEnum | BlockAddressScalarFieldEnum[]
  }

  /**
   * Blocks without action
   */
  export type BlocksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blocks
     */
    select?: BlocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blocks
     */
    omit?: BlocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlocksInclude<ExtArgs> | null
  }


  /**
   * Model AddressToWatch
   */

  export type AggregateAddressToWatch = {
    _count: AddressToWatchCountAggregateOutputType | null
    _avg: AddressToWatchAvgAggregateOutputType | null
    _sum: AddressToWatchSumAggregateOutputType | null
    _min: AddressToWatchMinAggregateOutputType | null
    _max: AddressToWatchMaxAggregateOutputType | null
  }

  export type AddressToWatchAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressToWatchSumAggregateOutputType = {
    id: number | null
  }

  export type AddressToWatchMinAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
    type: $Enums.LocalStateType | null
  }

  export type AddressToWatchMaxAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
    type: $Enums.LocalStateType | null
  }

  export type AddressToWatchCountAggregateOutputType = {
    id: number
    key: number
    value: number
    type: number
    _all: number
  }


  export type AddressToWatchAvgAggregateInputType = {
    id?: true
  }

  export type AddressToWatchSumAggregateInputType = {
    id?: true
  }

  export type AddressToWatchMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
  }

  export type AddressToWatchMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
  }

  export type AddressToWatchCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    _all?: true
  }

  export type AddressToWatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddressToWatch to aggregate.
     */
    where?: AddressToWatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressToWatches to fetch.
     */
    orderBy?: AddressToWatchOrderByWithRelationInput | AddressToWatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressToWatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressToWatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressToWatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddressToWatches
    **/
    _count?: true | AddressToWatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressToWatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressToWatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressToWatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressToWatchMaxAggregateInputType
  }

  export type GetAddressToWatchAggregateType<T extends AddressToWatchAggregateArgs> = {
        [P in keyof T & keyof AggregateAddressToWatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddressToWatch[P]>
      : GetScalarType<T[P], AggregateAddressToWatch[P]>
  }




  export type AddressToWatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressToWatchWhereInput
    orderBy?: AddressToWatchOrderByWithAggregationInput | AddressToWatchOrderByWithAggregationInput[]
    by: AddressToWatchScalarFieldEnum[] | AddressToWatchScalarFieldEnum
    having?: AddressToWatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressToWatchCountAggregateInputType | true
    _avg?: AddressToWatchAvgAggregateInputType
    _sum?: AddressToWatchSumAggregateInputType
    _min?: AddressToWatchMinAggregateInputType
    _max?: AddressToWatchMaxAggregateInputType
  }

  export type AddressToWatchGroupByOutputType = {
    id: number
    key: string
    value: string
    type: $Enums.LocalStateType | null
    _count: AddressToWatchCountAggregateOutputType | null
    _avg: AddressToWatchAvgAggregateOutputType | null
    _sum: AddressToWatchSumAggregateOutputType | null
    _min: AddressToWatchMinAggregateOutputType | null
    _max: AddressToWatchMaxAggregateOutputType | null
  }

  type GetAddressToWatchGroupByPayload<T extends AddressToWatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressToWatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressToWatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressToWatchGroupByOutputType[P]>
            : GetScalarType<T[P], AddressToWatchGroupByOutputType[P]>
        }
      >
    >


  export type AddressToWatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
  }, ExtArgs["result"]["addressToWatch"]>

  export type AddressToWatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
  }, ExtArgs["result"]["addressToWatch"]>

  export type AddressToWatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
  }, ExtArgs["result"]["addressToWatch"]>

  export type AddressToWatchSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
  }

  export type AddressToWatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "type", ExtArgs["result"]["addressToWatch"]>

  export type $AddressToWatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddressToWatch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      value: string
      type: $Enums.LocalStateType | null
    }, ExtArgs["result"]["addressToWatch"]>
    composites: {}
  }

  type AddressToWatchGetPayload<S extends boolean | null | undefined | AddressToWatchDefaultArgs> = $Result.GetResult<Prisma.$AddressToWatchPayload, S>

  type AddressToWatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressToWatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressToWatchCountAggregateInputType | true
    }

  export interface AddressToWatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddressToWatch'], meta: { name: 'AddressToWatch' } }
    /**
     * Find zero or one AddressToWatch that matches the filter.
     * @param {AddressToWatchFindUniqueArgs} args - Arguments to find a AddressToWatch
     * @example
     * // Get one AddressToWatch
     * const addressToWatch = await prisma.addressToWatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressToWatchFindUniqueArgs>(args: SelectSubset<T, AddressToWatchFindUniqueArgs<ExtArgs>>): Prisma__AddressToWatchClient<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddressToWatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressToWatchFindUniqueOrThrowArgs} args - Arguments to find a AddressToWatch
     * @example
     * // Get one AddressToWatch
     * const addressToWatch = await prisma.addressToWatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressToWatchFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressToWatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressToWatchClient<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddressToWatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchFindFirstArgs} args - Arguments to find a AddressToWatch
     * @example
     * // Get one AddressToWatch
     * const addressToWatch = await prisma.addressToWatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressToWatchFindFirstArgs>(args?: SelectSubset<T, AddressToWatchFindFirstArgs<ExtArgs>>): Prisma__AddressToWatchClient<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddressToWatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchFindFirstOrThrowArgs} args - Arguments to find a AddressToWatch
     * @example
     * // Get one AddressToWatch
     * const addressToWatch = await prisma.addressToWatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressToWatchFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressToWatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressToWatchClient<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddressToWatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddressToWatches
     * const addressToWatches = await prisma.addressToWatch.findMany()
     * 
     * // Get first 10 AddressToWatches
     * const addressToWatches = await prisma.addressToWatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressToWatchWithIdOnly = await prisma.addressToWatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressToWatchFindManyArgs>(args?: SelectSubset<T, AddressToWatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddressToWatch.
     * @param {AddressToWatchCreateArgs} args - Arguments to create a AddressToWatch.
     * @example
     * // Create one AddressToWatch
     * const AddressToWatch = await prisma.addressToWatch.create({
     *   data: {
     *     // ... data to create a AddressToWatch
     *   }
     * })
     * 
     */
    create<T extends AddressToWatchCreateArgs>(args: SelectSubset<T, AddressToWatchCreateArgs<ExtArgs>>): Prisma__AddressToWatchClient<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddressToWatches.
     * @param {AddressToWatchCreateManyArgs} args - Arguments to create many AddressToWatches.
     * @example
     * // Create many AddressToWatches
     * const addressToWatch = await prisma.addressToWatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressToWatchCreateManyArgs>(args?: SelectSubset<T, AddressToWatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AddressToWatches and returns the data saved in the database.
     * @param {AddressToWatchCreateManyAndReturnArgs} args - Arguments to create many AddressToWatches.
     * @example
     * // Create many AddressToWatches
     * const addressToWatch = await prisma.addressToWatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AddressToWatches and only return the `id`
     * const addressToWatchWithIdOnly = await prisma.addressToWatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressToWatchCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressToWatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AddressToWatch.
     * @param {AddressToWatchDeleteArgs} args - Arguments to delete one AddressToWatch.
     * @example
     * // Delete one AddressToWatch
     * const AddressToWatch = await prisma.addressToWatch.delete({
     *   where: {
     *     // ... filter to delete one AddressToWatch
     *   }
     * })
     * 
     */
    delete<T extends AddressToWatchDeleteArgs>(args: SelectSubset<T, AddressToWatchDeleteArgs<ExtArgs>>): Prisma__AddressToWatchClient<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddressToWatch.
     * @param {AddressToWatchUpdateArgs} args - Arguments to update one AddressToWatch.
     * @example
     * // Update one AddressToWatch
     * const addressToWatch = await prisma.addressToWatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressToWatchUpdateArgs>(args: SelectSubset<T, AddressToWatchUpdateArgs<ExtArgs>>): Prisma__AddressToWatchClient<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddressToWatches.
     * @param {AddressToWatchDeleteManyArgs} args - Arguments to filter AddressToWatches to delete.
     * @example
     * // Delete a few AddressToWatches
     * const { count } = await prisma.addressToWatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressToWatchDeleteManyArgs>(args?: SelectSubset<T, AddressToWatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddressToWatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddressToWatches
     * const addressToWatch = await prisma.addressToWatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressToWatchUpdateManyArgs>(args: SelectSubset<T, AddressToWatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddressToWatches and returns the data updated in the database.
     * @param {AddressToWatchUpdateManyAndReturnArgs} args - Arguments to update many AddressToWatches.
     * @example
     * // Update many AddressToWatches
     * const addressToWatch = await prisma.addressToWatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AddressToWatches and only return the `id`
     * const addressToWatchWithIdOnly = await prisma.addressToWatch.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AddressToWatchUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressToWatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AddressToWatch.
     * @param {AddressToWatchUpsertArgs} args - Arguments to update or create a AddressToWatch.
     * @example
     * // Update or create a AddressToWatch
     * const addressToWatch = await prisma.addressToWatch.upsert({
     *   create: {
     *     // ... data to create a AddressToWatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddressToWatch we want to update
     *   }
     * })
     */
    upsert<T extends AddressToWatchUpsertArgs>(args: SelectSubset<T, AddressToWatchUpsertArgs<ExtArgs>>): Prisma__AddressToWatchClient<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddressToWatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchCountArgs} args - Arguments to filter AddressToWatches to count.
     * @example
     * // Count the number of AddressToWatches
     * const count = await prisma.addressToWatch.count({
     *   where: {
     *     // ... the filter for the AddressToWatches we want to count
     *   }
     * })
    **/
    count<T extends AddressToWatchCountArgs>(
      args?: Subset<T, AddressToWatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressToWatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddressToWatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressToWatchAggregateArgs>(args: Subset<T, AddressToWatchAggregateArgs>): Prisma.PrismaPromise<GetAddressToWatchAggregateType<T>>

    /**
     * Group by AddressToWatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchGroupByArgs} args - Group by arguments.
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
      T extends AddressToWatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressToWatchGroupByArgs['orderBy'] }
        : { orderBy?: AddressToWatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressToWatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressToWatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddressToWatch model
   */
  readonly fields: AddressToWatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddressToWatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressToWatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AddressToWatch model
   */
  interface AddressToWatchFieldRefs {
    readonly id: FieldRef<"AddressToWatch", 'Int'>
    readonly key: FieldRef<"AddressToWatch", 'String'>
    readonly value: FieldRef<"AddressToWatch", 'String'>
    readonly type: FieldRef<"AddressToWatch", 'LocalStateType'>
  }
    

  // Custom InputTypes
  /**
   * AddressToWatch findUnique
   */
  export type AddressToWatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatch to fetch.
     */
    where: AddressToWatchWhereUniqueInput
  }

  /**
   * AddressToWatch findUniqueOrThrow
   */
  export type AddressToWatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatch to fetch.
     */
    where: AddressToWatchWhereUniqueInput
  }

  /**
   * AddressToWatch findFirst
   */
  export type AddressToWatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatch to fetch.
     */
    where?: AddressToWatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressToWatches to fetch.
     */
    orderBy?: AddressToWatchOrderByWithRelationInput | AddressToWatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddressToWatches.
     */
    cursor?: AddressToWatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressToWatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressToWatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddressToWatches.
     */
    distinct?: AddressToWatchScalarFieldEnum | AddressToWatchScalarFieldEnum[]
  }

  /**
   * AddressToWatch findFirstOrThrow
   */
  export type AddressToWatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatch to fetch.
     */
    where?: AddressToWatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressToWatches to fetch.
     */
    orderBy?: AddressToWatchOrderByWithRelationInput | AddressToWatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddressToWatches.
     */
    cursor?: AddressToWatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressToWatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressToWatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddressToWatches.
     */
    distinct?: AddressToWatchScalarFieldEnum | AddressToWatchScalarFieldEnum[]
  }

  /**
   * AddressToWatch findMany
   */
  export type AddressToWatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatches to fetch.
     */
    where?: AddressToWatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressToWatches to fetch.
     */
    orderBy?: AddressToWatchOrderByWithRelationInput | AddressToWatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddressToWatches.
     */
    cursor?: AddressToWatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressToWatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressToWatches.
     */
    skip?: number
    distinct?: AddressToWatchScalarFieldEnum | AddressToWatchScalarFieldEnum[]
  }

  /**
   * AddressToWatch create
   */
  export type AddressToWatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * The data needed to create a AddressToWatch.
     */
    data: XOR<AddressToWatchCreateInput, AddressToWatchUncheckedCreateInput>
  }

  /**
   * AddressToWatch createMany
   */
  export type AddressToWatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddressToWatches.
     */
    data: AddressToWatchCreateManyInput | AddressToWatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddressToWatch createManyAndReturn
   */
  export type AddressToWatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * The data used to create many AddressToWatches.
     */
    data: AddressToWatchCreateManyInput | AddressToWatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddressToWatch update
   */
  export type AddressToWatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * The data needed to update a AddressToWatch.
     */
    data: XOR<AddressToWatchUpdateInput, AddressToWatchUncheckedUpdateInput>
    /**
     * Choose, which AddressToWatch to update.
     */
    where: AddressToWatchWhereUniqueInput
  }

  /**
   * AddressToWatch updateMany
   */
  export type AddressToWatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddressToWatches.
     */
    data: XOR<AddressToWatchUpdateManyMutationInput, AddressToWatchUncheckedUpdateManyInput>
    /**
     * Filter which AddressToWatches to update
     */
    where?: AddressToWatchWhereInput
    /**
     * Limit how many AddressToWatches to update.
     */
    limit?: number
  }

  /**
   * AddressToWatch updateManyAndReturn
   */
  export type AddressToWatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * The data used to update AddressToWatches.
     */
    data: XOR<AddressToWatchUpdateManyMutationInput, AddressToWatchUncheckedUpdateManyInput>
    /**
     * Filter which AddressToWatches to update
     */
    where?: AddressToWatchWhereInput
    /**
     * Limit how many AddressToWatches to update.
     */
    limit?: number
  }

  /**
   * AddressToWatch upsert
   */
  export type AddressToWatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * The filter to search for the AddressToWatch to update in case it exists.
     */
    where: AddressToWatchWhereUniqueInput
    /**
     * In case the AddressToWatch found by the `where` argument doesn't exist, create a new AddressToWatch with this data.
     */
    create: XOR<AddressToWatchCreateInput, AddressToWatchUncheckedCreateInput>
    /**
     * In case the AddressToWatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressToWatchUpdateInput, AddressToWatchUncheckedUpdateInput>
  }

  /**
   * AddressToWatch delete
   */
  export type AddressToWatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * Filter which AddressToWatch to delete.
     */
    where: AddressToWatchWhereUniqueInput
  }

  /**
   * AddressToWatch deleteMany
   */
  export type AddressToWatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddressToWatches to delete
     */
    where?: AddressToWatchWhereInput
    /**
     * Limit how many AddressToWatches to delete.
     */
    limit?: number
  }

  /**
   * AddressToWatch without action
   */
  export type AddressToWatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
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


  export const BlockAddressScalarFieldEnum: {
    id: 'id',
    address: 'address',
    blockId: 'blockId'
  };

  export type BlockAddressScalarFieldEnum = (typeof BlockAddressScalarFieldEnum)[keyof typeof BlockAddressScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    txHash: 'txHash',
    blockAddressId: 'blockAddressId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const BlocksScalarFieldEnum: {
    id: 'id',
    blockHash: 'blockHash',
    createdAt: 'createdAt'
  };

  export type BlocksScalarFieldEnum = (typeof BlocksScalarFieldEnum)[keyof typeof BlocksScalarFieldEnum]


  export const AddressToWatchScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    type: 'type'
  };

  export type AddressToWatchScalarFieldEnum = (typeof AddressToWatchScalarFieldEnum)[keyof typeof AddressToWatchScalarFieldEnum]


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
   * Reference to a field of type 'LocalStateType'
   */
  export type EnumLocalStateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocalStateType'>
    


  /**
   * Reference to a field of type 'LocalStateType[]'
   */
  export type ListEnumLocalStateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocalStateType[]'>
    


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


  export type BlockAddressWhereInput = {
    AND?: BlockAddressWhereInput | BlockAddressWhereInput[]
    OR?: BlockAddressWhereInput[]
    NOT?: BlockAddressWhereInput | BlockAddressWhereInput[]
    id?: IntFilter<"BlockAddress"> | number
    address?: StringFilter<"BlockAddress"> | string
    blockId?: IntFilter<"BlockAddress"> | number
    block?: XOR<BlocksScalarRelationFilter, BlocksWhereInput>
    transactions?: TransactionListRelationFilter
  }

  export type BlockAddressOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    blockId?: SortOrder
    block?: BlocksOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type BlockAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlockAddressWhereInput | BlockAddressWhereInput[]
    OR?: BlockAddressWhereInput[]
    NOT?: BlockAddressWhereInput | BlockAddressWhereInput[]
    address?: StringFilter<"BlockAddress"> | string
    blockId?: IntFilter<"BlockAddress"> | number
    block?: XOR<BlocksScalarRelationFilter, BlocksWhereInput>
    transactions?: TransactionListRelationFilter
  }, "id">

  export type BlockAddressOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    blockId?: SortOrder
    _count?: BlockAddressCountOrderByAggregateInput
    _avg?: BlockAddressAvgOrderByAggregateInput
    _max?: BlockAddressMaxOrderByAggregateInput
    _min?: BlockAddressMinOrderByAggregateInput
    _sum?: BlockAddressSumOrderByAggregateInput
  }

  export type BlockAddressScalarWhereWithAggregatesInput = {
    AND?: BlockAddressScalarWhereWithAggregatesInput | BlockAddressScalarWhereWithAggregatesInput[]
    OR?: BlockAddressScalarWhereWithAggregatesInput[]
    NOT?: BlockAddressScalarWhereWithAggregatesInput | BlockAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlockAddress"> | number
    address?: StringWithAggregatesFilter<"BlockAddress"> | string
    blockId?: IntWithAggregatesFilter<"BlockAddress"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    txHash?: StringFilter<"Transaction"> | string
    blockAddressId?: IntFilter<"Transaction"> | number
    blockAddress?: XOR<BlockAddressScalarRelationFilter, BlockAddressWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    txHash?: SortOrder
    blockAddressId?: SortOrder
    blockAddress?: BlockAddressOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    txHash?: StringFilter<"Transaction"> | string
    blockAddressId?: IntFilter<"Transaction"> | number
    blockAddress?: XOR<BlockAddressScalarRelationFilter, BlockAddressWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    txHash?: SortOrder
    blockAddressId?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    txHash?: StringWithAggregatesFilter<"Transaction"> | string
    blockAddressId?: IntWithAggregatesFilter<"Transaction"> | number
  }

  export type BlocksWhereInput = {
    AND?: BlocksWhereInput | BlocksWhereInput[]
    OR?: BlocksWhereInput[]
    NOT?: BlocksWhereInput | BlocksWhereInput[]
    id?: IntFilter<"Blocks"> | number
    blockHash?: StringFilter<"Blocks"> | string
    createdAt?: DateTimeFilter<"Blocks"> | Date | string
    addresses?: BlockAddressListRelationFilter
  }

  export type BlocksOrderByWithRelationInput = {
    id?: SortOrder
    blockHash?: SortOrder
    createdAt?: SortOrder
    addresses?: BlockAddressOrderByRelationAggregateInput
  }

  export type BlocksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    blockHash?: string
    AND?: BlocksWhereInput | BlocksWhereInput[]
    OR?: BlocksWhereInput[]
    NOT?: BlocksWhereInput | BlocksWhereInput[]
    createdAt?: DateTimeFilter<"Blocks"> | Date | string
    addresses?: BlockAddressListRelationFilter
  }, "id" | "blockHash">

  export type BlocksOrderByWithAggregationInput = {
    id?: SortOrder
    blockHash?: SortOrder
    createdAt?: SortOrder
    _count?: BlocksCountOrderByAggregateInput
    _avg?: BlocksAvgOrderByAggregateInput
    _max?: BlocksMaxOrderByAggregateInput
    _min?: BlocksMinOrderByAggregateInput
    _sum?: BlocksSumOrderByAggregateInput
  }

  export type BlocksScalarWhereWithAggregatesInput = {
    AND?: BlocksScalarWhereWithAggregatesInput | BlocksScalarWhereWithAggregatesInput[]
    OR?: BlocksScalarWhereWithAggregatesInput[]
    NOT?: BlocksScalarWhereWithAggregatesInput | BlocksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blocks"> | number
    blockHash?: StringWithAggregatesFilter<"Blocks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Blocks"> | Date | string
  }

  export type AddressToWatchWhereInput = {
    AND?: AddressToWatchWhereInput | AddressToWatchWhereInput[]
    OR?: AddressToWatchWhereInput[]
    NOT?: AddressToWatchWhereInput | AddressToWatchWhereInput[]
    id?: IntFilter<"AddressToWatch"> | number
    key?: StringFilter<"AddressToWatch"> | string
    value?: StringFilter<"AddressToWatch"> | string
    type?: EnumLocalStateTypeNullableFilter<"AddressToWatch"> | $Enums.LocalStateType | null
  }

  export type AddressToWatchOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrderInput | SortOrder
  }

  export type AddressToWatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: AddressToWatchWhereInput | AddressToWatchWhereInput[]
    OR?: AddressToWatchWhereInput[]
    NOT?: AddressToWatchWhereInput | AddressToWatchWhereInput[]
    value?: StringFilter<"AddressToWatch"> | string
    type?: EnumLocalStateTypeNullableFilter<"AddressToWatch"> | $Enums.LocalStateType | null
  }, "id" | "key">

  export type AddressToWatchOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrderInput | SortOrder
    _count?: AddressToWatchCountOrderByAggregateInput
    _avg?: AddressToWatchAvgOrderByAggregateInput
    _max?: AddressToWatchMaxOrderByAggregateInput
    _min?: AddressToWatchMinOrderByAggregateInput
    _sum?: AddressToWatchSumOrderByAggregateInput
  }

  export type AddressToWatchScalarWhereWithAggregatesInput = {
    AND?: AddressToWatchScalarWhereWithAggregatesInput | AddressToWatchScalarWhereWithAggregatesInput[]
    OR?: AddressToWatchScalarWhereWithAggregatesInput[]
    NOT?: AddressToWatchScalarWhereWithAggregatesInput | AddressToWatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddressToWatch"> | number
    key?: StringWithAggregatesFilter<"AddressToWatch"> | string
    value?: StringWithAggregatesFilter<"AddressToWatch"> | string
    type?: EnumLocalStateTypeNullableWithAggregatesFilter<"AddressToWatch"> | $Enums.LocalStateType | null
  }

  export type BlockAddressCreateInput = {
    address: string
    block: BlocksCreateNestedOneWithoutAddressesInput
    transactions?: TransactionCreateNestedManyWithoutBlockAddressInput
  }

  export type BlockAddressUncheckedCreateInput = {
    id?: number
    address: string
    blockId: number
    transactions?: TransactionUncheckedCreateNestedManyWithoutBlockAddressInput
  }

  export type BlockAddressUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    block?: BlocksUpdateOneRequiredWithoutAddressesNestedInput
    transactions?: TransactionUpdateManyWithoutBlockAddressNestedInput
  }

  export type BlockAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUncheckedUpdateManyWithoutBlockAddressNestedInput
  }

  export type BlockAddressCreateManyInput = {
    id?: number
    address: string
    blockId: number
  }

  export type BlockAddressUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
  }

  export type BlockAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    txHash: string
    blockAddress: BlockAddressCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    txHash: string
    blockAddressId: number
  }

  export type TransactionUpdateInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    blockAddress?: BlockAddressUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    blockAddressId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyInput = {
    id?: number
    txHash: string
    blockAddressId: number
  }

  export type TransactionUpdateManyMutationInput = {
    txHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    blockAddressId?: IntFieldUpdateOperationsInput | number
  }

  export type BlocksCreateInput = {
    blockHash: string
    createdAt?: Date | string
    addresses?: BlockAddressCreateNestedManyWithoutBlockInput
  }

  export type BlocksUncheckedCreateInput = {
    id?: number
    blockHash: string
    createdAt?: Date | string
    addresses?: BlockAddressUncheckedCreateNestedManyWithoutBlockInput
  }

  export type BlocksUpdateInput = {
    blockHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: BlockAddressUpdateManyWithoutBlockNestedInput
  }

  export type BlocksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: BlockAddressUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type BlocksCreateManyInput = {
    id?: number
    blockHash: string
    createdAt?: Date | string
  }

  export type BlocksUpdateManyMutationInput = {
    blockHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressToWatchCreateInput = {
    key: string
    value: string
    type?: $Enums.LocalStateType | null
  }

  export type AddressToWatchUncheckedCreateInput = {
    id?: number
    key: string
    value: string
    type?: $Enums.LocalStateType | null
  }

  export type AddressToWatchUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumLocalStateTypeFieldUpdateOperationsInput | $Enums.LocalStateType | null
  }

  export type AddressToWatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumLocalStateTypeFieldUpdateOperationsInput | $Enums.LocalStateType | null
  }

  export type AddressToWatchCreateManyInput = {
    id?: number
    key: string
    value: string
    type?: $Enums.LocalStateType | null
  }

  export type AddressToWatchUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumLocalStateTypeFieldUpdateOperationsInput | $Enums.LocalStateType | null
  }

  export type AddressToWatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumLocalStateTypeFieldUpdateOperationsInput | $Enums.LocalStateType | null
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

  export type BlocksScalarRelationFilter = {
    is?: BlocksWhereInput
    isNot?: BlocksWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockAddressCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    blockId?: SortOrder
  }

  export type BlockAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
  }

  export type BlockAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    blockId?: SortOrder
  }

  export type BlockAddressMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    blockId?: SortOrder
  }

  export type BlockAddressSumOrderByAggregateInput = {
    id?: SortOrder
    blockId?: SortOrder
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

  export type BlockAddressScalarRelationFilter = {
    is?: BlockAddressWhereInput
    isNot?: BlockAddressWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    blockAddressId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    blockAddressId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    blockAddressId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    blockAddressId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    blockAddressId?: SortOrder
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

  export type BlockAddressListRelationFilter = {
    every?: BlockAddressWhereInput
    some?: BlockAddressWhereInput
    none?: BlockAddressWhereInput
  }

  export type BlockAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlocksCountOrderByAggregateInput = {
    id?: SortOrder
    blockHash?: SortOrder
    createdAt?: SortOrder
  }

  export type BlocksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BlocksMaxOrderByAggregateInput = {
    id?: SortOrder
    blockHash?: SortOrder
    createdAt?: SortOrder
  }

  export type BlocksMinOrderByAggregateInput = {
    id?: SortOrder
    blockHash?: SortOrder
    createdAt?: SortOrder
  }

  export type BlocksSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumLocalStateTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LocalStateType | EnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLocalStateTypeNullableFilter<$PrismaModel> | $Enums.LocalStateType | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressToWatchCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
  }

  export type AddressToWatchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressToWatchMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
  }

  export type AddressToWatchMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
  }

  export type AddressToWatchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumLocalStateTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocalStateType | EnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLocalStateTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LocalStateType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLocalStateTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumLocalStateTypeNullableFilter<$PrismaModel>
  }

  export type BlocksCreateNestedOneWithoutAddressesInput = {
    create?: XOR<BlocksCreateWithoutAddressesInput, BlocksUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: BlocksCreateOrConnectWithoutAddressesInput
    connect?: BlocksWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutBlockAddressInput = {
    create?: XOR<TransactionCreateWithoutBlockAddressInput, TransactionUncheckedCreateWithoutBlockAddressInput> | TransactionCreateWithoutBlockAddressInput[] | TransactionUncheckedCreateWithoutBlockAddressInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBlockAddressInput | TransactionCreateOrConnectWithoutBlockAddressInput[]
    createMany?: TransactionCreateManyBlockAddressInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBlockAddressInput = {
    create?: XOR<TransactionCreateWithoutBlockAddressInput, TransactionUncheckedCreateWithoutBlockAddressInput> | TransactionCreateWithoutBlockAddressInput[] | TransactionUncheckedCreateWithoutBlockAddressInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBlockAddressInput | TransactionCreateOrConnectWithoutBlockAddressInput[]
    createMany?: TransactionCreateManyBlockAddressInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BlocksUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<BlocksCreateWithoutAddressesInput, BlocksUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: BlocksCreateOrConnectWithoutAddressesInput
    upsert?: BlocksUpsertWithoutAddressesInput
    connect?: BlocksWhereUniqueInput
    update?: XOR<XOR<BlocksUpdateToOneWithWhereWithoutAddressesInput, BlocksUpdateWithoutAddressesInput>, BlocksUncheckedUpdateWithoutAddressesInput>
  }

  export type TransactionUpdateManyWithoutBlockAddressNestedInput = {
    create?: XOR<TransactionCreateWithoutBlockAddressInput, TransactionUncheckedCreateWithoutBlockAddressInput> | TransactionCreateWithoutBlockAddressInput[] | TransactionUncheckedCreateWithoutBlockAddressInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBlockAddressInput | TransactionCreateOrConnectWithoutBlockAddressInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBlockAddressInput | TransactionUpsertWithWhereUniqueWithoutBlockAddressInput[]
    createMany?: TransactionCreateManyBlockAddressInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBlockAddressInput | TransactionUpdateWithWhereUniqueWithoutBlockAddressInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBlockAddressInput | TransactionUpdateManyWithWhereWithoutBlockAddressInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateManyWithoutBlockAddressNestedInput = {
    create?: XOR<TransactionCreateWithoutBlockAddressInput, TransactionUncheckedCreateWithoutBlockAddressInput> | TransactionCreateWithoutBlockAddressInput[] | TransactionUncheckedCreateWithoutBlockAddressInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBlockAddressInput | TransactionCreateOrConnectWithoutBlockAddressInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBlockAddressInput | TransactionUpsertWithWhereUniqueWithoutBlockAddressInput[]
    createMany?: TransactionCreateManyBlockAddressInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBlockAddressInput | TransactionUpdateWithWhereUniqueWithoutBlockAddressInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBlockAddressInput | TransactionUpdateManyWithWhereWithoutBlockAddressInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type BlockAddressCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<BlockAddressCreateWithoutTransactionsInput, BlockAddressUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BlockAddressCreateOrConnectWithoutTransactionsInput
    connect?: BlockAddressWhereUniqueInput
  }

  export type BlockAddressUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<BlockAddressCreateWithoutTransactionsInput, BlockAddressUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BlockAddressCreateOrConnectWithoutTransactionsInput
    upsert?: BlockAddressUpsertWithoutTransactionsInput
    connect?: BlockAddressWhereUniqueInput
    update?: XOR<XOR<BlockAddressUpdateToOneWithWhereWithoutTransactionsInput, BlockAddressUpdateWithoutTransactionsInput>, BlockAddressUncheckedUpdateWithoutTransactionsInput>
  }

  export type BlockAddressCreateNestedManyWithoutBlockInput = {
    create?: XOR<BlockAddressCreateWithoutBlockInput, BlockAddressUncheckedCreateWithoutBlockInput> | BlockAddressCreateWithoutBlockInput[] | BlockAddressUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: BlockAddressCreateOrConnectWithoutBlockInput | BlockAddressCreateOrConnectWithoutBlockInput[]
    createMany?: BlockAddressCreateManyBlockInputEnvelope
    connect?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
  }

  export type BlockAddressUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<BlockAddressCreateWithoutBlockInput, BlockAddressUncheckedCreateWithoutBlockInput> | BlockAddressCreateWithoutBlockInput[] | BlockAddressUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: BlockAddressCreateOrConnectWithoutBlockInput | BlockAddressCreateOrConnectWithoutBlockInput[]
    createMany?: BlockAddressCreateManyBlockInputEnvelope
    connect?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BlockAddressUpdateManyWithoutBlockNestedInput = {
    create?: XOR<BlockAddressCreateWithoutBlockInput, BlockAddressUncheckedCreateWithoutBlockInput> | BlockAddressCreateWithoutBlockInput[] | BlockAddressUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: BlockAddressCreateOrConnectWithoutBlockInput | BlockAddressCreateOrConnectWithoutBlockInput[]
    upsert?: BlockAddressUpsertWithWhereUniqueWithoutBlockInput | BlockAddressUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: BlockAddressCreateManyBlockInputEnvelope
    set?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
    disconnect?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
    delete?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
    connect?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
    update?: BlockAddressUpdateWithWhereUniqueWithoutBlockInput | BlockAddressUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: BlockAddressUpdateManyWithWhereWithoutBlockInput | BlockAddressUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: BlockAddressScalarWhereInput | BlockAddressScalarWhereInput[]
  }

  export type BlockAddressUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<BlockAddressCreateWithoutBlockInput, BlockAddressUncheckedCreateWithoutBlockInput> | BlockAddressCreateWithoutBlockInput[] | BlockAddressUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: BlockAddressCreateOrConnectWithoutBlockInput | BlockAddressCreateOrConnectWithoutBlockInput[]
    upsert?: BlockAddressUpsertWithWhereUniqueWithoutBlockInput | BlockAddressUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: BlockAddressCreateManyBlockInputEnvelope
    set?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
    disconnect?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
    delete?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
    connect?: BlockAddressWhereUniqueInput | BlockAddressWhereUniqueInput[]
    update?: BlockAddressUpdateWithWhereUniqueWithoutBlockInput | BlockAddressUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: BlockAddressUpdateManyWithWhereWithoutBlockInput | BlockAddressUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: BlockAddressScalarWhereInput | BlockAddressScalarWhereInput[]
  }

  export type NullableEnumLocalStateTypeFieldUpdateOperationsInput = {
    set?: $Enums.LocalStateType | null
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

  export type NestedEnumLocalStateTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LocalStateType | EnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLocalStateTypeNullableFilter<$PrismaModel> | $Enums.LocalStateType | null
  }

  export type NestedEnumLocalStateTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocalStateType | EnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLocalStateTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LocalStateType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLocalStateTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumLocalStateTypeNullableFilter<$PrismaModel>
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

  export type BlocksCreateWithoutAddressesInput = {
    blockHash: string
    createdAt?: Date | string
  }

  export type BlocksUncheckedCreateWithoutAddressesInput = {
    id?: number
    blockHash: string
    createdAt?: Date | string
  }

  export type BlocksCreateOrConnectWithoutAddressesInput = {
    where: BlocksWhereUniqueInput
    create: XOR<BlocksCreateWithoutAddressesInput, BlocksUncheckedCreateWithoutAddressesInput>
  }

  export type TransactionCreateWithoutBlockAddressInput = {
    txHash: string
  }

  export type TransactionUncheckedCreateWithoutBlockAddressInput = {
    id?: number
    txHash: string
  }

  export type TransactionCreateOrConnectWithoutBlockAddressInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBlockAddressInput, TransactionUncheckedCreateWithoutBlockAddressInput>
  }

  export type TransactionCreateManyBlockAddressInputEnvelope = {
    data: TransactionCreateManyBlockAddressInput | TransactionCreateManyBlockAddressInput[]
    skipDuplicates?: boolean
  }

  export type BlocksUpsertWithoutAddressesInput = {
    update: XOR<BlocksUpdateWithoutAddressesInput, BlocksUncheckedUpdateWithoutAddressesInput>
    create: XOR<BlocksCreateWithoutAddressesInput, BlocksUncheckedCreateWithoutAddressesInput>
    where?: BlocksWhereInput
  }

  export type BlocksUpdateToOneWithWhereWithoutAddressesInput = {
    where?: BlocksWhereInput
    data: XOR<BlocksUpdateWithoutAddressesInput, BlocksUncheckedUpdateWithoutAddressesInput>
  }

  export type BlocksUpdateWithoutAddressesInput = {
    blockHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlocksUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutBlockAddressInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBlockAddressInput, TransactionUncheckedUpdateWithoutBlockAddressInput>
    create: XOR<TransactionCreateWithoutBlockAddressInput, TransactionUncheckedCreateWithoutBlockAddressInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBlockAddressInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBlockAddressInput, TransactionUncheckedUpdateWithoutBlockAddressInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBlockAddressInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBlockAddressInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    txHash?: StringFilter<"Transaction"> | string
    blockAddressId?: IntFilter<"Transaction"> | number
  }

  export type BlockAddressCreateWithoutTransactionsInput = {
    address: string
    block: BlocksCreateNestedOneWithoutAddressesInput
  }

  export type BlockAddressUncheckedCreateWithoutTransactionsInput = {
    id?: number
    address: string
    blockId: number
  }

  export type BlockAddressCreateOrConnectWithoutTransactionsInput = {
    where: BlockAddressWhereUniqueInput
    create: XOR<BlockAddressCreateWithoutTransactionsInput, BlockAddressUncheckedCreateWithoutTransactionsInput>
  }

  export type BlockAddressUpsertWithoutTransactionsInput = {
    update: XOR<BlockAddressUpdateWithoutTransactionsInput, BlockAddressUncheckedUpdateWithoutTransactionsInput>
    create: XOR<BlockAddressCreateWithoutTransactionsInput, BlockAddressUncheckedCreateWithoutTransactionsInput>
    where?: BlockAddressWhereInput
  }

  export type BlockAddressUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: BlockAddressWhereInput
    data: XOR<BlockAddressUpdateWithoutTransactionsInput, BlockAddressUncheckedUpdateWithoutTransactionsInput>
  }

  export type BlockAddressUpdateWithoutTransactionsInput = {
    address?: StringFieldUpdateOperationsInput | string
    block?: BlocksUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type BlockAddressUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    blockId?: IntFieldUpdateOperationsInput | number
  }

  export type BlockAddressCreateWithoutBlockInput = {
    address: string
    transactions?: TransactionCreateNestedManyWithoutBlockAddressInput
  }

  export type BlockAddressUncheckedCreateWithoutBlockInput = {
    id?: number
    address: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutBlockAddressInput
  }

  export type BlockAddressCreateOrConnectWithoutBlockInput = {
    where: BlockAddressWhereUniqueInput
    create: XOR<BlockAddressCreateWithoutBlockInput, BlockAddressUncheckedCreateWithoutBlockInput>
  }

  export type BlockAddressCreateManyBlockInputEnvelope = {
    data: BlockAddressCreateManyBlockInput | BlockAddressCreateManyBlockInput[]
    skipDuplicates?: boolean
  }

  export type BlockAddressUpsertWithWhereUniqueWithoutBlockInput = {
    where: BlockAddressWhereUniqueInput
    update: XOR<BlockAddressUpdateWithoutBlockInput, BlockAddressUncheckedUpdateWithoutBlockInput>
    create: XOR<BlockAddressCreateWithoutBlockInput, BlockAddressUncheckedCreateWithoutBlockInput>
  }

  export type BlockAddressUpdateWithWhereUniqueWithoutBlockInput = {
    where: BlockAddressWhereUniqueInput
    data: XOR<BlockAddressUpdateWithoutBlockInput, BlockAddressUncheckedUpdateWithoutBlockInput>
  }

  export type BlockAddressUpdateManyWithWhereWithoutBlockInput = {
    where: BlockAddressScalarWhereInput
    data: XOR<BlockAddressUpdateManyMutationInput, BlockAddressUncheckedUpdateManyWithoutBlockInput>
  }

  export type BlockAddressScalarWhereInput = {
    AND?: BlockAddressScalarWhereInput | BlockAddressScalarWhereInput[]
    OR?: BlockAddressScalarWhereInput[]
    NOT?: BlockAddressScalarWhereInput | BlockAddressScalarWhereInput[]
    id?: IntFilter<"BlockAddress"> | number
    address?: StringFilter<"BlockAddress"> | string
    blockId?: IntFilter<"BlockAddress"> | number
  }

  export type TransactionCreateManyBlockAddressInput = {
    id?: number
    txHash: string
  }

  export type TransactionUpdateWithoutBlockAddressInput = {
    txHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateWithoutBlockAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutBlockAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
  }

  export type BlockAddressCreateManyBlockInput = {
    id?: number
    address: string
  }

  export type BlockAddressUpdateWithoutBlockInput = {
    address?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutBlockAddressNestedInput
  }

  export type BlockAddressUncheckedUpdateWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutBlockAddressNestedInput
  }

  export type BlockAddressUncheckedUpdateManyWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
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