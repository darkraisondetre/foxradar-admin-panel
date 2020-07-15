import React, { useState } from 'react';
import Button from '../components/button';
import api from '../api';
import { usePopper } from 'react-popper';

export default function SelectButton(props) {
  const [value, selectValue] = useState(0);
  const [isToggleOn, toggleShow] = useState(false);
  const { title, icon, className, size, list } = props;

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  return (
    <Button
      title={title}
      icon={icon}
      onClick={() => toggleShow(!isToggleOn)}
      className={className}
      ref={setReferenceElement}
      value={selectValue.value}
    >
      <div
        className={api.setClasses(
          ["list", className],
          {
            hidden: !isToggleOn,
          }
        )}
        value={selectValue.value}
        size={size}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {
          list.map((item, index) => {
            return <div
              className={api.setClasses(
                ["list__item"],
                {
                  bb: item.devider === 1,
                  selected: selectValue.value === index
                }
              )}
              key={index}
              onClick={() => {
                selectValue.value = index;
              }}
              >
              {item.title}
            </div>
          })
        }
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </Button>
  );
}
