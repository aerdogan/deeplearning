import React from "react"
import { Button } from 'reactstrap';
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput"

const ProductDetail = ({categories, product, onSave, onChange, errors}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
            <TextInput 
            name="productName" 
            label="productName" 
            value={product.productName} 
            onChange={onChange}
            error={errors.productName} />

            <SelectInput name="categoryId" label="categoryId" value={product.categoryId || ""} defaultOption="Seçiniz" options={categories.map(category => ({
                value: category.id,
                text: category.name
            }))}
                onChange={onChange}
                error={errors.categoryId}
            />

            <TextInput name="desc" label="desc" value={product.desc} onChange={onChange}
                error={errors.desc} />

            <TextInput name="price" label="price" value={product.price} onChange={onChange}
                error={errors.price} />  
                                                          
            <Button type="submit" className="btn btn-success">Kaydet</Button>
        </form>
    );
};

export default ProductDetail;