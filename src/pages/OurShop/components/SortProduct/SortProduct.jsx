import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState
} from "react";
import SelectBoxCustom from "~/components/SelectBoxCustom/SelectBoxCustom";
import { useSorting } from "~/hooks/useSorting";

const SortProduct = forwardRef(
  (
    {
      listProduct,
      updateSetListProductRender,
      sortArr,
      itemPerPageArr,
      categories = [],
      selectedCategory = "All",
      setSelectedCategory = () => {}
    },
    ref
  ) => {
    const [showSortType, setShowSortType] = useState("ascending");
    const [showQuantity, setShowQuantity] = useState(itemPerPageArr[0].value);
    const [loadingMoreItem, setLoadingMoreItem] = useState(
      itemPerPageArr[0].value
    );
    const getValueSelect = (value, type) => {
      if (type === "sort") {
        setShowSortType(value);
      } else {
        setShowQuantity(value);
        setLoadingMoreItem(value);
      }
    };
    const { sortedList } = useSorting(listProduct, showSortType, showQuantity);

    useImperativeHandle(ref, () => ({
      handleOnclickMoreItem() {
        setShowQuantity((prev) => Number(prev) + Number(loadingMoreItem));
      }
    }));

    // handle sorting
    useEffect(() => {
      const listAfterSorting = sortedList();
      updateSetListProductRender(listAfterSorting);
    }, [showSortType, showQuantity]);

    return (
      <div className="py-5 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <label className="text-sm">Category:</label>
          <select
            className="border px-3 py-2 text-sm"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* sort */}
          <div className="flex space-x-3 items-center">
            <SelectBoxCustom
              selectOptions={sortArr}
              getValue={getValueSelect}
              type={"sort"}
            />
          </div>
        </div>

        {/* show item per page */}
        <div className="flex items-center space-x-5">
          <h2>Show</h2>
          <SelectBoxCustom
            selectOptions={itemPerPageArr}
            getValue={getValueSelect}
            type={"show"}
          />
        </div>
      </div>
    );
  }
);

export default SortProduct;
