import { createLateInitContext } from "../hooks/useLateInitContext";
import MatchStore from "../state/MatchState";

export const MatchContext = createLateInitContext<MatchStore>();
