# Form

```javascript
<Form
  {...{
    fields: {
      email: {
        label: 'Email',
        initialValue: 'my@me.com'
      }
    }
  }}
>
  {({ fields, canSubmit, reset }) => {
    return (
      <div>
        {fields.email}
        <Grid>
          <FlexCol />
          <FlexCol fixed>
            <div>
              <UIButton kind="primary" alt onClick={reset}>
                Reset
              </UIButton>
              <UIButton kind="primary" disabled={!canSubmit()} type="submit">
                Subscribe
              </UIButton>
            </div>
          </FlexCol>
        </Grid>
      </div>
    );
  }}
</Form>
```
