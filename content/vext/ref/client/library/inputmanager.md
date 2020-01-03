---
title: InputManager
---
## Description

## Methods

| Type  | Name                                        | Parameters                                                                            |
| ----- | ------------------------------------------- | ------------------------------------------------------------------------------------- |
| float | [GetLevel](#getlevel)                       | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier** |
| bool  | [IsDown](#isdown)                           | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier** |
| bool  | [WentDown](#wentdown)                       | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier** |
| bool  | [WentUp](#wentup)                           | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier** |
| bool  | [IsKeyDown](#iskeydown)                     | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) **key**                        |
| bool  | [WentKeyDown](#wentkeydown)                 | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) **key**                        |
| bool  | [WentKeyUp](#wentkeyup)                     | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) **key**                        |
| bool  | [IsMouseButtonDown](#ismousebuttondown)     | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) **button**     |
| bool  | [WentMouseButtonDown](#wentmousebuttondown) | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) **button**     |
| bool  | [WentMouseButtonUp](#wentmousebuttonup)     | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) **button**     |
| float | [GetMouseLevel](#getmouselevel)             | [InputDeviceAxes](/vext/ref/fb/inputdeviceaxes) **axes**                       |
| void  | [SetCursorPosition](#setcursorposition)     | int **x**, int **y**                                                                  |
| bool  | [IsMouseActive](#ismouseactive)             |                                                                                       |
| float | [GetMouseSensitivity](#getmousesensitivity) |                                                                                       |
| void  | [SetMouseSensitivity](#setmousesensitivity) | float **sensitivity**                                                                 |

### GetLevel

> float **GetLevel**([InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |             |

### IsDown

> bool **IsDown**([InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |             |

### WentDown

> bool **WentDown**([InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |             |

### WentUp

> bool **WentUp**([InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |             |

### IsKeyDown

> bool **IsKeyDown**([InputDeviceKeys](/vext/ref/fb/inputdevicekeys) **key**)

#### Parameters

| Name | Type                                                   | Description |
| ---- | ------------------------------------------------------ | ----------- |
| key  | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) |             |

### WentKeyDown

> bool **WentKeyDown**([InputDeviceKeys](/vext/ref/fb/inputdevicekeys) **key**)

#### Parameters

| Name | Type                                                   | Description |
| ---- | ------------------------------------------------------ | ----------- |
| key  | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) |             |

### WentKeyUp

> bool **WentKeyUp**([InputDeviceKeys](/vext/ref/fb/inputdevicekeys) **key**)

#### Parameters

| Name | Type                                                   | Description |
| ---- | ------------------------------------------------------ | ----------- |
| key  | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) |             |

### IsMouseButtonDown

> bool **IsMouseButtonDown**([InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) **button**)

#### Parameters

| Name   | Type                                                                   | Description |
| ------ | ---------------------------------------------------------------------- | ----------- |
| button | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) |             |

### WentMouseButtonDown

> bool **WentMouseButtonDown**([InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) **button**)

#### Parameters

| Name   | Type                                                                   | Description |
| ------ | ---------------------------------------------------------------------- | ----------- |
| button | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) |             |

### WentMouseButtonUp

> bool **WentMouseButtonUp**([InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) **button**)

#### Parameters

| Name   | Type                                                                   | Description |
| ------ | ---------------------------------------------------------------------- | ----------- |
| button | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) |             |

### GetMouseLevel

> float **GetMouseLevel**([InputDeviceAxes](/vext/ref/fb/inputdeviceaxes) **axes**)

#### Parameters

| Name | Type                                                   | Description |
| ---- | ------------------------------------------------------ | ----------- |
| axes | [InputDeviceAxes](/vext/ref/fb/inputdeviceaxes) |             |

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
