import * as Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";

Blockly.Blocks["print_output"] = {
  init: function () {
    this.appendValueInput("OUTPUT").setCheck("String");
    this.appendDummyInput().appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
  },
};

Blockly.Blocks["arithmetic_operations"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("calculate")
      .appendField(
        new Blockly.FieldDropdown([
          ["+", "ADD"],
          ["-", "SUBTRACT"],
          ["*", "MULTIPLY"],
          ["/", "DIVIDE"],
        ]),
        "OPERATOR"
      )
      .appendField(new Blockly.FieldNumber(0), "LEFT")
      .appendField("and")
      .appendField(new Blockly.FieldNumber(0), "RIGHT");
    this.setOutput(true, "Number");
    this.setColour(330);
  },
};

Blockly.Blocks["set_variable"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set")
      .appendField(new Blockly.FieldTextInput("x"), "VAR")
      .appendField("to")
      .appendField(new Blockly.FieldNumber(0), "VALUE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
  },
};

Blockly.Blocks["get_variable"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("get")
      .appendField(new Blockly.FieldTextInput("x"), "VAR");
    this.setOutput(true, "Number");
    this.setColour(330);
  },
};

Blockly.Blocks["while_loop"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("while")
      .appendField(new Blockly.FieldTextInput("condition"), "CONDITION");
    this.appendStatementInput("DO").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  },
};

Blockly.Blocks["for_loop"] = {
  init: function () {
    this.appendDummyInput().appendField("for loop");
    this.appendDummyInput()
      .appendField("from")
      .appendField(new Blockly.FieldNumber(0), "FROM")
      .appendField("to")
      .appendField(new Blockly.FieldNumber(10), "TO");
    this.appendStatementInput("DO").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  },
};

Blockly.Blocks["if_condition"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("if")
      .appendField(new Blockly.FieldTextInput("x > 0"), "CONDITION");
    this.appendStatementInput("DO").setCheck(null).appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  },
};

Blockly.Blocks["if_else_condition"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("if")
      .appendField(new Blockly.FieldTextInput("x > 0"), "CONDITION");
    this.appendStatementInput("DO").setCheck(null).appendField("then");
    this.appendStatementInput("ELSE").setCheck(null).appendField("else");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
  },
};

javascriptGenerator.forBlock["set_variable"] = function (block) {
  const variable = block.getFieldValue("VAR");
  const value = block.getFieldValue("VALUE");
  return `var ${variable} = ${value};\n`;
};

javascriptGenerator.forBlock["get_variable"] = function (block) {
  const variable = block.getFieldValue("VAR");
  return [`${variable}`, javascriptGenerator.ORDER_ATOMIC];
};

javascriptGenerator.forBlock["while_loop"] = function (block) {
  const condition = block.getFieldValue("CONDITION");
  const statements = javascriptGenerator.statementToCode(block, "DO");
  return `while (${condition}) {\n${statements}}\n`;
};

javascriptGenerator.forBlock["for_loop"] = function (block) {
  const from = block.getFieldValue("FROM");
  const to = block.getFieldValue("TO");
  const statements = javascriptGenerator.statementToCode(block, "DO");
  return `for (let i = ${from}; i < ${to}; i++) {\n${statements}}\n`;
};

javascriptGenerator.forBlock["if_condition"] = function (block) {
  const condition = block.getFieldValue("CONDITION");
  const statements = javascriptGenerator.statementToCode(block, "DO");
  return `if (${condition}) {\n${statements}}\n`;
};

javascriptGenerator.forBlock["if_else_condition"] = function (block) {
  const condition = block.getFieldValue("CONDITION");
  const statementsIf = javascriptGenerator.statementToCode(block, "DO");
  const statementsElse = javascriptGenerator.statementToCode(block, "ELSE");
  return `if (${condition}) {\n${statementsIf}}\nelse {\n${statementsElse}}\n`;
};

javascriptGenerator.forBlock["print_output"] = function (block) {
  const output = javascriptGenerator.valueToCode(
    block,
    "OUTPUT",
    javascriptGenerator.ORDER_ATOMIC
  );
  return `console.log(${output});\n`;
};

javascriptGenerator.forBlock["arithmetic_operations"] = function (block) {
  const operator = block.getFieldValue("OPERATOR");
  const left = block.getFieldValue("LEFT");
  const right = block.getFieldValue("RIGHT");
  let opSymbol = { ADD: "+", SUBTRACT: "-", MULTIPLY: "*", DIVIDE: "/" }[
    operator
  ];
  const code = `${left} ${opSymbol} ${right}`;
  return [code, javascriptGenerator.ORDER_ATOMIC];
};

const toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Control",
      colour: 210,
      contents: [
        {
          kind: "block",
          type: "if_else_condition",
        },
        {
          kind: "block",
          type: "if_condition",
        },
      ],
    },
    {
      kind: "category",
      name: "loop",
      colour: "120",
      contents: [
        {
          kind: "block",
          type: "for_loop",
        },
        {
          kind: "block",
          type: "while_loop",
        },
      ],
    },
    {
      kind: "category",
      name: "variable",
      colour: "330",
      contents: [
        {
          kind: "block",
          type: "set_variable",
        },
        {
          kind: "block",
          type: "get_variable",
        },
        {
          kind: "block",
          type: "print_output",
        },
        {
          kind: "block",
          type: "arithmetic_operations",
        },
      ],
    },
  ],
};

export default toolbox;
