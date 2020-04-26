---
title: SensitivityAtVelocity
---

## Summary

### Constructors

|  |
| --- |
| **[SensitivityAtVelocity](#constructor-0)**() |
| **[SensitivityAtVelocity](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "steeringSensitivity" >}} | float |
| {{< prop "velocity" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SensitivityAtVelocity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SensitivityAtVelocity {#constructor-0}

> **SensitivityAtVelocity**()

Creates a new [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity) frostbite instance.

### SensitivityAtVelocity {#constructor-1}

> **SensitivityAtVelocity**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "steeringSensitivity" %}}

> **float**

### {{% prop-heading "velocity" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SensitivityAtVelocity](/vext/ref/fb/sensitivityatvelocity) type.

