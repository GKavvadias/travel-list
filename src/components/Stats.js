export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 📃</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  let percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈!"
          : `📃 You have ${numItems} item${
              numItems > 1 || numItems === 0 ? "s" : ""
            } on your list and you have already packed ${numPacked} (${
              numItems === 0 ? (percentage = 0 + "%") : percentage + "%"
            }) 💼`}
      </em>
    </footer>
  );
}
