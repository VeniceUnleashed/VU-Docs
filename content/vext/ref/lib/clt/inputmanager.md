---
title: InputManager (Client Library)
---
## Description

## Methods

| Type  | Name                                        | Parameters                                                                            |
| ----- | ------------------------------------------- | ------------------------------------------------------------------------------------- |
| float | [GetLevel](#getlevel)                       | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier** |
| bool  | [IsDown](#isdown)                           | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier** |
| bool  | [WentDown](#wentdown)                       | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier** |
| bool  | [WentUp](#wentup)                           | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier** |
| bool  | [IsKeyDown](#iskeydown)                     | [InputDeviceKeys](/vext/ref/cls/fb/inputdevicekeys) **key**                        |
| bool  | [WentKeyDown](#wentkeydown)                 | [InputDeviceKeys](/vext/ref/cls/fb/inputdevicekeys) **key**                        |
| bool  | [WentKeyUp](#wentkeyup)                     | [InputDeviceKeys](/vext/ref/cls/fb/inputdevicekeys) **key**                        |
| bool  | [IsMouseButtonDown](#ismousebuttondown)     | [InputDeviceMouseButtons](/vext/ref/cls/fb/inputdevicemousebuttons) **button**     |
| bool  | [WentMouseButtonDown](#wentmousebuttondown) | [InputDeviceMouseButtons](/vext/ref/cls/fb/inputdevicemousebuttons) **button**     |
| bool  | [WentMouseButtonUp](#wentmousebuttonup)     | [InputDeviceMouseButtons](/vext/ref/cls/fb/inputdevicemousebuttons) **button**     |
| float | [GetMouseLevel](#getmouselevel)             | [InputDeviceAxes](/vext/ref/cls/fb/inputdeviceaxes) **axes**                       |
| void  | [SetCursorPosition](#setcursorposition)     | int **x**, int **y**                                                                  |
| bool  | [IsMouseActive](#ismouseactive)             |                                                                                       |
| float | [GetMouseSensitivity](#getmousesensitivity) |                                                                                       |
| void  | [SetMouseSensitivity](#setmousesensitivity) | float **sensitivity**                                                                 |

### GetLevel

> float **GetLevel**([InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) |             |

### IsDown

> bool **IsDown**([InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) |             |

### WentDown

> bool **WentDown**([InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) |             |

### WentUp

> bool **WentUp**([InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/cls/fb/inputconceptidentifiers) |             |

### IsKeyDown

> bool **IsKeyDown**([InputDeviceKeys](/vext/ref/cls/fb/inputdevicekeys) **key**)

#### Parameters

| Name | Type                                                   | Description |
| ---- | ------------------------------------------------------ | ----------- |
| key  | [InputDeviceKeys](/vext/ref/cls/fb/inputdevicekeys) |             |

### WentKeyDown

> bool **WentKeyDown**([InputDeviceKeys](/vext/ref/cls/fb/inputdevicekeys) **key**)

#### Parameters

| Name | Type                                                   | Description |
| ---- | ------------------------------------------------------ | ----------- |
| key  | [InputDeviceKeys](/vext/ref/cls/fb/inputdevicekeys) |             |

### WentKeyUp

> bool **WentKeyUp**([InputDeviceKeys](/vext/ref/cls/fb/inputdevicekeys) **key**)

#### Parameters

| Name | Type                                                   | Description |
| ---- | ------------------------------------------------------ | ----------- |
| key  | [InputDeviceKeys](/vext/ref/cls/fb/inputdevicekeys) |             |

### IsMouseButtonDown

> bool **IsMouseButtonDown**([InputDeviceMouseButtons](/vext/ref/cls/fb/inputdevicemousebuttons) **button**)

#### Parameters

| Name   | Type                                                                   | Description |
| ------ | ---------------------------------------------------------------------- | ----------- |
| button | [InputDeviceMouseButtons](/vext/ref/cls/fb/inputdevicemousebuttons) |             |

### WentMouseButtonDown

> bool **WentMouseButtonDown**([InputDeviceMouseButtons](/vext/ref/cls/fb/inputdevicemousebuttons) **button**)

#### Parameters

| Name   | Type                                                                   | Description |
| ------ | ---------------------------------------------------------------------- | ----------- |
| button | [InputDeviceMouseButtons](/vext/ref/cls/fb/inputdevicemousebuttons) |             |

### WentMouseButtonUp

> bool **WentMouseButtonUp**([InputDeviceMouseButtons](/vext/ref/cls/fb/inputdevicemousebuttons) **button**)

#### Parameters

| Name   | Type                                                                   | Description |
| ------ | ---------------------------------------------------------------------- | ----------- |
| button | [InputDeviceMouseButtons](/vext/ref/cls/fb/inputdevicemousebuttons) |             |

### GetMouseLevel

> float **GetMouseLevel**([InputDeviceAxes](/vext/ref/cls/fb/inputdeviceaxes) **axes**)

#### Parameters

| Name | Type                                                   | Description |
| ---- | ------------------------------------------------------ | ----------- |
| axes | [InputDeviceAxes](/vext/ref/cls/fb/inputdeviceaxes) |             |

### SetCursorPosition

> void **SetCursorPosition**(int **x**, int **y**)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| x    | int  |             |
| y    | int  |             |

### IsMouseActive

> bool **IsMouseActive**()

### GetMouseSensitivity

> float **GetMouseSensitivity**()

### SetMouseSensitivity

> void **SetMouseSensitivity**(float **sensitivity**)

#### Parameters

| Name        | Type  | Description |
| ----------- | ----- | ----------- |
| sensitivity | float |             |
