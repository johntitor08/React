import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface ToDoItem {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

function useLocalStorage<T>(key: string, initial: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      /* ignore */
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [key, state]);

  return [state, setState];
}

export default function ToDoApp() {
  const [items, setItems] = useLocalStorage<ToDoItem[]>("ToDo.items.v1", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const inputRef = useRef<HTMLInputElement>(null);

  const remaining = useMemo(() => items.filter((i) => !i.completed).length, [items]);

  function addItem() {
    const t = text.trim();
    if (!t) return;
    const newItem: ToDoItem = {
      id: crypto.randomUUID(),
      text: t,
      completed: false,
      createdAt: Date.now(),
    };
    setItems([newItem, ...items]);
    setText("");
    inputRef.current?.focus();
  }

  function toggleItem(id: string) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i)));
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function clearCompleted() {
    setItems((prev) => prev.filter((i) => !i.completed));
  }

  const filtered = useMemo(() => {
    if (filter === "active") return items.filter((i) => !i.completed);
    if (filter === "completed") return items.filter((i) => i.completed);
    return items;
  }, [items, filter]);

  function onKeyDownForm(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem();
    }
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          To-Do List
        </Typography>

        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <TextField
            inputRef={inputRef}
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            onKeyDown={onKeyDownForm}
            placeholder="Add a new task..."
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addItem}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <Typography variant="body2">{remaining} remaining</Typography>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={(_event: React.MouseEvent<HTMLElement>, v: "all" | "active" | "completed" | null) => {
              if (v) setFilter(v);
            }}
            size="small"
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="active">Active</ToggleButton>
            <ToggleButton value="completed">Completed</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <List>
          {filtered.map((item) => (
            <ListItem key={item.id} divider>
              <Checkbox checked={item.completed} onChange={() => toggleItem(item.id)} />
              <ListItemText
                primary={item.text}
                sx={{
                  textDecoration: item.completed ? "line-through" : "none",
                  color: item.completed ? "text.secondary" : "inherit",
                }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => removeItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

        {items.some((i) => i.completed) && (
          <Button onClick={clearCompleted} sx={{ mt: 2 }}>
            Clear completed
          </Button>
        )}
      </Paper>
    </Container>
  );
}
