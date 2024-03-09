import { Control } from "react-hook-form";

export type UserModalProps = {
  open: boolean;
  loading: boolean;
  handleClose: () => void;
  userData: any;
};
