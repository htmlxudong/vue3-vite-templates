import { ref, onMounted, watch } from "vue";
import { __checkFunctionType, __exportExcelFile } from "@/utils/";

/**
*@axiosApiList   Api列表
*@getList        查
*@editRow 		 改
*@export         导出
*@deleteRow 	 删
*@checkKeys  表格多选行key
  
}：
 */
export const useTable = (
	axiosApiList = {},
	options = {
		checkKeys: "id"
	}
) => {
	const dataSource = ref([]);
	// 分页数据
	const pageSizeOptions = ref();
	// 每页显示条数
	const pageSize = ref(10);
	// 总条数
	const total = ref(0);
	// 当前页数
	const pageNum = ref(1);

	const selectedRowKeys = ref([]);

	// tables 多选行
	watch(
		() => dataSource.value,
		val => {
			val &&
				val.forEach((item, index) => {
					item.key = item[options.checkKeys];
					item.index = index + 1;
				});
		}
	);

	onMounted(() => {
		onSelect();
	});

	const computePageNum = () => {
		// if (pageSize.value * pageNum.value > total.value) {
		// } else {
		// 	pageNum.value = 1;
		// }
	};

	// 查询
	const onSelect = async paramas => {
		computePageNum();
		await getTableList(paramas);
	};

	// 分页
	const onChange = (page, pageSize, params) => getTableList(params);

	const getTableList = async paramas => {
		const params = {
			pageIndex: pageNum.value,
			pageSize: pageSize.value,
			...paramas
		};

		__checkFunctionType(axiosApiList, "getList");

		let res = await axiosApiList["getList"](params);
		if (res && res.code === 200) {
			total.value = res.data.total;
			dataSource.value = res.data.list;
		}
	};

	const onDelete = async params => {
		__checkFunctionType(axiosApiList, "deleteRow");
		const res = await axiosApiList["deleteRow"](params);
		if (res.code === 200) {
			onSelect();
		}
	};

	// 增
	const onAddRow = async data => {
		__checkFunctionType(axiosApiList, "addRow");
		const res = await axiosApiList["addRow"](data);
		if (res.code === 200) {
			onSelect();
		}
	};

	// 改
	const onUpdateRow = async data => {
		__checkFunctionType(axiosApiList, "editRow");
		const res = await axiosApiList["editRow"](data);
		if (res.code === 200) {
			onSelect();
		}
	};

	const onExport = async (
		fileName,
		data = {
			ids: []
		}
	) => {
		const res = await axiosApiList["export"](data);
		__exportExcelFile(res, fileName);
	};

	const onSelectChange = selectedKeys => {
		selectedRowKeys.value = selectedKeys;
	};

	return {
		dataSource,
		pageSizeOptions,
		pageSize,
		total,
		pageNum,
		selectedRowKeys,
		onSelectChange,
		onChange,
		onSelect,
		onDelete,
		onExport,
		onAddRow,
		onUpdateRow
	};
};
