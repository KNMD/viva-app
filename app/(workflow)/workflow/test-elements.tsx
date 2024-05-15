import { BaseActiviyNodeProps } from '@/types/app';
import React from 'react';
import { MarkerType, Position, Node } from 'reactflow';

export const nodes: Node[] = [
  {
    id: '001',
    type: 'if',
    data: {
      enableDebug: false,
      groups: [{
        id: "1",
        actionGroupType: "APICallGroup",
        enableInput: true,
        actions: [{
          id: "1",
          actionType: 'If',
          title: 'Add a Condition',
          enableOutput: true,
          params: {
            logic: "AND",  
            name: "111",
            conditions: [{    
              type: "pattern",
              expression: {
                left: {
                  type: "variable",
                  value: "var"
                },
                computed: "greater",
                right: {
                  type: "plaid",
                  value: "aaaa"
                }
              }
            }, {
              name: "222",
              type: "pattern",
              expression: {
                left: {
                  type: "variable",
                  value: "var"
                },
                computed: "greater",
                right: {
                  type: "plaid",
                  value: "aaaa"
                }
              }
            }, {
              name: "333",
              type: "group",
              logic: "OR",
              conditions: [{
                expression: {
                  left: {
                    type: "variable",
                    value: "var"
                  },
                  computed: "greater",
                  right: {
                    type: "plaid",
                    value: "aaaa"
                  }
                }
              }],
              
            }]
          }
        },{
          id: "2",
          actionType: 'Else',
          title: 'Else',
          enableOutput: true,
        }]
      }]
    },
    position: { x: 100, y: 700 },
  },
  {
    id: '100',
    type: 'base',
    data: {
      title: 'API Call',
      enableDebug: false,
      groups: [{
        id: "1",
        actionGroupType: "APICallGroup",
        enableInput: true,
        actions: [{
          actionType: 'APICallConfig',
          preIcon: 'TbApiApp',
          title: 'POST',
          subTitle: 'https://www.baidu.com',
          enableOutput: false,
        },{
          actionType: 'APICallResultSuccess',
          preIcon: 'TbCheck',
          title: 'Success',
          enableOutput: false,
        },{
          actionType: 'APICallResultFail',
          preIcon: 'TbX',
          title: 'Fail',
          enableOutput: false,
        }]
      }, {
        actionGroupType: "LLMGroup",
        enableInput: true,
        id: "2",
        actions: [{
          actionType: 'PromptTemplate',
          preIcon: 'TbBrandOpenai',
          title: 'Prompts',
          subTitle: '你是一名Java工程师...',
          enableOutput: true,
          suffixIcon: "TbEditCircle"
        }, {
          actionType: 'PromptMode',
          preIcon: 'TbBoxModel2',
          title: '百川2',
          
        }, {
          actionType: 'APIKey',
          preIcon: 'TbLockAccess',
          title: '**********',
        }]
      }]
    },
    position: { x: 300, y: 700 },
  } ,
  
  {
    id: '000',
    type: 'base',
    data: {
      title: 'API Call',
      enableDebug: false,
      groups: [{
        id: "1",
        actionGroupType: "APICallGroup",
        enableInput: true,
        actions: [{
          actionType: 'APICallConfig',
          preIcon: 'TbApiApp',
          title: 'POST',
          subTitle: 'https://www.baidu.com',
          enableOutput: false,
        },{
          actionType: 'APICallResultSuccess',
          preIcon: 'TbCheck',
          title: 'Success',
          enableOutput: false,
        },{
          actionType: 'APICallResultFail',
          preIcon: 'TbX',
          title: 'Fail',
          enableOutput: false,
        }]
      }, {
        actionGroupType: "LLMGroup",
        enableInput: true,
        id: "2",
        actions: [{
          actionType: 'PromptTemplate',
          preIcon: 'TbBrandOpenai',
          title: 'Prompts',
          subTitle: '你是一名Java工程师...',
          enableOutput: true,
          suffixIcon: "TbEditCircle"
        }, {
          actionType: 'PromptMode',
          preIcon: 'TbBoxModel2',
          title: '百川2',
          
        }, {
          actionType: 'APIKey',
          preIcon: 'TbLockAccess',
          title: '**********',
        }]
      }]
    },
    position: { x: 600, y: 700 },
  } ,

  {
    id: "adfasdf",
    type: "start",
    position: { x: 10, y: 700 },
  } as Node,
  
];
