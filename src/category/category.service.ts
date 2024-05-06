import { CategoryEntity } from "./category.entity";
import { ICategory } from "./category.interface";



export class CategoryService {
    async create(category: Partial<ICategory>) {
        const categoryExist = await CategoryEntity.findOne({ where: { name: category.name } });
        if (categoryExist) {
            return { message: 'Category already exists' };
        }
        await CategoryEntity.create(category);
        return { message: 'Category created' };
    }

    async findAll() {
        const categoriesExist = await CategoryEntity.findAll();
        if (categoriesExist.length === 0) {
            return { message: 'No categories found' };
        }
        return categoriesExist;
    }

    async findOne(id: number) {
        const categoryExist = await CategoryEntity.findByPk(id);
        if (!categoryExist) {
            return { message: 'Category not found' };
        }
        return categoryExist;
    }

    async update(id: number, category: Partial<ICategory>) {
        const categoryExist = await CategoryEntity.findByPk(id);
        if (!categoryExist) {
            return { message: 'Category not found' };
        }
        await categoryExist.update(category);
        return { message: 'Category updated' };
    }

    async remove(id: number) {
        const categoryExist = await CategoryEntity.findByPk(id);
        if (!categoryExist) {
            return { message: 'Category not found' };
        }
        await categoryExist.destroy();
        return { message: 'Category deleted' };
    }
}