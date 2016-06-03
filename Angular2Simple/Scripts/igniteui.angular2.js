/// <reference path="jquery.d.ts" />
/// <reference path="igniteui.d.ts" />
/// <reference path="./../typings/main.d.ts"/>
System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1;
    var NODES, _reflect, IgControlBase, IgGridBase, IgGridComponent, IgTreeGridComponent, IgHierarchicalGridComponent, IgComboComponent, IgEditorBase, IgCheckboxEditorComponent, IgCurrencyEditorComponent, IgDateEditorComponent, IgDatePickerComponent, IgMaskEditorComponent, IgNumericEditorComponent, IgPercentEditorComponent, IgTextEditorComponent, IgTreeComponent, IgContentControlBase, IgDialogComponent, IgSplitterComponent, IgLayoutManagerComponent, IgTileManagerComponent, IgHtmlEditorComponent, IgValidatorComponent, IgPivotDataSelectorComponent, IgPivotGridComponent, IgDataChartComponent, IgPieChartComponent, IgDoughnutChartComponent, IgFunnelChartComponent, IgRadialGaugeComponent, IgZoombarComponent, IgMapComponent, IgSparklineComponent, IgBulletGraphComponent, IgLinearGaugeComponent, IgQRCodeBarcodeComponent, IgUploadComponent, IgPopoverComponent, IgNotifierComponent, IgRatingComponent, IgVideoPlayerComponent, IgRadialMenuComponent, IgSplitButtonComponent;
    function IgComponent(args) {
        if (args === void 0) { args = {}; }
        return function (cls) {
            // get current annotations
            var annotations = _reflect.getMetadata('annotations', cls) || [];
            var sel = cls.name
                .replace(/([A-Z])/g, function (group) { return "-" + group[0].toLowerCase(); })
                .slice(1).replace("-component", "");
            args.selector = sel;
            args.template = "<ng-content></ng-content>";
            args.inputs = ["options.columns:columns", "options.width:width", "options:height:height", "options:dataSource:dataSource", "options.dataSource[0].Name:dataSource[0].Name"];
            var contrName = sel.replace(/-([a-z])/g, function (group) {
                return group[1].toUpperCase();
            });
            var evt = [];
            if (jQuery.ui[contrName]) {
                for (var propt in jQuery.ui[contrName].prototype.events) {
                    evt.push(propt);
                }
                args.events = evt;
            }
            annotations.push(new core_1.Component(args));
            // redefine with added annotations
            _reflect.defineMetadata('annotations', annotations, cls);
            return cls;
        };
    }
    exports_1("IgComponent", IgComponent);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NODES = {
                "ig-text-editor": "input",
                "ig-numeric-editor": "input",
                "ig-percent-editor": "input",
                "ig-mask-editor": "input",
                "ig-date-picker": "input",
                "ig-date-editor": "input",
                "ig-currency-editor": "input",
                "ig-checkbox-editor": "input",
                "ig-html-editor": "div",
                "ig-combo": "input",
                "ig-grid": "table",
                "ig-tree-grid": "table",
                "ig-hierarchical-grid": "table",
                "ig-pivot-data-selector": "div",
                "ig-pivot-grid": "table",
                "ig-data-chart": "div",
                "ig-pie-chart": "div",
                "ig-doughnut-chart": "div",
                "ig-funnel-chart": "div",
                "ig-radial-gauge": "div",
                "ig-sparkline": "div",
                "ig-zoombar": "div",
                "ig-map": "div",
                "ig-bullet-graph": "div",
                "ig-linear-gauge": "div",
                "ig-q-r-code-barcode": "div",
                "ig-validator": "div",
                "ig-upload": "div",
                "ig-popover": "div",
                "ig-rating": "div",
                "ig-video-player": "div",
                "ig-radial-menu": "div",
                "ig-split-button": "div",
                "ig-notifier": "div",
                "ig-tree": "div",
                "ig-dialog": "div",
                "ig-splitter": "div",
                "ig-layout-manager": "div",
                "ig-tile-manager": "div"
            };
            _reflect = Reflect;
            IgControlBase = (function () {
                function IgControlBase(el, renderer, differs) {
                    this._allowChangeDetection = true;
                    this._differs = differs;
                    this._widgetName = this.convertToCamelCase(el.nativeElement.nodeName.toLowerCase()); //ig-grid -> igGrid
                    this._el = el.nativeElement.appendChild(document.createElement(NODES[el.nativeElement.nodeName.toLowerCase()]));
                    for (var propt in jQuery.ui[this._widgetName].prototype.events) {
                        this[propt] = new core_1.EventEmitter();
                    }
                }
                Object.defineProperty(IgControlBase.prototype, "options", {
                    set: function (v) {
                        this._config = v;
                        this._differ = this._differs.find([]).create(null);
                        this._opts = jQuery.extend(true, {}, this._config);
                        if (this._opts.dataSource) {
                            delete this._opts.dataSource;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                IgControlBase.prototype.ngOnInit = function () {
                    var evtName;
                    this._events = new Map();
                    //events binding
                    var that = this;
                    for (var propt in jQuery.ui[this._widgetName].prototype.events) {
                        evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
                        this._events[evtName] = propt;
                        jQuery(this._el).on(evtName, function (evt, ui) {
                            that[that._events[evt.type]].emit({ event: evt, ui: ui });
                        });
                    }
                    if (this.changeDetectionInterval === undefined || this.changeDetectionInterval === null) {
                        this.changeDetectionInterval = 500;
                    }
                    setInterval(function () {
                        that._allowChangeDetection = true;
                    }, this.changeDetectionInterval);
                    jQuery(this._el).attr("id", this.widgetId);
                    jQuery(this._el)[this._widgetName](this._config);
                };
                IgControlBase.prototype.ngDoCheck = function () {
                    if (this._allowChangeDetection) {
                        this._allowChangeDetection = false;
                        this.optionChange();
                    }
                };
                IgControlBase.prototype.optionChange = function () {
                    if (this._differ != null) {
                        var diff = [];
                        var element = jQuery(this._el);
                        var i, j, valKey = this._config.valueKey, option;
                        var opts = jQuery.extend(true, {}, this._config);
                        if (opts.dataSource) {
                            delete opts.dataSource;
                        }
                        if (!this.equalsDiff(opts, this._opts, diff)) {
                            this._opts = JSON.parse(JSON.stringify(opts));
                            for (i = 0; i < diff.length; i++) {
                                option = diff[i].key;
                                if (jQuery.ui[this._widgetName] &&
                                    jQuery.ui[this._widgetName].prototype.options &&
                                    jQuery.ui[this._widgetName].prototype.options.hasOwnProperty(option) &&
                                    jQuery(this._el).data(this._widgetName)) {
                                    jQuery(this._el)[this._widgetName]("option", option, diff[i].newVal);
                                }
                            }
                        }
                    }
                };
                // Interrogation functions
                IgControlBase.prototype.isDate = function (value) {
                    return Object.prototype.toString.call(value) === "[object Date]";
                };
                IgControlBase.prototype.isRegExp = function (value) {
                    return Object.prototype.toString.call(value) === "[object RegExp]";
                };
                IgControlBase.prototype.isScope = function (obj) {
                    return obj && obj.jQueryevalAsync && obj.jQuerywatch;
                };
                IgControlBase.prototype.isWindow = function (obj) {
                    return obj && obj.document && obj.location && obj.alert && obj.setInterval;
                };
                IgControlBase.prototype.isFunction = function (value) { return typeof value === "function"; };
                IgControlBase.prototype.isArray = function (value) {
                    return Object.prototype.toString.call(value) === "[object Array]";
                };
                IgControlBase.prototype.equalsDiff = function (o1, o2, diff) {
                    if (o1 === o2) {
                        return true;
                    }
                    if (o1 === null || o2 === null) {
                        return false;
                    }
                    if (o1 !== o1 && o2 !== o2) {
                        return true;
                    } // NaN === NaN
                    var t1 = typeof o1, t2 = typeof o2, length, key, keySet, dirty, skipDiff = false, changedVals = [];
                    if (t1 === t2) {
                        if (t1 === "object") {
                            if (this.isArray(o1)) {
                                if (!this.isArray(o2)) {
                                    return false;
                                }
                                if ((length = o1.length) === o2.length) {
                                    if (!this.isArray(diff)) {
                                        skipDiff = true;
                                    }
                                    for (key = 0; key < length; key++) {
                                        // we are comparing objects here
                                        if (!this.equalsDiff(o1[key], o2[key], changedVals)) {
                                            dirty = true;
                                            if (!skipDiff) {
                                                diff.push({ index: key, txlog: changedVals });
                                            }
                                        }
                                    }
                                    if (dirty) {
                                        return false;
                                    }
                                    return true;
                                }
                            }
                            else if (this.isDate(o1)) {
                                return this.isDate(o2) && o1.getTime() === o2.getTime();
                            }
                            else if (this.isRegExp(o1) && this.isRegExp(o2)) {
                                return o1.toString() === o2.toString();
                            }
                            else {
                                if (this.isScope(o1) || this.isScope(o2) || this.isWindow(o1) || this.isWindow(o2) || this.isArray(o2)) {
                                    return false;
                                }
                                keySet = {};
                                if (!this.isArray(diff)) {
                                    skipDiff = true;
                                }
                                for (key in o1) {
                                    if (key.charAt(0) === "jQuery" || this.isFunction(o1[key])) {
                                        continue;
                                    }
                                    if (!this.equalsDiff(o1[key], o2[key])) {
                                        dirty = true;
                                        if (!skipDiff) {
                                            diff.push({ key: key, oldVal: o2[key], newVal: o1[key] });
                                        }
                                    }
                                    keySet[key] = true;
                                }
                                for (key in o2) {
                                    if (!keySet.hasOwnProperty(key) &&
                                        key.charAt(0) !== "jQuery" &&
                                        o2[key] !== undefined &&
                                        !this.isFunction(o2[key])) {
                                        return false;
                                    }
                                }
                                if (dirty) {
                                    return false;
                                }
                                return true;
                            }
                        }
                    }
                    return false;
                };
                IgControlBase.prototype.convertToCamelCase = function (str) {
                    //convert hyphen to camelCase
                    return str.replace(/-([a-z])/g, function (group) {
                        return group[1].toUpperCase();
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], IgControlBase.prototype, "options", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], IgControlBase.prototype, "widgetId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], IgControlBase.prototype, "changeDetectionInterval", void 0);
                return IgControlBase;
            }());
            exports_1("IgControlBase", IgControlBase);
            IgGridBase = (function (_super) {
                __extends(IgGridBase, _super);
                function IgGridBase(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgGridBase.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                    this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                };
                IgGridBase.prototype.deleteRow = function (id) {
                    var element = jQuery(this._el), tr = element.find("tr[data-id='" + id + "']");
                    if (tr.length > 0) {
                        tr.remove();
                        jQuery(this._el).data(this._widgetName).dataSource.deleteRow(id, true);
                        jQuery(this._el).data(this._widgetName).dataSource._removeTransactionsByRecordId(id);
                    }
                };
                IgGridBase.prototype.addRow = function (rowData, index) {
                    var grid, existingDomRow = jQuery(this._el).find("tr[data-id='" + rowData[this._config.primaryKey] + "']"), pkKey = this._config.primaryKey, widgetName = this._widgetName, existingRow, t;
                    if (this._widgetName === "igHierarchicalGrid") {
                        widgetName = "igGrid";
                    }
                    grid = jQuery(this._el).data(widgetName);
                    if (existingDomRow.length === 0) {
                        grid.renderNewRow(rowData, rowData[pkKey]);
                    }
                    existingRow = grid.dataSource.findRecordByKey(rowData[pkKey]);
                    if (!existingRow) {
                        // add the row without affecting the original DS (scope source) 
                        // TODO: trigger rowAdded event?
                        grid.dataSource._addRow(rowData, index);
                        //add transaction
                        t = grid.dataSource._createNewRowTransaction(rowData[pkKey], rowData);
                        grid.dataSource._addTransaction(t);
                        grid.dataSource._removeTransactionByTransactionId(t.tid);
                    }
                };
                IgGridBase.prototype.ngDoCheck = function () {
                    var _this = this;
                    if (this._differ != null && this._allowChangeDetection) {
                        this.optionChange();
                        this._allowChangeDetection = false;
                        var diff = [], element = jQuery(this._el), grid = element.data(this._widgetName), colIndex, td, i, j, pkKey = this._config.primaryKey, newFormattedVal, record, column;
                        //check for changes in collection
                        this._changes = this._differ.diff(this._config.dataSource);
                        if (this._config.dataSource.length !== this._dataSource.length) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            if (this._changes) {
                                this._changes.forEachAddedItem(function (r) { return _this.addRow(r.item, r.currentIndex); });
                                this._changes.forEachRemovedItem(function (r) { return _this.deleteRow(r.item[pkKey]); });
                            }
                        }
                        //check for changes in values
                        if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            for (i = 0; i < diff.length; i++) {
                                for (j = 0; j < diff[i].txlog.length; j++) {
                                    colIndex = element.data(this._widgetName)._getCellIndexByColumnKey(diff[i].txlog[j].key);
                                    record = this._config.dataSource[diff[i].index];
                                    td = element.find("tr[data-id='" + record[pkKey] + "']").children().get(colIndex);
                                    column = element.data(this._widgetName).columnByKey(diff[i].txlog[j].key);
                                    if (column) {
                                        if (column.template) {
                                            newFormattedVal = grid._renderTemplatedCell(diff[i].txlog[j].newVal, column);
                                        }
                                        else {
                                            newFormattedVal = grid._renderCell(diff[i].txlog[j].newVal, column, record);
                                        }
                                        jQuery(td).html(newFormattedVal);
                                        grid.dataSource.updateRow(record[pkKey], record);
                                        grid.dataSource._commitTransactionsByRowId(record[pkKey]);
                                    }
                                }
                            }
                        }
                    }
                };
                return IgGridBase;
            }(IgControlBase));
            exports_1("IgGridBase", IgGridBase);
            IgGridComponent = (function (_super) {
                __extends(IgGridComponent, _super);
                function IgGridComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgGridComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgGridComponent);
                return IgGridComponent;
            }(IgGridBase));
            exports_1("IgGridComponent", IgGridComponent);
            IgTreeGridComponent = (function (_super) {
                __extends(IgTreeGridComponent, _super);
                function IgTreeGridComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgTreeGridComponent.prototype.deleteRow = function (id) {
                    var element = jQuery(this._el), tr = element.find("tr[data-id='" + id + "']"), dataLevel = tr.attr("aria-level");
                    if (tr.length > 0) {
                        element.data(this._widgetName).dataSource.deleteRow(id, true);
                        element.data(this._widgetName).dataSource._removeTransactionsByRecordId(id);
                        var trs = tr.nextUntil("tr[data-level=" + dataLevel + "]");
                        if (trs.length === 0) {
                            trs = tr.nextAll("tr[data-level]");
                        }
                        tr.remove();
                        trs.remove();
                    }
                };
                IgTreeGridComponent.prototype.ngDoCheck = function () {
                    var _this = this;
                    if (this._differ != null && this._allowChangeDetection) {
                        this.optionChange();
                        this._allowChangeDetection = false;
                        var diff = [], element = jQuery(this._el), grid = element.data(this._widgetName), colIndex, td, i, j, pkKey = this._config.primaryKey, newFormattedVal, record, column;
                        //check for changes in collection
                        this._changes = this._differ.diff(this._config.dataSource);
                        if (this._config.dataSource.length !== this._dataSource.length) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            if (this._changes) {
                                this._changes.forEachAddedItem(function (r) { return _this.addRow(r.item, r.currentIndex); });
                                this._changes.forEachRemovedItem(function (r) { return _this.deleteRow(r.item[pkKey]); });
                            }
                        }
                        //check for changes in values
                        if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            for (i = 0; i < diff.length; i++) {
                                for (j = 0; j < diff[i].txlog.length; j++) {
                                    colIndex = element.data(this._widgetName)._getCellIndexByColumnKey(diff[i].txlog[j].key);
                                    record = this._config.dataSource[diff[i].index];
                                    td = element.find("tr[data-id='" + record[pkKey] + "']").children().get(colIndex);
                                    column = element.data(this._widgetName).columnByKey(diff[i].txlog[j].key);
                                    if (column) {
                                        if (column.template) {
                                            newFormattedVal = grid._renderTemplatedCell(diff[i].txlog[j].newVal, column);
                                        }
                                        else {
                                            newFormattedVal = grid._renderCell(diff[i].txlog[j].newVal, column, record);
                                        }
                                        jQuery(td).html(newFormattedVal);
                                        grid.dataSource.updateRow(record[pkKey], record);
                                        grid.dataSource._commitTransactionsByRowId(record[pkKey]);
                                    }
                                    else if (diff[i].txlog[j].key === this._config.childDataKey) {
                                        //we have an hierarchical data source and one of the nested collections has changed.
                                        grid.dataBind();
                                    }
                                }
                            }
                        }
                    }
                };
                IgTreeGridComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgTreeGridComponent);
                return IgTreeGridComponent;
            }(IgGridBase));
            exports_1("IgTreeGridComponent", IgTreeGridComponent);
            IgHierarchicalGridComponent = (function (_super) {
                __extends(IgHierarchicalGridComponent, _super);
                function IgHierarchicalGridComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgHierarchicalGridComponent.prototype.deleteRow = function (id) {
                    var element = jQuery(this._el), tr = element.find("tr[data-id='" + id + "']"), childContainer = tr.next("tr[data-container]");
                    if (tr.length > 0) {
                        tr.remove();
                        childContainer.remove();
                        element.data("igGrid").dataSource.deleteRow(id, true);
                        element.data("igGrid").dataSource._removeTransactionsByRecordId(id);
                    }
                };
                IgHierarchicalGridComponent.prototype.ngDoCheck = function () {
                    var _this = this;
                    this.optionChange();
                    if (this._differ != null && this._allowChangeDetection) {
                        this._allowChangeDetection = false;
                        var diff = [], element = jQuery(this._el), colIndex, td, i, j, pkKey = this._config.primaryKey, newFormattedVal, record, column, mainGrid = element.data("igGrid"), data = this._config.dataSource;
                        //check for changes in collection
                        this._changes = this._differ.diff(this._config.dataSource);
                        if (this._config.dataSource.length !== this._dataSource.length) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            if (this._changes) {
                                this._changes.forEachAddedItem(function (r) { return _this.addRow(r.item, r.currentIndex); });
                                this._changes.forEachRemovedItem(function (r) { return _this.deleteRow(r.item[pkKey]); });
                            }
                        }
                        //check for changes in data source values
                        if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            for (i = 0; i < diff.length; i++) {
                                for (j = 0; j < diff[i].txlog.length; j++) {
                                    var childGrid = element.data(this._widgetName).allChildrenWidgets().filter(function (indx) {
                                        var parentRow = jQuery(this.element).closest('tr[data-container]').prev();
                                        var parentGridPK = parentRow.closest(".ui-iggrid-table").data("igGrid").options.primaryKey;
                                        return (this.options.childrenDataProperty === diff[i].txlog[j].key ||
                                            parentRow.next("[data-container]").find("table[role='grid']").attr("id").contains("_" + diff[i].txlog[j].key + "_"))
                                            && parentRow.attr("data-id") == data[diff[i].index][parentGridPK];
                                    });
                                    if (childGrid.length > 0) {
                                        jQuery(childGrid).each(function () {
                                            this.dataBind();
                                        });
                                    }
                                    else {
                                        colIndex = mainGrid._getCellIndexByColumnKey(diff[i].txlog[j].key);
                                        record = this._config.dataSource[diff[i].index];
                                        td = element.find("tr[data-id='" + record[pkKey] + "']").children().get(colIndex);
                                        column = mainGrid.columnByKey(diff[i].txlog[j].key);
                                        if (column) {
                                            if (column.template) {
                                                newFormattedVal = mainGrid._renderTemplatedCell(diff[i].txlog[j].newVal, column);
                                            }
                                            else {
                                                newFormattedVal = mainGrid._renderCell(diff[i].txlog[j].newVal, column, record);
                                            }
                                            jQuery(td).html(newFormattedVal);
                                            mainGrid.dataSource.updateRow(record[pkKey], record);
                                            mainGrid.dataSource._commitTransactionsByRowId(record[pkKey]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                IgHierarchicalGridComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgHierarchicalGridComponent);
                return IgHierarchicalGridComponent;
            }(IgGridBase));
            exports_1("IgHierarchicalGridComponent", IgHierarchicalGridComponent);
            IgComboComponent = (function (_super) {
                __extends(IgComboComponent, _super);
                function IgComboComponent(model, el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                    this.model = model;
                    this.onChange = function (_) {
                    };
                    this.onTouched = function () {
                    };
                    if (model) {
                        model.valueAccessor = this;
                        this._model = model;
                    }
                }
                IgComboComponent.prototype.ngOnInit = function () {
                    var that = this;
                    _super.prototype.ngOnInit.call(this);
                    jQuery(this._el).on(this._widgetName.toLowerCase() + "selectionchanged", function (evt, ui) {
                        var items = ui.items;
                        if (items.length > 0) {
                            that._model.viewToModelUpdate(items[0].data[that._config.valueKey]);
                        }
                    });
                    this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                };
                IgComboComponent.prototype.writeValue = function (value) {
                    if (!!jQuery(this._el).data(this._widgetName)) {
                        jQuery(this._el)[this._widgetName]("value", value);
                    }
                };
                IgComboComponent.prototype.registerOnChange = function (fn) {
                    this.onChange = fn;
                };
                IgComboComponent.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                IgComboComponent.prototype.ngDoCheck = function () {
                    if (this._differ != null && this._allowChangeDetection) {
                        this.optionChange();
                        this._allowChangeDetection = false;
                        var diff = [];
                        var element = jQuery(this._el);
                        var i, j, valKey = this._config.valueKey, record, item;
                        //check for changes in collection
                        this._changes = this._differ.diff(this._config.dataSource);
                        if (this._config.dataSource.length !== this._dataSource.length) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            if (this._changes) {
                                this._changes.forEachAddedItem(function (r) { return element.data("igCombo").dataBind(); });
                                this._changes.forEachRemovedItem(function (r) { return element.data("igCombo").dataBind(); });
                            }
                        }
                        if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            for (i = 0; i < diff.length; i++) {
                                for (j = 0; j < diff[i].txlog.length; j++) {
                                    record = this._config.dataSource[diff[i].index];
                                    item = element.data("igCombo").itemsFromIndex(diff[i].index);
                                    element.data("igCombo")._updateItem(item.element, record);
                                    if (element.data("igCombo").isSelected(item.element)) {
                                        //should update the input
                                        element.data("igCombo")._updateInputValues(false);
                                    }
                                }
                            }
                        }
                    }
                };
                IgComboComponent = __decorate([
                    IgComponent(),
                    __param(0, core_1.Optional()), 
                    __metadata('design:paramtypes', [common_1.NgModel, core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgComboComponent);
                return IgComboComponent;
            }(IgControlBase));
            exports_1("IgComboComponent", IgComboComponent);
            IgEditorBase = (function (_super) {
                __extends(IgEditorBase, _super);
                function IgEditorBase(el, renderer, differs, model) {
                    _super.call(this, el, renderer, differs);
                    this.model = model;
                    this.onChange = function (_) {
                    };
                    this.onTouched = function () {
                    };
                    if (model) {
                        model.valueAccessor = this;
                        this._model = model;
                    }
                }
                IgEditorBase.prototype.ngOnInit = function () {
                    var that = this;
                    _super.prototype.ngOnInit.call(this);
                    if (this._model) {
                        jQuery(this._el).on(this._widgetName.toLowerCase() + "valuechanged", function (evt, ui) {
                            that._model.viewToModelUpdate(ui.newValue);
                        });
                    }
                };
                IgEditorBase.prototype.writeValue = function (value) {
                    if (!!jQuery(this._el).data(this._widgetName) && value !== null) {
                        jQuery(this._el)[this._widgetName]("value", value);
                    }
                };
                IgEditorBase.prototype.registerOnChange = function (fn) {
                    this.onChange = fn;
                };
                IgEditorBase.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                IgEditorBase = __decorate([
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel])
                ], IgEditorBase);
                return IgEditorBase;
            }(IgControlBase));
            exports_1("IgEditorBase", IgEditorBase);
            //Editors
            IgCheckboxEditorComponent = (function (_super) {
                __extends(IgCheckboxEditorComponent, _super);
                function IgCheckboxEditorComponent(el, renderer, differs, model) {
                    _super.call(this, el, renderer, differs, model);
                    this.model = model;
                }
                IgCheckboxEditorComponent = __decorate([
                    IgComponent(),
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel])
                ], IgCheckboxEditorComponent);
                return IgCheckboxEditorComponent;
            }(IgEditorBase));
            exports_1("IgCheckboxEditorComponent", IgCheckboxEditorComponent);
            IgCurrencyEditorComponent = (function (_super) {
                __extends(IgCurrencyEditorComponent, _super);
                function IgCurrencyEditorComponent(el, renderer, differs, model) {
                    _super.call(this, el, renderer, differs, model);
                    this.model = model;
                }
                IgCurrencyEditorComponent = __decorate([
                    IgComponent(),
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel])
                ], IgCurrencyEditorComponent);
                return IgCurrencyEditorComponent;
            }(IgEditorBase));
            exports_1("IgCurrencyEditorComponent", IgCurrencyEditorComponent);
            IgDateEditorComponent = (function (_super) {
                __extends(IgDateEditorComponent, _super);
                function IgDateEditorComponent(el, renderer, differs, model) {
                    _super.call(this, el, renderer, differs, model);
                    this.model = model;
                }
                IgDateEditorComponent = __decorate([
                    IgComponent(),
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel])
                ], IgDateEditorComponent);
                return IgDateEditorComponent;
            }(IgEditorBase));
            exports_1("IgDateEditorComponent", IgDateEditorComponent);
            IgDatePickerComponent = (function (_super) {
                __extends(IgDatePickerComponent, _super);
                function IgDatePickerComponent(el, renderer, differs, model) {
                    _super.call(this, el, renderer, differs, model);
                    this.model = model;
                }
                IgDatePickerComponent = __decorate([
                    IgComponent(),
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel])
                ], IgDatePickerComponent);
                return IgDatePickerComponent;
            }(IgEditorBase));
            exports_1("IgDatePickerComponent", IgDatePickerComponent);
            IgMaskEditorComponent = (function (_super) {
                __extends(IgMaskEditorComponent, _super);
                function IgMaskEditorComponent(el, renderer, differs, model) {
                    _super.call(this, el, renderer, differs, model);
                    this.model = model;
                }
                IgMaskEditorComponent = __decorate([
                    IgComponent(),
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel])
                ], IgMaskEditorComponent);
                return IgMaskEditorComponent;
            }(IgEditorBase));
            exports_1("IgMaskEditorComponent", IgMaskEditorComponent);
            IgNumericEditorComponent = (function (_super) {
                __extends(IgNumericEditorComponent, _super);
                function IgNumericEditorComponent(el, renderer, differs, model) {
                    _super.call(this, el, renderer, differs, model);
                    this.model = model;
                }
                IgNumericEditorComponent = __decorate([
                    IgComponent(),
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel])
                ], IgNumericEditorComponent);
                return IgNumericEditorComponent;
            }(IgEditorBase));
            exports_1("IgNumericEditorComponent", IgNumericEditorComponent);
            IgPercentEditorComponent = (function (_super) {
                __extends(IgPercentEditorComponent, _super);
                function IgPercentEditorComponent(el, renderer, differs, model) {
                    _super.call(this, el, renderer, differs, model);
                    this.model = model;
                }
                IgPercentEditorComponent = __decorate([
                    IgComponent(),
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel])
                ], IgPercentEditorComponent);
                return IgPercentEditorComponent;
            }(IgEditorBase));
            exports_1("IgPercentEditorComponent", IgPercentEditorComponent);
            IgTextEditorComponent = (function (_super) {
                __extends(IgTextEditorComponent, _super);
                function IgTextEditorComponent(el, renderer, differs, model) {
                    _super.call(this, el, renderer, differs, model);
                    this.model = model;
                }
                IgTextEditorComponent = __decorate([
                    IgComponent(),
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel])
                ], IgTextEditorComponent);
                return IgTextEditorComponent;
            }(IgEditorBase));
            exports_1("IgTextEditorComponent", IgTextEditorComponent);
            IgTreeComponent = (function (_super) {
                __extends(IgTreeComponent, _super);
                function IgTreeComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgTreeComponent.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                    this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                };
                IgTreeComponent.prototype.ngDoCheck = function () {
                    if (this._differ != null && this._allowChangeDetection) {
                        this.optionChange();
                        this._allowChangeDetection = false;
                        var diff = [];
                        var element = jQuery(this._el);
                        var i, j, valKey = this._config.valueKey, record, item;
                        //check for changes in collection
                        this._changes = this._differ.diff(this._config.dataSource);
                        if (this._config.dataSource.length !== this._dataSource.length) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            if (this._changes) {
                                this._changes.forEachAddedItem(function (r) { return element.igTree("dataBind"); });
                                this._changes.forEachRemovedItem(function (r) { return element.igTree("dataBind"); });
                            }
                        }
                        if (!this.equalsDiff(this._config.dataSource, this._dataSource, diff)) {
                            this._dataSource = JSON.parse(JSON.stringify(this._config.dataSource));
                            element.igTree("dataBind");
                        }
                    }
                };
                IgTreeComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgTreeComponent);
                return IgTreeComponent;
            }(IgControlBase));
            exports_1("IgTreeComponent", IgTreeComponent);
            IgContentControlBase = (function (_super) {
                __extends(IgContentControlBase, _super);
                function IgContentControlBase(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                    this.childNodes = el.nativeElement.childNodes;
                }
                IgContentControlBase.prototype.ngOnInit = function () {
                    jQuery(this._el).append(this.childNodes);
                    _super.prototype.ngOnInit.call(this);
                };
                return IgContentControlBase;
            }(IgControlBase));
            exports_1("IgContentControlBase", IgContentControlBase);
            IgDialogComponent = (function (_super) {
                __extends(IgDialogComponent, _super);
                function IgDialogComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgDialogComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgDialogComponent);
                return IgDialogComponent;
            }(IgContentControlBase));
            exports_1("IgDialogComponent", IgDialogComponent);
            IgSplitterComponent = (function (_super) {
                __extends(IgSplitterComponent, _super);
                function IgSplitterComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgSplitterComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgSplitterComponent);
                return IgSplitterComponent;
            }(IgContentControlBase));
            exports_1("IgSplitterComponent", IgSplitterComponent);
            IgLayoutManagerComponent = (function (_super) {
                __extends(IgLayoutManagerComponent, _super);
                function IgLayoutManagerComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgLayoutManagerComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgLayoutManagerComponent);
                return IgLayoutManagerComponent;
            }(IgContentControlBase));
            exports_1("IgLayoutManagerComponent", IgLayoutManagerComponent);
            IgTileManagerComponent = (function (_super) {
                __extends(IgTileManagerComponent, _super);
                function IgTileManagerComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgTileManagerComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgTileManagerComponent);
                return IgTileManagerComponent;
            }(IgContentControlBase));
            exports_1("IgTileManagerComponent", IgTileManagerComponent);
            IgHtmlEditorComponent = (function (_super) {
                __extends(IgHtmlEditorComponent, _super);
                function IgHtmlEditorComponent(el, renderer, differs, model, zone) {
                    _super.call(this, el, renderer, differs);
                    this.model = model;
                    this.zone = zone;
                    this.onChange = function (_) {
                    };
                    this.onTouched = function () {
                    };
                    if (model) {
                        model.valueAccessor = this;
                        this._zone = zone;
                        this._model = model;
                    }
                }
                IgHtmlEditorComponent.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                    var that = this;
                    if (this._model) {
                        var iframe = jQuery(this._el).find("iframe")[0].contentWindow.document;
                        jQuery(iframe).find("body[contenteditable=true]").on("keyup", function (evt, ui) {
                            that._model.viewToModelUpdate(jQuery(evt.target).html());
                            that._zone.run(function () {
                                that._model.viewToModelUpdate(jQuery(evt.target).html());
                            });
                        });
                    }
                };
                IgHtmlEditorComponent.prototype.writeValue = function (value) {
                    if (!!jQuery(this._el).data(this._widgetName) && value !== null && value !== jQuery(this._el)[this._widgetName]("getContent", "html")) {
                        jQuery(this._el)[this._widgetName]("setContent", value, "html");
                    }
                };
                IgHtmlEditorComponent.prototype.registerOnChange = function (fn) {
                    this.onChange = fn;
                };
                IgHtmlEditorComponent.prototype.registerOnTouched = function (fn) {
                    this.onTouched = fn;
                };
                IgHtmlEditorComponent = __decorate([
                    IgComponent(),
                    __param(3, core_1.Optional()), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, common_1.NgModel, core_1.NgZone])
                ], IgHtmlEditorComponent);
                return IgHtmlEditorComponent;
            }(IgControlBase));
            exports_1("IgHtmlEditorComponent", IgHtmlEditorComponent);
            IgValidatorComponent = (function (_super) {
                __extends(IgValidatorComponent, _super);
                function IgValidatorComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgValidatorComponent.prototype.ngOnInit = function () {
                    var evtName;
                    this._el = jQuery(document).find("#" + this.widgetId);
                    jQuery(this._el)[this._widgetName](this._config);
                    this._events = new Map();
                    //events binding
                    var that = this;
                    for (var propt in jQuery.ui[this._widgetName].prototype.events) {
                        evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
                        this._events[evtName] = propt;
                        jQuery(this._el).on(evtName, function (evt, ui) {
                            that[that._events[evt.type]].emit({ event: evt, ui: ui });
                        });
                    }
                };
                IgValidatorComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgValidatorComponent);
                return IgValidatorComponent;
            }(IgControlBase));
            exports_1("IgValidatorComponent", IgValidatorComponent);
            //Pivot Grids
            IgPivotDataSelectorComponent = (function (_super) {
                __extends(IgPivotDataSelectorComponent, _super);
                function IgPivotDataSelectorComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgPivotDataSelectorComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgPivotDataSelectorComponent);
                return IgPivotDataSelectorComponent;
            }(IgControlBase));
            exports_1("IgPivotDataSelectorComponent", IgPivotDataSelectorComponent);
            IgPivotGridComponent = (function (_super) {
                __extends(IgPivotGridComponent, _super);
                function IgPivotGridComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgPivotGridComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgPivotGridComponent);
                return IgPivotGridComponent;
            }(IgControlBase));
            exports_1("IgPivotGridComponent", IgPivotGridComponent);
            //Charts
            IgDataChartComponent = (function (_super) {
                __extends(IgDataChartComponent, _super);
                function IgDataChartComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgDataChartComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgDataChartComponent);
                return IgDataChartComponent;
            }(IgControlBase));
            exports_1("IgDataChartComponent", IgDataChartComponent);
            IgPieChartComponent = (function (_super) {
                __extends(IgPieChartComponent, _super);
                function IgPieChartComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgPieChartComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgPieChartComponent);
                return IgPieChartComponent;
            }(IgControlBase));
            exports_1("IgPieChartComponent", IgPieChartComponent);
            IgDoughnutChartComponent = (function (_super) {
                __extends(IgDoughnutChartComponent, _super);
                function IgDoughnutChartComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgDoughnutChartComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgDoughnutChartComponent);
                return IgDoughnutChartComponent;
            }(IgControlBase));
            exports_1("IgDoughnutChartComponent", IgDoughnutChartComponent);
            IgFunnelChartComponent = (function (_super) {
                __extends(IgFunnelChartComponent, _super);
                function IgFunnelChartComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgFunnelChartComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgFunnelChartComponent);
                return IgFunnelChartComponent;
            }(IgControlBase));
            exports_1("IgFunnelChartComponent", IgFunnelChartComponent);
            IgRadialGaugeComponent = (function (_super) {
                __extends(IgRadialGaugeComponent, _super);
                function IgRadialGaugeComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgRadialGaugeComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgRadialGaugeComponent);
                return IgRadialGaugeComponent;
            }(IgControlBase));
            exports_1("IgRadialGaugeComponent", IgRadialGaugeComponent);
            IgZoombarComponent = (function (_super) {
                __extends(IgZoombarComponent, _super);
                function IgZoombarComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgZoombarComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgZoombarComponent);
                return IgZoombarComponent;
            }(IgControlBase));
            exports_1("IgZoombarComponent", IgZoombarComponent);
            IgMapComponent = (function (_super) {
                __extends(IgMapComponent, _super);
                function IgMapComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgMapComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgMapComponent);
                return IgMapComponent;
            }(IgControlBase));
            exports_1("IgMapComponent", IgMapComponent);
            IgSparklineComponent = (function (_super) {
                __extends(IgSparklineComponent, _super);
                function IgSparklineComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgSparklineComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgSparklineComponent);
                return IgSparklineComponent;
            }(IgControlBase));
            exports_1("IgSparklineComponent", IgSparklineComponent);
            IgBulletGraphComponent = (function (_super) {
                __extends(IgBulletGraphComponent, _super);
                function IgBulletGraphComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgBulletGraphComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgBulletGraphComponent);
                return IgBulletGraphComponent;
            }(IgControlBase));
            exports_1("IgBulletGraphComponent", IgBulletGraphComponent);
            IgLinearGaugeComponent = (function (_super) {
                __extends(IgLinearGaugeComponent, _super);
                function IgLinearGaugeComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgLinearGaugeComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgLinearGaugeComponent);
                return IgLinearGaugeComponent;
            }(IgControlBase));
            exports_1("IgLinearGaugeComponent", IgLinearGaugeComponent);
            IgQRCodeBarcodeComponent = (function (_super) {
                __extends(IgQRCodeBarcodeComponent, _super);
                function IgQRCodeBarcodeComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgQRCodeBarcodeComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgQRCodeBarcodeComponent);
                return IgQRCodeBarcodeComponent;
            }(IgControlBase));
            exports_1("IgQRCodeBarcodeComponent", IgQRCodeBarcodeComponent);
            //Others
            IgUploadComponent = (function (_super) {
                __extends(IgUploadComponent, _super);
                function IgUploadComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgUploadComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgUploadComponent);
                return IgUploadComponent;
            }(IgControlBase));
            exports_1("IgUploadComponent", IgUploadComponent);
            IgPopoverComponent = (function (_super) {
                __extends(IgPopoverComponent, _super);
                function IgPopoverComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgPopoverComponent.prototype.ngOnInit = function () {
                    var elem = jQuery(document).find("#" + this.widgetId);
                    if (elem.length === 1) {
                        this._el = elem;
                        this._events = new Map();
                        //events binding
                        var that_1 = this;
                        var evtName;
                        for (var propt in jQuery.ui[this._widgetName].prototype.events) {
                            evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
                            this._events[evtName] = propt;
                            jQuery(this._el).on(evtName, function (evt, ui) {
                                that_1[that_1._events[evt.type]].emit({ event: evt, ui: ui });
                            });
                        }
                        jQuery(this._el)[this._widgetName](this._config);
                    }
                    else {
                        _super.prototype.ngOnInit.call(this);
                    }
                };
                IgPopoverComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgPopoverComponent);
                return IgPopoverComponent;
            }(IgControlBase));
            exports_1("IgPopoverComponent", IgPopoverComponent);
            IgNotifierComponent = (function (_super) {
                __extends(IgNotifierComponent, _super);
                function IgNotifierComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgNotifierComponent.prototype.ngOnInit = function () {
                    var elem = jQuery(document).find("#" + this.widgetId);
                    if (elem.length === 1) {
                        this._el = elem;
                        this._events = new Map();
                        //events binding
                        var that_2 = this;
                        var evtName;
                        for (var propt in jQuery.ui[this._widgetName].prototype.events) {
                            evtName = this._widgetName.toLowerCase() + propt.toLowerCase();
                            this._events[evtName] = propt;
                            jQuery(this._el).on(evtName, function (evt, ui) {
                                that_2[that_2._events[evt.type]].emit({ event: evt, ui: ui });
                            });
                        }
                        jQuery(this._el)[this._widgetName](this._config);
                    }
                    else {
                        _super.prototype.ngOnInit.call(this);
                    }
                };
                IgNotifierComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgNotifierComponent);
                return IgNotifierComponent;
            }(IgControlBase));
            exports_1("IgNotifierComponent", IgNotifierComponent);
            IgRatingComponent = (function (_super) {
                __extends(IgRatingComponent, _super);
                function IgRatingComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgRatingComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgRatingComponent);
                return IgRatingComponent;
            }(IgControlBase));
            exports_1("IgRatingComponent", IgRatingComponent);
            IgVideoPlayerComponent = (function (_super) {
                __extends(IgVideoPlayerComponent, _super);
                function IgVideoPlayerComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgVideoPlayerComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgVideoPlayerComponent);
                return IgVideoPlayerComponent;
            }(IgControlBase));
            exports_1("IgVideoPlayerComponent", IgVideoPlayerComponent);
            IgRadialMenuComponent = (function (_super) {
                __extends(IgRadialMenuComponent, _super);
                function IgRadialMenuComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgRadialMenuComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgRadialMenuComponent);
                return IgRadialMenuComponent;
            }(IgControlBase));
            exports_1("IgRadialMenuComponent", IgRadialMenuComponent);
            IgSplitButtonComponent = (function (_super) {
                __extends(IgSplitButtonComponent, _super);
                function IgSplitButtonComponent(el, renderer, differs) {
                    _super.call(this, el, renderer, differs);
                }
                IgSplitButtonComponent = __decorate([
                    IgComponent(), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers])
                ], IgSplitButtonComponent);
                return IgSplitButtonComponent;
            }(IgControlBase));
            exports_1("IgSplitButtonComponent", IgSplitButtonComponent);
        }
    }
});
//# sourceMappingURL=igniteui.angular2.js.map