---
id: mobile-text
title: MobileText
sidebar_label: MobileText
---

## Overview

The MobileText component allows the user to display a single line text element.

<iframe src="https://kuc-storybook.netlify.app/iframe.html?id=mobile-text--document" title="mobile text image" height="60px"></iframe>

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or left empty |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label will not be displayed if unspecified or left empty |
| placeholder | string | ""  | Placholder text for entry example | |
| prefix | string | ""  | Text to be displayed before the input text | |
| suffix | string | ""  | Text to be displayed after the input text | |
| textAlign | string | "left"  | Text alignments | The following can be specified<br>"left"  : Justified to the left<br>"right"  : Justified to the right |
| value | string | ""  | Text to be displayed | |
| disabled | boolean | false | Disable the component | |
| requiredIcon | boolean | false | Display the required icon | |
| visible | boolean | true | Show the component | |

### Event

A list of events that can be specified.

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.oldValue  : Value before the change<br>event.detail.value  : Value after the change |
| focus | function | Event handler for the focused time | It will pass the event object as the argument<br><br>You can receive the following values in event.detail<br>event.detail.value  : Value at the time of focus |

### Constructor

Text(options)
A list of available constructors.

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options  | object | {} | JSON object that includes component properties | Values in the options are arbitrary |

---
## Sample Code

Sample code when all parameters are specified.

```javascript
const space = kintone.mobile.app.record.getSpaceElement('space');
const mobileText = new Kuc.MobileText({
  label: 'Fruit',
  requiredIcon: true,
  value: 'Apple',
  placeholder: 'Apple',
  prefix: '$',
  suffix: 'yen',
  textAlign: 'left',
  error: 'Error occurred!',
  className: 'options-class',
  id: 'options-id',
  visible: true,
  disabled: false
});
space.appendChild(mobileText);

mobileText.addEventListener('change', event => {
  console.log(event);
});

mobileText.addEventListener('focus', event => {
  console.log(event);
});
```