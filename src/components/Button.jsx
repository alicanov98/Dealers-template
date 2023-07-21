export const Button = ({variant,text,onClick}) => {
  return <button className={variant} onClick={onClick}>{text}</button>;
};
