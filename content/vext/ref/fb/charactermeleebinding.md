---
title: CharacterMeleeBinding
---

## Summary

### Constructors

|  |
| --- |
| **[CharacterMeleeBinding](#constructor-0)**() |
| **[CharacterMeleeBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "triggerMelee" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "selfActor" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "otherActor" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "meleeActive" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterMeleeBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterMeleeBinding {#constructor-0}

> **CharacterMeleeBinding**()

Creates a new [CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding) frostbite instance.

### CharacterMeleeBinding {#constructor-1}

> **CharacterMeleeBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "triggerMelee" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "selfActor" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "otherActor" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "meleeActive" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterMeleeBinding](/vext/ref/fb/charactermeleebinding) type.

