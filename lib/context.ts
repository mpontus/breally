import React from "react";
import { ApiClient } from "./api";

export const AppContext = React.createContext<{
  api?: ApiClient;
}>({});
