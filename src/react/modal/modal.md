# Modal

```javascript
<Modal
  animationDuration={false}
  title="What a Header!"
  size="30%"
  show={false}
  onHide={() => console.log('hide')}
  footer={
    <UIButton kind="default" onClick={() => console.log('hide')}>
      Close
    </UIButton>
  }
>
  <p>Text in a body</p>
  <Input autoFocus placeholder="Tell me your darkest secrets" />
</Modal>
```
