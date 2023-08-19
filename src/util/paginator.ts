export interface PaginatedResult<T> {
  data: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export type PaginateOptions = { page?: number | string, size?: number | string }
export type PaginateFunction = <T, K>(model: any, args?: K, options?: PaginateOptions) => Promise<PaginatedResult<T>>

export const paginator = (defaultOptions: PaginateOptions): PaginateFunction => {
  return async (model, args: any = { where: undefined }, options) => {
    const page = Number(options?.page || defaultOptions?.page) || 1;
    const size = Number(options?.size || defaultOptions?.size) || 10;

    const skip = page > 0 ? size * (page - 1) : 0;
    const [total, data] = await Promise.all([
      model.count({ where: args.where }),
      model.findMany({
        ...args,
        take: size,
        skip,
      }),
    ]);
    const lastPage = Math.ceil(total / size);

    const pageable: Pageable = {
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      offset: skip,
      pageSize: size,
      pageNumber: page,
      unpaged: false,
      paged: true,
    };


    return {
      data,
      pageable,
      last: page === lastPage,
      totalPages: lastPage,
      totalElements: total,
      size,
      number: page,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true,
      },
      first: page === 1,
      numberOfElements: data.length,
      empty: data.length === 0,

      // meta: {
      //   total,
      //   lastPage,
      //   currentPage: page,
      //   size,
      //   prev: page > 1 ? page - 1 : null,
      //   next: page < lastPage ? page + 1 : null,
      // },
    };
  };
};
