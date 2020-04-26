---
title: GameplayBone
---

## Summary

### Constructors

|  |
| --- |
| **[GameplayBone](#constructor-0)**() |
| **[GameplayBone](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "bone" >}} | [GameplayBones](/vext/ref/fb/gameplaybones) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GameplayBone](/vext/ref/fb/gameplaybone) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameplayBone" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameplayBone {#constructor-0}

> **GameplayBone**()

Creates a new [GameplayBone](/vext/ref/fb/gameplaybone) frostbite instance.

### GameplayBone {#constructor-1}

> **GameplayBone**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameplayBone](/vext/ref/fb/gameplaybone) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "bone" %}}

> **[GameplayBones](/vext/ref/fb/gameplaybones)**

## Methods

### Clone {#clone}

> **Clone**(): [GameplayBone](/vext/ref/fb/gameplaybone)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GameplayBone](/vext/ref/fb/gameplaybone)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameplayBone](/vext/ref/fb/gameplaybone) type.

