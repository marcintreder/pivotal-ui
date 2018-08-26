# Autocomplete

```javascript
<div style={{ width: '300px' }}>
  <Autocomplete
    onPick={item => console.log('You selected ' + item.value)}
    onInitializeItems={callback => callback(['uxpin', 'merge', 'revolution'])}
  />
</div>
```
