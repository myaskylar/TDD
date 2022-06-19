function duplicate(arr) {
   return arr.reduce((a,b)=>({...a, [b]:(a[b] || 0) + 1}),{})    
}

module.exports = duplicate