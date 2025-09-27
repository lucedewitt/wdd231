const cookies = [{
    "recipe_name": "Chocolate Chip Cookies",
    "notes": "A classic cookie recipe",
    "image": "images/cc-cookie.png",
    "type": "traditional",
    "ingredients": [
        {
            "name": "butter",
            "amounts": {
                "amount": "1",
                "unit": "lb"
            },
            "notes": "softened"
        },
        {
            "name": "brown sugar",
            "amounts": {
                "amount": "1 1/2",
                "unit": "cups"
            }
        },
        {
            "name": "white sugar",
            "amounts": {
                "amount": "1",
                "unit": "cup"
            }
        },
        {
            "name": "eggs",
            "amounts": {
                "amount": "3",
                "unit": "each"
            }
        },
        {
            "name": "vanilla",
            "amounts": {
                "amount": "2",
                "unit": "tsp"
            }
        },
        {
            "name": "baking soda",
            "amounts": {
                "amount": "1 1/2",
                "unit": "tsp"
            }
        },
        {
            "name": "salt",
            "amounts": {
                "amount": "1/2",
                "unit": "tsp"
            }
        },
        {
            "name": "flour",
            "amounts": {
                "amount": "5",
                "unit": "cups"
            },
            "notes": "we like 3 C white and 2 C whole wheat"
        },
        {
            "name": "semi-sweet chocolate chips",
            "amounts": {
                "amount": "2",
                "unit": "cups"
            }
        },
        {
            "name": "shredded coconut",
            "amounts": {
                "amount": "1-2",
                "unit": "cups"
            }
        }
    ],
    "steps": [
        "Cream the butter and sugar together, then beat in the eggs and vanilla",
        "Mix in salt, soda and flour",
        "Add chocolate chips and coconut",
        "Bake 8-10 minutes at 350 F"
    ]
},
{
    "recipe_name": "Chocolate Cookies",
    "notes": "A classic cookie recipe",
    "image": "images/c-cookie.png",
    "type": "none-traditional",
    "ingredients": [
        {
            "name": "butter",
            "amounts": {
                "amount": "1",
                "unit": "lb"
            },
            "notes": "softened"
        },
        {
            "name": "brown sugar",
            "amounts": {
                "amount": "1 1/2",
                "unit": "cups"
            }
        },
        {
            "name": "white sugar",
            "amounts": {
                "amount": "1",
                "unit": "cup"
            }
        },
        {
            "name": "eggs",
            "amounts": {
                "amount": "3",
                "unit": "each"
            }
        },
        {
            "name": "vanilla",
            "amounts": {
                "amount": "2",
                "unit": "tsp"
            }
        },
        {
            "name": "baking soda",
            "amounts": {
                "amount": "1 1/2",
                "unit": "tsp"
            }
        },
        {
            "name": "salt",
            "amounts": {
                "amount": "1/2",
                "unit": "tsp"
            }
        },
        {
            "name": "flour",
            "amounts": {
                "amount": "5",
                "unit": "cups"
            },
            "notes": "we like 3 C white and 2 C whole wheat"
        },
        {
            "name": "cocoa",
            "amounts": {
                "amount": "1/2",
                "unit": "cups"
            }
        }
    ],
    "steps": [
        "Cream the butter and sugar together, then beat in the eggs and vanilla",
        "Mix in salt, soda and flour",
        "Add cocoa",
        "Bake 8-10 minutes at 350 F"
    ]
}]

export function getRecipes() {
    return cookies;
}