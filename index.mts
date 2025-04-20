import {
  Dashboard as CoreDashboard,
  Panel as CorePanel,
  RowPanel as CoreRowPanel,
} from "@grafana/schema";
import * as BarChartPanelCfg from "@grafana/schema/dist/esm/raw/composable/barchart/panelcfg/x/BarChartPanelCfg_types.gen";
import * as BarGaugePanelCfg from "@grafana/schema/dist/esm/raw/composable/bargauge/panelcfg/x/BarGaugePanelCfg_types.gen";
import * as GaugePanelCfg from "@grafana/schema/dist/esm/raw/composable/gauge/panelcfg/x/GaugePanelCfg_types.gen";
import * as PieChartPanelCfg from "@grafana/schema/dist/esm/raw/composable/piechart/panelcfg/x/PieChartPanelCfg_types.gen";
import * as StatPanelCfg from "@grafana/schema/dist/esm/raw/composable/stat/panelcfg/x/StatPanelCfg_types.gen";
import * as TablePanelCfg from "@grafana/schema/dist/esm/raw/composable/table/panelcfg/x/TablePanelCfg_types.gen";
import * as TimeSeriesPanelCfg from "@grafana/schema/dist/esm/raw/composable/timeseries/panelcfg/x/TimeSeriesPanelCfg_types.gen";

import { Prometheus } from "@grafana/prometheus";

export interface PrometheusDataQuery extends Prometheus {}

export type DataQuery = PrometheusDataQuery;

export interface BarGaugeOptions extends BarGaugePanelCfg.Options {}
export interface BarGauge extends Panel<BarGaugeOptions> {
  type: "bargauge";
}

export interface BarChartOptions extends BarChartPanelCfg.Options {}
export interface BarChartFieldConfig extends BarChartPanelCfg.FieldConfig {}
export interface BarChart extends Panel<BarChartOptions, BarChartFieldConfig> {
  type: "barchart";
}

export interface GaugeOptions extends GaugePanelCfg.Options {}
export interface Gauge extends Panel<GaugeOptions> {
  type: "gauge";
}

export interface PieChartOptions extends PieChartPanelCfg.Options {}
export interface PieChartFieldConfig extends PieChartPanelCfg.FieldConfig {}
export interface PieChart extends Panel<PieChartOptions, PieChartFieldConfig> {
  type: "piechart";
}

export interface StatOptions extends StatPanelCfg.Options {}
export interface Stat extends Panel<StatOptions> {
  type: "stat";
}

export interface TableOptions extends TablePanelCfg.Options {}
export interface TableFieldConfig extends TablePanelCfg.FieldConfig {}
export interface Table extends Panel<TableOptions, TableFieldConfig> {
  type: "table";
}

export interface TimeSeriesOptions extends TimeSeriesPanelCfg.Options {}
export interface TimeSeriesFieldConfig extends TimeSeriesPanelCfg.FieldConfig {}
export interface TimeSeries
  extends Panel<TimeSeriesOptions, TimeSeriesFieldConfig> {
  type: "timeseries";
}

export type PluginPanel =
  | BarGauge
  | BarChart
  | Gauge
  | PieChart
  | Stat
  | Table
  | TimeSeries;

export interface Panel<
  TOptions = Record<string, unknown>,
  TCustomFieldConfig = Record<string, unknown>
> extends Omit<CorePanel<TOptions, TCustomFieldConfig>, "options" | "targets"> {
  options?: TOptions;
  targets?: DataQuery[];
}
export interface RowPanel extends Omit<CoreRowPanel, "panels"> {
  panels: PluginPanel[];
}

export interface Dashboard extends Omit<CoreDashboard, "panels"> {
  panels: Array<PluginPanel | RowPanel>;
}
