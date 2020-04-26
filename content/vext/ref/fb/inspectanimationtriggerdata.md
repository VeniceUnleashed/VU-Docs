---
title: InspectAnimationTriggerData
---

## Summary

### Constructors

|  |
| --- |
| **[InspectAnimationTriggerData](#constructor-0)**() |
| **[InspectAnimationTriggerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "animation" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "probability" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "InspectAnimationTriggerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### InspectAnimationTriggerData {#constructor-0}

> **InspectAnimationTriggerData**()

Creates a new [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata) frostbite instance.

### InspectAnimationTriggerData {#constructor-1}

> **InspectAnimationTriggerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "animation" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "probability" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [InspectAnimationTriggerData](/vext/ref/fb/inspectanimationtriggerdata) type.

