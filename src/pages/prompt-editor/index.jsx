/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { SideMenu } from "../../components";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PromptEditor = () => {
  const [updatedPrompts, setUpdatedPrompts] = useState([]);

  const {
    data: prompts,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["prompts"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/admin/prompts`,
      );
      return response.data;
    },
  });

  useEffect(() => {
    if (prompts) {
      setUpdatedPrompts(prompts.map((prompt) => ({ ...prompt })));
    }
  }, [prompts]);

  const handleChange = (index, e) => {
    const updatedValue = e.target.value;
    setUpdatedPrompts((prevPrompts) => {
      const updatedPromptsCopy = [...prevPrompts];
      updatedPromptsCopy[index].prompt = updatedValue;
      return updatedPromptsCopy;
    });
  };

  const handleSave = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/admin/prompt-editor`,
        updatedPrompts,
      );
      toast.success("Prompts updated successfully");

      refetch();
    } catch (error) {
      console.error("Error updating prompts:", error);
      toast.error("Error updating prompts");
    }
  };

  return (
    <SideMenu>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Prompt Editor</h1>
        <div className="mb-4">
          <p className="mb-2">
            <strong>Disclaimer:</strong> Please note that the placeholders{" "}
            <code>{"{gender}"}</code> and <code>{"{ethnicity}"}</code> should be
            used appropriately. For example:
          </p>
          <p className="ml-4">
            <em>
              "A {"{ethnicity}"} {"{gender}"} person is standing on the beach
              enjoying the sunset."
            </em>
          </p>
          <p className="ml-4">This will translate to following prompt:</p>
          <p className="ml-4 mb-2">
            <em>
              "A {"Asian"} {"Female"} person is standing on the beach enjoying
              the sunset."
            </em>
          </p>
          <p className="mb-2">
            Also, ensure that the image links end with <code>.png</code> or{" "}
            <code>.jpg</code>. Other formats such as <code>.webm</code> are not
            supported.
          </p>
        </div>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching prompts</div>}
        {!isLoading && !isError && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Existing Prompts</h2>
            <ul>
              {prompts.map((prompt, index) => (
                <li key={index} className="mb-4">
                  <TextareaAutosize
                    minRows={4}
                    className="w-full p-2 border rounded-md"
                    defaultValue={prompt.prompt}
                    onChange={(e) => handleChange(index, e)}
                  />
                </li>
              ))}
            </ul>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              className="mt-4"
            >
              Save Changes
            </Button>
          </div>
        )}
      </div>
    </SideMenu>
  );
};

export default PromptEditor;
