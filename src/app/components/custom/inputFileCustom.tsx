import { Ref } from "react";

export const InputFileCustom = ({ inputRef }: { inputRef: Ref<any> }) => {
    return (
        <div className="custom-input-container">
          <label htmlFor="custom-input">Ingresa algo:</label>
          <input id="custom-input" type="text" ref={inputRef} />
        </div>
      );
};
