/*
* @Author: 12574
* @Date:   2018-11-14 14:29:50
* @Last Modified by:   12574
* @Last Modified time: 2018-11-20 17:18:34
*/
import React, { Component } from 'react';
import axios from 'axios';
import { Table, Checkbox, Form, Button, Pagination } from 'antd';

const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;

const plainOptions = ['Apple', 'Pear', 'Orange','Apple1', 'Pear2', 'Orange3'];


class Permission extends Component {
    state = {
        checkAll: false,
        ddl: ['Apple', 'Pear', 'Orange'],
//         ddl: [
//   { label: 'Apple4', value: 'Apple4', status: true },
//   { label: 'Pear4', value: 'Pear4', status: true },
//   { label: 'Orange4', value: 'Orange4', status: true },
// ],
        dml: ['Apple1', 'Pear2', 'Orange3'],
        checkedDDL: [],
        checkedDML: [],
        // test: { label: 'Apple', value: 'Apple' },
        //   { label: 'Pear', value: 'Pear' },
        //   { label: 'Orange', value: 'Orange' }
        // },

    onCheckAll = (e) => {
        const { ddl, dml } = this.state;
        this.setState({
            checkedDDL: e.target.checked ? ddl : [],
            checkedDML: e.target.checked ? dml : [],
            checkAll: e.target.checked
        })
    }

    onChangeDDL = (checkedDDL) => {
        const { ddl, dml,checkedDML, } = this.state;
        this.setState({
            checkedDDL,
            checkAll: (checkedDDL.length+checkedDML.length) === (ddl.length+dml.length)
        })
    }

    onChangeDML = (checkedDML) => {
        const { ddl, dml,checkedDDL } = this.state;
        this.setState({
            checkedDML,
            checkAll: (checkedDDL.length+checkedDML.length) === (ddl.length+dml.length)
        })
    }

    getValue = () => {
        const {checkedDDL, checkedDML} = this.state;
        console.log(checkedDDL)
        console.log(checkedDML)
    }

    render() {
        const { checkAll, indeterminate, ddl, dml, checkedDDL, checkedDML} = this.state;
        return (
            <div>
                <Checkbox checked={checkAll} onChange={this.onCheckAll}>全选</Checkbox>
                <div>ddl：</div>
                <CheckboxGroup options={ddl} value={checkedDDL} onChange={this.onChangeDDL}></CheckboxGroup>
                <div>dml：</div>
                <CheckboxGroup options={dml} value={checkedDML} onChange={this.onChangeDML}></CheckboxGroup>

                <Button onClick={this.getValue}>获取值</Button>
            </div>

        )
    }
}


// const formItemLayout = { // 表单正常布局
//     labelCol: {
//         xs: { span: 24 },
//         sm: { span: 6 },
//     },
//     wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 14 },
//     },
// }
// class Permission extends Component {
//     state = {
//         pageSize: 4,
//         current: 1,
//         plainOptions: ["id", "type", "dict_name", "dict_value", "dict_name_zh",
//         "dict_name_en", "dict_sort", "gmt_create", "gmt_modified", "is_deleted"],
//         // plainOptions: [],
//         optionsTest: [
//           { label: 'Apple', value: 1 },
//           { label: 'Pear', value: 2 },
//           { label: 'Orange', value: 3 },
//         ],
//         checkAll: false,  // 全选
//         indeterminate: true,
//         checkedList: ["1"],
//         arr:[]
//     }
//     componentDidMount() {
//         this.getFieldsData();
//         const { plainOptions, pageSize } = this.state;
//         this.setState({
//             arr: plainOptions.slice(0,pageSize)
//         })
//     }

//     getFieldsData = () => {
//         axios.get('/api/fields.json').then(res => {
//             if (res.data.code === 1) {
//                 console.log(res.data.data.column);
//                 const data = res.data.data.column;
//                 // this.setState({
//                 //     plainOptions: data
//                 // })
//             }
//         })
//     }


//     handeCilck = () => {
//         const { getFieldsValue } = this.props.form;
//         const data = getFieldsValue()
//         console.log(data);
//     }


//     render() {
//         const { getFieldDecorator } = this.props.form;
//         const {pageSize, current, plainOptions, arr, checkAll, indeterminate, checkedList, optionsTest} = this.state
//         const total = plainOptions.length;
//         return (
//             <div>
//                 <Form>
//                     <FormItem
//                         {...formItemLayout}
//                         label="字段"
//                     >
//                         {getFieldDecorator('ids', {
//                             rules: [],
//                             initialValue: checkedList
//                         })(
//                             <CheckboxGroup options={arr} onChange={this.changeGroup}></CheckboxGroup>
//                         )}
//                     </FormItem>
//                     <Checkbox checked={checkAll} indeterminate={indeterminate} onChange={this.onCheckAll}>全选</Checkbox>
//                     <Pagination
//                         size="small"
//                         total={total}
//                         pageSize={pageSize}
//                         onChange={this.onChangePage}
//                         current={current}
//                         // defaultCurrent={1}
//                     />

//                         <FormItem
//                         {...formItemLayout}
//                         label="字段"
//                     >
//                         {getFieldDecorator('test', {
//                             rules: []
//                         })(
//                             <CheckboxGroup options={optionsTest} onChange={this.changeGroup}></CheckboxGroup>
//                         )}
//                     </FormItem>

//                 </Form>
//                 <Button onClick={this.handeCilck.bind(this)}>获取</Button>
//             </div>
//         )
//     }

//     // 复选框组
//     changeGroup = (checkedList) => {
//         const {setFieldsValue} = this.props.form;
//         const { plainOptions } = this.state;
//         setFieldsValue({
//             checkedList,
//             indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
//             checkAll: checkedList.length === plainOptions.length
//         })
//         // console.log(this.state.checkedList)
//     }
//     // 全选
    // onCheckAll = (e) => {
    //     const { plainOptions } = this.state;
    //     this.setState({
    //         checkedList: e.target.checked ? plainOptions : [],
    //         indeterminate: false,
    //         checkAll: e.target.checked
    //     })
    //     console.log(this.state.checkAll)
    //     console.log(this.state.checkedList)
    // }

//     onChangePage = (current,pageSize) => {
//         const { plainOptions } = this.state;
//         console.log(current,pageSize);
//         const arr = plainOptions.slice((current-1)*pageSize,(current-1)*pageSize+pageSize)
//         this.setState({
//             current,
//             arr
//         })
//     }

// }



// import { Checkbox, Form } from 'antd';
// const CheckboxGroup = Checkbox.Group;
// const FormItem = Form.Item;
// const plainOptions = ['Apple', 'Pear', 'Orange'];
// const defaultCheckedList = ['Apple', 'Orange'];

// class Permission extends React.Component {
//   state = {
//     checkedList: defaultCheckedList,
//     indeterminate: true,
//     checkAll: false,
//   };


//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <div>
//         <div style={{ borderBottom: '1px solid #E9E9E9' }}>
//           <Checkbox
//             indeterminate={this.state.indeterminate}
//             onChange={this.onCheckAllChange}
//             checked={this.state.checkAll}
//           >
//             Check all
//           </Checkbox>
//         </div>
//         <br />
//         <Form>
//             <FormItem>
//                 {getFieldDecorator('ids', {
//                     rules: [],
//                     initialValue: this.state.checkedList
//                 })(
//                     <CheckboxGroup options={plainOptions} onChange={this.onChange} />
//                 )}
//             </FormItem>
//         </Form>

//       </div>
//     );
//   }
//   onChange = (checkedList) => {
//     this.setState({
//       checkedList,
//       indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
//       checkAll: checkedList.length === plainOptions.length,
//     });
//   }
//   onCheckAllChange = (e) => {
//     this.setState({
//       checkedList: e.target.checked ? plainOptions : [],
//       indeterminate: false,
//       checkAll: e.target.checked,
//     });
//   }
// }


export default Form.create()(Permission);