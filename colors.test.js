const colors = require("./colors");
const commonShades = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
const alternateShades = [ "a100", "a200", "a400", "a700" ]
const completeColors = [
	"red",
	"pink",
	"purple",
	"deepPurple",
	"indigo",
	"blue",
	"lightBlue",
	"cyan",
	"teal",
	"green",
	"lightGreen",
	"lime",
	"yellow",
	"amber",
	"orange",
	"deepOrange"
]
const limitedColors = [ "brown", "gray", "blueGray" ]

test("white and black colors are plain", () => {
	expect(colors.white).toBe("#ffffff")
	expect(colors.black).toBe("#000000")
})

test("all remaining colors have 50-900 shades", () => {
	completeColors.concat(limitedColors).forEach((color) => {
		commonShades.forEach((shade) => {
			expect(colors[color][shade]).toBeDefined()
		})
	})
})

test("complete colors have alternate shades", () => {
	completeColors.forEach((color) => {
		alternateShades.forEach((shade) => {
			expect(colors[color][shade]).toBeDefined()
		})
	})
})

test("limited colors don't have alternate shades", () => {
	limitedColors.forEach((color) => {
		alternateShades.forEach((shade) => {
			expect(colors[color][shade]).toBeUndefined()
		})
	})
})

test("default shade is 500", () => {
	completeColors.concat(limitedColors).forEach((color) => {
		expect(colors[color]["DEFAULT"]).toBe(colors[color][500])
	})
})
