/** 后端文件导出
 * @description
 * @returns {String}
 */
// 导出文件,须在axios请求加responseType: "blob"
export const __exportExcelFile = function (dataSource, name) {
	let blob = new Blob([dataSource], {
		type: "application/vnd.ms-excel"
	});
	let fileName = name + ".xlsx";
	let link = document.createElement("a");
	link.download = fileName;
	link.href = window.URL.createObjectURL(blob);
	document.body.appendChild(link);
	link.click();
	window.URL.revokeObjectURL(link.href);
	return {
		msg: "导出成功"
	};
};

/**
 * @description 检查hooks函数参数类型
 * @returns {String}
 */
export const __checkFunctionType = (obj, key) => {
	if (typeof obj[key] !== "function" || !Reflect.has(obj, key)) {
		obj[key] = function () {
			return {
				code: 404
			};
		};
	}
};

/**
 * @description 清空对象数据
 * @forms 表单数据
 * @returns {String}
 */
export const __clearForms = forms => {
	Object.keys(forms).forEach(key => {
		forms[key] = "";
	});
};
