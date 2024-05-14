import { BaseActiviyNodeProps } from '@/types/app';
import React from 'react';
import { MarkerType, Position, Node } from 'reactflow';

export const nodes: Node[] = [
  {
    id: '001',
    type: 'if',
    data: {
      title: 'API Call',
      enableDebug: false,
      groups: [{
        id: "1",
        actionGroupType: "APICallGroup",
        enableInput: true,
        actions: [{
          actionType: 'APICallConfig',
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
  } as BaseActiviyNode,

  {
    id: "adfasdf",
    type: "start",
    position: { x: 10, y: 700 },
  } as Node,
  {
    id: '1',
    type: 'input',
    data: {
      label: '帮我生成一个健康的饮食计划',
    },
    className: 'react-flow__node-default circle',
    style: {
      borderColor: 'purple',
      borderWidth: '2px',
      borderRadius: '20px'
    },
    position: { x: 300, y: 310 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '2',
    data: {
      label: '早餐',
    },
    className: 'font',
    style: {
      fontWeight: 500
    },
    position: { x: 700, y: 100 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '2-1',
    data: {
      label: '热量需求在200-400kcal之间',
    },
    className: 'font',
    position: { x: 900, y: 50 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '2-2',
    data: {
      label: '含高纤维谷物类食品，入燕麦片、全麦面包等',
    },
    className: 'font',
    position: { x: 900, y: 80 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '2-3',
    data: {
      label: '含有蛋白质的食品入鸡蛋、豆腐、牛奶等',
    },
    className: 'font',
    position: { x: 900, y: 110 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '3',
    data: {
      label: '午餐',
    },
    className: 'font',
    position: { x: 700, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      fontWeight: 500
    },
  },
  {
    id: '3-1',
    data: {
      label: '热量需求在200-400kcal之间',
    },
    className: 'font',
    position: { x: 900, y: 150 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '3-2',
    data: {
      label: '含高纤维谷物类食品，入燕麦片、全麦面包等',
    },
    className: 'font',
    position: { x: 900, y: 180 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '3-3',
    data: {
      label: '含有蛋白质的食品入鸡蛋、豆腐、牛奶等',
    },
    className: 'font',
    position: { x: 900, y: 210 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '4',
    data: {
      label: '晚餐',
    },
    style: {
      fontWeight: 500
    },
    className: 'font',
    position: { x: 700, y: 300 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '4-1',
    data: {
      label: '热量需求在200-400kcal之间',
    },
    className: 'font',
    position: { x: 900, y: 250 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '4-2',
    data: {
      label: '含高纤维谷物类食品，入燕麦片、全麦面包等',
    },
    className: 'font',
    position: { x: 900, y: 280 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '4-3',
    data: {
      label: '含有蛋白质的食品入鸡蛋、豆腐、牛奶等',
    },
    className: 'font',
    position: { x: 900, y: 310 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '5',
    data: {
      label: '加餐',
    },
    style: {
      fontWeight: 500
    },
    className: 'font',
    position: { x: 700, y: 400 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '5-1',
    data: {
      label: '热量需求在200-400kcal之间',
    },
    className: 'font',
    position: { x: 900, y: 350 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '5-2',
    data: {
      label: '含高纤维谷物类食品，入燕麦片、全麦面包等',
    },
    className: 'font',
    position: { x: 900, y: 380 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '5-3',
    data: {
      label: '含有蛋白质的食品入鸡蛋、豆腐、牛奶等',
    },
    className: 'font',
    position: { x: 900, y: 410 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '6',
    data: {
      label: '饮水',
    },
    className: 'font',
    position: { x: 700, y: 500 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      fontWeight: 500
    },
  },
  {
    id: '6-1',
    data: {
      label: '热量需求在200-400kcal之间',
    },
    className: 'font',
    position: { x: 900, y: 450 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '6-2',
    data: {
      label: '含高纤维谷物类食品，入燕麦片、全麦面包等',
    },
    className: 'font',
    position: { x: 900, y: 480 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '6-3',
    data: {
      label: '含有蛋白质的食品入鸡蛋、豆腐、牛奶等',
    },
    className: 'font',
    position: { x: 900, y: 510 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  
];

export const edges = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2',
    style: {
      stroke: 'purple',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e2-2-1', 
    source: '2', 
    target: '2-1',
    style: {
      stroke: 'purple',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e2-2-2', 
    source: '2', 
    target: '2-2',
    style: {
      stroke: 'purple',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e2-2-3', 
    source: '2', 
    target: '2-3',
    style: {
      stroke: 'purple',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e1-3', 
    source: '1', 
    target: '3',
    style: {
      stroke: '#E08587',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e3-3-1', 
    source: '3', 
    target: '3-1',
    style: {
      stroke: '#E08587',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e3-3-2', 
    source: '3', 
    target: '3-2',
    style: {
      stroke: '#E08587',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e3-3-3', 
    source: '3', 
    target: '3-3',
    style: {
      stroke: '#E08587',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e1-4', 
    source: '1', 
    target: '4',
    style: {
      stroke: '#6E98DE',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e4-4-1', 
    source: '4', 
    target: '4-1',
    style: {
      stroke: '#6E98DE',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e4-4-2', 
    source: '4', 
    target: '4-2',
    style: {
      stroke: '#6E98DE',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e4-4-3', 
    source: '4', 
    target: '4-3',
    style: {
      stroke: '#6E98DE',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e1-5', 
    source: '1', 
    target: '5',
    style: {
      stroke: '#E69F7A',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e5-5-1', 
    source: '5', 
    target: '5-1',
    style: {
      stroke: '#E69F7A',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e5-5-2', 
    source: '5', 
    target: '5-2',
    style: {
      stroke: '#E69F7A',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e5-5-3', 
    source: '5', 
    target: '5-3',
    style: {
      stroke: '#E69F7A',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e1-6', 
    source: '1', 
    target: '6',
    style: {
      stroke: '#69F89C',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e6-6-1', 
    source: '6', 
    target: '6-1',
    style: {
      stroke: '#69F89C',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e6-6-2', 
    source: '6', 
    target: '6-2',
    style: {
      stroke: '#69F89C',
      strokeWidth: '2px',
    },
  },
  { 
    id: 'e6-6-3', 
    source: '6', 
    target: '6-3',
    style: {
      stroke: '#69F89C',
      strokeWidth: '2px',
    },
  },
  
];
