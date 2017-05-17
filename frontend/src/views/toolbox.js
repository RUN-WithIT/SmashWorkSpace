let m = require('mithril');

let scriptToolbox = {
    view: function() {
        return [
            m("xml[id='script-toolbox']", {
                style: {
                    "display": "none"
                }
            }, [
                m("Scategory[colour='210'][id='catLogic'][name='Logic']", [
                    m("block[type='controls_if']"),
                    m("block[type='logic_compare']"),
                    m("block[type='logic_operation']"),
                    m("block[type='logic_negate']"),
                    m("block[type='logic_boolean']"),
                    m("block[type='logic_null']"),
                    m("block[type='logic_ternary']")
                ]),
                m("category[colour='230'][id='smash'][name='Smash']", [
                    m("block[type='flow']"),
                    m("block[type='flow_data']"),
                    m("block[type='reaction_add']"),
                    m("block[type='reaction_do']"),
                    m("block[type='reaction_remove']"),
                    m("block[type='blaster']"),
                ]),
                m("category[colour='120'][id='catLoops'][name='Loops']", [
                    m("block[type='controls_repeat_ext']",
                        m("value[name='TIMES']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "10"
                                )
                            )
                        )
                    ),
                    m("block[type='controls_whileUntil']"),
                    m("block[type='controls_for']", [
                        m("value[name='FROM']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "1"
                                )
                            )
                        ),
                        m("value[name='TO']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "10"
                                )
                            )
                        ),
                        m("value[name='BY']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "1"
                                )
                            )
                        )
                    ]),
                    m("block[type='controls_forEach']"),
                    m("block[type='controls_flow_statements']")
                ]),
                m("category[colour='230'][id='catMath'][name='Math']", [
                    m("block[type='math_number']"),
                    m("block[type='math_arithmetic']", [
                        m("value[name='A']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "1"
                                )
                            )
                        ),
                        m("value[name='B']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "1"
                                )
                            )
                        )
                    ]),
                    m("block[type='math_single']",
                        m("value[name='NUM']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "9"
                                )
                            )
                        )
                    ),
                    m("block[type='math_trig']",
                        m("value[name='NUM']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "45"
                                )
                            )
                        )
                    ),
                    m("block[type='math_constant']"),
                    m("block[type='math_number_property']",
                        m("value[name='NUMBER_TO_CHECK']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "0"
                                )
                            )
                        )
                    ),
                    m("block[type='math_change']",
                        m("value[name='DELTA']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "1"
                                )
                            )
                        )
                    ),
                    m("block[type='math_round']",
                        m("value[name='NUM']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "3.1"
                                )
                            )
                        )
                    ),
                    m("block[type='math_on_list']"),
                    m("block[type='math_modulo']", [
                        m("value[name='DIVIDEND']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "64"
                                )
                            )
                        ),
                        m("value[name='DIVISOR']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "10"
                                )
                            )
                        )
                    ]),
                    m("block[type='math_constrain']", [
                        m("value[name='VALUE']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "50"
                                )
                            )
                        ),
                        m("value[name='LOW']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "1"
                                )
                            )
                        ),
                        m("value[name='HIGH']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "100"
                                )
                            )
                        )
                    ]),
                    m("block[type='math_random_int']", [
                        m("value[name='FROM']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "1"
                                )
                            )
                        ),
                        m("value[name='TO']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "100"
                                )
                            )
                        )
                    ]),
                    m("block[type='math_random_float']")
                ]),
                m("category[colour='160'][id='catText'][name='Text']", [
                    m("block[type='text']"),
                    m("block[type='text_join']"),
                    m("block[type='text_append']",
                        m("value[name='TEXT']",
                            m("shadow[type='text']")
                        )
                    ),
                    m("block[type='text_length']",
                        m("value[name='VALUE']",
                            m("shadow[type='text']",
                                m("field[name='TEXT']",
                                    "abc"
                                )
                            )
                        )
                    ),
                    m("block[type='text_isEmpty']",
                        m("value[name='VALUE']",
                            m("shadow[type='text']",
                                m("field[name='TEXT']")
                            )
                        )
                    ),
                    m("block[type='text_indexOf']", [
                        m("value[name='VALUE']",
                            m("block[type='variables_get']",
                                m("field[name='VAR']",
                                    "text"
                                )
                            )
                        ),
                        m("value[name='FIND']",
                            m("shadow[type='text']",
                                m("field[name='TEXT']",
                                    "abc"
                                )
                            )
                        )
                    ]),
                    m("block[type='text_charAt']",
                        m("value[name='VALUE']",
                            m("block[type='variables_get']",
                                m("field[name='VAR']",
                                    "text"
                                )
                            )
                        )
                    ),
                    m("block[type='text_getSubstring']",
                        m("value[name='STRING']",
                            m("block[type='variables_get']",
                                m("field[name='VAR']",
                                    "text"
                                )
                            )
                        )
                    ),
                    m("block[type='text_changeCase']",
                        m("value[name='TEXT']",
                            m("shadow[type='text']",
                                m("field[name='TEXT']",
                                    "abc"
                                )
                            )
                        )
                    ),
                    m("block[type='text_trim']",
                        m("value[name='TEXT']",
                            m("shadow[type='text']",
                                m("field[name='TEXT']",
                                    "abc"
                                )
                            )
                        )
                    ),
                    m("block[type='text_print']",
                        m("value[name='TEXT']",
                            m("shadow[type='text']",
                                m("field[name='TEXT']",
                                    "abc"
                                )
                            )
                        )
                    ),
                    m("block[type='text_prompt_ext']",
                        m("value[name='TEXT']",
                            m("shadow[type='text']",
                                m("field[name='TEXT']",
                                    "abc"
                                )
                            )
                        )
                    )
                ]),
                m("category[colour='260'][id='catLists'][name='Lists']", [
                    m("block[type='lists_create_with']",
                        m("mutation[items='0']")
                    ),
                    m("block[type='lists_create_with']"),
                    m("block[type='lists_repeat']",
                        m("value[name='NUM']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "5"
                                )
                            )
                        )
                    ),
                    m("block[type='lists_length']"),
                    m("block[type='lists_isEmpty']"),
                    m("block[type='lists_indexOf']",
                        m("value[name='VALUE']",
                            m("block[type='variables_get']",
                                m("field[name='VAR']",
                                    "list"
                                )
                            )
                        )
                    ),
                    m("block[type='lists_getIndex']",
                        m("value[name='VALUE']",
                            m("block[type='variables_get']",
                                m("field[name='VAR']",
                                    "list"
                                )
                            )
                        )
                    ),
                    m("block[type='lists_setIndex']",
                        m("value[name='LIST']",
                            m("block[type='variables_get']",
                                m("field[name='VAR']",
                                    "list"
                                )
                            )
                        )
                    ),
                    m("block[type='lists_getSublist']",
                        m("value[name='LIST']",
                            m("block[type='variables_get']",
                                m("field[name='VAR']",
                                    "list"
                                )
                            )
                        )
                    ),
                    m("block[type='lists_split']",
                        m("value[name='DELIM']",
                            m("shadow[type='text']",
                                m("field[name='TEXT']",
                                    ","
                                )
                            )
                        )
                    ),
                    m("block[type='lists_sort']")
                ]),
                m("category[colour='20'][id='catColour'][name='Color']", [
                    m("block[type='colour_picker']"),
                    m("block[type='colour_random']"),
                    m("block[type='colour_rgb']", [
                        m("value[name='RED']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "100"
                                )
                            )
                        ),
                        m("value[name='GREEN']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "50"
                                )
                            )
                        ),
                        m("value[name='BLUE']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "0"
                                )
                            )
                        )
                    ]),
                    m("block[type='colour_blend']", [
                        m("value[name='COLOUR1']",
                            m("shadow[type='colour_picker']",
                                m("field[name='COLOUR']",
                                    "#ff0000"
                                )
                            )
                        ),
                        m("value[name='COLOUR2']",
                            m("shadow[type='colour_picker']",
                                m("field[name='COLOUR']",
                                    "#3333ff"
                                )
                            )
                        ),
                        m("value[name='RATIO']",
                            m("shadow[type='math_number']",
                                m("field[name='NUM']",
                                    "0.5"
                                )
                            )
                        )
                    ])
                ]),
                m("sep"),
                m("category[colour='330'][custom='VARIABLE'][id='catVariables'][name='Variables']"),
                m("category[colour='290'][custom='PROCEDURE'][id='catFunctions'][name='Functions']")
            ])
        ];
    }
}



let configToolbox = {
    view: function() {
        return [
            m("xml[id='config-toolbox']", {
                style: {
                    "display": "none"
                }
            }, [
                m("category[colour='230'][id='smash'][name='Smash']", [
                    m("block[type='reaction_json']"),
                    m("block[type='reaction_action_json']")
                ]),
                m("category[colour='160'][id='catText'][name='Text']", [
                    m("block[type='text']")
                ]),
                m("category[colour='260'][id='catLists'][name='Lists']", [
                    m("block[type='lists_create_with']",
                        m("mutation[items='0']")
                    ),
                    m("block[type='lists_create_with']")
                ])

            ])
        ];
    }
};









module.exports.scriptToolbox = scriptToolbox;
module.exports.configToolbox = configToolbox;
