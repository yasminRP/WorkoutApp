// Stats Component
export default function Stats({items}) {
    var listLength=items.length
    var packedItems=items.filter((item) => item.packed).length;
    var percentagePacked=(packedItems/listLength)*100
    return (
      <footer className="stats">
        { percentagePacked === 100 ? <em>You have everything!</em> : <em>You have {listLength} items in the list. You already packed {packedItems} ({percentagePacked.toFixed(1)}%).</em>}
      </footer>
    );
  }