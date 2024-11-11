import React, { useContext } from "react";
import TransContext from "../../store/trans-context";
import { categories } from "../../Helpers/data";

const Categories = (props) => {
  const ctx = useContext(TransContext);
  const expenses = ctx.summaryTrans;

  return (
    <section className="categoriesContainer">
      {/* Section Heafing  */}
      <header>
        <h4 className="heading--four">Kategorien mit höheren Ausgaben</h4>
      </header>

      {/* Section Body */}
      <body className="topCategories">
        {categories
          .filter((cat) => cat.type === "expense")
          .map((cat) => {
            // Find matching expenses for the current category
            const matchingExpenses = expenses.filter(
              (c) => c.category === cat.label && c.amount > 0
            );
            // Render category items only if there are matching expenses
            return matchingExpenses.length > 0 ? (
              <div key={cat._id} className="categoryItem">
                <img src={cat.svg} alt="icon" />
                <span className="catLabel">{cat.label}</span>
                {matchingExpenses.map((c) => (
                  <span key={c.amount} className="catAmount">
                    € {`${c.amount.toFixed(2).replace(".", ",")}`}
                  </span>
                ))}
              </div>
            ) : null; // Return null if there are no matching expenses
          })}
      </body>
    </section>
  );
};

export default Categories;
