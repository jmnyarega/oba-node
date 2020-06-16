const cleanData = (data, id) => {
  return data.map((x) => ({
    transaction: x.Transaction,
    status: x.Status,
    transaction_date: x["Transaction Date"],
    due_date: x["Due Date"],
    supplier: x["Customer or Supplier"],
    item: x.Item,
    quantity: x.Quantity,
    unit_amount: x["Unit Amount"],
    amount: x["Total Transaction Amount"],
    companyId: id,
  }));
};

module.exports = cleanData;
