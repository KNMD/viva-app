
import React, { memo, useState } from 'react'
import type { NewPrompt, Stage } from '@/types/index';
import { nodes as initialNodes, edges as initialEdges } from '../test-elements';
import ReactFlow, { Position, Node, Edge, useEdgesState, useNodesState, useReactFlow } from 'reactflow';
import promptControllerApi from '@/requests/promptControllerApi';
import { YamlParser } from '@/utils/FormatUtils'
import { useGraphContext } from '../context';
import { v4 as uuidv4 } from 'uuid';
import {Card, CardHeader, CardBody, CardFooter, Input} from "@nextui-org/react";
import { SearchIcon } from '@/components/icons';
import TablerIcon from '@/components/tabler';





const PromptDialog = memo((node: Node) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };
    const { setGraphNodes, setGraphEdges, autoLayout } = useGraphContext();
    const reactFlowInstance = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const close = () => {
        console.log("reactFlowInstance", node)
        reactFlowInstance.deleteElements({nodes: [node]})
    }

    const randomColor = () => {
        const getRandomValue = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        return `#${getRandomValue()}${getRandomValue()}${getRandomValue()}`;
    }

    const traverseTree = (input: any, parentId: string | null = null, startX: number = 100, startY: number = 100, level: number = 0) => {
        let nodes: Node[] = [];
        let edges: Edge[] = [];
        let y: number = startY;
        let x: number = startX;
        
        // 如果输入是数组
        if (Array.isArray(input)) {
            input.forEach(item => {
                const result = traverseTree(item, parentId, x + 100, y, level);
                nodes = nodes.concat(result.nodes);
                edges = edges.concat(result.edges);
                y += 100;
            });
        } 
        // 如果输入是对象
        else if (typeof input === 'object' && input !== null) {
            const x = startX + level * 100;
            for (let key in input) {
                const nodeId = uuidv4();
                nodes.push({
                    id: nodeId, 
                    data: { label: key }, 
                    className: 'font',
                    sourcePosition: Position.Right,
                    targetPosition: Position.Left,
                    position: reactFlowInstance.project({
                        x: x,
                        y: y,
                    }),
                } as Node);

                if (parentId) {
                    edges.push({ id: uuidv4(), source: parentId, target: nodeId, style: {
                        stroke: randomColor(),
                        strokeWidth: '2px',
                    }, } as Edge);
                }

                const result = traverseTree(input[key], nodeId, x + 100, y, level + 1);
                nodes = nodes.concat(result.nodes);
                edges = edges.concat(result.edges);
                y += result.yOffset;
            }
        } 
        // 如果输入是基本类型
        else {
            const x = startX + level * 100;
            const nodeId = uuidv4();
            nodes.push({
                id: nodeId, 
                data: { label: input }, 
                className: 'font',
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
                position: reactFlowInstance.project({
                    x: x,
                    y: y,
                }),
            } as Node);

            if (parentId) {
                edges.push({ id: uuidv4(), source: parentId, target: nodeId, style: {
                    stroke: randomColor(),
                    strokeWidth: '2px',
                }, } as Edge);
            }
            y += 100;
        }

        return { nodes, edges, yOffset: y - startY };
        
    }

    
    const send = () => {
        let msg = ""
        console.log("inputValue", inputValue)
        
        const parser = new YamlParser()
        const promptNode = initialNodes[0]
        const rootNode = initialNodes[1]
        promptControllerApi.fetch("/test_xmind3", "xxx", {}, (llmRecord: NewPrompt.LLMRecord) => {
            msg += llmRecord.data.result
            parser.receiveData(llmRecord.data.result)
            const nodeData = parser.getParsedData()
            if(nodeData != null) {
                console.log("nodes: ", nodeData)
            }
            const startX: number = rootNode.position.x + 500, startY: number = rootNode.position.y
            const { nodes, edges } = traverseTree(nodeData, rootNode.id, startX, startY)
            nodes.unshift(rootNode);
            nodes.unshift(promptNode);
            setGraphNodes(nodes)
            setGraphEdges(edges)
            if(llmRecord.code === 201) {
                // const layout = autoLayout(graph, nodes, edges)
                // setGraphNodes(layout.nodes)
                // setGraphEdges(layout.edges)
                autoLayout(nodes, edges)
            }
            
        })
        
        
        
    }
    return (
        <div className='prompt-dialog-wrap' style={{'width': '500px'}}>
            <Card>
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-small text-default-500">生成思维导图</p>
                    </div>
                </CardHeader>
                <CardBody>
                <Input
                    value={inputValue}
                    aria-label="Search"
                    classNames={{
                        inputWrapper: "bg-default-100",
                        input: "text-sm",
                    }}
                    endContent={
                        <TablerIcon iconName="TbSend" />
                    }
                    labelPlacement="outside"
                    placeholder="Please write your prompt..."
                    type="search"
                    onChange={handleInputChange}
                />
                </CardBody>
            </Card>
        </div>
    )
})

PromptDialog.displayName = "PromptDialog"

export default PromptDialog