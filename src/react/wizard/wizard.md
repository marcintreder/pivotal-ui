# Wizard

```javascript
const pages = [
  {
    render() {
      return (
        <span>
          This is the first page of the wizard. By default, the wizard cannot be
          cancelled. The user cannot go back from the first page. Click the Next
          button to proceed.
        </span>
      );
    }
  },
  {
    render() {
      return (
        <span>
          This is the second page of the wizard. The user can click Back or
          Next.
        </span>
      );
    }
  },
  {
    render() {
      return (
        <span>
          This is the third and final page of the wizard. The user can click
          Back or Finish
        </span>
      );
    }
  }
];

<Wizard pages={pages} style={{ border: '1px solid #ccc', padding: '8px' }} />;
```
