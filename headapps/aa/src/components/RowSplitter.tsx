import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = (props: ComponentProps): JSX.Element => {
  const styles = `${props?.params?.GridParameters ?? ''} ${props?.params?.Styles ?? ''}`.trim();
  const rowStyles = [
    props.params.Styles1,
    props.params.Styles2,
    props.params.Styles3,
    props.params.Styles4,
    props.params.Styles5,
    props.params.Styles6,
    props.params.Styles7,
    props.params.Styles8,
  ];
  const enabledPlaceholders = props.params.EnabledPlaceholders.split(',');
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component row-splitter ${styles}`} id={id || undefined}>
      {enabledPlaceholders.map((ph, index) => {
        const phKey = `row-${ph}-{*}`;
        const phStyles = `${rowStyles[+ph - 1] ?? ''}`.trim();

        return (
          <div key={index} className={`w-full px-4 ${phStyles}`}>
            <div className="flex flex-wrap -mx-4">
              <Placeholder name={phKey} rendering={props.rendering} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
