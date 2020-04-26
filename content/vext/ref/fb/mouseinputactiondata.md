---
title: MouseInputActionData
---

Inherits from [AxesInputActionData](/vext/ref/fb/axesinputactiondata)

## Summary

### Constructors

|  |
| --- |
| **[MouseInputActionData](#constructor-0)**() |
| **[MouseInputActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MouseInputActionData](#constructor-2)**(other: [AxesInputActionData](/vext/ref/fb/axesinputactiondata)) |
| **[MouseInputActionData](#constructor-3)**(other: [InputActionData](/vext/ref/fb/inputactiondata)) |
| **[MouseInputActionData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "button" >}} | [InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons) |
| {{< prop "simulateJoystickAxis" >}} | bool |
| {{< prop "rememberExcessInput" >}} | bool |
| {{< prop "scaleScrollWheelAxisInput" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MouseInputActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MouseInputActionData {#constructor-0}

> **MouseInputActionData**()

Creates a new [MouseInputActionData](/vext/ref/fb/mouseinputactiondata) frostbite instance.

### MouseInputActionData {#constructor-1}

> **MouseInputActionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MouseInputActionData](/vext/ref/fb/mouseinputactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MouseInputActionData {#constructor-2}

> **MouseInputActionData**(other: [AxesInputActionData](/vext/ref/fb/axesinputactiondata))

Casts an instance of type [AxesInputActionData](/vext/ref/fb/axesinputactiondata) to [MouseInputActionData](/vext/ref/fb/mouseinputactiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AxesInputActionData](/vext/ref/fb/axesinputactiondata) | The instance to cast to [MouseInputActionData](/vext/ref/fb/mouseinputactiondata). |

### MouseInputActionData {#constructor-3}

> **MouseInputActionData**(other: [InputActionData](/vext/ref/fb/inputactiondata))

Casts an instance of type [InputActionData](/vext/ref/fb/inputactiondata) to [MouseInputActionData](/vext/ref/fb/mouseinputactiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [InputActionData](/vext/ref/fb/inputactiondata) | The instance to cast to [MouseInputActionData](/vext/ref/fb/mouseinputactiondata). |

### MouseInputActionData {#constructor-4}

> **MouseInputActionData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MouseInputActionData](/vext/ref/fb/mouseinputactiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MouseInputActionData](/vext/ref/fb/mouseinputactiondata). |

## Properties

### {{% prop-heading "button" %}}

> **[InputDeviceMouseButtons](/vext/ref/fb/inputdevicemousebuttons)**

### {{% prop-heading "simulateJoystickAxis" %}}

> **bool**

### {{% prop-heading "rememberExcessInput" %}}

> **bool**

### {{% prop-heading "scaleScrollWheelAxisInput" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MouseInputActionData](/vext/ref/fb/mouseinputactiondata) type.

