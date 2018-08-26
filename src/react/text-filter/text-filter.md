# Text Filter

```javascript
const isOdd = (data, userInput) => {
  return data.filter(dataNum => {
    const dataStr = dataNum.toString();
    return dataStr.indexOf(userInput) != -1;
  });
};
const renderData = dataItem =>
  dataItem.map((item, i) => <li key={i}>{item}</li>);

<TextFilter
  {...{
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 5, 15, 124, 215, 345, 4565, 12],
    filter: isOdd,
    renderFilteredData: renderData
  }}
/>;
```
