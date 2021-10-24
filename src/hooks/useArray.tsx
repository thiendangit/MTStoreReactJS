import { useCallback, useState, useMemo, SetStateAction, useEffect } from 'react';

export type EntityId = number | string;

export interface DictionaryNum<T> {
  [id: number]: T | undefined;
}
export interface Dictionary<T> extends DictionaryNum<T> {
  [id: string]: T | undefined;
}

export type InitialArray<T extends any> = {
  id: EntityId;
} & T;

export interface EntityState<T> {
  ids: EntityId[];
  entities: Dictionary<T>;
}

type UseStateFull<T = any> = {
  value: T;
  setValue: React.Dispatch<SetStateAction<T>>;
};

type UseArrayActions<T> = {
  setValue: UseStateFull<T[]>['setValue'];
  addOne: (entity: T) => void;
  addMany?: (entities: T[]) => void;
  setAll?: (entities: T[]) => void;
  removeOne?: (entity: T) => void;
  removeMany?: (entitys: T[]) => void;
  removeAll?: () => void;
  updateOne?: (entity: T) => void;
  updateMany?: (entities: T[]) => void;
  upsertOne?: (entity: T) => void;
  upsertMany?: (entities: T[]) => void;
};

type UseArray<T = any> = [T[], UseArrayActions<T>];

function useArray<T = any>(initial: T[]): UseArray<T> {
  const [value, setValue] = useState<EntityState<T>>();

  useEffect(() => {
    // const initialTest = Array(10000).fill(0)
    // const test1 = () => {
    //     return initialTest.slice(0)
    // }
    // const test2 = () => {
    //     return Object.values(initialTest)
    // }
    // const test3 = () => {
    //     return Object.assign([], initialTest)
    // }

    // const test4 = () => {
    //     return [...initialTest]
    // }

    // const test5 = () => {
    //     return JSON.parse(JSON.stringify(initialTest))
    // }

    // const test6 = () => {
    //     return Object.assign({}, initialTest)
    // }

    // const minRes = TestPerformance([test1, test2, test3, test4, test5, test6])

    // console.log(minRes.minIdx);

    if (!value && initial) {
      setValue(
        initial.reduce(
          (old: EntityState<T>, current: InitialArray<T>) => {
            const ids_copy = Object.values(old.ids);
            ids_copy.push(current?.id);
            return {
              ids: ids_copy,
              entities: { ...old.entities, [current?.id]: current },
            };
          },
          {
            ids: [],
            entities: {},
          },
        ),
      );
    }
  }, [initial]);

  const addOne = useCallback((entity: InitialArray<T>) => {
    setValue((prev: EntityState<T>) => {
      if (!prev.entities[entity?.id]) {
        const old_ids = Object.values(prev.ids);
        old_ids.push(entity?.id);
        prev.ids = old_ids;
        prev.entities[entity?.id] = entity;
      }

      return prev;
    });
  }, []);

  const addMany = useCallback((entities: InitialArray<T>[]) => {
    setValue((prev: EntityState<T>) => {
      return entities.reduce(
        (old: EntityState<T>, current: InitialArray<T>) => {
          const ids_copy = Object.values(old.ids);
          ids_copy.push(current?.id);
          return {
            ids: ids_copy,
            entities: { ...old.entities, [current?.id]: current },
          };
        },
        {
          ids: prev.ids,
          entities: prev.entities,
        },
      );
    });
  }, []);

  const actions = useMemo(
    () => ({
      setValue,
      addOne,
      addMany,
    }),
    [addOne, addMany],
  );
  return [value, actions];
}

// return idx of min
// const TestPerformance = (arr: any[]): {min: number,minIdx: number} => {
//     const arrResult = Array(arr.length);
//     arr.map((el, idx) => {
//         const timeStart = performance.now();
//         const t = el();
//         console.log({ t });
//         arrResult[idx] = performance.now() - timeStart;
//     })
//     let min = arrResult[0];
//     let minIdx = 0;
//     console.log(arrResult)
//     arrResult.map((el, idx) => {
//         if (el < min) {
//             min = el
//             minIdx = idx
//         }
//     })
//     return {
//         min,
//         minIdx
//     }
// }

export { useArray };
