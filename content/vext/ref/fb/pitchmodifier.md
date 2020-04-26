---
title: PitchModifier
---

## Summary

### Constructors

|  |
| --- |
| **[PitchModifier](#constructor-0)**() |
| **[PitchModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "offset" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "pitchVal" >}} | float |
| {{< prop "pitchAngle" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PitchModifier](/vext/ref/fb/pitchmodifier) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PitchModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PitchModifier {#constructor-0}

> **PitchModifier**()

Creates a new [PitchModifier](/vext/ref/fb/pitchmodifier) frostbite instance.

### PitchModifier {#constructor-1}

> **PitchModifier**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PitchModifier](/vext/ref/fb/pitchmodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "offset" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "pitchVal" %}}

> **float**

### {{% prop-heading "pitchAngle" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [PitchModifier](/vext/ref/fb/pitchmodifier)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PitchModifier](/vext/ref/fb/pitchmodifier)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PitchModifier](/vext/ref/fb/pitchmodifier) type.

