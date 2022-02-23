import { auth, firestore } from "../lib/client-firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection("stores").doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUserData({ id: doc.id, ...doc.data() });
      });
    } else {
      setUserData(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, userData };
}
