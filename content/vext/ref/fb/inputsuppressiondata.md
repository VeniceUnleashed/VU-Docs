---
title: InputSuppressionData
---

## Summary

### Constructors

|  |
| --- |
| **[InputSuppressionData](#constructor-0)**() |
| **[InputSuppressionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "suppressVehicleInput" >}} | [ActionSuppressor](/vext/ref/fb/actionsuppressor)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [InputSuppressionData](/vext/ref/fb/inputsuppressiondata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InputSuppressionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InputSuppressionData {#constructor-0}

> **InputSuppressionData**()

Creates a new [InputSuppressionData](/vext/ref/fb/inputsuppressiondata) frostbite instance.

### InputSuppressionData {#constructor-1}

> **InputSuppressionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InputSuppressionData](/vext/ref/fb/inputsuppressiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "suppressVehicleInput" %}}

> **[ActionSuppressor](/vext/ref/fb/actionsuppressor)**[]

## Methods

### Clone {#clone}

> **Clone**(): [InputSuppressionData](/vext/ref/fb/inputsuppressiondata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[InputSuppressionData](/vext/ref/fb/inputsuppressiondata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InputSuppressionData](/vext/ref/fb/inputsuppressiondata) type.

