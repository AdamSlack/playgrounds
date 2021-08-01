type BurgerButtonProps = {
  onClick: () => void
  onBlur: () => void
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ onClick, onBlur }) => {
  return <div
    onClick={onClick}
    onBlur={onBlur}
    tabIndex={0}
  >
    BurgerButton
  </div>
}

export default BurgerButton;