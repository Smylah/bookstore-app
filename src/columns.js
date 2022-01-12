const columns = [
  {
    title: "Class",
    field: "class",
    filterPlaceholder: "Select Class",
    lookup: {
      SSS: "Senior Secondary",
      PreNursery: "Pre-Nursery",
      Nursery1: "Nursery 1",
      Nursery2: "Nursery 2",
      Grade1: "Grade 1",
      Grade2: "Grade 2",
      Grade3: "Grade 3",
      Grade4: "Grade 4",
      Grade5: "Grade 5",
      Grade6: "Grade 6",
      JSS1: "JSS 1",
      JSS2: "JSS 2",
      JSS3: "JSS 3",
    },
  },
  { title: "Book Name", field: "Name", filtering: false },
  { title: "Publisher", field: "Publisher", filtering: false },
  {
    title: "Price",
    field: "Price",
    align: "left",
    type: "currency",
    filtering: false,
    currencySetting: { currencyCode: "NGN", minimumFractionDigits: 0 },
    emptyValue: () => <em>null</em>,
  },
]

export default columns
