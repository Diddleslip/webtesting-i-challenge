const enhancer = require('./enhancer.js');

const item = {
    name: "hammer",
    durability: 22,
    enhancement: 15
}

const item2 = {
    name: "hammer",
    durability: 12,
    enhancement: 20
}

const item3 = {
    name: "hammer",
    durability: 10,
    enhancement: 0
}


describe("enhancer", () => {
    describe("repair()", () => {
        it("should repair durability to 100", () => {
            expect(enhancer.repair(item.durability)).toBe(100)
        })
    })

    describe("succeed()" , () => {
        it("should enhance the item according to client rules", () => {
            expect(enhancer.succeed(item.enhancement)).toBe(item.enhancement + 1)
            expect(enhancer.succeed(item2.enhancement)).toBe(20)
        })
    })

    describe("fail()", () => {
        it("should fail the item and give it a decreased value", ()  => {
            expect(enhancer.fail(item.enhancement)).toBe(5)
            expect(enhancer.fail(item2.enhancement)).toBe(19)
        })
    })

    describe("get()", () => {
        it("should change the item's name acording to it's enhancement value", ()  => {
            expect(enhancer.get(item)).toBe(`[+15] hammer`)
            expect(enhancer.get(item2)).toBe(`[+20] hammer`)
            expect(enhancer.get(item3)).toBe(`hammer`)
        })
    })
})

