"use client";

import { useFormStatus } from "react-dom";

export const MealSubmit = () => {
    const { pending } = useFormStatus();
    // console.log("Submitting", pending);
    return <button type="submit" disabled={pending}>{
        pending ? "Submitting..." : "Share Meal"
    }</button>;
};