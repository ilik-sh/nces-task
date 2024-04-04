import { UnpDto } from "../types/unp.dto";
import DataLabel from "components/data-label.comp";

type UnpCardProps = {
  unp: UnpDto | null;
};

export default function UnpCard({ unp }: UnpCardProps) {
  if (!unp) return null;
  return (
    <div>
      <DataLabel name="Полное наименование плательщика" data={unp?.fullName} />
      <DataLabel name="Адрес" data={unp?.adress} />
      <DataLabel name="Дата постановки на учет" data={unp?.dateOfRegistry} />
      <DataLabel name="Статус" data={unp?.status} />
    </div>
  );
}
