/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        
        // indexOf recebe um segundo parâmetro indicando a partir de onde buscar.
        // Usar i + 1 garante que não vamos usar o mesmo elemento duas vezes.
        let index_target = nums.indexOf(target - n, i + 1);
        
        // indexOf retorna -1 quando não encontra o elemento
        if (index_target !== -1) {
            return [i, index_target];
        }
    }
};