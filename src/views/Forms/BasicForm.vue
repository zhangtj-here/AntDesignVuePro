<template>
  <a-form :layout="formLayout" :form="form">
    <a-form-item
      label="Form Layout"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-radio-group
        default-value="horizontal"
        @change="handleFormLayoutChange"
      >
        <a-radio-button value="horizontal">
          Horizontal
        </a-radio-button>
        <a-radio-button value="vertical">
          Vertical
        </a-radio-button>
        <a-radio-button value="inline">
          Inline
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <!-- :validateStatus="fieldAStatus"
    :help="fieldAHelp" -->
    <a-form-item
      label="Field A"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      has-feedback
    >
      <a-input
        v-decorator="[
          'fieldA',
          {
            initialValue: fieldA,
            rules: [
              {
                required: true,
                min: 6,
                message: '必须大于5个字符'
              }
            ]
          }
        ]"
        allow-clear
        placeholder="input placeholder"
      />
      <!-- v-model="fieldA"  -->
    </a-form-item>
    <a-form-item
      label="Field B"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input v-decorator="['fieldB']" placeholder="input placeholder" />
      <!-- v-model="fieldB" -->
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" @click="handleSubmit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    this.form = this.$form.createForm(this); // 创建表单模型
    return {
      formLayout: "horizontal",
      fieldA: "hello",
      fieldB: ""
      // fieldAStatus: "",
      // fieldAHelp: "",
      // labelCol: {
      //   xs: { span: 24 },
      //   sm: { span: 5 }
      // },
      // wrapperCol: {
      //   xs: { span: 24 },
      //   sm: { span: 12 }
      // }
    };
  },
  mounted() {
    setTimeout(() => {
      this.form.setFieldsValue({ fieldA: "hello world" }); // 更改表单模型里面的值
    }, 3000);
  },
  // watch: {
  //   fieldA(val) {
  //     if (val.length <= 5) {
  //       this.fieldAStatus = "error";
  //       this.fieldAHelp = "必须大于5个字符";
  //     } else {
  //       this.fieldAStatus = "";
  //       this.fieldAHelp = "";
  //     }
  //   }
  // },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log(values);
          // this.fieldA = values.fieldA;
          Object.assign(this, values); // 更新数据data里的值
        } else {
          // console.log(err);
        }
      });
      //   if (this.fieldA.length <= 5) {
      //     this.fieldAStatus = "error";
      //     this.fieldAHelp = "必须大于5个字符";
      //   } else {
      //     console.log({
      //       fieldA: this.fieldA,
      //       fieldB: this.fieldB
      //     });
      //   }
    }
  }
};
</script>
