export class WarehouseEntity {
  id!: string; // UUID
  name!: string;
  size!: number; // Must be > 0
  is_hazardous!: boolean | null; // Nullable, default: null
  last_date_empty!: Date;

  constructor(init: Partial<WarehouseEntity>) {
    Object.assign(this, init);
  }
}
