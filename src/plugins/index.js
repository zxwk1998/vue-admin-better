/* 公共引入,勿随意修改,修改时需经过确认 */
import Vue from "vue";
import "normalize.css";
import "./rely";
import "./element";
import "./support";
import "@/styles/byui.scss";
import byui from "@/utils/byui";
import "@/icons";
import "@/remixicon";
import "@/config/permission";
import "@/utils/errorLog";
import "./f12";
import drag from "@/directive/drag";
import permission from "@/directive/permission";
import "./byuiIcon";
import ByuiQueryForm from "@/components/ByuiQueryForm";
import ByuiQueryFormTopPanel from "@/components/ByuiQueryForm/ByuiQueryFormTopPanel";
import ByuiQueryFormBottomPanel from "@/components/ByuiQueryForm/ByuiQueryFormBottomPanel";
import ByuiQueryFormLeftPanel from "@/components/ByuiQueryForm/ByuiQueryFormLeftPanel";
import ByuiQueryFormRightPanel from "@/components/ByuiQueryForm/ByuiQueryFormRightPanel";

Vue.use(permission);
Vue.use(drag);
Vue.use(byui);

Vue.component("byui-query-form", ByuiQueryForm);
Vue.component("byui-query-form-left-panel", ByuiQueryFormLeftPanel);
Vue.component("byui-query-form-right-panel", ByuiQueryFormRightPanel);
Vue.component("byui-query-form-top-panel", ByuiQueryFormTopPanel);
Vue.component("byui-query-form-bottom-panel", ByuiQueryFormBottomPanel);
