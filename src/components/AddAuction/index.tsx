import "./AddAuction.css";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

function AddAuction() {
  return (
    <div className="add-auction-container">
      <h2>Post Product</h2>
      <AddAuctionForm />
    </div>
  );
}

export default AddAuction;

function AddAuctionForm() {
  const onFormLayoutChange = () => {};

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item label="Auction Name">
        <Input />
      </Form.Item>
      <Form.Item label="Sell Price">
        <InputNumber min={10} />
      </Form.Item>
      <Form.Item label="Minimum Increment">
        <InputNumber min={5} />
      </Form.Item>
      <Form.Item label="Description of the Product">
        <TextArea rows={4} />
      </Form.Item>

      <Button type="primary">Publish</Button>
    </Form>
  );
}
