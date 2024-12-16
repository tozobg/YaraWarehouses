export class WarehouseProductMovementEntity {
  id!: string;
  id_warehouse!: string;
  id_product!: string;
  amount!: number;
  movement_type!: string;
  date!: string;
  is_future!: boolean;

  constructor(init: Partial<WarehouseProductMovementEntity>) {
    Object.assign(this, init);
  }
}
