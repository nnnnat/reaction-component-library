import { getFromTheme } from "../../../../utils";

export default function applyThemeWithActionType(themeProp, stateSuffix) {
  return (props) => {
    const { actionType, isDisabled, isTextOnly } = props;

    const finalSuffix = isTextOnly ? "textOnly" : actionType;
    const finalStateSuffix = isDisabled ? "disabled" : stateSuffix;

    let key = `rui_components.${themeProp}_${finalSuffix}`;
    if (typeof finalStateSuffix === "string") key += `_${finalStateSuffix}`;

    return getFromTheme(props, key);
  };
}
