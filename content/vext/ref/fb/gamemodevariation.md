---
title: GameModeVariation
---

## Summary

### Constructors

|  |
| --- |
| **[GameModeVariation](#constructor-0)**() |
| **[GameModeVariation](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "identifier" >}} | string |
| {{< prop "name" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GameModeVariation](/vext/ref/fb/gamemodevariation) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameModeVariation" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameModeVariation {#constructor-0}

> **GameModeVariation**()

Creates a new [GameModeVariation](/vext/ref/fb/gamemodevariation) frostbite instance.

### GameModeVariation {#constructor-1}

> **GameModeVariation**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameModeVariation](/vext/ref/fb/gamemodevariation) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "identifier" %}}

> **string**

### {{% prop-heading "name" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [GameModeVariation](/vext/ref/fb/gamemodevariation)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GameModeVariation](/vext/ref/fb/gamemodevariation)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameModeVariation](/vext/ref/fb/gamemodevariation) type.

