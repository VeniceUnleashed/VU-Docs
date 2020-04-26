---
title: SoldierDetonationData
---

## Summary

### Constructors

|  |
| --- |
| **[SoldierDetonationData](#constructor-0)**() |
| **[SoldierDetonationData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "angle" >}} | float |
| {{< prop "minSpeedForActivation" >}} | float |
| {{< prop "radius" >}} | float |
| {{< prop "soldierDetonationActivationDelay" >}} | float |
| {{< prop "useAngle" >}} | bool |
| {{< prop "hasSoldierDetonation" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierDetonationData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierDetonationData {#constructor-0}

> **SoldierDetonationData**()

Creates a new [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata) frostbite instance.

### SoldierDetonationData {#constructor-1}

> **SoldierDetonationData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "angle" %}}

> **float**

### {{% prop-heading "minSpeedForActivation" %}}

> **float**

### {{% prop-heading "radius" %}}

> **float**

### {{% prop-heading "soldierDetonationActivationDelay" %}}

> **float**

### {{% prop-heading "useAngle" %}}

> **bool**

### {{% prop-heading "hasSoldierDetonation" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoldierDetonationData](/vext/ref/fb/soldierdetonationdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierDetonationData](/vext/ref/fb/soldierdetonationdata) type.

