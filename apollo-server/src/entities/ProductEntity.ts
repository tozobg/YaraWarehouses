export class ProductEntity {
  id!: string; // UUID
  name!: string;
  size!: number; // Must be > 0
  is_hazardous!: boolean | null; // Nullable, default: null

  constructor(init: Partial<ProductEntity>) {
    Object.assign(this, init);
  }
}
