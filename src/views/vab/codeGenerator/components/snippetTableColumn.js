const timeFieldNeedHandle = {
  created_at: true,
  create_time: true,
  updated_at: true,
  update_time: true,
  start_time: true,
  end_time: true,
};
const genTableColumnSnippetSimple = (key, label) => {
  return `<el-table-column show-overflow-tooltip prop="${key}" label="${label}"/>`;
};

const genTabeleColumnSinppetTemplate = (key, label) => {
  let val = "";
  if (timeFieldNeedHandle[key]) {
    val = `parseTime(row.${key})`;
  } else {
    val = `row.${key}`;
  }
  return `<el-table-column show-overflow-tooltip label="${label}">
          <template #default={row}>
            {{ ${val} }}
          </template>
        </el-table-column>`;
};

export const genTableColumnSnippet = (headers) => {
  return headers
    .filter((header) => {
      return header.show;
    })
    .map((header) => {
      if (timeFieldNeedHandle[header.key] || header.opt === "template") {
        return genTabeleColumnSinppetTemplate(header.key, header.label);
      } else {
        return genTableColumnSnippetSimple(header.key, header.label);
      }
    })
    .join("\n      ");
};
