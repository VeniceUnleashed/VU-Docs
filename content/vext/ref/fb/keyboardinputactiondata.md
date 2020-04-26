---
title: KeyboardInputActionData
---

Inherits from [InputActionData](/vext/ref/fb/inputactiondata)

## Summary

### Constructors

|  |
| --- |
| **[KeyboardInputActionData](#constructor-0)**() |
| **[KeyboardInputActionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[KeyboardInputActionData](#constructor-2)**(other: [InputActionData](/vext/ref/fb/inputactiondata)) |
| **[KeyboardInputActionData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "key" >}} | [InputDeviceKeys](/vext/ref/fb/inputdevicekeys) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "KeyboardInputActionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### KeyboardInputActionData {#constructor-0}

> **KeyboardInputActionData**()

Creates a new [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata) frostbite instance.

### KeyboardInputActionData {#constructor-1}

> **KeyboardInputActionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### KeyboardInputActionData {#constructor-2}

> **KeyboardInputActionData**(other: [InputActionData](/vext/ref/fb/inputactiondata))

Casts an instance of type [InputActionData](/vext/ref/fb/inputactiondata) to [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [InputActionData](/vext/ref/fb/inputactiondata) | The instance to cast to [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata). |

### KeyboardInputActionData {#constructor-3}

> **KeyboardInputActionData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata). |

## Properties

### {{% prop-heading "key" %}}

> **[InputDeviceKeys](/vext/ref/fb/inputdevicekeys)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [KeyboardInputActionData](/vext/ref/fb/keyboardinputactiondata) type.

