---
title: ReadinessLevelCharacteristics
---

## Summary

### Constructors

|  |
| --- |
| **[ReadinessLevelCharacteristics](#constructor-0)**() |
| **[ReadinessLevelCharacteristics](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minReactionTime" >}} | float |
| {{< prop "maxReactionTime" >}} | float |
| {{< prop "reductionTime" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ReadinessLevelCharacteristics" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ReadinessLevelCharacteristics {#constructor-0}

> **ReadinessLevelCharacteristics**()

Creates a new [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) frostbite instance.

### ReadinessLevelCharacteristics {#constructor-1}

> **ReadinessLevelCharacteristics**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minReactionTime" %}}

> **float**

### {{% prop-heading "maxReactionTime" %}}

> **float**

### {{% prop-heading "reductionTime" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) type.

