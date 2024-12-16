export class WarehouseProductSizeEntity {
  name!: string;
  amount!: number;
  full_size!: number;
  is_hazardous!: boolean;

  constructor(init: Partial<WarehouseProductSizeEntity>) {
    Object.assign(this, init);
  }
}
