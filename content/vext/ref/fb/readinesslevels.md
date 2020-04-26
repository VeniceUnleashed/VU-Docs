---
title: ReadinessLevels
---

## Summary

### Constructors

|  |
| --- |
| **[ReadinessLevels](#constructor-0)**() |
| **[ReadinessLevels](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "patrol" >}} | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) |
| {{< prop "ready" >}} | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) |
| {{< prop "combat" >}} | [ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ReadinessLevels](/vext/ref/fb/readinesslevels) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ReadinessLevels" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ReadinessLevels {#constructor-0}

> **ReadinessLevels**()

Creates a new [ReadinessLevels](/vext/ref/fb/readinesslevels) frostbite instance.

### ReadinessLevels {#constructor-1}

> **ReadinessLevels**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ReadinessLevels](/vext/ref/fb/readinesslevels) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "patrol" %}}

> **[ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)**

### {{% prop-heading "ready" %}}

> **[ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)**

### {{% prop-heading "combat" %}}

> **[ReadinessLevelCharacteristics](/vext/ref/fb/readinesslevelcharacteristics)**

## Methods

### Clone {#clone}

> **Clone**(): [ReadinessLevels](/vext/ref/fb/readinesslevels)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ReadinessLevels](/vext/ref/fb/readinesslevels)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ReadinessLevels](/vext/ref/fb/readinesslevels) type.

