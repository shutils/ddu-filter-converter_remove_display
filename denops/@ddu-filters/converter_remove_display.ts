import {
  BaseFilter,
  BaseFilterParams,
  DduItem,
} from "https://deno.land/x/ddu_vim@v3.4.4/types.ts";
import { FilterArguments } from "https://deno.land/x/ddu_vim@v3.4.4/base/filter.ts";

type FilterParams = Record<never, never>;
export class Filter extends BaseFilter<BaseFilterParams> {
  filter(
    { items }: FilterArguments<FilterParams>,
  ): Promise<DduItem[]> {
    return Promise.resolve(items.map((item: DduItem) => {
      if (item.display != undefined) {
        item.display = undefined;
      }
      return item;
    }));
  }
  params(): FilterParams {
    return {};
  }
}
