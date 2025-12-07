"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Download } from "lucide-react";

interface Parameter {
    name: string;
    type: string;
    description: string;
    required: boolean;
}

export default function ToolGeneratorForm() {
    const [toolName, setToolName] = useState("");
    const [description, setDescription] = useState("");
    const [apiEndpoint, setApiEndpoint] = useState("");
    const [parameters, setParameters] = useState<Parameter[]>([]);
    const [generatedCode, setGeneratedCode] = useState("");

    const addParameter = () => {
        setParameters([
            ...parameters,
            { name: "", type: "string", description: "", required: false },
        ]);
    };

    const removeParameter = (index: number) => {
        setParameters(parameters.filter((_, i) => i !== index));
    };

    const updateParameter = (index: number, field: keyof Parameter, value: any) => {
        const updated = [...parameters];
        updated[index] = { ...updated[index], [field]: value };
        setParameters(updated);
    };

    const generateTool = () => {
        const requiredParams = parameters
            .filter((p) => p.required)
            .map((p) => `"${p.name}"`);

        const propertiesCode = parameters
            .map(
                (p) => `      ${p.name}: {
        type: "${p.type}",
        description: "${p.description}",
      }`
            )
            .join(",\n");

        const code = `import { Request, Response } from "express";
import axios from "axios";

/**
 * MCP Tool Metadata
 */
export const ${toolName}Tool = {
  name: "${toolName}",
  description: "${description}",
  parameters: {
    type: "object",
    properties: {
${propertiesCode}
    },
    required: [${requiredParams.join(", ")}],
  },
};

/**
 * Tool Handler for Public GET API
 */
export const ${toolName}Handler = async (req: Request, res: Response) => {
  const params = req.body;

  // Validate required parameters
  for (const key of ${toolName}Tool.parameters.required) {
    if (!params[key]) {
      return res.status(400).json({ error: \`Missing parameter: \${key}\` });
    }
  }

  try {
    // Construct the API endpoint
    const apiUrl = \`${apiEndpoint}\`;

    const response = await axios.get(apiUrl);

    return res.json(response.data);
  } catch (error: any) {
    return res.status(500).json({
      error: "Failed to fetch data from external API",
      details: error.message,
    });
  }
};
`;

        setGeneratedCode(code);
    };

    const downloadCode = () => {
        const blob = new Blob([generatedCode], { type: "text/typescript" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${toolName}.tool.ts`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-6">
            {/* Tool Basic Info */}
            <Card className="glass-dark p-6 border-primary/10">
                <h3 className="font-bold mb-4">Tool Information</h3>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Tool Name</label>
                        <input
                            type="text"
                            value={toolName}
                            onChange={(e) => setToolName(e.target.value)}
                            placeholder="e.g., weatherForecast"
                            className="w-full px-4 py-2 bg-muted/10 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="What does this tool do?"
                            className="w-full px-4 py-2 bg-muted/10 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            rows={3}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">API Endpoint</label>
                        <input
                            type="text"
                            value={apiEndpoint}
                            onChange={(e) => setApiEndpoint(e.target.value)}
                            placeholder="https://api.example.com/endpoint/${params.id}"
                            className="w-full px-4 py-2 bg-muted/10 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                            Use ${"{params.paramName}"} for dynamic values
                        </p>
                    </div>
                </div>
            </Card>

            {/* Parameters */}
            <Card className="glass-dark p-6 border-primary/10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">Parameters</h3>
                    <Button size="sm" onClick={addParameter} className="glow-primary">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Parameter
                    </Button>
                </div>

                {parameters.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-8">
                        No parameters yet. Click "Add Parameter" to get started.
                    </p>
                ) : (
                    <div className="space-y-4">
                        {parameters.map((param, index) => (
                            <div
                                key={index}
                                className="p-4 bg-muted/5 border border-primary/5 rounded-lg"
                            >
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            value={param.name}
                                            onChange={(e) =>
                                                updateParameter(index, "name", e.target.value)
                                            }
                                            placeholder="paramName"
                                            className="w-full px-3 py-2 bg-muted/10 border border-primary/10 rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2">Type</label>
                                        <select
                                            value={param.type}
                                            onChange={(e) =>
                                                updateParameter(index, "type", e.target.value)
                                            }
                                            className="w-full px-3 py-2 bg-muted/10 border border-primary/10 rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                        >
                                            <option value="string">string</option>
                                            <option value="number">number</option>
                                            <option value="boolean">boolean</option>
                                        </select>
                                    </div>

                                    <div className="col-span-2">
                                        <label className="block text-sm font-medium mb-2">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            value={param.description}
                                            onChange={(e) =>
                                                updateParameter(index, "description", e.target.value)
                                            }
                                            placeholder="What is this parameter for?"
                                            className="w-full px-3 py-2 bg-muted/10 border border-primary/10 rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                        />
                                    </div>

                                    <div className="col-span-2 flex items-center justify-between">
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={param.required}
                                                onChange={(e) =>
                                                    updateParameter(index, "required", e.target.checked)
                                                }
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm">Required</span>
                                        </label>

                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => removeParameter(index)}
                                        >
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Card>

            {/* Generate Button */}
            <Button
                className="w-full glow-primary"
                size="lg"
                onClick={generateTool}
                disabled={!toolName || !description || !apiEndpoint}
            >
                Generate MCP Tool
            </Button>

            {/* Generated Code */}
            {generatedCode && (
                <Card className="glass-dark p-6 border-accent/20">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-accent">Generated Code</h3>
                        <Button size="sm" onClick={downloadCode} className="glow-primary">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                        </Button>
                    </div>

                    <pre className="text-xs font-mono bg-muted/20 p-4 rounded overflow-x-auto max-h-96 overflow-y-auto">
                        {generatedCode}
                    </pre>
                </Card>
            )}
        </div>
    );
}
