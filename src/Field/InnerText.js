import React from "react";

const InnerText = ({ config, formik, value, error }) => {
  const {
    name,
    as: Component = "span",
    htmlClass,
    defaultValue = "",
    ...attributes
  } = config;

  return (
    <Component className={htmlClass} {...attributes}>
      {<span dangerouslySetInnerHTML={{ __html: value || defaultValue }} />}
    </Component>
  );
};

export default React.memo(InnerText);
