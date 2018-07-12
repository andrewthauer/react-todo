export const classNameFromProps = (classes: any, props: any) => {
  const classNames = Object.getOwnPropertyNames(classes)
    .reduce(
      (accum, val) => {
        if (props[val]) {
          accum.push(val);
        }
        return accum;
      },
      [] as string[],
    )
    .join();

  return classNames ? classNames : classes['default'];
};
