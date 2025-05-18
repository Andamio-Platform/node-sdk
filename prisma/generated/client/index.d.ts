
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
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model TransactionSyncTip
 * 
 */
export type TransactionSyncTip = $Result.DefaultSelection<Prisma.$TransactionSyncTipPayload>
/**
 * Model AddressToWatch
 * 
 */
export type AddressToWatch = $Result.DefaultSelection<Prisma.$AddressToWatchPayload>
/**
 * Model AddressToWatchSyncTip
 * 
 */
export type AddressToWatchSyncTip = $Result.DefaultSelection<Prisma.$AddressToWatchSyncTipPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LocalStateType: {
  Unspecified: 'Unspecified',
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
 * // Fetch zero or more Transactions
 * const transactions = await prisma.transaction.findMany()
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
   * // Fetch zero or more Transactions
   * const transactions = await prisma.transaction.findMany()
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
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionSyncTip`: Exposes CRUD operations for the **TransactionSyncTip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionSyncTips
    * const transactionSyncTips = await prisma.transactionSyncTip.findMany()
    * ```
    */
  get transactionSyncTip(): Prisma.TransactionSyncTipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addressToWatch`: Exposes CRUD operations for the **AddressToWatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddressToWatches
    * const addressToWatches = await prisma.addressToWatch.findMany()
    * ```
    */
  get addressToWatch(): Prisma.AddressToWatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.addressToWatchSyncTip`: Exposes CRUD operations for the **AddressToWatchSyncTip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AddressToWatchSyncTips
    * const addressToWatchSyncTips = await prisma.addressToWatchSyncTip.findMany()
    * ```
    */
  get addressToWatchSyncTip(): Prisma.AddressToWatchSyncTipDelegate<ExtArgs, ClientOptions>;
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
    Transaction: 'Transaction',
    TransactionSyncTip: 'TransactionSyncTip',
    AddressToWatch: 'AddressToWatch',
    AddressToWatchSyncTip: 'AddressToWatchSyncTip'
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
      modelProps: "transaction" | "transactionSyncTip" | "addressToWatch" | "addressToWatchSyncTip"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      TransactionSyncTip: {
        payload: Prisma.$TransactionSyncTipPayload<ExtArgs>
        fields: Prisma.TransactionSyncTipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionSyncTipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionSyncTipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          findFirst: {
            args: Prisma.TransactionSyncTipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionSyncTipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          findMany: {
            args: Prisma.TransactionSyncTipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>[]
          }
          create: {
            args: Prisma.TransactionSyncTipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          createMany: {
            args: Prisma.TransactionSyncTipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionSyncTipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>[]
          }
          delete: {
            args: Prisma.TransactionSyncTipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          update: {
            args: Prisma.TransactionSyncTipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          deleteMany: {
            args: Prisma.TransactionSyncTipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionSyncTipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionSyncTipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>[]
          }
          upsert: {
            args: Prisma.TransactionSyncTipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionSyncTipPayload>
          }
          aggregate: {
            args: Prisma.TransactionSyncTipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionSyncTip>
          }
          groupBy: {
            args: Prisma.TransactionSyncTipGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionSyncTipGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionSyncTipCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionSyncTipCountAggregateOutputType> | number
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
      AddressToWatchSyncTip: {
        payload: Prisma.$AddressToWatchSyncTipPayload<ExtArgs>
        fields: Prisma.AddressToWatchSyncTipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressToWatchSyncTipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressToWatchSyncTipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload>
          }
          findFirst: {
            args: Prisma.AddressToWatchSyncTipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressToWatchSyncTipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload>
          }
          findMany: {
            args: Prisma.AddressToWatchSyncTipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload>[]
          }
          create: {
            args: Prisma.AddressToWatchSyncTipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload>
          }
          createMany: {
            args: Prisma.AddressToWatchSyncTipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressToWatchSyncTipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload>[]
          }
          delete: {
            args: Prisma.AddressToWatchSyncTipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload>
          }
          update: {
            args: Prisma.AddressToWatchSyncTipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload>
          }
          deleteMany: {
            args: Prisma.AddressToWatchSyncTipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressToWatchSyncTipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressToWatchSyncTipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload>[]
          }
          upsert: {
            args: Prisma.AddressToWatchSyncTipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressToWatchSyncTipPayload>
          }
          aggregate: {
            args: Prisma.AddressToWatchSyncTipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddressToWatchSyncTip>
          }
          groupBy: {
            args: Prisma.AddressToWatchSyncTipGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressToWatchSyncTipGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressToWatchSyncTipCountArgs<ExtArgs>
            result: $Utils.Optional<AddressToWatchSyncTipCountAggregateOutputType> | number
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
    transaction?: TransactionOmit
    transactionSyncTip?: TransactionSyncTipOmit
    addressToWatch?: AddressToWatchOmit
    addressToWatchSyncTip?: AddressToWatchSyncTipOmit
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
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    addresses: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | TransactionCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressToWatchWhereInput
  }


  /**
   * Count Type AddressToWatchCountOutputType
   */

  export type AddressToWatchCountOutputType = {
    transactions: number
  }

  export type AddressToWatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AddressToWatchCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AddressToWatchCountOutputType without action
   */
  export type AddressToWatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchCountOutputType
     */
    select?: AddressToWatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressToWatchCountOutputType without action
   */
  export type AddressToWatchCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

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
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    txHash: string | null
    cbor: string | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    txHash: string | null
    cbor: string | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    txHash: number
    cbor: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    txHash?: true
    cbor?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    txHash?: true
    cbor?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    txHash?: true
    cbor?: true
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
    cbor: string
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
    cbor?: boolean
    addresses?: boolean | Transaction$addressesArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    cbor?: boolean
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    txHash?: boolean
    cbor?: boolean
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    txHash?: boolean
    cbor?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "txHash" | "cbor", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | Transaction$addressesArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      addresses: Prisma.$AddressToWatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      txHash: string
      cbor: string
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
    addresses<T extends Transaction$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressToWatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly cbor: FieldRef<"Transaction", 'String'>
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
   * Transaction.addresses
   */
  export type Transaction$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatch
     */
    select?: AddressToWatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatch
     */
    omit?: AddressToWatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
    where?: AddressToWatchWhereInput
    orderBy?: AddressToWatchOrderByWithRelationInput | AddressToWatchOrderByWithRelationInput[]
    cursor?: AddressToWatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressToWatchScalarFieldEnum | AddressToWatchScalarFieldEnum[]
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
   * Model TransactionSyncTip
   */

  export type AggregateTransactionSyncTip = {
    _count: TransactionSyncTipCountAggregateOutputType | null
    _avg: TransactionSyncTipAvgAggregateOutputType | null
    _sum: TransactionSyncTipSumAggregateOutputType | null
    _min: TransactionSyncTipMinAggregateOutputType | null
    _max: TransactionSyncTipMaxAggregateOutputType | null
  }

  export type TransactionSyncTipAvgAggregateOutputType = {
    id: number | null
    slot: number | null
  }

  export type TransactionSyncTipSumAggregateOutputType = {
    id: number | null
    slot: number | null
  }

  export type TransactionSyncTipMinAggregateOutputType = {
    id: number | null
    slot: number | null
    blockHash: string | null
  }

  export type TransactionSyncTipMaxAggregateOutputType = {
    id: number | null
    slot: number | null
    blockHash: string | null
  }

  export type TransactionSyncTipCountAggregateOutputType = {
    id: number
    slot: number
    blockHash: number
    _all: number
  }


  export type TransactionSyncTipAvgAggregateInputType = {
    id?: true
    slot?: true
  }

  export type TransactionSyncTipSumAggregateInputType = {
    id?: true
    slot?: true
  }

  export type TransactionSyncTipMinAggregateInputType = {
    id?: true
    slot?: true
    blockHash?: true
  }

  export type TransactionSyncTipMaxAggregateInputType = {
    id?: true
    slot?: true
    blockHash?: true
  }

  export type TransactionSyncTipCountAggregateInputType = {
    id?: true
    slot?: true
    blockHash?: true
    _all?: true
  }

  export type TransactionSyncTipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionSyncTip to aggregate.
     */
    where?: TransactionSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSyncTips to fetch.
     */
    orderBy?: TransactionSyncTipOrderByWithRelationInput | TransactionSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSyncTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionSyncTips
    **/
    _count?: true | TransactionSyncTipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionSyncTipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSyncTipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionSyncTipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionSyncTipMaxAggregateInputType
  }

  export type GetTransactionSyncTipAggregateType<T extends TransactionSyncTipAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionSyncTip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionSyncTip[P]>
      : GetScalarType<T[P], AggregateTransactionSyncTip[P]>
  }




  export type TransactionSyncTipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionSyncTipWhereInput
    orderBy?: TransactionSyncTipOrderByWithAggregationInput | TransactionSyncTipOrderByWithAggregationInput[]
    by: TransactionSyncTipScalarFieldEnum[] | TransactionSyncTipScalarFieldEnum
    having?: TransactionSyncTipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionSyncTipCountAggregateInputType | true
    _avg?: TransactionSyncTipAvgAggregateInputType
    _sum?: TransactionSyncTipSumAggregateInputType
    _min?: TransactionSyncTipMinAggregateInputType
    _max?: TransactionSyncTipMaxAggregateInputType
  }

  export type TransactionSyncTipGroupByOutputType = {
    id: number
    slot: number
    blockHash: string
    _count: TransactionSyncTipCountAggregateOutputType | null
    _avg: TransactionSyncTipAvgAggregateOutputType | null
    _sum: TransactionSyncTipSumAggregateOutputType | null
    _min: TransactionSyncTipMinAggregateOutputType | null
    _max: TransactionSyncTipMaxAggregateOutputType | null
  }

  type GetTransactionSyncTipGroupByPayload<T extends TransactionSyncTipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionSyncTipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionSyncTipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionSyncTipGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionSyncTipGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSyncTipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }, ExtArgs["result"]["transactionSyncTip"]>

  export type TransactionSyncTipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }, ExtArgs["result"]["transactionSyncTip"]>

  export type TransactionSyncTipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }, ExtArgs["result"]["transactionSyncTip"]>

  export type TransactionSyncTipSelectScalar = {
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }

  export type TransactionSyncTipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slot" | "blockHash", ExtArgs["result"]["transactionSyncTip"]>

  export type $TransactionSyncTipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionSyncTip"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slot: number
      blockHash: string
    }, ExtArgs["result"]["transactionSyncTip"]>
    composites: {}
  }

  type TransactionSyncTipGetPayload<S extends boolean | null | undefined | TransactionSyncTipDefaultArgs> = $Result.GetResult<Prisma.$TransactionSyncTipPayload, S>

  type TransactionSyncTipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionSyncTipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionSyncTipCountAggregateInputType | true
    }

  export interface TransactionSyncTipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionSyncTip'], meta: { name: 'TransactionSyncTip' } }
    /**
     * Find zero or one TransactionSyncTip that matches the filter.
     * @param {TransactionSyncTipFindUniqueArgs} args - Arguments to find a TransactionSyncTip
     * @example
     * // Get one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionSyncTipFindUniqueArgs>(args: SelectSubset<T, TransactionSyncTipFindUniqueArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionSyncTip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionSyncTipFindUniqueOrThrowArgs} args - Arguments to find a TransactionSyncTip
     * @example
     * // Get one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionSyncTipFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionSyncTipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionSyncTip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipFindFirstArgs} args - Arguments to find a TransactionSyncTip
     * @example
     * // Get one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionSyncTipFindFirstArgs>(args?: SelectSubset<T, TransactionSyncTipFindFirstArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionSyncTip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipFindFirstOrThrowArgs} args - Arguments to find a TransactionSyncTip
     * @example
     * // Get one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionSyncTipFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionSyncTipFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionSyncTips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionSyncTips
     * const transactionSyncTips = await prisma.transactionSyncTip.findMany()
     * 
     * // Get first 10 TransactionSyncTips
     * const transactionSyncTips = await prisma.transactionSyncTip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionSyncTipWithIdOnly = await prisma.transactionSyncTip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionSyncTipFindManyArgs>(args?: SelectSubset<T, TransactionSyncTipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionSyncTip.
     * @param {TransactionSyncTipCreateArgs} args - Arguments to create a TransactionSyncTip.
     * @example
     * // Create one TransactionSyncTip
     * const TransactionSyncTip = await prisma.transactionSyncTip.create({
     *   data: {
     *     // ... data to create a TransactionSyncTip
     *   }
     * })
     * 
     */
    create<T extends TransactionSyncTipCreateArgs>(args: SelectSubset<T, TransactionSyncTipCreateArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionSyncTips.
     * @param {TransactionSyncTipCreateManyArgs} args - Arguments to create many TransactionSyncTips.
     * @example
     * // Create many TransactionSyncTips
     * const transactionSyncTip = await prisma.transactionSyncTip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionSyncTipCreateManyArgs>(args?: SelectSubset<T, TransactionSyncTipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionSyncTips and returns the data saved in the database.
     * @param {TransactionSyncTipCreateManyAndReturnArgs} args - Arguments to create many TransactionSyncTips.
     * @example
     * // Create many TransactionSyncTips
     * const transactionSyncTip = await prisma.transactionSyncTip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionSyncTips and only return the `id`
     * const transactionSyncTipWithIdOnly = await prisma.transactionSyncTip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionSyncTipCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionSyncTipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionSyncTip.
     * @param {TransactionSyncTipDeleteArgs} args - Arguments to delete one TransactionSyncTip.
     * @example
     * // Delete one TransactionSyncTip
     * const TransactionSyncTip = await prisma.transactionSyncTip.delete({
     *   where: {
     *     // ... filter to delete one TransactionSyncTip
     *   }
     * })
     * 
     */
    delete<T extends TransactionSyncTipDeleteArgs>(args: SelectSubset<T, TransactionSyncTipDeleteArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionSyncTip.
     * @param {TransactionSyncTipUpdateArgs} args - Arguments to update one TransactionSyncTip.
     * @example
     * // Update one TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionSyncTipUpdateArgs>(args: SelectSubset<T, TransactionSyncTipUpdateArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionSyncTips.
     * @param {TransactionSyncTipDeleteManyArgs} args - Arguments to filter TransactionSyncTips to delete.
     * @example
     * // Delete a few TransactionSyncTips
     * const { count } = await prisma.transactionSyncTip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionSyncTipDeleteManyArgs>(args?: SelectSubset<T, TransactionSyncTipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionSyncTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionSyncTips
     * const transactionSyncTip = await prisma.transactionSyncTip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionSyncTipUpdateManyArgs>(args: SelectSubset<T, TransactionSyncTipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionSyncTips and returns the data updated in the database.
     * @param {TransactionSyncTipUpdateManyAndReturnArgs} args - Arguments to update many TransactionSyncTips.
     * @example
     * // Update many TransactionSyncTips
     * const transactionSyncTip = await prisma.transactionSyncTip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionSyncTips and only return the `id`
     * const transactionSyncTipWithIdOnly = await prisma.transactionSyncTip.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionSyncTipUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionSyncTipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionSyncTip.
     * @param {TransactionSyncTipUpsertArgs} args - Arguments to update or create a TransactionSyncTip.
     * @example
     * // Update or create a TransactionSyncTip
     * const transactionSyncTip = await prisma.transactionSyncTip.upsert({
     *   create: {
     *     // ... data to create a TransactionSyncTip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionSyncTip we want to update
     *   }
     * })
     */
    upsert<T extends TransactionSyncTipUpsertArgs>(args: SelectSubset<T, TransactionSyncTipUpsertArgs<ExtArgs>>): Prisma__TransactionSyncTipClient<$Result.GetResult<Prisma.$TransactionSyncTipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionSyncTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipCountArgs} args - Arguments to filter TransactionSyncTips to count.
     * @example
     * // Count the number of TransactionSyncTips
     * const count = await prisma.transactionSyncTip.count({
     *   where: {
     *     // ... the filter for the TransactionSyncTips we want to count
     *   }
     * })
    **/
    count<T extends TransactionSyncTipCountArgs>(
      args?: Subset<T, TransactionSyncTipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionSyncTipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionSyncTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionSyncTipAggregateArgs>(args: Subset<T, TransactionSyncTipAggregateArgs>): Prisma.PrismaPromise<GetTransactionSyncTipAggregateType<T>>

    /**
     * Group by TransactionSyncTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionSyncTipGroupByArgs} args - Group by arguments.
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
      T extends TransactionSyncTipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionSyncTipGroupByArgs['orderBy'] }
        : { orderBy?: TransactionSyncTipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionSyncTipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionSyncTipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionSyncTip model
   */
  readonly fields: TransactionSyncTipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionSyncTip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionSyncTipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the TransactionSyncTip model
   */
  interface TransactionSyncTipFieldRefs {
    readonly id: FieldRef<"TransactionSyncTip", 'Int'>
    readonly slot: FieldRef<"TransactionSyncTip", 'Int'>
    readonly blockHash: FieldRef<"TransactionSyncTip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionSyncTip findUnique
   */
  export type TransactionSyncTipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTip to fetch.
     */
    where: TransactionSyncTipWhereUniqueInput
  }

  /**
   * TransactionSyncTip findUniqueOrThrow
   */
  export type TransactionSyncTipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTip to fetch.
     */
    where: TransactionSyncTipWhereUniqueInput
  }

  /**
   * TransactionSyncTip findFirst
   */
  export type TransactionSyncTipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTip to fetch.
     */
    where?: TransactionSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSyncTips to fetch.
     */
    orderBy?: TransactionSyncTipOrderByWithRelationInput | TransactionSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionSyncTips.
     */
    cursor?: TransactionSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSyncTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionSyncTips.
     */
    distinct?: TransactionSyncTipScalarFieldEnum | TransactionSyncTipScalarFieldEnum[]
  }

  /**
   * TransactionSyncTip findFirstOrThrow
   */
  export type TransactionSyncTipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTip to fetch.
     */
    where?: TransactionSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSyncTips to fetch.
     */
    orderBy?: TransactionSyncTipOrderByWithRelationInput | TransactionSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionSyncTips.
     */
    cursor?: TransactionSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSyncTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionSyncTips.
     */
    distinct?: TransactionSyncTipScalarFieldEnum | TransactionSyncTipScalarFieldEnum[]
  }

  /**
   * TransactionSyncTip findMany
   */
  export type TransactionSyncTipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which TransactionSyncTips to fetch.
     */
    where?: TransactionSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionSyncTips to fetch.
     */
    orderBy?: TransactionSyncTipOrderByWithRelationInput | TransactionSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionSyncTips.
     */
    cursor?: TransactionSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionSyncTips.
     */
    skip?: number
    distinct?: TransactionSyncTipScalarFieldEnum | TransactionSyncTipScalarFieldEnum[]
  }

  /**
   * TransactionSyncTip create
   */
  export type TransactionSyncTipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The data needed to create a TransactionSyncTip.
     */
    data: XOR<TransactionSyncTipCreateInput, TransactionSyncTipUncheckedCreateInput>
  }

  /**
   * TransactionSyncTip createMany
   */
  export type TransactionSyncTipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionSyncTips.
     */
    data: TransactionSyncTipCreateManyInput | TransactionSyncTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionSyncTip createManyAndReturn
   */
  export type TransactionSyncTipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionSyncTips.
     */
    data: TransactionSyncTipCreateManyInput | TransactionSyncTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionSyncTip update
   */
  export type TransactionSyncTipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The data needed to update a TransactionSyncTip.
     */
    data: XOR<TransactionSyncTipUpdateInput, TransactionSyncTipUncheckedUpdateInput>
    /**
     * Choose, which TransactionSyncTip to update.
     */
    where: TransactionSyncTipWhereUniqueInput
  }

  /**
   * TransactionSyncTip updateMany
   */
  export type TransactionSyncTipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionSyncTips.
     */
    data: XOR<TransactionSyncTipUpdateManyMutationInput, TransactionSyncTipUncheckedUpdateManyInput>
    /**
     * Filter which TransactionSyncTips to update
     */
    where?: TransactionSyncTipWhereInput
    /**
     * Limit how many TransactionSyncTips to update.
     */
    limit?: number
  }

  /**
   * TransactionSyncTip updateManyAndReturn
   */
  export type TransactionSyncTipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The data used to update TransactionSyncTips.
     */
    data: XOR<TransactionSyncTipUpdateManyMutationInput, TransactionSyncTipUncheckedUpdateManyInput>
    /**
     * Filter which TransactionSyncTips to update
     */
    where?: TransactionSyncTipWhereInput
    /**
     * Limit how many TransactionSyncTips to update.
     */
    limit?: number
  }

  /**
   * TransactionSyncTip upsert
   */
  export type TransactionSyncTipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * The filter to search for the TransactionSyncTip to update in case it exists.
     */
    where: TransactionSyncTipWhereUniqueInput
    /**
     * In case the TransactionSyncTip found by the `where` argument doesn't exist, create a new TransactionSyncTip with this data.
     */
    create: XOR<TransactionSyncTipCreateInput, TransactionSyncTipUncheckedCreateInput>
    /**
     * In case the TransactionSyncTip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionSyncTipUpdateInput, TransactionSyncTipUncheckedUpdateInput>
  }

  /**
   * TransactionSyncTip delete
   */
  export type TransactionSyncTipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
    /**
     * Filter which TransactionSyncTip to delete.
     */
    where: TransactionSyncTipWhereUniqueInput
  }

  /**
   * TransactionSyncTip deleteMany
   */
  export type TransactionSyncTipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionSyncTips to delete
     */
    where?: TransactionSyncTipWhereInput
    /**
     * Limit how many TransactionSyncTips to delete.
     */
    limit?: number
  }

  /**
   * TransactionSyncTip without action
   */
  export type TransactionSyncTipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionSyncTip
     */
    select?: TransactionSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionSyncTip
     */
    omit?: TransactionSyncTipOmit<ExtArgs> | null
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
    transactions?: boolean | AddressToWatch$transactionsArgs<ExtArgs>
    _count?: boolean | AddressToWatchCountOutputTypeDefaultArgs<ExtArgs>
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
  export type AddressToWatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AddressToWatch$transactionsArgs<ExtArgs>
    _count?: boolean | AddressToWatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressToWatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressToWatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressToWatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddressToWatch"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
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
    transactions<T extends AddressToWatch$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, AddressToWatch$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
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
   * AddressToWatch.transactions
   */
  export type AddressToWatch$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressToWatchInclude<ExtArgs> | null
  }


  /**
   * Model AddressToWatchSyncTip
   */

  export type AggregateAddressToWatchSyncTip = {
    _count: AddressToWatchSyncTipCountAggregateOutputType | null
    _avg: AddressToWatchSyncTipAvgAggregateOutputType | null
    _sum: AddressToWatchSyncTipSumAggregateOutputType | null
    _min: AddressToWatchSyncTipMinAggregateOutputType | null
    _max: AddressToWatchSyncTipMaxAggregateOutputType | null
  }

  export type AddressToWatchSyncTipAvgAggregateOutputType = {
    id: number | null
    slot: number | null
  }

  export type AddressToWatchSyncTipSumAggregateOutputType = {
    id: number | null
    slot: number | null
  }

  export type AddressToWatchSyncTipMinAggregateOutputType = {
    id: number | null
    slot: number | null
    blockHash: string | null
  }

  export type AddressToWatchSyncTipMaxAggregateOutputType = {
    id: number | null
    slot: number | null
    blockHash: string | null
  }

  export type AddressToWatchSyncTipCountAggregateOutputType = {
    id: number
    slot: number
    blockHash: number
    _all: number
  }


  export type AddressToWatchSyncTipAvgAggregateInputType = {
    id?: true
    slot?: true
  }

  export type AddressToWatchSyncTipSumAggregateInputType = {
    id?: true
    slot?: true
  }

  export type AddressToWatchSyncTipMinAggregateInputType = {
    id?: true
    slot?: true
    blockHash?: true
  }

  export type AddressToWatchSyncTipMaxAggregateInputType = {
    id?: true
    slot?: true
    blockHash?: true
  }

  export type AddressToWatchSyncTipCountAggregateInputType = {
    id?: true
    slot?: true
    blockHash?: true
    _all?: true
  }

  export type AddressToWatchSyncTipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddressToWatchSyncTip to aggregate.
     */
    where?: AddressToWatchSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressToWatchSyncTips to fetch.
     */
    orderBy?: AddressToWatchSyncTipOrderByWithRelationInput | AddressToWatchSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressToWatchSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressToWatchSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressToWatchSyncTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AddressToWatchSyncTips
    **/
    _count?: true | AddressToWatchSyncTipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressToWatchSyncTipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressToWatchSyncTipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressToWatchSyncTipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressToWatchSyncTipMaxAggregateInputType
  }

  export type GetAddressToWatchSyncTipAggregateType<T extends AddressToWatchSyncTipAggregateArgs> = {
        [P in keyof T & keyof AggregateAddressToWatchSyncTip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddressToWatchSyncTip[P]>
      : GetScalarType<T[P], AggregateAddressToWatchSyncTip[P]>
  }




  export type AddressToWatchSyncTipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressToWatchSyncTipWhereInput
    orderBy?: AddressToWatchSyncTipOrderByWithAggregationInput | AddressToWatchSyncTipOrderByWithAggregationInput[]
    by: AddressToWatchSyncTipScalarFieldEnum[] | AddressToWatchSyncTipScalarFieldEnum
    having?: AddressToWatchSyncTipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressToWatchSyncTipCountAggregateInputType | true
    _avg?: AddressToWatchSyncTipAvgAggregateInputType
    _sum?: AddressToWatchSyncTipSumAggregateInputType
    _min?: AddressToWatchSyncTipMinAggregateInputType
    _max?: AddressToWatchSyncTipMaxAggregateInputType
  }

  export type AddressToWatchSyncTipGroupByOutputType = {
    id: number
    slot: number
    blockHash: string
    _count: AddressToWatchSyncTipCountAggregateOutputType | null
    _avg: AddressToWatchSyncTipAvgAggregateOutputType | null
    _sum: AddressToWatchSyncTipSumAggregateOutputType | null
    _min: AddressToWatchSyncTipMinAggregateOutputType | null
    _max: AddressToWatchSyncTipMaxAggregateOutputType | null
  }

  type GetAddressToWatchSyncTipGroupByPayload<T extends AddressToWatchSyncTipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressToWatchSyncTipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressToWatchSyncTipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressToWatchSyncTipGroupByOutputType[P]>
            : GetScalarType<T[P], AddressToWatchSyncTipGroupByOutputType[P]>
        }
      >
    >


  export type AddressToWatchSyncTipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }, ExtArgs["result"]["addressToWatchSyncTip"]>

  export type AddressToWatchSyncTipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }, ExtArgs["result"]["addressToWatchSyncTip"]>

  export type AddressToWatchSyncTipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }, ExtArgs["result"]["addressToWatchSyncTip"]>

  export type AddressToWatchSyncTipSelectScalar = {
    id?: boolean
    slot?: boolean
    blockHash?: boolean
  }

  export type AddressToWatchSyncTipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slot" | "blockHash", ExtArgs["result"]["addressToWatchSyncTip"]>

  export type $AddressToWatchSyncTipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AddressToWatchSyncTip"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slot: number
      blockHash: string
    }, ExtArgs["result"]["addressToWatchSyncTip"]>
    composites: {}
  }

  type AddressToWatchSyncTipGetPayload<S extends boolean | null | undefined | AddressToWatchSyncTipDefaultArgs> = $Result.GetResult<Prisma.$AddressToWatchSyncTipPayload, S>

  type AddressToWatchSyncTipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressToWatchSyncTipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressToWatchSyncTipCountAggregateInputType | true
    }

  export interface AddressToWatchSyncTipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AddressToWatchSyncTip'], meta: { name: 'AddressToWatchSyncTip' } }
    /**
     * Find zero or one AddressToWatchSyncTip that matches the filter.
     * @param {AddressToWatchSyncTipFindUniqueArgs} args - Arguments to find a AddressToWatchSyncTip
     * @example
     * // Get one AddressToWatchSyncTip
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressToWatchSyncTipFindUniqueArgs>(args: SelectSubset<T, AddressToWatchSyncTipFindUniqueArgs<ExtArgs>>): Prisma__AddressToWatchSyncTipClient<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AddressToWatchSyncTip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressToWatchSyncTipFindUniqueOrThrowArgs} args - Arguments to find a AddressToWatchSyncTip
     * @example
     * // Get one AddressToWatchSyncTip
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressToWatchSyncTipFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressToWatchSyncTipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressToWatchSyncTipClient<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddressToWatchSyncTip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchSyncTipFindFirstArgs} args - Arguments to find a AddressToWatchSyncTip
     * @example
     * // Get one AddressToWatchSyncTip
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressToWatchSyncTipFindFirstArgs>(args?: SelectSubset<T, AddressToWatchSyncTipFindFirstArgs<ExtArgs>>): Prisma__AddressToWatchSyncTipClient<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AddressToWatchSyncTip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchSyncTipFindFirstOrThrowArgs} args - Arguments to find a AddressToWatchSyncTip
     * @example
     * // Get one AddressToWatchSyncTip
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressToWatchSyncTipFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressToWatchSyncTipFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressToWatchSyncTipClient<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AddressToWatchSyncTips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchSyncTipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AddressToWatchSyncTips
     * const addressToWatchSyncTips = await prisma.addressToWatchSyncTip.findMany()
     * 
     * // Get first 10 AddressToWatchSyncTips
     * const addressToWatchSyncTips = await prisma.addressToWatchSyncTip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressToWatchSyncTipWithIdOnly = await prisma.addressToWatchSyncTip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressToWatchSyncTipFindManyArgs>(args?: SelectSubset<T, AddressToWatchSyncTipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AddressToWatchSyncTip.
     * @param {AddressToWatchSyncTipCreateArgs} args - Arguments to create a AddressToWatchSyncTip.
     * @example
     * // Create one AddressToWatchSyncTip
     * const AddressToWatchSyncTip = await prisma.addressToWatchSyncTip.create({
     *   data: {
     *     // ... data to create a AddressToWatchSyncTip
     *   }
     * })
     * 
     */
    create<T extends AddressToWatchSyncTipCreateArgs>(args: SelectSubset<T, AddressToWatchSyncTipCreateArgs<ExtArgs>>): Prisma__AddressToWatchSyncTipClient<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AddressToWatchSyncTips.
     * @param {AddressToWatchSyncTipCreateManyArgs} args - Arguments to create many AddressToWatchSyncTips.
     * @example
     * // Create many AddressToWatchSyncTips
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressToWatchSyncTipCreateManyArgs>(args?: SelectSubset<T, AddressToWatchSyncTipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AddressToWatchSyncTips and returns the data saved in the database.
     * @param {AddressToWatchSyncTipCreateManyAndReturnArgs} args - Arguments to create many AddressToWatchSyncTips.
     * @example
     * // Create many AddressToWatchSyncTips
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AddressToWatchSyncTips and only return the `id`
     * const addressToWatchSyncTipWithIdOnly = await prisma.addressToWatchSyncTip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressToWatchSyncTipCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressToWatchSyncTipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AddressToWatchSyncTip.
     * @param {AddressToWatchSyncTipDeleteArgs} args - Arguments to delete one AddressToWatchSyncTip.
     * @example
     * // Delete one AddressToWatchSyncTip
     * const AddressToWatchSyncTip = await prisma.addressToWatchSyncTip.delete({
     *   where: {
     *     // ... filter to delete one AddressToWatchSyncTip
     *   }
     * })
     * 
     */
    delete<T extends AddressToWatchSyncTipDeleteArgs>(args: SelectSubset<T, AddressToWatchSyncTipDeleteArgs<ExtArgs>>): Prisma__AddressToWatchSyncTipClient<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AddressToWatchSyncTip.
     * @param {AddressToWatchSyncTipUpdateArgs} args - Arguments to update one AddressToWatchSyncTip.
     * @example
     * // Update one AddressToWatchSyncTip
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressToWatchSyncTipUpdateArgs>(args: SelectSubset<T, AddressToWatchSyncTipUpdateArgs<ExtArgs>>): Prisma__AddressToWatchSyncTipClient<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AddressToWatchSyncTips.
     * @param {AddressToWatchSyncTipDeleteManyArgs} args - Arguments to filter AddressToWatchSyncTips to delete.
     * @example
     * // Delete a few AddressToWatchSyncTips
     * const { count } = await prisma.addressToWatchSyncTip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressToWatchSyncTipDeleteManyArgs>(args?: SelectSubset<T, AddressToWatchSyncTipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddressToWatchSyncTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchSyncTipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AddressToWatchSyncTips
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressToWatchSyncTipUpdateManyArgs>(args: SelectSubset<T, AddressToWatchSyncTipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AddressToWatchSyncTips and returns the data updated in the database.
     * @param {AddressToWatchSyncTipUpdateManyAndReturnArgs} args - Arguments to update many AddressToWatchSyncTips.
     * @example
     * // Update many AddressToWatchSyncTips
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AddressToWatchSyncTips and only return the `id`
     * const addressToWatchSyncTipWithIdOnly = await prisma.addressToWatchSyncTip.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressToWatchSyncTipUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressToWatchSyncTipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AddressToWatchSyncTip.
     * @param {AddressToWatchSyncTipUpsertArgs} args - Arguments to update or create a AddressToWatchSyncTip.
     * @example
     * // Update or create a AddressToWatchSyncTip
     * const addressToWatchSyncTip = await prisma.addressToWatchSyncTip.upsert({
     *   create: {
     *     // ... data to create a AddressToWatchSyncTip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AddressToWatchSyncTip we want to update
     *   }
     * })
     */
    upsert<T extends AddressToWatchSyncTipUpsertArgs>(args: SelectSubset<T, AddressToWatchSyncTipUpsertArgs<ExtArgs>>): Prisma__AddressToWatchSyncTipClient<$Result.GetResult<Prisma.$AddressToWatchSyncTipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AddressToWatchSyncTips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchSyncTipCountArgs} args - Arguments to filter AddressToWatchSyncTips to count.
     * @example
     * // Count the number of AddressToWatchSyncTips
     * const count = await prisma.addressToWatchSyncTip.count({
     *   where: {
     *     // ... the filter for the AddressToWatchSyncTips we want to count
     *   }
     * })
    **/
    count<T extends AddressToWatchSyncTipCountArgs>(
      args?: Subset<T, AddressToWatchSyncTipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressToWatchSyncTipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AddressToWatchSyncTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchSyncTipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressToWatchSyncTipAggregateArgs>(args: Subset<T, AddressToWatchSyncTipAggregateArgs>): Prisma.PrismaPromise<GetAddressToWatchSyncTipAggregateType<T>>

    /**
     * Group by AddressToWatchSyncTip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressToWatchSyncTipGroupByArgs} args - Group by arguments.
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
      T extends AddressToWatchSyncTipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressToWatchSyncTipGroupByArgs['orderBy'] }
        : { orderBy?: AddressToWatchSyncTipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressToWatchSyncTipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressToWatchSyncTipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AddressToWatchSyncTip model
   */
  readonly fields: AddressToWatchSyncTipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AddressToWatchSyncTip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressToWatchSyncTipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AddressToWatchSyncTip model
   */
  interface AddressToWatchSyncTipFieldRefs {
    readonly id: FieldRef<"AddressToWatchSyncTip", 'Int'>
    readonly slot: FieldRef<"AddressToWatchSyncTip", 'Int'>
    readonly blockHash: FieldRef<"AddressToWatchSyncTip", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AddressToWatchSyncTip findUnique
   */
  export type AddressToWatchSyncTipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatchSyncTip to fetch.
     */
    where: AddressToWatchSyncTipWhereUniqueInput
  }

  /**
   * AddressToWatchSyncTip findUniqueOrThrow
   */
  export type AddressToWatchSyncTipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatchSyncTip to fetch.
     */
    where: AddressToWatchSyncTipWhereUniqueInput
  }

  /**
   * AddressToWatchSyncTip findFirst
   */
  export type AddressToWatchSyncTipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatchSyncTip to fetch.
     */
    where?: AddressToWatchSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressToWatchSyncTips to fetch.
     */
    orderBy?: AddressToWatchSyncTipOrderByWithRelationInput | AddressToWatchSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddressToWatchSyncTips.
     */
    cursor?: AddressToWatchSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressToWatchSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressToWatchSyncTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddressToWatchSyncTips.
     */
    distinct?: AddressToWatchSyncTipScalarFieldEnum | AddressToWatchSyncTipScalarFieldEnum[]
  }

  /**
   * AddressToWatchSyncTip findFirstOrThrow
   */
  export type AddressToWatchSyncTipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatchSyncTip to fetch.
     */
    where?: AddressToWatchSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressToWatchSyncTips to fetch.
     */
    orderBy?: AddressToWatchSyncTipOrderByWithRelationInput | AddressToWatchSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AddressToWatchSyncTips.
     */
    cursor?: AddressToWatchSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressToWatchSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressToWatchSyncTips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AddressToWatchSyncTips.
     */
    distinct?: AddressToWatchSyncTipScalarFieldEnum | AddressToWatchSyncTipScalarFieldEnum[]
  }

  /**
   * AddressToWatchSyncTip findMany
   */
  export type AddressToWatchSyncTipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * Filter, which AddressToWatchSyncTips to fetch.
     */
    where?: AddressToWatchSyncTipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AddressToWatchSyncTips to fetch.
     */
    orderBy?: AddressToWatchSyncTipOrderByWithRelationInput | AddressToWatchSyncTipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AddressToWatchSyncTips.
     */
    cursor?: AddressToWatchSyncTipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AddressToWatchSyncTips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AddressToWatchSyncTips.
     */
    skip?: number
    distinct?: AddressToWatchSyncTipScalarFieldEnum | AddressToWatchSyncTipScalarFieldEnum[]
  }

  /**
   * AddressToWatchSyncTip create
   */
  export type AddressToWatchSyncTipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * The data needed to create a AddressToWatchSyncTip.
     */
    data: XOR<AddressToWatchSyncTipCreateInput, AddressToWatchSyncTipUncheckedCreateInput>
  }

  /**
   * AddressToWatchSyncTip createMany
   */
  export type AddressToWatchSyncTipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AddressToWatchSyncTips.
     */
    data: AddressToWatchSyncTipCreateManyInput | AddressToWatchSyncTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddressToWatchSyncTip createManyAndReturn
   */
  export type AddressToWatchSyncTipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * The data used to create many AddressToWatchSyncTips.
     */
    data: AddressToWatchSyncTipCreateManyInput | AddressToWatchSyncTipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AddressToWatchSyncTip update
   */
  export type AddressToWatchSyncTipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * The data needed to update a AddressToWatchSyncTip.
     */
    data: XOR<AddressToWatchSyncTipUpdateInput, AddressToWatchSyncTipUncheckedUpdateInput>
    /**
     * Choose, which AddressToWatchSyncTip to update.
     */
    where: AddressToWatchSyncTipWhereUniqueInput
  }

  /**
   * AddressToWatchSyncTip updateMany
   */
  export type AddressToWatchSyncTipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AddressToWatchSyncTips.
     */
    data: XOR<AddressToWatchSyncTipUpdateManyMutationInput, AddressToWatchSyncTipUncheckedUpdateManyInput>
    /**
     * Filter which AddressToWatchSyncTips to update
     */
    where?: AddressToWatchSyncTipWhereInput
    /**
     * Limit how many AddressToWatchSyncTips to update.
     */
    limit?: number
  }

  /**
   * AddressToWatchSyncTip updateManyAndReturn
   */
  export type AddressToWatchSyncTipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * The data used to update AddressToWatchSyncTips.
     */
    data: XOR<AddressToWatchSyncTipUpdateManyMutationInput, AddressToWatchSyncTipUncheckedUpdateManyInput>
    /**
     * Filter which AddressToWatchSyncTips to update
     */
    where?: AddressToWatchSyncTipWhereInput
    /**
     * Limit how many AddressToWatchSyncTips to update.
     */
    limit?: number
  }

  /**
   * AddressToWatchSyncTip upsert
   */
  export type AddressToWatchSyncTipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * The filter to search for the AddressToWatchSyncTip to update in case it exists.
     */
    where: AddressToWatchSyncTipWhereUniqueInput
    /**
     * In case the AddressToWatchSyncTip found by the `where` argument doesn't exist, create a new AddressToWatchSyncTip with this data.
     */
    create: XOR<AddressToWatchSyncTipCreateInput, AddressToWatchSyncTipUncheckedCreateInput>
    /**
     * In case the AddressToWatchSyncTip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressToWatchSyncTipUpdateInput, AddressToWatchSyncTipUncheckedUpdateInput>
  }

  /**
   * AddressToWatchSyncTip delete
   */
  export type AddressToWatchSyncTipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
    /**
     * Filter which AddressToWatchSyncTip to delete.
     */
    where: AddressToWatchSyncTipWhereUniqueInput
  }

  /**
   * AddressToWatchSyncTip deleteMany
   */
  export type AddressToWatchSyncTipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AddressToWatchSyncTips to delete
     */
    where?: AddressToWatchSyncTipWhereInput
    /**
     * Limit how many AddressToWatchSyncTips to delete.
     */
    limit?: number
  }

  /**
   * AddressToWatchSyncTip without action
   */
  export type AddressToWatchSyncTipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressToWatchSyncTip
     */
    select?: AddressToWatchSyncTipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AddressToWatchSyncTip
     */
    omit?: AddressToWatchSyncTipOmit<ExtArgs> | null
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


  export const TransactionScalarFieldEnum: {
    id: 'id',
    txHash: 'txHash',
    cbor: 'cbor'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TransactionSyncTipScalarFieldEnum: {
    id: 'id',
    slot: 'slot',
    blockHash: 'blockHash'
  };

  export type TransactionSyncTipScalarFieldEnum = (typeof TransactionSyncTipScalarFieldEnum)[keyof typeof TransactionSyncTipScalarFieldEnum]


  export const AddressToWatchScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    type: 'type'
  };

  export type AddressToWatchScalarFieldEnum = (typeof AddressToWatchScalarFieldEnum)[keyof typeof AddressToWatchScalarFieldEnum]


  export const AddressToWatchSyncTipScalarFieldEnum: {
    id: 'id',
    slot: 'slot',
    blockHash: 'blockHash'
  };

  export type AddressToWatchSyncTipScalarFieldEnum = (typeof AddressToWatchSyncTipScalarFieldEnum)[keyof typeof AddressToWatchSyncTipScalarFieldEnum]


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


  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    txHash?: StringFilter<"Transaction"> | string
    cbor?: StringFilter<"Transaction"> | string
    addresses?: AddressToWatchListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
    addresses?: AddressToWatchOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    txHash?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    cbor?: StringFilter<"Transaction"> | string
    addresses?: AddressToWatchListRelationFilter
  }, "id" | "txHash">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
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
    cbor?: StringWithAggregatesFilter<"Transaction"> | string
  }

  export type TransactionSyncTipWhereInput = {
    AND?: TransactionSyncTipWhereInput | TransactionSyncTipWhereInput[]
    OR?: TransactionSyncTipWhereInput[]
    NOT?: TransactionSyncTipWhereInput | TransactionSyncTipWhereInput[]
    id?: IntFilter<"TransactionSyncTip"> | number
    slot?: IntFilter<"TransactionSyncTip"> | number
    blockHash?: StringFilter<"TransactionSyncTip"> | string
  }

  export type TransactionSyncTipOrderByWithRelationInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type TransactionSyncTipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slot?: number
    blockHash?: string
    AND?: TransactionSyncTipWhereInput | TransactionSyncTipWhereInput[]
    OR?: TransactionSyncTipWhereInput[]
    NOT?: TransactionSyncTipWhereInput | TransactionSyncTipWhereInput[]
  }, "id" | "slot" | "blockHash">

  export type TransactionSyncTipOrderByWithAggregationInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
    _count?: TransactionSyncTipCountOrderByAggregateInput
    _avg?: TransactionSyncTipAvgOrderByAggregateInput
    _max?: TransactionSyncTipMaxOrderByAggregateInput
    _min?: TransactionSyncTipMinOrderByAggregateInput
    _sum?: TransactionSyncTipSumOrderByAggregateInput
  }

  export type TransactionSyncTipScalarWhereWithAggregatesInput = {
    AND?: TransactionSyncTipScalarWhereWithAggregatesInput | TransactionSyncTipScalarWhereWithAggregatesInput[]
    OR?: TransactionSyncTipScalarWhereWithAggregatesInput[]
    NOT?: TransactionSyncTipScalarWhereWithAggregatesInput | TransactionSyncTipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TransactionSyncTip"> | number
    slot?: IntWithAggregatesFilter<"TransactionSyncTip"> | number
    blockHash?: StringWithAggregatesFilter<"TransactionSyncTip"> | string
  }

  export type AddressToWatchWhereInput = {
    AND?: AddressToWatchWhereInput | AddressToWatchWhereInput[]
    OR?: AddressToWatchWhereInput[]
    NOT?: AddressToWatchWhereInput | AddressToWatchWhereInput[]
    id?: IntFilter<"AddressToWatch"> | number
    key?: StringFilter<"AddressToWatch"> | string
    value?: StringFilter<"AddressToWatch"> | string
    type?: EnumLocalStateTypeNullableFilter<"AddressToWatch"> | $Enums.LocalStateType | null
    transactions?: TransactionListRelationFilter
  }

  export type AddressToWatchOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrderInput | SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type AddressToWatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    value?: string
    AND?: AddressToWatchWhereInput | AddressToWatchWhereInput[]
    OR?: AddressToWatchWhereInput[]
    NOT?: AddressToWatchWhereInput | AddressToWatchWhereInput[]
    key?: StringFilter<"AddressToWatch"> | string
    type?: EnumLocalStateTypeNullableFilter<"AddressToWatch"> | $Enums.LocalStateType | null
    transactions?: TransactionListRelationFilter
  }, "id" | "value">

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

  export type AddressToWatchSyncTipWhereInput = {
    AND?: AddressToWatchSyncTipWhereInput | AddressToWatchSyncTipWhereInput[]
    OR?: AddressToWatchSyncTipWhereInput[]
    NOT?: AddressToWatchSyncTipWhereInput | AddressToWatchSyncTipWhereInput[]
    id?: IntFilter<"AddressToWatchSyncTip"> | number
    slot?: IntFilter<"AddressToWatchSyncTip"> | number
    blockHash?: StringFilter<"AddressToWatchSyncTip"> | string
  }

  export type AddressToWatchSyncTipOrderByWithRelationInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type AddressToWatchSyncTipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slot?: number
    blockHash?: string
    AND?: AddressToWatchSyncTipWhereInput | AddressToWatchSyncTipWhereInput[]
    OR?: AddressToWatchSyncTipWhereInput[]
    NOT?: AddressToWatchSyncTipWhereInput | AddressToWatchSyncTipWhereInput[]
  }, "id" | "slot" | "blockHash">

  export type AddressToWatchSyncTipOrderByWithAggregationInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
    _count?: AddressToWatchSyncTipCountOrderByAggregateInput
    _avg?: AddressToWatchSyncTipAvgOrderByAggregateInput
    _max?: AddressToWatchSyncTipMaxOrderByAggregateInput
    _min?: AddressToWatchSyncTipMinOrderByAggregateInput
    _sum?: AddressToWatchSyncTipSumOrderByAggregateInput
  }

  export type AddressToWatchSyncTipScalarWhereWithAggregatesInput = {
    AND?: AddressToWatchSyncTipScalarWhereWithAggregatesInput | AddressToWatchSyncTipScalarWhereWithAggregatesInput[]
    OR?: AddressToWatchSyncTipScalarWhereWithAggregatesInput[]
    NOT?: AddressToWatchSyncTipScalarWhereWithAggregatesInput | AddressToWatchSyncTipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AddressToWatchSyncTip"> | number
    slot?: IntWithAggregatesFilter<"AddressToWatchSyncTip"> | number
    blockHash?: StringWithAggregatesFilter<"AddressToWatchSyncTip"> | string
  }

  export type TransactionCreateInput = {
    txHash: string
    cbor: string
    addresses?: AddressToWatchCreateNestedManyWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    txHash: string
    cbor: string
    addresses?: AddressToWatchUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type TransactionUpdateInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    addresses?: AddressToWatchUpdateManyWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
    addresses?: AddressToWatchUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: number
    txHash: string
    cbor: string
  }

  export type TransactionUpdateManyMutationInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionSyncTipCreateInput = {
    slot: number
    blockHash: string
  }

  export type TransactionSyncTipUncheckedCreateInput = {
    id?: number
    slot: number
    blockHash: string
  }

  export type TransactionSyncTipUpdateInput = {
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionSyncTipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionSyncTipCreateManyInput = {
    id?: number
    slot: number
    blockHash: string
  }

  export type TransactionSyncTipUpdateManyMutationInput = {
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionSyncTipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type AddressToWatchCreateInput = {
    key: string
    value: string
    type?: $Enums.LocalStateType | null
    transactions?: TransactionCreateNestedManyWithoutAddressesInput
  }

  export type AddressToWatchUncheckedCreateInput = {
    id?: number
    key: string
    value: string
    type?: $Enums.LocalStateType | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutAddressesInput
  }

  export type AddressToWatchUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumLocalStateTypeFieldUpdateOperationsInput | $Enums.LocalStateType | null
    transactions?: TransactionUpdateManyWithoutAddressesNestedInput
  }

  export type AddressToWatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumLocalStateTypeFieldUpdateOperationsInput | $Enums.LocalStateType | null
    transactions?: TransactionUncheckedUpdateManyWithoutAddressesNestedInput
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

  export type AddressToWatchSyncTipCreateInput = {
    slot: number
    blockHash: string
  }

  export type AddressToWatchSyncTipUncheckedCreateInput = {
    id?: number
    slot: number
    blockHash: string
  }

  export type AddressToWatchSyncTipUpdateInput = {
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type AddressToWatchSyncTipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type AddressToWatchSyncTipCreateManyInput = {
    id?: number
    slot: number
    blockHash: string
  }

  export type AddressToWatchSyncTipUpdateManyMutationInput = {
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
  }

  export type AddressToWatchSyncTipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    blockHash?: StringFieldUpdateOperationsInput | string
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

  export type AddressToWatchListRelationFilter = {
    every?: AddressToWatchWhereInput
    some?: AddressToWatchWhereInput
    none?: AddressToWatchWhereInput
  }

  export type AddressToWatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    txHash?: SortOrder
    cbor?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TransactionSyncTipCountOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type TransactionSyncTipAvgOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
  }

  export type TransactionSyncTipMaxOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type TransactionSyncTipMinOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type TransactionSyncTipSumOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
  }

  export type EnumLocalStateTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LocalStateType | EnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LocalStateType[] | ListEnumLocalStateTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLocalStateTypeNullableFilter<$PrismaModel> | $Enums.LocalStateType | null
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type AddressToWatchSyncTipCountOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type AddressToWatchSyncTipAvgOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
  }

  export type AddressToWatchSyncTipMaxOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type AddressToWatchSyncTipMinOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    blockHash?: SortOrder
  }

  export type AddressToWatchSyncTipSumOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
  }

  export type AddressToWatchCreateNestedManyWithoutTransactionsInput = {
    create?: XOR<AddressToWatchCreateWithoutTransactionsInput, AddressToWatchUncheckedCreateWithoutTransactionsInput> | AddressToWatchCreateWithoutTransactionsInput[] | AddressToWatchUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: AddressToWatchCreateOrConnectWithoutTransactionsInput | AddressToWatchCreateOrConnectWithoutTransactionsInput[]
    connect?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
  }

  export type AddressToWatchUncheckedCreateNestedManyWithoutTransactionsInput = {
    create?: XOR<AddressToWatchCreateWithoutTransactionsInput, AddressToWatchUncheckedCreateWithoutTransactionsInput> | AddressToWatchCreateWithoutTransactionsInput[] | AddressToWatchUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: AddressToWatchCreateOrConnectWithoutTransactionsInput | AddressToWatchCreateOrConnectWithoutTransactionsInput[]
    connect?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AddressToWatchUpdateManyWithoutTransactionsNestedInput = {
    create?: XOR<AddressToWatchCreateWithoutTransactionsInput, AddressToWatchUncheckedCreateWithoutTransactionsInput> | AddressToWatchCreateWithoutTransactionsInput[] | AddressToWatchUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: AddressToWatchCreateOrConnectWithoutTransactionsInput | AddressToWatchCreateOrConnectWithoutTransactionsInput[]
    upsert?: AddressToWatchUpsertWithWhereUniqueWithoutTransactionsInput | AddressToWatchUpsertWithWhereUniqueWithoutTransactionsInput[]
    set?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
    disconnect?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
    delete?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
    connect?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
    update?: AddressToWatchUpdateWithWhereUniqueWithoutTransactionsInput | AddressToWatchUpdateWithWhereUniqueWithoutTransactionsInput[]
    updateMany?: AddressToWatchUpdateManyWithWhereWithoutTransactionsInput | AddressToWatchUpdateManyWithWhereWithoutTransactionsInput[]
    deleteMany?: AddressToWatchScalarWhereInput | AddressToWatchScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AddressToWatchUncheckedUpdateManyWithoutTransactionsNestedInput = {
    create?: XOR<AddressToWatchCreateWithoutTransactionsInput, AddressToWatchUncheckedCreateWithoutTransactionsInput> | AddressToWatchCreateWithoutTransactionsInput[] | AddressToWatchUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: AddressToWatchCreateOrConnectWithoutTransactionsInput | AddressToWatchCreateOrConnectWithoutTransactionsInput[]
    upsert?: AddressToWatchUpsertWithWhereUniqueWithoutTransactionsInput | AddressToWatchUpsertWithWhereUniqueWithoutTransactionsInput[]
    set?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
    disconnect?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
    delete?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
    connect?: AddressToWatchWhereUniqueInput | AddressToWatchWhereUniqueInput[]
    update?: AddressToWatchUpdateWithWhereUniqueWithoutTransactionsInput | AddressToWatchUpdateWithWhereUniqueWithoutTransactionsInput[]
    updateMany?: AddressToWatchUpdateManyWithWhereWithoutTransactionsInput | AddressToWatchUpdateManyWithWhereWithoutTransactionsInput[]
    deleteMany?: AddressToWatchScalarWhereInput | AddressToWatchScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutAddressesInput = {
    create?: XOR<TransactionCreateWithoutAddressesInput, TransactionUncheckedCreateWithoutAddressesInput> | TransactionCreateWithoutAddressesInput[] | TransactionUncheckedCreateWithoutAddressesInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAddressesInput | TransactionCreateOrConnectWithoutAddressesInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAddressesInput = {
    create?: XOR<TransactionCreateWithoutAddressesInput, TransactionUncheckedCreateWithoutAddressesInput> | TransactionCreateWithoutAddressesInput[] | TransactionUncheckedCreateWithoutAddressesInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAddressesInput | TransactionCreateOrConnectWithoutAddressesInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NullableEnumLocalStateTypeFieldUpdateOperationsInput = {
    set?: $Enums.LocalStateType | null
  }

  export type TransactionUpdateManyWithoutAddressesNestedInput = {
    create?: XOR<TransactionCreateWithoutAddressesInput, TransactionUncheckedCreateWithoutAddressesInput> | TransactionCreateWithoutAddressesInput[] | TransactionUncheckedCreateWithoutAddressesInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAddressesInput | TransactionCreateOrConnectWithoutAddressesInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAddressesInput | TransactionUpsertWithWhereUniqueWithoutAddressesInput[]
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAddressesInput | TransactionUpdateWithWhereUniqueWithoutAddressesInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAddressesInput | TransactionUpdateManyWithWhereWithoutAddressesInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAddressesNestedInput = {
    create?: XOR<TransactionCreateWithoutAddressesInput, TransactionUncheckedCreateWithoutAddressesInput> | TransactionCreateWithoutAddressesInput[] | TransactionUncheckedCreateWithoutAddressesInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAddressesInput | TransactionCreateOrConnectWithoutAddressesInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAddressesInput | TransactionUpsertWithWhereUniqueWithoutAddressesInput[]
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAddressesInput | TransactionUpdateWithWhereUniqueWithoutAddressesInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAddressesInput | TransactionUpdateManyWithWhereWithoutAddressesInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
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

  export type AddressToWatchCreateWithoutTransactionsInput = {
    key: string
    value: string
    type?: $Enums.LocalStateType | null
  }

  export type AddressToWatchUncheckedCreateWithoutTransactionsInput = {
    id?: number
    key: string
    value: string
    type?: $Enums.LocalStateType | null
  }

  export type AddressToWatchCreateOrConnectWithoutTransactionsInput = {
    where: AddressToWatchWhereUniqueInput
    create: XOR<AddressToWatchCreateWithoutTransactionsInput, AddressToWatchUncheckedCreateWithoutTransactionsInput>
  }

  export type AddressToWatchUpsertWithWhereUniqueWithoutTransactionsInput = {
    where: AddressToWatchWhereUniqueInput
    update: XOR<AddressToWatchUpdateWithoutTransactionsInput, AddressToWatchUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AddressToWatchCreateWithoutTransactionsInput, AddressToWatchUncheckedCreateWithoutTransactionsInput>
  }

  export type AddressToWatchUpdateWithWhereUniqueWithoutTransactionsInput = {
    where: AddressToWatchWhereUniqueInput
    data: XOR<AddressToWatchUpdateWithoutTransactionsInput, AddressToWatchUncheckedUpdateWithoutTransactionsInput>
  }

  export type AddressToWatchUpdateManyWithWhereWithoutTransactionsInput = {
    where: AddressToWatchScalarWhereInput
    data: XOR<AddressToWatchUpdateManyMutationInput, AddressToWatchUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type AddressToWatchScalarWhereInput = {
    AND?: AddressToWatchScalarWhereInput | AddressToWatchScalarWhereInput[]
    OR?: AddressToWatchScalarWhereInput[]
    NOT?: AddressToWatchScalarWhereInput | AddressToWatchScalarWhereInput[]
    id?: IntFilter<"AddressToWatch"> | number
    key?: StringFilter<"AddressToWatch"> | string
    value?: StringFilter<"AddressToWatch"> | string
    type?: EnumLocalStateTypeNullableFilter<"AddressToWatch"> | $Enums.LocalStateType | null
  }

  export type TransactionCreateWithoutAddressesInput = {
    txHash: string
    cbor: string
  }

  export type TransactionUncheckedCreateWithoutAddressesInput = {
    id?: number
    txHash: string
    cbor: string
  }

  export type TransactionCreateOrConnectWithoutAddressesInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAddressesInput, TransactionUncheckedCreateWithoutAddressesInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutAddressesInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAddressesInput, TransactionUncheckedUpdateWithoutAddressesInput>
    create: XOR<TransactionCreateWithoutAddressesInput, TransactionUncheckedCreateWithoutAddressesInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAddressesInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAddressesInput, TransactionUncheckedUpdateWithoutAddressesInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAddressesInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAddressesInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    txHash?: StringFilter<"Transaction"> | string
    cbor?: StringFilter<"Transaction"> | string
  }

  export type AddressToWatchUpdateWithoutTransactionsInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumLocalStateTypeFieldUpdateOperationsInput | $Enums.LocalStateType | null
  }

  export type AddressToWatchUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumLocalStateTypeFieldUpdateOperationsInput | $Enums.LocalStateType | null
  }

  export type AddressToWatchUncheckedUpdateManyWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumLocalStateTypeFieldUpdateOperationsInput | $Enums.LocalStateType | null
  }

  export type TransactionUpdateWithoutAddressesInput = {
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUncheckedUpdateManyWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    txHash?: StringFieldUpdateOperationsInput | string
    cbor?: StringFieldUpdateOperationsInput | string
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