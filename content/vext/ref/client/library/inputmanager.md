---
title: InputManager
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetLevel](#getlevel)**(concept: [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)) | float |
| **[IsDown](#isdown)**(concept: [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)) | bool |
| **[WentDown](#wentdown)**(concept: [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)) | bool |
| **[WentUp](#wentup)**(concept: [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)) | bool |
| **[IsKeyDown](#iskeydown)**(key: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys)) | bool |
| **[WentKeyDown](#wentkeydown)**(key: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys)) | bool |
| **[WentKeyUp](#wentkeyup)**(key: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys)) | bool |
| **[IsMouseButtonDown](#ismousebuttondown)**(button: [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons)) | bool |
| **[WentMouseButtonDown](#wentmousebuttondown)**(button: [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons)) | bool |
| **[WentMouseButtonUp](#wentmousebuttonup)**(button: [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons)) | bool |
| **[GetMouseLevel](#getmouselevel)**(axes: [InputDeviceAxes](/vext/ref/fb/inputdeviceaxes)) | float |
| **[GetCursorPosition](#getcursorposition)**() | [Vec2](/vext/ref/shared/type/vec2) |
| **[SetCursorPosition](#setcursorposition)**(x: int, y: int) | void |
| **[IsMouseActive](#ismouseactive)**() | bool |
| **[GetMouseSensitivity](#getmousesensitivity)**() | float |
| **[SetMouseSensitivity](#setmousesensitivity)**(sensitivity: float) | void |

## Methods

### GetLevel {#getlevel}

> **GetLevel**(concept: [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **concept** | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### IsDown {#isdown}

> **IsDown**(concept: [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **concept** | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### WentDown {#wentdown}

> **WentDown**(concept: [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **concept** | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### WentUp {#wentup}

> **WentUp**(concept: [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **concept** | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### IsKeyDown {#iskeydown}

> **IsKeyDown**(key: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **key** | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### WentKeyDown {#wentkeydown}

> **WentKeyDown**(key: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **key** | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### WentKeyUp {#wentkeyup}

> **WentKeyUp**(key: [InputDeviceKeys](/vext/ref/fb/inputdevicekeys)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **key** | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### IsMouseButtonDown {#ismousebuttondown}

> **IsMouseButtonDown**(button: [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **button** | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### WentMouseButtonDown {#wentmousebuttondown}

> **WentMouseButtonDown**(button: [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **button** | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### WentMouseButtonUp {#wentmousebuttonup}

> **WentMouseButtonUp**(button: [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **button** | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### GetMouseLevel {#getmouselevel}

> **GetMouseLevel**(axes: [InputDeviceAxes](/vext/ref/fb/inputdeviceaxes)): float

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **axes** | [InputDeviceAxes](/vext/ref/fb/inputdeviceaxes) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### GetCursorPosition {#getcursorposition}

> **GetCursorPosition**(): [Vec2](/vext/ref/shared/type/vec2)

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Vec2](/vext/ref/shared/type/vec2)** |  |

### SetCursorPosition {#setcursorposition}

> **SetCursorPosition**(x: int, y: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **x** | int |  |
| **y** | int |  |

### IsMouseActive {#ismouseactive}

> **IsMouseActive**(): bool

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### GetMouseSensitivity {#getmousesensitivity}

> **GetMouseSensitivity**(): float

#### Returns

| Type | Description |
| ---- | ----------- |
| **float** |  |

### SetMouseSensitivity {#setmousesensitivity}

> **SetMouseSensitivity**(sensitivity: float)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **sensitivity** | float |  |

