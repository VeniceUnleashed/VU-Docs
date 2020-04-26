---
title: InputCurveData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[InputCurveData](#constructor-0)**() |
| **[InputCurveData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[InputCurveData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "affectedInputs" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)[] |
| {{< prop "inputModifierCurve" >}} | [Vec2](/vext/ref/shared/type/vec2)[] |
| {{< prop "handleMultipleInputsAsSquare" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InputCurveData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InputCurveData {#constructor-0}

> **InputCurveData**()

Creates a new [InputCurveData](/vext/ref/fb/inputcurvedata) frostbite instance.

### InputCurveData {#constructor-1}

> **InputCurveData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InputCurveData](/vext/ref/fb/inputcurvedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### InputCurveData {#constructor-2}

> **InputCurveData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [InputCurveData](/vext/ref/fb/inputcurvedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [InputCurveData](/vext/ref/fb/inputcurvedata). |

## Properties

### {{% prop-heading "affectedInputs" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**[]

### {{% prop-heading "inputModifierCurve" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**[]

### {{% prop-heading "handleMultipleInputsAsSquare" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InputCurveData](/vext/ref/fb/inputcurvedata) type.

