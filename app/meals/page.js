import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
async function Meals() {
    const mealsArray = await getMeals();
    return <MealsGrid meals={mealsArray} />;
}

const page = async () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{''} &nbsp;
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favourite recipe and cook it yourself. It is easy and yummy. </p>

                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favourite Recipe
                    </Link>
                </p>

            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Preparing tasty meals for you 😋😋😋...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
};

export default page;