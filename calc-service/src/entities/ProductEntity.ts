export class ProductEntity {
  id!: string; // UUID
  name!: string;
  size!: number;
  is_hazardous!: boolean | null; // Nullable

  constructor(init: Partial<ProductEntity>) {
    Object.assign(this, init);
  }
}
