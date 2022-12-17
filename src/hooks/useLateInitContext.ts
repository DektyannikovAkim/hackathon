import { Context, createContext, useContext } from "react";


/**
 * Creates lateinit context with undefined initial value
 * @returns lateinit context
 */
export const createLateInitContext = <T>() =>
  createContext<T | undefined>(undefined);


/**
 * Access lateinit context
 * Throws error if the context is undefined when being accessed
 * @param context - lateinit context object
 * @returns context value
 */  
export const useLateInitContext = <T>(context: Context<T | undefined>) => {
  const ctx = useContext(context);
  if (!ctx) throw new Error("Can't access not initialized lateinit context!");
  return ctx;
};
