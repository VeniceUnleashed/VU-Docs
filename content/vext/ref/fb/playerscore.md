---
title: PlayerScore
---

## Summary

### Constructors

|  |
| --- |
| **[PlayerScore](#constructor-0)**() |
| **[PlayerScore](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rank" >}} | int |
| {{< prop "kills" >}} | int |
| {{< prop "deaths" >}} | int |
| {{< prop "scoreMultiplier" >}} | int |
| {{< prop "score" >}} | int |
| {{< prop "globalScoreOriginal" >}} | int |
| {{< prop "globalScoreUpdated" >}} | int |
| {{< prop "time" >}} | float |
| {{< prop "gunMasterLevel" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PlayerScore](/vext/ref/fb/playerscore) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PlayerScore" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PlayerScore {#constructor-0}

> **PlayerScore**()

Creates a new [PlayerScore](/vext/ref/fb/playerscore) frostbite instance.

### PlayerScore {#constructor-1}

> **PlayerScore**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PlayerScore](/vext/ref/fb/playerscore) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "rank" %}}

> **int**

### {{% prop-heading "kills" %}}

> **int**

### {{% prop-heading "deaths" %}}

> **int**

### {{% prop-heading "scoreMultiplier" %}}

> **int**

### {{% prop-heading "score" %}}

> **int**

### {{% prop-heading "globalScoreOriginal" %}}

> **int**

### {{% prop-heading "globalScoreUpdated" %}}

> **int**

### {{% prop-heading "time" %}}

> **float**

### {{% prop-heading "gunMasterLevel" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [PlayerScore](/vext/ref/fb/playerscore)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PlayerScore](/vext/ref/fb/playerscore)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PlayerScore](/vext/ref/fb/playerscore) type.

