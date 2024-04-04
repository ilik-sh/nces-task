import { Suspense } from "react";
import CenteredCircularProgress from "./centered-circular-progress.comp";

type Props = {
  element: any;
};

export default function Suspend({ element: Element }: Props) {
  return (
    <Suspense fallback={<CenteredCircularProgress />}>
      <Element />
    </Suspense>
  );
}
