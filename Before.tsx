import { FunctionComponent } from "react";

const Before: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[911px] overflow-hidden text-left text-sm text-eb4 font-small-text">
      <div className="absolute h-[2.52%] w-[6.2%] top-[0%] right-[1.35%] bottom-[97.48%] left-[92.45%] text-base">
        <img
          className="absolute h-full w-[16.81%] top-[0%] right-[83.19%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector3.svg"
        />
        <div className="absolute top-[3px] left-[34px] font-medium">
          山隆通運
        </div>
        <img
          className="absolute h-[34.78%] w-[11.76%] top-[34.78%] right-[0%] bottom-[30.43%] left-[88.24%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector4.svg"
        />
      </div>
      <div className="absolute top-[6px] left-[42px] flex flex-row items-center justify-center gap-[8px]">
        <img className="w-4 relative h-3.5" alt="" src="/vector5.svg" />
        <div className="relative">/</div>
        <div className="relative">基本設定</div>
        <div className="relative">/</div>
        <div className="relative">權限設定</div>
      </div>
      <img
        className="absolute h-[1.5%] w-[0.83%] top-[0.88%] right-[98.28%] bottom-[97.62%] left-[0.89%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bar.svg"
      />
      <div className="absolute top-[33.5px] left-[-0.5px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] box-border w-[1921px] h-px border-t-[1px] border-solid border-gainsboro-200" />
      <div className="absolute top-[48px] left-[0px] flex flex-row items-start justify-start text-color">
        <div className="w-[150px] relative h-[25px] text-eb4">
          <div className="absolute h-[8%] w-[101.33%] top-[96%] right-[-0.67%] bottom-[-4%] left-[-0.67%] box-border border-t-[2px] border-solid border-eb4" />
          <div className="absolute top-[0%] left-[31.33%]">組織設定</div>
        </div>
        <div className="w-[150px] relative h-[25px]">
          <div className="absolute top-[0%] left-[31.33%]">角色設定</div>
          <div className="absolute w-full top-[100%] right-[0%] left-[0%] bg-color h-0" />
        </div>
        <div className="w-[150px] relative h-[25px]">
          <div className="absolute top-[0%] left-[31.33%]">人員設定</div>
          <div className="absolute w-full top-[100%] right-[0%] left-[0%] h-0" />
        </div>
        <div className="w-[150px] relative h-[25px]">
          <div className="absolute top-[0%] left-[31.33%]">車輛設定</div>
          <div className="absolute w-full top-[100%] right-[0%] left-[0%] h-0" />
        </div>
      </div>
      <div className="absolute top-[73px] left-[0px] bg-whitesmoke-500 w-[1920px] h-[838px]" />
      <div className="absolute top-[80px] left-[616px] w-[1296px] h-[817px] text-xs text-white">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-white w-[1296px] h-[817px]" />
        <div className="absolute top-[6px] left-[0px] w-[1296px] h-7">
          <div className="absolute top-[3px] left-[17px] text-base text-black">
            組織資訊
          </div>
          <div className="absolute top-[28px] left-[0px] box-border w-[1297px] h-px border-t-[1px] border-solid border-whitesmoke-300" />
          <div className="absolute top-[0px] left-[1098px] w-[79.3px] h-[21px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-start">
              <div className="rounded bg-eb4 flex flex-row items-center justify-center py-0.5 px-5 gap-[6px]">
                <img className="w-[9.3px] relative h-[9.3px]" alt="" />
                <b className="relative leading-[140%]">編輯</b>
              </div>
            </div>
            <img
              className="absolute h-[44.29%] w-[11.73%] top-[28.57%] right-[63.05%] bottom-[27.14%] left-[25.22%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/pen.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[1198.3px] w-[79.3px] h-[21px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-start justify-start">
              <div className="rounded bg-color1 flex flex-row items-center justify-center py-0.5 px-5 gap-[6px]">
                <img className="w-[9.3px] relative h-[9.3px]" alt="" />
                <b className="relative leading-[140%]">刪除</b>
              </div>
            </div>
            <img
              className="absolute h-[44.29%] w-[10.34%] top-[28.57%] right-[63.18%] bottom-[27.14%] left-[26.48%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/trashcan.svg"
            />
          </div>
        </div>
        <div className="absolute top-[43px] left-[70px] w-[1092px] flex flex-row flex-wrap items-center justify-start gap-[26px_88px] text-smi text-color">
          <div className="flex flex-row items-center justify-start text-color1">
            <div className="w-20 relative h-[19px]">
              <div className="absolute top-[0%] left-[0%] leading-[140%] font-medium">
                *
              </div>
              <div className="absolute top-[0%] left-[17.13%] text-sm leading-[140%] font-medium text-color">{`組織名稱 `}</div>
            </div>
            <div className="w-[450px] relative h-8 text-color">
              <div className="absolute top-[0px] left-[0px] rounded-10xs bg-whitesmoke-100 box-border w-[450px] h-8 border-[0.5px] border-solid border-darkgray" />
              <div className="absolute top-[7px] left-[13px] leading-[140%] font-medium">
                山隆通運股份有限公司
              </div>
            </div>
          </div>
          <div className="w-[137px] relative h-5 text-xs">
            <div className="absolute top-[0%] left-[0%] text-sm leading-[140%] font-medium">
              類型
            </div>
            <div className="absolute top-[1px] left-[38px] flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="w-[15px] relative rounded-[50%] bg-gainsboro-300 h-[15px] z-[0]" />
                  <div className="w-[7px] absolute !m-[0] top-[calc(50%_-_3.5px)] left-[calc(50%_-_3.5px)] rounded-[50%] bg-white h-[7px] z-[1]" />
                </div>
                <div className="relative leading-[140%]">公司</div>
              </div>
            </div>
            <div className="absolute top-[1px] left-[94px] flex flex-row items-start justify-start">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="bg-white flex flex-row items-start justify-start relative gap-[10px]">
                  <div className="w-[15px] relative rounded-[50%] bg-whitesmoke-400 box-border h-[15px] z-[0] border-[1px] border-solid border-gainsboro-300" />
                  <div className="w-[7px] absolute !m-[0] top-[calc(50%_-_3.5px)] left-[calc(50%_-_3.5px)] rounded-[50%] h-[7px] z-[1]" />
                </div>
                <div className="relative leading-[140%]">部門</div>
              </div>
            </div>
          </div>
          <div className="w-[530px] flex flex-row items-center justify-start text-color1">
            <div className="w-20 relative h-[19px]">
              <div className="absolute top-[0%] left-[0%] leading-[140%] font-medium">
                *
              </div>
              <div className="absolute top-[0%] left-[17.13%] text-sm leading-[140%] font-medium text-color">
                組織帳號
              </div>
            </div>
            <div className="flex-1 rounded-10xs bg-whitesmoke-100 flex flex-row items-center justify-start py-[7px] px-[13px] text-color border-[0.5px] border-solid border-darkgray">
              <div className="w-[88px] relative leading-[140%] font-medium inline-block shrink-0">
                department01
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center text-sm">
            <div className="w-20 relative h-5">
              <div className="absolute w-full top-[0%] left-[0%] leading-[140%] font-medium flex items-center">
                電話
              </div>
            </div>
            <div className="w-[450px] relative h-8 text-smi">
              <div className="absolute top-[0px] left-[0px] rounded-10xs bg-whitesmoke-100 box-border w-[450px] h-8 border-[0.5px] border-solid border-darkgray" />
              <div className="absolute top-[7px] left-[13px] leading-[140%] font-medium">
                02-12345678
              </div>
            </div>
          </div>
          <div className="w-[1063px] relative h-8 text-sm">
            <div className="absolute top-[0px] left-[38px] w-[1025px] h-8">
              <div className="absolute top-[0px] left-[0px] rounded-10xs bg-whitesmoke-100 box-border w-[1025px] h-8 border-[0.5px] border-solid border-darkgray" />
            </div>
            <div className="absolute top-[21.88%] left-[0%] leading-[140%] font-medium">
              地址
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[89.68%] w-[31.2%] top-[8.78%] right-[68.39%] bottom-[1.54%] left-[0.42%] text-black">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-white" />
        <div className="absolute h-[9.67%] w-[94.66%] top-[4.53%] right-[2.5%] bottom-[85.8%] left-[2.84%]">
          <div className="absolute h-[30.38%] w-full top-[0%] right-[0%] bottom-[69.62%] left-[0%] bg-eb4" />
          <img
            className="absolute h-[5.06%] w-[1.41%] top-[15.19%] right-[98.24%] bottom-[79.75%] left-[0.35%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector8.svg"
          />
          <div className="absolute top-[3.8%] left-[3.53%] text-white">
            山隆通運股份有限公司
          </div>
          <div className="absolute h-[21.52%] w-[6.17%] top-[37.97%] right-[85.36%] bottom-[40.51%] left-[8.47%]">
            <div className="absolute top-[0%] left-[0%]">部門1</div>
          </div>
          <div className="absolute h-[30.38%] w-[53.26%] top-[69.62%] right-[43.21%] bottom-[0%] left-[3.53%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute top-[12.5%] left-[9.27%]">部門2</div>
          </div>
        </div>
        <div className="absolute h-[5.88%] w-[53.42%] top-[14.57%] right-[43.41%] bottom-[79.56%] left-[3.17%]">
          <img
            className="absolute h-[8.33%] w-[2.5%] top-[18.75%] right-[97.5%] bottom-[72.92%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector9.svg"
          />
          <div className="absolute top-[0%] left-[5.63%]">
            中隆國際股份有限公司
          </div>
          <div className="absolute h-3/6 w-[94.38%] top-[50%] right-[0%] bottom-[0%] left-[5.63%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
            <div className="absolute top-[12.5%] left-[9.27%]">部門1</div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_401.5px)] left-[calc(50%_-_299.5px)] w-[599px] h-[27px] text-xs text-white">
          <div className="absolute top-[calc(50%_-_13.5px)] left-[calc(50%_+_205.5px)] flex flex-row items-start justify-start">
            <div className="rounded bg-eb4 flex flex-row items-center justify-center py-0.5 px-5 gap-[6px]">
              <img
                className="w-[9.3px] relative h-[9.3px]"
                alt=""
                src="/vector10.svg"
              />
              <b className="relative leading-[140%]">新增</b>
            </div>
          </div>
          <div className="absolute top-[3.7%] left-[2.84%] text-base text-black">
            組織設定
          </div>
          <div className="absolute h-[3.7%] w-[100.17%] top-[100%] right-[-0.17%] bottom-[-3.7%] left-[0%] box-border border-t-[1px] border-solid border-whitesmoke-300" />
        </div>
      </div>
    </div>
  );
};

export default Before;
