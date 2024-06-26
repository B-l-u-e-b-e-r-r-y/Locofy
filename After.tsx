import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Button, Collapse, Input, Radio } from "antd";
import { HeartOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const After: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-whitesmoke-500 h-[914px] overflow-hidden flex flex-col items-center justify-start gap-[7px] text-center text-sm text-color font-small-text">
      <nav className="m-0 self-stretch bg-white overflow-hidden flex flex-row items-center justify-between py-[5px] px-[17px] text-left text-sm text-eb4 font-small-text">
        <div className="flex flex-row items-center justify-start gap-[18px]">
          <img
            className="w-4 relative h-[13.7px] overflow-hidden shrink-0"
            alt=""
            src="/frame-8468.svg"
          />
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="w-4 relative h-3.5" alt="" src="/vector.svg" />
            <div className="relative">/</div>
            <div className="relative">基本設定</div>
            <div className="relative">/</div>
            <div className="relative">權限設定</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[11px] text-base">
          <img className="w-5 relative h-[23px]" alt="" src="/vector1.svg" />
          <div className="relative font-medium">山隆通運</div>
          <img className="w-3.5 relative h-2" alt="" src="/vector2.svg" />
        </div>
      </nav>
      <div className="self-stretch bg-white flex flex-row items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-[5px] text-eb4">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[7px] px-0">
            <div className="flex-1 relative">組織設定</div>
          </div>
          <div className="w-[152px] relative box-border h-0.5 border-t-[2px] border-solid border-eb4" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-between">
          <div className="self-stretch flex flex-row items-center justify-center py-[7px] px-0">
            <div className="flex-1 relative">角色設定</div>
          </div>
          <div className="w-[150px] relative h-0" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-between">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[7px] px-0">
            <div className="flex-1 relative">人員設定</div>
          </div>
          <div className="w-[150px] relative h-0" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-between">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-[7px] px-0">
            <div className="flex-1 relative">車輛設定</div>
          </div>
          <div className="w-[150px] relative h-0" />
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[7px] min-h-[831px] text-left text-base text-black">
        <div className="self-stretch w-[600px] bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[3px]">
          <div className="self-stretch flex flex-row items-center justify-between py-2 px-5 border-b-[1px] border-solid border-gainsboro-400">
            <div className="relative">組織設定</div>
            <Button type="primary" icon={<HeartOutlined />}>
              新增
            </Button>
          </div>
          <Collapse className="self-stretch" expandIconPosition="right">
            <Collapse.Panel
              header="山隆通運股份有限公司"
              key="1"
              showArrow={undefined}
            >
              <p>{`部門1
部門2`}</p>
            </Collapse.Panel>
          </Collapse>
          <Collapse className="self-stretch" expandIconPosition="right">
            <Collapse.Panel
              header="中隆國際股份有限公司"
              key="1"
              showArrow={undefined}
            >
              <p>部門1</p>
            </Collapse.Panel>
          </Collapse>
        </div>
        <div className="self-stretch flex-1 bg-white overflow-hidden flex flex-col items-start justify-start gap-[14px]">
          <div className="self-stretch flex flex-row items-center justify-between py-2 px-5 border-b-[1px] border-solid border-gainsboro-400">
            <div className="relative">組織資訊</div>
            <div className="flex flex-row items-center justify-start gap-[7px]">
              <Button
                className="w-[79.3px] relative"
                style={{ width: "79.3px" }}
                type="primary"
                icon={<EditOutlined />}
              >
                編輯
              </Button>
              <Button
                className="w-[79.3px] relative"
                style={{ width: "79.3px" }}
                type="primary"
                icon={<DeleteOutlined />}
              >
                刪除
              </Button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center py-0 px-3.5 gap-[17px] text-smi text-color1">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[60px]">
              <div className="flex-1 flex flex-row items-center justify-start">
                <div className="w-20 flex flex-row items-center justify-start py-0 pr-2.5 pl-0 box-border gap-[7px]">
                  <div className="relative leading-[140%] font-medium">*</div>
                  <div className="relative text-sm leading-[140%] font-medium text-color">{`組織名稱 `}</div>
                </div>
                <Input
                  className="bg-[transparent] flex-1 font-small-text font-medium text-smi text-color"
                  bordered={true}
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start text-sm text-color">
                <div className="w-20 relative leading-[140%] font-medium flex items-center shrink-0">
                  類型
                </div>
                <Radio>公司</Radio>
                <Radio>部門</Radio>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[60px]">
              <div className="flex-1 flex flex-row items-center justify-start">
                <div className="w-20 flex flex-row items-center justify-start py-0 pr-2.5 pl-0 box-border gap-[7px]">
                  <div className="relative leading-[140%] font-medium">*</div>
                  <div className="relative text-sm leading-[140%] font-medium text-color">
                    組織帳號
                  </div>
                </div>
                <Input
                  className="bg-[transparent] flex-1 font-small-text font-medium text-smi text-color"
                  placeholder="department01"
                  bordered={true}
                />
              </div>
              <div className="flex-1 flex flex-row items-center justify-start text-sm text-color">
                <div className="w-20 relative leading-[140%] font-medium flex items-center shrink-0">
                  電話
                </div>
                <Input
                  className="bg-[transparent] flex-1 font-small-text font-medium text-smi text-color"
                  placeholder="02-12345678"
                  bordered={true}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start text-sm text-color">
              <div className="w-20 relative leading-[140%] font-medium flex items-center shrink-0">
                地址
              </div>
              <Input
                className="bg-[transparent] flex-1 relative"
                bordered={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default After;
