// Context.tsx
import { createContext, useContext } from 'react';
import { Edge, Node } from 'reactflow';

type GraphContextType = {
  addNodes: (nodes: Node[]) => void;
  setGraphNodes: (nodes: Node[]) => void;
  setGraphEdges: (edges: Edge[]) => void;
  autoLayout: (nodes: Node[], edges: Edge[]) => void;
  onSideBar: (children: React.ReactNode) => void;
};

export const GraphContext = createContext<GraphContextType | undefined>(undefined);

export function useGraphContext() {
  const context = useContext(GraphContext);
  if (!context) {
    throw new Error('useFlowContext must be used within a GraphProvider');
  }
  return context;
}
