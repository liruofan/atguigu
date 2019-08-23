export default{
	positiveSize (state) {
		return state.shopRatings.reduce((total,currentValue) => total + (currentValue.rateType == 0 ? 1 : 0),0)
	},
	totalCount (state) {
		return state.cartFoods.reduce((pretotal,food) => pretotal + food.count,0)
	},
	totalPrice (state) {
		return state.cartFoods.reduce((pretotal,food) => pretotal + food.count * food.price,0)
	}
}