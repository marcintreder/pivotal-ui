# Tooltip

```javascript
<Grid>
  <FlexCol fixed>
    <TooltipTrigger tooltip="Merge is awesome!">
      <button className="btn btn-default">Hover over me</button>
    </TooltipTrigger>
  </FlexCol>
  <FlexCol fixed>
    <TooltipTrigger tooltip="Merge is awesome!" trigger="click">
      <button className="btn btn-default">Click me</button>
    </TooltipTrigger>
  </FlexCol>
  <FlexCol fixed>
    <TooltipTrigger
      tooltip="Merge is awesome!"
      isSticky={true}
      placement="right"
    >
      <button className="btn btn-default">Hover over me too!</button>
    </TooltipTrigger>
  </FlexCol>
</Grid>
```
