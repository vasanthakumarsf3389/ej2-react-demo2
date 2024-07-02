// import * as React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject } from '@syncfusion/ej2-react-grids';
// import { getValue } from '@syncfusion/ej2-base';
// import { orderDetails } from './data';
// import { SampleBase } from './sample-base';

// export class App extends SampleBase {

//   editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };

//   colTemp(args) {
//     return <button className="tempcell">{args[args.column.field]}</button>;
//   }

//   queryCellInfo(args) {
//     if (args.column.field === 'CustomerName') {
//       // debugger;
//       var child = args.cell.querySelector('.tempcell');
//       console.log(args.cell);
//       console.log(child);
//       // args.cell.querySelector('.tempcell').calssList.add('custom');
//     }
//   }

//   grideditTemplate(args) {
//     return (
//       // <input type="text" value={getValue('ShipCity', args)}/>
//       <input type="text" value={getValue('OrderID', args)} />
//     );
//   }

//   render() {
//     return (
//       <div className="control-pane">
//         <div className="control-section">
//           <GridComponent
//             dataSource={orderDetails.slice(0, 2)}
//             editSettings={this.editSettings}
//             queryCellInfo={this.queryCellInfo.bind(this)}
//             height="350"
//           >
//             <ColumnsDirective>
//               <ColumnDirective
//                 field="OrderID"
//                 headerText="Order ID"
//                 width="120"
//                 editTemplate={this.grideditTemplate.bind(this)}
//                 textAlign="Right"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="CustomerName"
//                 headerText="Customer Name"
//                 template={this.colTemp.bind(this)}
//                 width="150"
//               ></ColumnDirective>
//             </ColumnsDirective>
//             <Inject services={[Edit]} />
//           </GridComponent>
//         </div>
//       </div>
//     );
//   }
// }



// // complex data group with edit

// import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Toolbar, Group, Sort, Inject } from '@syncfusion/ej2-react-grids';
// function App () {
//     var gdataSource = [
//         {
//           project: {
//             id: 'b27585828a675f5acfef052dd',
//             name: 'Leave',
//             number: '1000000',
//             description:
//               'This project is used for personnel leave only.Please do not use this project unless personnel is going on leave.',
//           },
//           role: {
//             id: 'f1720daf89ee3de12e77dd69c',
//           },
//         },
//         {
//           project: {
//             id: 'c0d3c1454e0eec3d774d0bfe8',
//             name: 'Project C',
//             number: null,
//             description: 'Building the coolest structure ever',
//           },
//           role: {
//             id: '2589b2560b7338f055c0c9be3',
//           },
//         },
//         {
//           project: {
//             id: 'c0d3c1454e0eec3d774d0bfe8',
//             name: 'Project C',
//             number: null,
//             description: 'Building the coolest structure ever',
//           },
//           role: {
//             id: '309068c34805da0a0cec63c6d',
//           },
//         },
//         {
//           project: {
//             id: 'a6c827cce3fb0eee9dfa2395e',
//             name: 'Project A',
//             number: null,
//             description: 'Building the coolest structure ever',
//           },
//           role: {
//             id: 'd8094793b815df82db2c92728',
//           },
//         },
//       ];

//     const toolbarOptions = ['Edit', 'Update', 'Cancel'];
//     const editSettings = { allowEditing: true };
//     const groupOptions = { columns: ['project.name'], showGroupedColumn: false };
//     let gridInstance;
//     return (<div className='control-pane'>
//             <div className='control-section'>
//                 <GridComponent dataSource={gdataSource} ref={grid => gridInstance = grid} toolbar={toolbarOptions} editSettings={editSettings} allowGrouping={true} groupSettings={groupOptions} allowSorting={true} height="320">
//                     <ColumnsDirective>
//                         <ColumnDirective field='role.id' headerText='Role Id' width='140' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
//                         <ColumnDirective field='project.name' headerText='project.name' width='150'></ColumnDirective>
//                         <ColumnDirective field='project.description' headerText='Project Description' width='140' textAlign='Right'></ColumnDirective>
//                     </ColumnsDirective>
//                     <Inject services={[Group, Sort, Edit, Toolbar]}/>
//                 </GridComponent>
//             </div>
//         </div>);
// }


// // caption template function issue

// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Group,
//   Inject,
// } from '@syncfusion/ej2-react-grids';
// import { orderDetails } from './data';
// function App () {
//   const groupOptions = {
//     columns: ['CustomerID', 'ShipCity'],
//     showDropArea: false,
//     // captionTemplate:
//     //   '<span class="groupItems" style="color:blue"> ${field} -${key} - ${count} Items</span>',
//     captionTemplate: (args) => {
//       return args.field + ' - ' + args.items[0].key;
//     },
//   };
//   return (
//     <GridComponent
//       dataSource={orderDetails}
//       allowGrouping={true}
//       groupSettings={groupOptions}
//       height={267}
//       style={{ paddingTop: '80px' }}
//     >
//       <ColumnsDirective>
//         <ColumnDirective
//           field="OrderID"
//           headerText="Order ID"
//           width="120"
//           textAlign="Right"
//         />
//         <ColumnDirective
//           field="CustomerID"
//           headerText="Customer ID"
//           width="150"
//         />
//         <ColumnDirective field="ShipCity" headerText="Ship City" width="150" />
//         <ColumnDirective field="ShipName" headerText="Ship Name" width="150" />
//       </ColumnsDirective>
//       <Inject services={[Group]} />
//     </GridComponent>
//   );
// }

// // 564898
// import { GridComponent, ColumnsDirective, ColumnDirective, Inject, InfiniteScroll, VirtualScroll, Grid, RowDD, Toolbar, Group, Edit, Page, Filter, Sort, ColumnChooser, Search, Print, Reorder, Resize, ContextMenu, CommandColumn, Selection } from '@syncfusion/ej2-react-grids';
// import * as React from 'react';
// import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
// import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
// function App() {
//   const [ data, setData ] = useState([]);
//     const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
//     const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top' };
//     const editparams = { params: { popupHeight: '300px' } };
//     const validationRule = { required: true };
//     const orderidRules = { required: true, number: true };
//     const pageSettings = { pageCount: 5 };
//     const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
//     const gridDatasource = [
//         {
//           id: 1,
//           name: 'Admin',
//           date: 'Today',
//           status: 'Completed',
//           assignedTo: 'John Doe',
//           ShipCountry: "France",
//           reason: 'Reason 1',
//         },
//         {
//           id: 2,
//           name: 'User',
//           date: '17th Jan',
//           status: 'Completed',
//           assignedTo: 'John Doe',
//           ShipCountry: "Germany",
//           reason: 'Reason 1',
//         },
//         {
//           id: 3,
//           name: 'Guest',
//           date: '16th Jan',
//           status: 'Completed',
//           assignedTo: 'John Doe',
//           ShipCountry: "Brazil",
//           reason: 'Reason 1',
//         },
//       ];
//     let gridInstance;
//     let dropDownInstance;

//     const getAllDataForChapter = async () => {
//       debugger;
//       const response = await fetch("https://services.odata.org/V4/Northwind/Northwind.svc/Orders");
//        const movies = await response.json();
//        setData(movies.value);
//       //  gridInstance.refreshColumns();
//     };
  
//     useEffect(() => {
//       getAllDataForChapter();
//     }, []);
//     const droplist = [
//         { text: 'Top', value: 'Top' },
//         { text: 'Bottom', value: 'Bottom' }
//     ];
//     // const status = [
//     //   { status: 'Not Started', id: '1' },
//     //   { status: 'Ready to Start', id: '2' },
//     //   { status: 'In Progress', id: '3' },
//     //   { status: 'Completed', id: '4' },
//     //   { status: 'Rejected', id: '5' },
//     //   { status: 'Approved', id: '6' },
//     // ];
//     // const statusParams = {
//     //   params: {
//     //     actionComplete: () => false,
//     //     dataSource: new DataManager(status),
//     //     fields: { text: 'status', value: 'status' },
//     //     query: new Query(),
//     //   },
//     // };

//     const dependencyTemplate = (props) => {
//       console.log('props', props);
//       return (
//         <div>{props?.ShipCountry}</div>
//       );
//     };

//     function actionBegin(args) {
//         if (args.requestType === 'save') {
//             if (gridInstance.pageSettings.currentPage !== 1 && gridInstance.editSettings.newRowPosition === 'Top') {
//                 args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - gridInstance.pageSettings.pageSize;
//             }
//             else if (gridInstance.editSettings.newRowPosition === 'Bottom') {
//                 args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - 1;
//             }
//         }
//     }
//     function ddChange() {
//         gridInstance.editSettings.newRowPosition = dropDownInstance.value;
//     }
//     const template = (args) => {
//       debugger;
//       console.log('args', args);
//       return (
//         <div className="menu-bar justify-between" key={args['_id']} style={{ display: 'flex', gap: '19.5px' }}>
//           <div className="client-name cursor-pointer">{args.CustomerID}</div>
//         </div>
//       );
//     };
//     // const statusTemplate = (args) => {
//     //   let color = '';
//     //   if (args.status === 'In Progress') color = '#E26325';
//     //   else if (args.status === 'Not Started') color = '#333842';
//     //   else if (args.status === 'Ready to Start') color = '#EE8321';
//     //   else if (args.status === 'Completed') color = '#217713';
//     //   else if (args.status === 'Rejected') color = '#217713';
//     //   else if (args.status === 'Approved') color = '#3B7789';
//     //   return (<div style={{ color: color, borderRadius: '4px', height: '26px' }}>{args.status}</div>
//     //   );
//     // };

//     const dependencyParams = {
//       params: {
//         dataSource: new DataManager({
//           adaptor: new ODataV4Adaptor(),
//           crossDomain: true,
//           url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
//         }),
//         fields: { text: 'ShipCountry', value: 'ShipCountry' },
//         query: new Query(),
        
//       },
//     };

//     return (<div className='control-pane'>
//       <div className='control-section'>
//         <div className='col-md-9'>
//           <GridComponent dataSource={data} ref={grid => gridInstance = grid} toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} pageSettings={pageSettings} actionBegin={actionBegin.bind(this)}>
//           <ColumnsDirective>
//           <ColumnDirective field="OrderID" isPrimaryKey={true} headerText="OrderID"/>
//                 <ColumnDirective field="CustomerID" headerText="Customer Name" template={template} />
//                 {/* <ColumnDirective field="status" headerText="Status" editType="dropdownedit" edit={statusParams}
//                 // template={statusTemplate}
//                 /> */}
//                 <ColumnDirective field="ShipCountry" headerText="ShipCountry" editType="dropdownedit"
//                 edit={dependencyParams}
//                 // template={dependencyTemplate}
//                 />
//                 <ColumnDirective field="ShipCity" headerText="Ship City" />
//               </ColumnsDirective>
//             <Inject services={[Page, Toolbar, Edit]}/>
//           </GridComponent>
//         </div>
//       </div>
//     </div>);
// }


// import { GridComponent, ColumnsDirective, ColumnDirective, Page, Edit, Toolbar, Group, Sort, Inject } from '@syncfusion/ej2-react-grids';
// import { orderDataSource } from './data';

// import { DialogComponent } from '@syncfusion/ej2-react-popups';

// function App () {
//   let refresh = false;
//   const toolbarOptions = ['Edit', 'Update', 'Cancel'];
//     const editSettings = { allowEditing: true };
//     const editparams = { params: { popupHeight: '300px' } };
//     const validationRule = { required: true };
//     const orderidRules = { required: true, number: true };
//     const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
//     const groupOptions = { showGroupedColumn: false, columns: ['ShipCountry'] };
//     let gridInstance;
//     const visible = false;
//     const animationSettings = { effect: 'None' };
//     let alertDialogInstance;
//     const alertButtons = [{
//             click: () => {
//                 alertDialogInstance.hide();
//             },
//             buttonModel: { content: 'OK', isPrimary: true }
//         }];
//     function dataBound() {
//         if (refresh) {
//             gridInstance.groupColumn('ShipCountry');
//             refresh = false;
//         }
//     }
//     function load() {
//         refresh = this.refreshing;
//     }
//     function columnDragStart(args) {
//         if (args.column.field === 'OrderDate') {
//             alertDialogInstance.show();
//         }
//     }
//     function created() {
//         gridInstance.on('columnDragStart', columnDragStart, this);
//     }
//     return (<div className='control-pane'>
//             <div className='control-section'>
//                 <GridComponent dataSource={orderDataSource} allowPaging={true} ref={grid => gridInstance = grid} toolbar={toolbarOptions} pageSettings={{ pageCount: 5 }} editSettings={editSettings} allowGrouping={true} groupSettings={groupOptions} allowSorting={true} height="320" dataBound={dataBound.bind(this)} load={load} created={created}>
//                     <ColumnsDirective>
//                         <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
//                         <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={validationRule}></ColumnDirective>
//                         <ColumnDirective field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit'></ColumnDirective>
//                         <ColumnDirective field='OrderDate' headerText='Order Date' allowGrouping={false} editType='datetimepickeredit' format={format} width='160'></ColumnDirective>
//                         <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={editparams}></ColumnDirective>
//                     </ColumnsDirective>
//                     <Inject services={[Page, Group, Sort, Edit, Toolbar]}/>
//                 </GridComponent>
//                 <DialogComponent id="alertDialog" header='Grouping' visible={visible} animationSettings={animationSettings} width='300px' content='Grouping is disabled for this column' ref={alertdialog => alertDialogInstance = alertdialog} target='.control-section' buttons={alertButtons}></DialogComponent>
//                 <div className="e-dsalign">Source:
//                     <a href="https://en.wikipedia.org/wiki/List_of_prolific_inventors" target='_blank'>Wikipedia: List of Prolific inventors</a>
//                 </div>
//             </div>
//         </div>);
// }





// import { GridComponent, ColumnsDirective, ColumnDirective, Inject, VirtualScroll } from '@syncfusion/ej2-react-grids';
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
// import { getTradeData } from './data';
// function App() {
//     let grid;
//     let isDataBound = true;
//     let updateButton;
//     let clearButton;
//     let feedDelayInput;
//     let timerID;
//     let initial = true;
//     const load = function (args) {
//         this.on('data-ready', () => {
//             if (initial) {
//                 document.getElementById('update1')?.click();
//                 initial = false;
//                 feedDelayInput.element.addEventListener('keypress', (e) => {
//                     if (e && e.key === 'Enter' && feedDelayInput.element.parentElement.classList.contains('e-input-focus')) {
//                         feedDelayInput.value = parseInt(feedDelayInput.element.value);
//                         feedDelayInput.focusOut();
//                         updateButton.element.click();
//                     }
//                 });
//             }
//         });
//         this.on('destroy', function () {
//             if (timerID) {
//                 clearInterval(timerID);
//                 timerID = undefined;
//             }
//         });
//     };
//     const queryCellInfo = (args) => {
//         if (args.column?.field === 'NetIncome') {
//             if (args.data['Net'] < 0) {
//                 args.cell?.classList.remove('e-increase');
//                 args.cell?.classList.add('e-decrease');
//             }
//             else if (args.data['Net'] > 0) {
//                 args.cell?.classList.remove('e-decrease');
//                 args.cell?.classList.add('e-increase');
//             }
//         }
//         else if (args.column?.field === 'Change') {
//             if (args.data['Change'] < 0) {
//                 updateCellDetails(args.cell, 'below-0');
//             }
//             else {
//                 updateCellDetails(args.cell, 'above-0');
//             }
//         }
//         else if (args.column?.field === 'Net') {
//             if (args.data['Net'] < 0) {
//                 updateCellDetails(args.cell, 'below-0');
//             }
//             else {
//                 updateCellDetails(args.cell, 'above-0');
//             }
//         }
//         else if (isDataBound) {
//             if (args.column?.field === 'Rating') {
//                 args.cell.innerHTML = '';
//                 const span = document.createElement('span');
//                 const span2 = document.createElement('span');
//                 if (args.data['Change'] === 0) {
//                     span.classList.add('e-icons');
//                     span.classList.add('e-intermediate-state-2');
//                     span.classList.add('neutral');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('neutral');
//                     span2.innerText = 'Neutral';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//                 else if (args.data['Change'] < -2 && args.data['Net'] < 0) {
//                     span.classList.add('e-negc');
//                     span.classList.add('e-icons');
//                     span.classList.add('e-chevron-down-double');
//                     span.classList.add('below-0');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('below-0');
//                     span2.innerText = 'Strongly Sell';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//                 else if (args.data['Net'] < 0) {
//                     span.classList.add('e-negc');
//                     span.classList.add('e-icons');
//                     span.classList.add('e-chevron-down');
//                     span.classList.add('below-0');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('below-0');
//                     span2.innerText = 'Sell';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//                 else if (args.data['Change'] > 5 && args.data['Net'] > 10) {
//                     span.classList.add('e-posc');
//                     span.classList.add('e-icons');
//                     span.classList.add('e-chevron-up-double');
//                     span.classList.add('above-0');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('above-0');
//                     span2.innerText = 'Strongly Buy';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//                 else {
//                     span.classList.add('e-posc');
//                     span.classList.add('e-icons');
//                     span.classList.add('e-chevron-up');
//                     span.classList.add('above-0');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('above-0');
//                     span2.innerText = 'Buy';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//             }
//         }
//         isDataBound = true;
//     };
//     const updateCellDetails = (cell, className) => {
//         const div = document.createElement('div');
//         const span1 = document.createElement('span');
//         span1.classList.add('rowcell-left');
//         div.classList.add(className);
//         span1.innerHTML = cell.innerHTML;
//         cell.innerHTML = '';
//         div.appendChild(span1);
//         cell.appendChild(div);
//     };
//     const updateCellValues = () => {
//         let oldValue;
//         let newValue;
//         for (let i = 0; grid && i < grid?.currentViewData.length; i++) {
//             if (grid?.currentViewData[i] === undefined) {
//                 return;
//             }
//             let num = Math.floor(Math.random() * 99) + 1;
//             num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
//             oldValue = grid?.currentViewData[i]['Net'];
//             if (i % 2 === 0) {
//                 num = num * 0.25;
//             }
//             else if (i % 3 === 0) {
//                 num = num * 0.83;
//             }
//             else if (i % 5 === 0) {
//                 num = num * 0.79;
//             }
//             else if (i % 4 === 0) {
//                 num = num * 0.42;
//             }
//             else {
//                 num = num * 0.51;
//             }
//             isDataBound = true;
//             grid?.setCellValue(grid?.currentViewData[i]['id'], 'Net', parseFloat(num.toFixed(2)));
//             isDataBound = true;
//             newValue = parseFloat((grid?.currentViewData[i]['Net'] - oldValue).toString().substring(0, 2));
//             grid?.setCellValue(grid?.currentViewData[i]['id'], 'Change', parseFloat(newValue.toFixed(2)));
//             isDataBound = true;
//             const ratingValue = grid?.currentViewData[i]['Net'] < 0 ? 'Sell' : 'Buy';
//             grid?.setCellValue(grid?.currentViewData[i]['id'], 'Rating', ratingValue);
//             const val = num + newValue;
//             grid?.setCellValue(grid?.currentViewData[i]['id'], 'NetIncome', val);
//         }
//     };
//     const data = getTradeData;
//     const updateClick = () => {
//         if (!timerID) {
//             updateButton.disabled = true;
//             feedDelayInput.enabled = false;
//             clearButton.disabled = false;
//             timerID = setInterval(updateCellValues, feedDelayInput.value);
//         }
//     };
//     const clearClick = () => {
//         if (timerID) {
//             updateButton.disabled = false;
//             feedDelayInput.enabled = true;
//             clearButton.disabled = true;
//             clearInterval(timerID);
//             timerID = undefined;
//         }
//     };
//     return (<div className='control-pane'>
//             <div className='control-section row'>
//                 <div style={{ marginBottom: '10px' }}>
//                     <h4 style={{ display: 'inline-block', fontSize: '14px', paddingLeft: '5px' }}>
//                         Feed Delay(ms):
//                     </h4>
//                     <NumericTextBoxComponent format="N0" value={1000} min={10} max={5000} step={1} width={'150px'} style={{ marginLeft: '7px' }} ref={(scope) => {
//             feedDelayInput = scope;
//         }}/>
//                     <ButtonComponent id="update1" ref={(scope) => {
//             updateButton = scope;
//         }} onClick={updateClick} style={{ marginLeft: '10px' }}>
//                         Start Data Update
//                     </ButtonComponent>
//                     <ButtonComponent id="clear" ref={(scope) => {
//             clearButton = scope;
//         }} onClick={clearClick} style={{ marginLeft: '10px' }}>
//                         Stop Data Update
//                     </ButtonComponent>
//                 </div>
//                 <GridComponent id="livestream" dataSource={data} enableVirtualization={true} enableVirtualMaskRow={false} enableHover={false} rowHeight={38} height={500} ref={(g) => {
//             grid = g;
//         }} allowSelection={false} queryCellInfo={queryCellInfo} load={load}>
//                     <ColumnsDirective>
//                         <ColumnDirective field="id" headerText="ID" width="140" isPrimaryKey={true} visible={false}/>
//                         <ColumnDirective field="CountryCode" headerText="Ticker" width="70"/>
//                         <ColumnDirective field="Change" headerText="Change % 1D" width="100" format="N0" textAlign="Right"/>
//                         <ColumnDirective field="Net" headerText="Net" width="100" format="C2" type="number" textAlign="Right"/>
//                         <ColumnDirective field="Rating" width="150" headerText="Technical Rating 1D"/>
//                         <ColumnDirective field="NetIncome" headerText="Net Income" width="150" format="C2" type="number" textAlign="Right"/>
//                         <ColumnDirective field="Sector" width="160" headerText="Sector"/>
//                         <ColumnDirective field="EmployeeCount" width="130" headerText="Employee Count" textAlign="Right"/>
//                     </ColumnsDirective>
//                     <Inject services={[VirtualScroll]}/>
//                 </GridComponent>
//             </div>

//         </div>);
// }


// 605811-production-data-not-visible

import { GridComponent, ColumnsDirective, ColumnDirective, Inject, InfiniteScroll, VirtualScroll, Grid, RowDD, Toolbar, Group, Edit, Page, Filter, Sort, ColumnChooser, Search, Print, Reorder, Resize, ContextMenu, CommandColumn, Selection } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { setValue } from '@syncfusion/ej2-base';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { DataManager, ODataV4Adaptor, Query, WebApiAdaptor } from '@syncfusion/ej2-data';
export const headerTemplate = (props) => <span className="text-base text-gray-700">{props.headerText} - template</span>;

export const columTemplateWrapper = (props, template) => (
  <div className="text-gray-700"> {template(props)} </div>
);

export const columnTemplate = (
  props = null,
  classes = 'items-center h-auto sm:py-0 sm:h-11 gap-1 max-h-[11rem]',
  icon = undefined
) => (
  <div className={`flex h-11 items-center text-sm gap-1 ${classes}`}>
    <span className="max-w-full text-ellipsis overflow-hidden">
      {props[props.column.field] && icon} {props[props.column.field]} - template
    </span>
  </div>
);
class CustomAdaptor extends WebApiAdaptor {
  processResponse() {
    let i = 0;
    // calling base class processResponse function
    const original = super.processResponse.apply(this, arguments);
    // console.log('previous custom data => ', original);
    // adding serial number
    original.result.forEach((item) => setValue('SNO', ++i, item));
    // console.log('after custom data => ', original);
    return original;
  }
}
function App() { //tableCols - don't know
  const [tableCols, setTableCols] = useState([{field: 'OrderID'}, {field: 'CustomerID'}, {field: 'EmployeeID'}]);
  let grid;
  const [gridInstanceRef, setGridInstanceRef] = useState();
  const gridColumns = useMemo(
      () =>
        tableCols.map((col) => ({
          headerText: col.headerText,
          field: col.field,
          width: col.width,
          minWidth: col.minWidth,
          maxWidth: col.maxWidth,
          template: (props) => columTemplateWrapper(props, col.template || columnTemplate),
          headerTemplate: col.headerTemplate === '' ? undefined : col.headerTemplate || headerTemplate,
          headerTextAlign: col.textAlign || 'Left',
          textAlign: col.textAlign || 'Left',
          isPrimaryKey: col.isPrimaryKey || false,
          visible: col.visible ?? true,
          freeze: col.freeze,
          type: col.columnType,
          isForeignColumn: () => false,
        })), 
      [tableCols]//isRTL, tableCols
    );
  const hostUrl = 'https://services.syncfusion.com/react/production/';
  const data = new DataManager({
    url: hostUrl + 'api/Orders',
    // adaptor: new WebApiAdaptor
    adaptor: new CustomAdaptor
  });
  let gridInstance;
  useEffect(() => {
      if (!gridInstance) return;
      gridInstance.columns = gridColumns;
      if (!gridInstanceRef){
          setGridInstanceRef(gridInstance);
          setTableCols([{field: 'SNO'}, {field: 'Freight'}, {field: 'ShipCountry'}]);
          // const paginatedData = paginate<any>(tableData, pageSettings?.pageSize || 10, pageSettings?.currentPage ?? 1); - don't know import from utils
          // gridInstance.dataSource = paginatedData ?? [];
          gridInstance.dataSource = data; // - don't know adaptor or local data array of object
      };
    }, [grid, gridInstanceRef, gridColumns]);
  return (<div className='control-pane'>
          <div className='control-section'>
              <GridComponent id="Grid" ref={grid => gridInstance = grid} allowPaging={true} height="100%" dataBound={() => {
                  console.log('dataBound!')
              }}>
                  {/* <ColumnsDirective>
                      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'></ColumnDirective>
                      <ColumnDirective field='CustomerID' headerText='Customer ID' width='160'></ColumnDirective>
                      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'/>
                      <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' textAlign='Right'/>
                      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                  </ColumnsDirective> */}
                  <Inject services={[Page]}/>
              </GridComponent>
          </div>
          <div id='waitingpopup' className='waitingpopup'>
              <span id='gif' className='image'></span>
          </div>
      </div>);
}

export default App;
