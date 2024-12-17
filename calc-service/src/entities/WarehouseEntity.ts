export class WarehouseEntity {
  id!: string; // UUID
  name!: string;
  size!: number;
  is_hazardous!: boolean | null; // Nullable
  last_date_empty!: Date;

  constructor(init: Partial<WarehouseEntity>) {
    Object.assign(this, init);
  }
}
