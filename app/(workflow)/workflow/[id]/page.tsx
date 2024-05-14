"use client";
import React, { memo } from 'react'

import { useState, useCallback, useRef, DragEventHandler } from 'react';
import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  DefaultEdgeOptions,
  MiniMap,
  Controls,
  Background,
  Panel,
  NodeTypes,
  BezierEdge,
  StraightEdge,
  StepEdge,
  SmoothStepEdge,
  MarkerType,
  EdgeTypes
} from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import { GraphContext } from '../context';
import dagre, { graphlib } from 'dagre';
import 'reactflow/dist/style.css';
import '../graph.css'
import { nodes as initialNodes, edges as initialEdges } from '../test-elements';
import TitleNavBar from "../tools/TitleNavBar";
import ToolNavBar from "../tools/ToolNavBar";
import BaseActiviyNode from "../nodes/BaseActiviyNode";
import IfNode from "../nodes/IfNode";
import FloatingEdge from "../edges/FloatingEdge";
// @ts-ignore
import FloatingConnectionLine from "./edges/FloatingConnectionLine"
import ActivityGroupNode from "../nodes/ActivitiyGroup/ActivitiGroupNode";
import CommonOptionEdge from "../edges/CommonOptionEdge";
import StartNode from '../nodes/StartNode';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from 'postcss';
import { Button } from '@/components/ui/button';
import { BaseActiviyNodeProps } from '@/types/app';

// @ts-ignore
const nodeTypes = {
  start: StartNode,
  base: BaseActiviyNode,
  activityGroup: ActivityGroupNode,
  if: IfNode,
} as NodeTypes;

const minimapStyle = {
  height: 120,
};
// @ts-ignore
const edgeTypes = {
  floating: FloatingEdge,
  option: CommonOptionEdge,
} as EdgeTypes;



const worffowDetailPage = memo(() => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect: OnConnect = useCallback((connection) => {
    return setEdges((eds) =>
      addEdge({ ...connection, type: 'option', style: { strokeWidth: '2px' }, markerEnd: { type: MarkerType.ArrowClosed } }, eds)
    )
  }, [setEdges]);

  const addNodes = useCallback((nodes: Node[]) => {
    console.log("add nodes", nodes)
    setNodes((nds) => nds.concat(nodes));
  }, []);
  const setGraphNodes = useCallback((nodes: Node[]) => {
    console.log("set nodes", nodes)
    setNodes(nodes);
  }, []);
  const setGraphEdges = useCallback((edges: Edge[]) => {
    console.log("set nodes", edges)
    setEdges(edges);
  }, []);

  const onDragOver: DragEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }

  }, []);


  const onDrop: DragEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    console.log("type: ", type)

    // check if the dropped element is valid
    if (typeof type === 'undefined' || !type) {
      return;
    }

    if (reactFlowInstance) {
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: uuidv4(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    }


  }, [reactFlowInstance]);
  const autoLayout = () => { }
  // const autoLayout = useCallback((nodes: Node[], edges: Edge[]) => {
  // 	const graph = new dagre.graphlib.Graph();
  // 	graph.setDefaultEdgeLabel(() => ({}));
  // 	graph.setGraph({ rankdir: 'LR' });
  // 	const startNode = nodes[0]
  // 	nodes.forEach((node: Node)=> {
  // 	  const node_element = document.querySelector('[data-id="' + node.id + '"]');
  // 	  if(node_element) {
  // 		// @ts-ignore
  // 		graph.setNode(node.id, { width: node_element.offsetWidth, height: node_element.offsetHeight });
  // 	  }else {
  // 		graph.setNode(node.id, { width: 100, height: 50 });
  // 	}});

  // 	edges.forEach(edge => {
  // 	  graph.setEdge(edge.source, edge.target);
  // 	});

  // 	dagre.layout(graph);

  // 	const newNodes = nodes.filter(node => node.id !== '0').map(node => {
  // 	  const position = graph.node(node.id);

  // 	  return {
  // 		...node,
  // 		position: {
  // 		  x: startNode.position.x + 200 + position.x,
  // 		  y: startNode.position.x + 200 + position.y
  // 		}
  // 	  };
  // 	})
  // 	newNodes.unshift(startNode)

  // 	setNodes(newNodes)
  // }, []);
  const onSideBar = (chilren: React.ReactNode) => {
    console.log("onside bar node: ", node)
  }
  return (
    <div style={{ height: '100vh', width: '100vw' }} className="reactflow-wrapper" ref={reactFlowWrapper}>
      <GraphContext.Provider value={{ addNodes, setGraphNodes, setGraphEdges, autoLayout, onSideBar }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          onDrop={onDrop}
          onDragOver={onDragOver}
          edgeTypes={edgeTypes}
          // connectionLineComponent={FloatingConnectionLine}
          fitView
        >
          <MiniMap style={minimapStyle} zoomable pannable />
          <Controls />
          <Background className="bg-slate-50" gap={16} />
          <Panel position="top-left" className="title-nav-container">
            <TitleNavBar />
          </Panel>
          <Panel position="top-left" className="toolbar-nav-container">
            <ToolNavBar />
            
          </Panel>
        </ReactFlow>


      </GraphContext.Provider>

    </div>
  )
})

export default worffowDetailPage