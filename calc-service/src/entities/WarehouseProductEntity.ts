export class WarehouseProductEntity {
  id!: string;
  id_warehouse!: string;
  id_product!: string;
  amount!: number;

  constructor(init: Partial<WarehouseProductEntity>) {
    Object.assign(this, init);
  }
}
