export const FilterComponent = (data:[],filter={})=>{
    const result = data.filter((i)=> i===filter);
    return result;
}