---
title: SpeedModifierData
---

## Summary

### Constructors

|  |
| --- |
| **[SpeedModifierData](#constructor-0)**() |
| **[SpeedModifierData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "forwardConstant" >}} | float |
| {{< prop "backwardConstant" >}} | float |
| {{< prop "leftConstant" >}} | float |
| {{< prop "rightConstant" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SpeedModifierData](/vext/ref/fb/speedmodifierdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpeedModifierData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpeedModifierData {#constructor-0}

> **SpeedModifierData**()

Creates a new [SpeedModifierData](/vext/ref/fb/speedmodifierdata) frostbite instance.

### SpeedModifierData {#constructor-1}

> **SpeedModifierData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpeedModifierData](/vext/ref/fb/speedmodifierdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "forwardConstant" %}}

> **float**

### {{% prop-heading "backwardConstant" %}}

> **float**

### {{% prop-heading "leftConstant" %}}

> **float**

### {{% prop-heading "rightConstant" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SpeedModifierData](/vext/ref/fb/speedmodifierdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SpeedModifierData](/vext/ref/fb/speedmodifierdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpeedModifierData](/vext/ref/fb/speedmodifierdata) type.

